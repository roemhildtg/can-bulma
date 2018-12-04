import ModalViewModel from '../sp-modal/ViewModel';

/**
 * A `<sp-confirm />` component's ViewModel
 * @module sp-confirm/ViewModel
 * @extends sp-modal/ViewModel
 */
const ViewModel = ModalViewModel.extend('ConfirmDialog', {
    /** @lends sp-confirm/ViewModel.prototype */
    /**
     * When this is set to true, a promise gets created that 
     * is resolved once the user accepts or rejects the message.
     * 
     * @type {Boolean}
     * @override
     */
    active: {
        set (active) {
            if (active) {
                this.promise = new Promise((resolve) => {
                    this.resolver = resolve;
                });
            } else if (this.resolver) {
                this.resolver({
                    status: 'rejected',
                    reason: 'active-set'
                });
            }
            return active;
        }
    },
    /**
     * Array of modal actions
     * @override
     * @type {Array<sp-modal/ViewModel~Action}
     */
    actions: {
        default () {
            return [{
                onclick: this.accept,
                text: this.acceptText,
                class: 'success'
            }, {
                onclick: this.reject,
                text: this.rejectText,
                status: 'lite'
            }];
        }
    },
    /**
     * Text to display as the accept button. Default is `'OK'`.
     * @type {String}
     */
    acceptText: {default: 'OK'},
    /**
     * Text to display as the reject button. Default is `'Cancel'`.
     * @type {String}
     */
    rejectText: {default: 'Cancel'},
    /**
     * Promise that resolves once the accept or reject button is clicked.
     * In order to access this property, `active` must be set to `true`.
     * @type {Promise<sp-confirm/ViewModel~ConfirmResult>}
     */
    promise: {
        set (promise) {
            if (promise) {
                this.outcome = {status: 'pending'};
                promise.then((outcome) => {
                    this.assign({
                        outcome,
                        active: false
                    });
                });
            }
            return promise;
        }
    },
    /**
     * Current promise status.
     * @type {String}
     */
    outcome: {
        default () {
            return {status: 'ready'};
        }
    },
    // resolves the promise 
    resolver: {},
    accept: {
        default () {
            return () => {
                this.resolver({
                    status: 'accepted'
                });
            };
        }
    },
    reject: {
        default () {
            return () => {
                this.resolver({
                    status: 'rejected',
                    reason: 'cancel'
                });
            };
        }
    }
});

export default ViewModel;
