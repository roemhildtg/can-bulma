
import Field from 'can-bulma/util/field/Field';

/**
 * A `<sp-check-field />` component's ViewModel
 * 
 * @class ViewModel
 * @extends Field
 * @memberof sp-check-field
 */
export default Field.extend('CheckboxField', {
    /** @lends ViewModel.prototype */
    /**
     * The current value of the checkbox field
     * @type {Boolean}
     * @memberof sp-check-field.ViewModel.prototype
     */
    value: 'boolean',
    dispatchChange () {
        this.dispatch('fieldchange', [this]); 
    }
});