import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import "./HomeScreen.css";
import { listProducts } from "../../actions/productActions";

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
        <h1>loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
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
