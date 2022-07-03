import './App.css';
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    Aos.init({
      duration: 1500,
    });
  },[])
  return (
    <div className="App">
    <Home/>
    <ToastContainer/>
    </div>
  );
}

export default App;
