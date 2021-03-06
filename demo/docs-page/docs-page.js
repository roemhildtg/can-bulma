import Component from 'can-component';
import './styles.less';
import docs from '../../docs/docs.json';
import view from './view.stache';
import info from '../../package.json';

console.log(docs);

export default Component.extend({
    tag: 'docs-page',
    ViewModel: {
        docs: {default: docs.sort((a, b) => {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        })},
        info: {default: info},
        roots: {
            get(){
                return this.docs.filter(doc => doc.kind === 'note');
            }
        },
        active: {
            set(active){
                window.scrollTo(0, 0)
                return active;
            }
        },
        searchText: 'string',
        getChildren(childrenIds){
            if(!childrenIds){
                return [];
            }
            return this.docs.filter(doc => childrenIds.indexOf(doc.name) > -1);
        },
        findChild(id){
            return this.getChildren([id])[0];
        }
    },
    view
});