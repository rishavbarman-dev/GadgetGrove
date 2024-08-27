import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="product-title">Latest Products</h1>
        <div className="product-row">
          {products.map((product) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
