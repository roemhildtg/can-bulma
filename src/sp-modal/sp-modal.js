import Component from 'can-component';
import template from './sp-modal.stache';
import './sp-modal.less';
import ViewModel from './ViewModel';

/**
 * A modal dialog
 * @module sp-modal
 * @see [sp-modal/ViewModel](sp-modal/ViewModel)
 * @example 
 * <sp-modal /> 
 */
export default Component.extend({
    ViewModel: ViewModel,
    view: template,
    tag: 'sp-modal'
});
