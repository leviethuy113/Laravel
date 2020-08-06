import React, { useState, useEffect } from "react";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
import Home from "../../pages/views/Main/Home";

import About from "../../pages/views/Main/About";
import Buy from "../../pages/views/Main/Buy";
import Contact from "../../pages/views/Main/Contact";
import Sell from "../../pages/views/Main/Sell";
import Shop from "../../pages/views/Main/Shop";

import apiRequest from "../../api/productApi";
import productApi from "../../api/productApi";
import cateApi from "../../api/cateApi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
export default ({ children }) => {
  console.log("render Main");
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="user-page">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/home">
            <Home products={products} />
          </Route>
          <Route path="/buy">
            <Buy />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
