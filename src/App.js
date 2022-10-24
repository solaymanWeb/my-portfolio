import './App.css';
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Allprojects from './Components/allprojects/Allprojects';
import NotFound from './Components/NoteFound/NotFound';



function App() {

  useEffect(()=>{
    Aos.init({
      duration: 1000,
    });
  },[])
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="allproject" element={<Allprojects/>} />
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
