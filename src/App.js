import './App.css';

import { BrowserRouter, Switch,Routes, Route } from "react-router-dom";

import Header from './components/common/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Footer from './components/common/footer/Footer';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Login from './pages/authentication/login/Login';
import Register from './pages/authentication/register/Register';

function App() {
  return (
    
    <BrowserRouter>
        {/*<Header />*/}
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
        {/*<Footer />*/}
      </BrowserRouter>
      
   
  );
}

export default App;
