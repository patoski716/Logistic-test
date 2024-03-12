import React,{useEffect} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Service from './components/Service'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import { HashRouter as Router, Routes, Route} from "react-router-dom";
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
        <Route path='/' element={<Homepage/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/tracking' element={<Tracking/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App