import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Field from '../util/field/Field';
import {makeSentenceCase} from '../util/string/string';
import define from 'can-define';
import stache from 'can-stache';


//  @property sp-filter-builder.FilterOptions FilterOptions
//  @memberof sp-filter-builder.types

//  @description The default filter operator options
export const FilterOptions = [{
    label: 'Contains',
    value: 'like',
    types: ['string']
}, {
    label: 'Does not contain',
    value: 'not_like',
    types: ['string']
}, {
    label: 'Starts with',
    value: 'starts_with',
    types: ['string']
}, {
    label: 'Ends with',
    value: 'ends_with',
    types: ['string']
}, {
    label: 'Equal to',
    value: 'equals'
}, {
    label: 'Not equal to',
    operator: 'not_equal_to',
    value: 'not_equal_to'
}, {
    label: 'Greater Than',
    value: 'greater_than',
    types: ['number']
}, {
    label: 'Less Than',
    value: 'less_than',
    types: ['number']
}, {
    label: 'Before',
    value: 'before',
    types: ['date'],
    valueField: {
        name: 'value',
        label: 'Value',
        ui: 'datepicker',
        properties: {
            placeholder: 'Select a date'
        }
    }
}, {
    label: 'After',
    value: 'after',
    types: ['date'],
    valueField: {
        name: 'value',
        label: 'Value',
        ui: 'datepicker',
        properties: {
            placeholder: 'Select a date'
        }
    }
}];

/**
 * Creates a new filter
 * @module sp-filter-builder/Filter~Filter
 */
export const Filter = DefineMap.extend('Filter', {
    /** @lends sp-filter-builder/Filter~Filter.prototype */
    /**
     * A value to filter on. Can be any primitive type. If the
     * [sp-filter-builder.Filter.props.field `field`] property
     * is set, the `field.type` property will be used to coerce the value.
     * @type {*}
     */
    value: {
        type (newVal) {
            const type = this.valueField && this.valueField.type ? this.valueField.type : '*';
            return define.types[type](newVal);
        }
    },
    /**
     * The name of the field to filter on
     * @type {String}
     */
    name: {
        type: 'string',
        get (name) {
            return this.field ? this.field.name : name;
        },
        serialize (name) {
            return name;
        }
    },
    /**
     * The operator to filter with. The default is `like`.
     * @type {String}
     */
    operator: {
        type: 'string',
        get (val) {
            return typeof val === 'undefined' ? this.operatorField.value : val;
        },
        serialize (val) {
            return val;
        }
    },
    /**
     * A field object that defines the available operator options and properties.
     * This is used to create the dropdown choice for each filter in the sp-filter-builder.
     * This field is generated automatically. If the
     * [sp-filter-builder.Filter.props.field `field`] property is set,
     * the `field.type` property will be used to filter the operator options.
     * @type {Object}
     */
    operatorField: {
        serialize: false,
        get (fieldProps) {
            const field = this.field;
            const options = field ? FilterOptions.filter((filter) => {
                return !field.type || field.type === 'observable' || !filter.types || filter.types.indexOf(field.type) > -1;
            }) : FilterOptions;
            return new Field(Object.assign({
                name: 'operator',
                value: options[0].value,
                label: null,
                inline: true,
                placeholder: 'Choose an operator',
                editTag: 'sp-select-field',
                options: options
            }, fieldProps || {}));
        }
    },
    /**
     * A property to show or hide this filter in the picker. The default is `true`
     * @type {Boolean}
     */
    visible: {
        type: 'boolean',
        default: true,
        serialize: false,
        set (val) {
            return val;
        }
    },
    /**
     * A property to disable this filter's remove button. This filter will not
     * be removable. In addition, the operator field will be fixed. The default
     * is `false`.
     * @type {Boolean}
     */
    pinned: {
        type: 'boolean',
        default: false,
        serialize: false
    },
    /**
     * A virtual property to provide the field label. If the
     * [sp-filter-builder.Filter.props.field `field`] property is set, this label
     * will match the `field.label`
     * @type {String}
     *
     */
    label: {
        get () {
            return this.field ? this.field.label : makeSentenceCase(this.name);
        },
        serialize: false
    },
    /**
     * A field object that defines the value field properties.
     * This is used to create the value field for each filter in the sp-filter-builder.
     * If the [sp-filter-builder.Filter.props.field `field`] property is set, the
     * valueField will be a customized field based off of the set field.
     * @type {util/field/Field}
     */
    valueField: {
        serialize: false,
        get () {
            const fieldProps = this.field 
                ? Object.assign({editTag: 'sp-text-field'}, this.field.get(), {
                    inline: true, 
                    textarea: false,
                    label: null
                }) : {
                    inline: true,
                    name: this.name,
                    label: null,
                    editTag: 'sp-text-field',
                    placeholder: 'Enter a filter value'
                };
            return new Field(fieldProps);
        }
    },
    valueComponent: {
        type: '*',
        get (renderer) {
            if (typeof renderer === 'function') {
                return renderer;
            }
            return stache(`<${this.valueField.editTag} 
                properties:from="filter.valueField" 
                value:bind="filter.value" />`);
        }
    },
    /**
     * The field object used to initialize this filter. When this value is
     * provided, the custom field will be used in place of the regular
     * text field. This allows the user to interract with a different
     * type of field, like a checkbox when setting filters.
     * @type {util/field/Field}
     */
    field: {
        Type: Field,
        serialize: false
    },
    /**
     * A virtual property that creates a dummmy form object for use with the
     * field template
     * @type {Object}
     */
    object: {
        serialize: false,
        get () {
            const obj = {};
            obj[this.name] = this.value;
            return obj;
        }
    },
    /**
     * a setter for the value field for use with the field template
     * @param {util/field/Field} field the field object
     * @param {domElement} dom the input element
     * @param {Object} scope the view model scope
     * @param {*} props the object with the value set on the form
     */
    setField (field, dom, scope, props) {
        this.value = props.value;
    }
});

/**
 * Creates a new filter list
 * @module sp-filter-builder/Filter~FilterList
 *
 */
export const FilterList = DefineList.extend('FilterList', {
    '#': Filter
});
