import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";

const Product = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <div className="product-text-container">
          <Link
            className="product-redirect-link"
            to={`/product/${product._id}`}
          >
            <img
              key={product._id}
              className="product-img"
              src={product.image}
              alt="products images"
            />
          </Link>
          <Link
            className="product-redirect-link"
            to={`/product/${product._id}`}
          >
            <h3 className="product-name">{product.name}</h3>
          </Link>
          <h3 className="product-rating">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </h3>
          <h3 className="product-price">Rs. {product.price} </h3>
        </div>
      </div>
    </>
  );
};

export default Product;
