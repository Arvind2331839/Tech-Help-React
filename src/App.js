import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Newslatter from "./Components/Newslatter";


import Home from './Components/HeaderCompo/Home'
import About from './Components/HeaderCompo/About'
import Services from './Components/HeaderCompo/Services'
import ContactUs from './Components/HeaderCompo/ContactUs'
import PrivecyPolicy from './Components/HeaderCompo/PrivecyPolicy'


const App = () => {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Services"element={<Services/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/PrivecyPolicy" element={<PrivecyPolicy/>}/>
      </Routes>
        <Newslatter />
      </BrowserRouter>
  );
};

export default App;
