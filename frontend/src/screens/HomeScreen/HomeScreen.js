import React, { useEffect, useState } from "react";
import Product from "../../components/product/Product";
import "./HomeScreen.css";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="product-title">Latest Products</h1>
      <div className="product-row">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
