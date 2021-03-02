import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./uniPage.css";
import Hero from "./components/sections/HeroUni.js"
import Copyright from "./components/Copyright";

class Uni extends Component {
  render() {
    return (
      <>
      <Hero/>
      <Provider store={store}>
        <div className="container">
         
       
          <div className="row">
            <div className="col-md-3">
              <Filter />
            </div> 
            
            <div className="col-md-9">
            <div className="section"> 
              <Products />
            </div>
            </div>
            
            <div >
              {/* <Basket />
              <Copyright /> */}
            </div>
          </div>
        </div>
      </Provider>
      </>
    );
  }
}

export default Uni;
