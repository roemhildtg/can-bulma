import DefineMap from 'can-define/map/map';
import FieldIteratorMap from '../util/field/base/FieldIteratorMap';

/**
 * Form View Model
 * @module sp-form/ViewModel
 */
const ViewModel = FieldIteratorMap.extend('FormWidget', {
    /** @lends sp-form/ViewModel.prototype */
    /**
    * A string referencing a field type that will exclude that field
    * from this classes fields. The default is `'edit'`.
    * @type {String} 
    */
    excludeFieldKey: {
        default: 'edit'
    },
    /**
     * Whether or not to show the saving icon when the submit button is clickered.
     * @type {HTMLBoolean} 
     */
    showSaving: {type: 'htmlbool', default: true},
    /**
     * Whether or not this form should be an inline (horizontal) form.
     * This value is always true if one or more fields have `inline: true`
     * @type {Boolean} 
     */
    inline: {
        type: 'boolean',
        default: false,
        get (inline) {
            if (inline) {
                return inline;
            }

            for (const field of this.fields) {
                if (field.inline) {
                    return true;
                }
            }

            return inline;
        }
    },
    /**
     * The connection info for this form's data. If this is provided, the
     * object will be fetched using the objectId type
     * See [can-connect](https://canjs.com/doc/can-connect.html) 
     * @type {can-connect} 
     */
    connection: {
        default: null
    },
    /**
     * The object id of the item to retrieve. If this and [sp-form.ViewModel.connection] is provided, a request
     * will be made to the connection object with the specified id.
     * @type {Number} 
     */
    objectId: {
        type: 'number'
    },
    /**
     * The pending promise if the object is being retrieved or null
     * @type {Promise}  
     */
    promise: {
        get () {
            return this.fetchObject(this.connection, this.objectId);
        }
    },
    /**
     * An object representing the current state of the values passed to the form.
     * If the fields have changed, this object will be updated when the submit
     * button is pressed and the validations have passed. To capture current
     * state of the form, use [sp-form/ViewModel.dirtyObject].
     * @type {DefineMap} 
     */
    object: {
        // Type: DefineMap,
        set (obj) {
            if (!obj) {
                return obj;
            }
            if (this.trackChanges) {
                const Constructor = obj.constructor ? obj.constructor : DefineMap;
                this.dirtyObject = new Constructor(obj.get());
            } else {
                this.dirtyObject = obj;
            }
            return obj;
        }
    },
    /**
     * Whether or not changes should be stored in a "dirty" object.
     * The original object will only be modified if all fields validate
     * and the form is submitted.
     * If this is false, then `dirtyObject` will be equal to `object`.
     * @type {Boolean}
     */
    trackChanges: 'boolean',
    /**
     * An object set with current form values
     * @type {DefineMap} 
     */
    dirtyObject: {},
    /**
     * An object consisting of validation error strings
     * @example
     *{
     *    field: 'error message',
     *    otherfield: 'another error message'
     *}
     
     * @type {Object} 
     */
    validationErrors: {
        get (val) {
            if (val) {
                return val;
            }
            var props = {};
            this.fields.forEach((f) => {
                props[f.name] = null;
            });
            return new DefineMap(props);
        }
    },
    /**
     * Whether or not this form is valid and can be submitted. If this is
     * false, the form will not dispatch the `submit` event when it is submitted.
     * Instead, it will dispatch a `submit-fail` event
     * @type {Boolean}
     */
    isValid: {
        get () {
            if (!this.dirtyObject || !this.object) {
                return true;
            }
            let isValid = true;
            for (let i = 0; i < this.fields.length; i++) {
                const field = this.fields[i];
                const name = field.name;
                const currentValue = this.dirtyObject[name];
                if (this.validationErrors[name]) {
                    isValid = false;
                } else {
                    const error = this.validationErrors[name] = this.getValidationError(field, currentValue);
                    if (error) {
                        isValid = false;
                    }
                }
            }
            return isValid;
        }
    },
    /**
     * This type is set to true when the save button is clicked.
     * It sets the save button to a loading state
     * @type {Boolean}
     */
    isSaving: {
        default: false,
        type: 'boolean'
    },
    /**
     * Fetches and replaces the object with a new object
     * @param  {connection} con The supermap connection to the api service
     * @param  {Number} id  The id number of the object to fetch
     * @return {Promise} A promise resolved when the object is fetched from can-connect
     */
    fetchObject (con, id) {
        if (!con || !id) {
            return Promise.reject('No id or connection passed');
        }
        var promise = con.get({
            id: id
        });
        promise.then((obj) => {
            this.object = obj;
        });
        return promise;
    },
    /**
     * Called when the form is submitted. The object is updated by calling
     * it's `save` method. The event `submit` is dispatched.
     * @param {Event} event the dom form event
     * @return {Boolean} returns false to prevent form submissions
     */
    submitForm (event) {

        // don't let the form actually submit
        if (event && event.preventDefault) {
            event.preventDefault();
        }

        // we're currently saving
        if (this.isSaving) {
            return false;
        }

        // we're not valid yet
        if (!this.isValid) {
            this.dispatch('submitfail', [this.object, this.validationErrors]);
            return false;
        }

        // show a saving indicator
        if (this.showSaving) {
            this.isSaving = true;
        }

        if (this.trackChanges) {
            this.object.assign(this.dirtyObject.get());
        }
        this.dispatch('submit', [this.object]);
        return false;
    },
    /**
     * Dispatches an event from this viewmodel passing the form object
     * @param {String} eventName The event name to dispatch
     */
    dispatchEvent (eventName) {
        if (eventName === 'submit') {
            this.submitForm();
        } else {
            this.dispatch(eventName, [this.object]);
        }
    },
    /**
     * Runs the field validation and updates the validation object.
     * If the validation succeeds (returns no validation error) then a fieldchange event is dispatched
     * @param {Array} args an array with 3 arguments, event, value (field value) and field<Field> object
     */
    checkField (args) {
        const [field] = args;

        // check for valid field value and don't update if it's not
        this.validationErrors[field.name] = this.getValidationError(field, field.value);

        // update and dispatch field change event
        // if the value is different
        this.dispatch('fieldchange', [{
            name: field.name,
            value: field.value,
            dirty: this.dirtyObject,
            current: this.object
        }]);
    },
    /**
     * Validates a field with a value if the field has a [util/field/Field.props.validate] type
     * @param  {Object} field The field object to validate
     * @param  {value} value The value of the field to validate
     * @return {String} The validation error or null
     */
    getValidationError (field, value) {
        return (field.validate ? field.validate({
            name: field.name,
            value: value,
            dirty: this.dirtyObject,
            current: this.object
        }) : '') || '';
    }
});

export default ViewModel;
