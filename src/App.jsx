import React from "react";
import Navbar from "./componenets/Pages/Navbar/Navbar";
import Hero from "./componenets/Pages/HeroBanner/Hero";
import AboutUs from "./componenets/Pages/About Us/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./componenets/Pages/HomePage/HomePage";
import Process from "./componenets/Pages/Process/process";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage}></Route>
        <Route exact path="/about-us" Component={AboutUs}></Route>
        <Route exact path="/how-we-works" Component={Process}></Route>
      </Routes>
    </Router>
  );
};

export default App;
