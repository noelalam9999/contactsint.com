import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";
import FeaturesTiles from "./components/sections/FeaturesTilesAboutus";
import FeaturesSplit from "./components/sections/FeaturesSplitAboutus";
import ProductsPartners from "./components/ProductsPartners";

class InstitutePartners extends Component {
  render() {
    return (
      <>
      <Hero/>
      <Provider store={store}>
        <div className="container">
         
       
          
         
           <ProductsPartners/>
         
          
              {/* <Basket />
              <Copyright /> */}
            
        </div>
      </Provider>
      </>
    );
  }
}

export default InstitutePartners;
