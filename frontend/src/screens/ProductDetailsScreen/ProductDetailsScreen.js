import React, { useEffect, useState } from "react";
import Rating from "../../components/rating/Rating";
import "./ProductDetailsScreen.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsScreen = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/product/${id}`);
        setProduct(data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log("Product ot found");
        } else {
          console.log("Something went wrong");
        }
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="productDetails-row">
          <div className="productDetails-product-image">
            <img src={product.image} />
          </div>

          <div className="productDetails-product-info">
            <h3 className="productDetails-product-name">{product.name}</h3>
            <h3 className="productDetails-product-rating">
              <Rating value="4.0" text={`${product.numReviews}`} />
            </h3>
            <h3 className="productDetails-product--price">
              Rs. {product.price}{" "}
            </h3>
            <p className="productDetails-product-description">
              {product.description}
            </p>
          </div>

          <div className="productDetails-product-cart">
            <div className="productDetails-product-cart-row">
              <h3 className="productDetails-product-cart-text">Price</h3>
              <span className="productDetails-product-cart-price">
                Rs. {product.price}
              </span>
            </div>
            <div className="productDetails-product-cart-row">
              <h3 className="productDetails-product-cart-text">Status</h3>
              <span className="productDetails-product-cart-stock">
                {product.countInStock > 0 ? "In-Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="productDetails-product-cart-row">
              <h3 className="productDetails-product-cart-text">Qty</h3>
              <select className="productDetails-product-qty">
                <option>{product.countInStock}</option>
              </select>
            </div>
            <div className="productDetails-product-cart-row">
              <button className="productDetails-product-cart-btn">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsScreen;
