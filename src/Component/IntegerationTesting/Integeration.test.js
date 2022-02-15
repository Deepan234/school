import moxios from "moxios";
import { applyMiddleware, createStore } from 'redux';
import reducer from  "../../Reducers/RootReducers"
import ReduxThunk from 'redux-thunk';
import { fetchingDataList } from "../../Action/SchoolAction";


export const middlewares = [ReduxThunk];

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(reducer, initialState);
};


describe('fetchSchools action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = [{
            name: 'ceoa',
            about: 'good'
        },{
            name: 'sboa',
            about: 'good'
        },{
            name: 'feoa',
            email: 'good'
        }];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchingDataList())
        .then(() => {
            const newState = store.getState();
            expect(newState.AllSchools.school).toBe(expectedState);
        })
        
    });

});