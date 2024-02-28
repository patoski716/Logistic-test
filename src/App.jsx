import React,{useEffect} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Service from './components/Service'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/service' element={<Service/>}/>
        <Route exact path='/tracking' element={<Tracking/>}/>
        <Route exact path='/contact' element={<Contact/>}/>

        


      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App