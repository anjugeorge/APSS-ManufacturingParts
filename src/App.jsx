import React from "react";
import Navbar from "./componenets/Pages/Navbar/Navbar";
import Hero from "./componenets/Pages/HeroBanner/Hero";
import AboutUs from "./componenets/Pages/About Us/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./componenets/Pages/HomePage/HomePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage}></Route>
        <Route exact path="/about-us" Component={AboutUs}></Route>
      </Routes>
    </Router>
  );
};

export default App;
