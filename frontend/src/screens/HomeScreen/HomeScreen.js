import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import "./HomeScreen.css";
import { listProducts } from "../../actions/productActions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="container">
      <h1 className="product-title">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <div className="product-row">
          {products?.map((product) => (
            <Product product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
