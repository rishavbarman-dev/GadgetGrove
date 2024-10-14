import React, { useEffect, useState } from "react";
import Rating from "../../components/rating/Rating";
import "./ProductDetailsScreen.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";

const ProductDetailsScreen = () => {
  const params = useParams();

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <div className="container">
          <div className="productDetails-row">
            <div className="productDetails-product-image">
              <img src={product.image} alt="" />
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
              {product.countInStock > 0 && (
                <div className="productDetails-product-cart-row">
                  <h3 className="productDetails-product-cart-text">Qty</h3>
                  <select
                    className="productDetails-product-qty"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="productDetails-product-cart-row">
                <button className="productDetails-product-cart-btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsScreen;
