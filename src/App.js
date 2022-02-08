import logo from './logo.svg';
import './App.css';
import Routers from './Routers/Routers';
import { Provider } from 'react-redux';
import  Store from './Store/Store'

function App() {
  return (
    <Provider store={Store()}>
       <Routers/>
    </Provider>
  );
}

export default App;
