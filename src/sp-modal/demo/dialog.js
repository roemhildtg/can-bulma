import Modal from '../sp-modal';
import '../../sp-confirm/sp-confirm';
import Component from 'can-component';
import view from './modal.stache';

export default Component.extend({
    view,
    tag: 'demo-modal',
    viewModel: {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        confirm1: false,
        loginActions: [{
            label: 'Login',
            buttonClass: 'button is-primary',
            iconClass: 'fas fa-sign-in-alt',
            onclick(event, scope){
                scope.active = false;
            }
        }],
        actions: [{
            buttonClass: 'button is-success',
            label: 'Say Hello!',
            onclick(){
                const modal = new Modal({
                    content: `<p>Another Modal!</p>`,
                    viewModel: {
                        title: 'Test',
                        active: true,
                    }
                });
                modal.viewModel.on('hide', () => {
                    document.body.removeChild(modal.element);
                });
                document.body.appendChild(modal.element);
            }
        }],
    }
})