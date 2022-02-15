import logo from './logo.svg';
import './App.css';
import Routers from './Routers/Routers';
import { Provider } from 'react-redux';
import  Store from './Store/Store'
import Footer from './Component/Layout/Footer';

function App() {
  return (
    <div>
    <Provider store={Store()}>
       <Routers/>
       <Footer/>
    </Provider>
    </div>
  );
}

export default App;
