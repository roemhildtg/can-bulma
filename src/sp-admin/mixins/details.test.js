import details from './details';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import connect from 'can-connect';
import constructor from 'can-connect/constructor/constructor';
import map from 'can-connect/can/map/map';

// mixin model property
const ViewModel = DefineMap.extend(Object.assign({model: '*'}, details));

// a basic can-connect implementation
const MyModel = DefineMap.extend({id: 'number'});
const List = DefineList.extend({'#': MyModel});
const connection = connect([constructor, map], {
    getList () {
        return [];
    },
    getData () {
        return [];
    },
    get (id) {
        debugger;
        return {id};
    },
    Map: MyModel,
    List,
    id (obj) {
        return obj.id;
    }
});

let vm, obj;
beforeEach (() => {
    vm = new ViewModel({
        model: connection
    });
    obj = new DefineMap({
        id: 1
    });
});
afterEach (() => {
    vm = null;
});

test('detailsPromise get() setDetailsObject', () => {
    expect.assertions(1);
    vm.localDetailsObject = obj;
    vm.detailsId = vm.model.id(obj);
    return expect(vm.detailsPromise).resolves.toEqual(obj);
});

test('showDetails(obj)', () => {
    vm.showDetails(obj);
    expect(vm.detailsId).toEqual(1);
});

test('showDetailsFromEvent(args)', () => {
    vm.showDetailsFromEvent([{}, obj]);
    expect(vm.detailsId).toEqual(1);
});

test('clearDetails()', () => {

    vm.showDetails(obj);
    vm.clearDetails();

    expect(vm.detailsId).toEqual(null);
    expect(vm.detailsPromise).resolves.toEqual(null);
});