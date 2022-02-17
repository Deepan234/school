import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import AddSchoolPage from '../Pages/AddSchoolPage';
import { addSchoolData } from '../../Action/SchoolAction';
const mockStore = configureStore([]);

describe ('My Connected React_redux Component ',()=>{
    let store;
    let component;
    beforeEach(()=>{
     store = mockStore(
         {
             name:'deepan school',
             about:'good'
         }
     )

     component = renderer.create(
         <Provider store={store}>
            <AddSchoolPage/>
         </Provider>
     )
    });

    test('should render from test store',()=>{
        expect(component.toJSON()).toMatchSnapshot();
    })

});
