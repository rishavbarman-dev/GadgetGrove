import React from "react";
import "./Product.css";
import products from "../../products";

const Product = () => {
  return (
    <>
      <div className="container">
        <h1 className="product-title">Latest Products</h1>
        <div className="product-row">
          {products.map((product) => (
            <div className="product-card">
              <div className="product-text-container">
                <img
                  key={product._id}
                  className="product-img"
                  src={product.image}
                  alt="products images"
                />
                <h3 className="product-name">{product.name}</h3>
                <h3 className="product-rating">{product.rating}</h3>
                <h3 className="product-price">Rs. {product.price} </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
