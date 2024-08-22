import React from "react";
import Product from "../../components/product/Product";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div>
      <h1 className="homeScreen-title">Latest Products</h1>
      <div className="row">
        <div className="col">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
