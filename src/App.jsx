import React from "react";
import Navbar from "./componenets/Pages/Navbar/Navbar";
import Hero from "./componenets/Pages/HeroBanner/Hero";
import AboutUs from "./componenets/Pages/About Us/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./componenets/Pages/HomePage/HomePage";
import ProductList from "./componenets/Pages/Products/ProductList";
import RequestAQuoteForm from "./componenets/Pages/Form/RequestAQuoteForm";
import Process from "./componenets/Pages/Process/Process";
import ContactUs from "./componenets/Pages/Contact Us/ContactUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage}></Route>
        <Route exact path="/about-us" Component={AboutUs}></Route>
        <Route exact path="/how-we-works" Component={Process}></Route>
        <Route exact path="/products" Component={ProductList}></Route>
        <Route exact path="/contact-us" Component={ContactUs}></Route>
        <Route
          exact
          path="/requestQuoteForm/:name"
          Component={RequestAQuoteForm}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
