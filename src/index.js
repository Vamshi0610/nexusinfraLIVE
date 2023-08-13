import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Sendemail from "./sendemail";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/properties" element={<PropertyGrid />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/contactForm" element={<Sendemail />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
    {/* <LandingPage/> */}
    {/* <Sendemail/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
