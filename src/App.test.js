import App from './App';
import {configure,mount,shallow} from "enzyme";
import Login from './Component/Pages/Login';
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux';
import Store from './Store/Store'
import { ExpansionPanelActions } from '@material-ui/core';
import AddSchoolPage from './Component/Pages/AddSchoolPage';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

configure({adapter:new Adapter()});

const mockstore = configureMockStore([thunk]);

let store;
let submitbutton;
let addPage;
test("Button Testing",()=>{
  store = Store();
  submitbutton = shallow(<Login store={store}/>).dive();
  expect(submitbutton.find('#submit-button').text()).toBe('SUBMIT');
});


test("render the disactivity value of the button",()=>{
  store = Store();
  submitbutton = shallow(<Login store={store}/>).dive();
  expect(submitbutton.find('#submit-button').hasClass('disabled')).toBe(true);
})

test("render the active value of the button",(initialState={})=>{
  store = Store();
  submitbutton = shallow(<Login store={store}/>).dive();
  const input1 = submitbutton.find('#user-name');
  input1.simulate("change",{target:{
    name:"userName",
    value:"deepangt@gmail.com"
  }})
  const input2 = submitbutton.find('#password');
  input2.simulate("change",{target:{
    name:"password",
    value:"Deepan@2000"
  }})
  submitbutton.instance().forceUpdate();
  console.log(submitbutton.debug());
  expect(submitbutton.find('#submit-button').simulate('change').hasClass('btn btn-secondary btn-lg btn-block')).toBe(true);
})




