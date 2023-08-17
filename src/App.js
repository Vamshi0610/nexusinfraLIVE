import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import LandingPage from "./views/LandingPage";
import About from "./views/About";
import Contact from "./views/Contact";
import PropertyGrid from "./views/PropertyGrid";
import Sendemail from "./sendemail";

function App() {

  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        {/* <Route exact path="/home" element={<LandingPage propertyValues={propertyValues}/>} /> */}
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/properties" element={<PropertyGrid />} />
        <Route exact path="/contact" element={<Contact/>} />
        {/* <Route exact path="/contactForm" element={<Sendemail />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
