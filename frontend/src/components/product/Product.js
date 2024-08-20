import React from "react";
import "./Product.css";
import products from "../../products";

const Product = () => {
  return (
    <>
      <div className="container">
        {products.map((product) => (
          <div className="product-card">
            <img
              key={product._id}
              className="product-img"
              src={product.image}
            />
            <h3 className="product-name">{product.name}</h3>
            <h3 className="product-rating">{product.rating}</h3>
            <h3 className="product-price">{product.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
