import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import Products from "./Products/Products";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get("/products");
        // setProducts(response.data);
        const data = [
          {
            id: 1,
            name: "test",
            category: "kitchen",
            price: 2,
            url: "https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL127_SR127,127_.jpg",
          },
          {
            id: 1,
            name: "test",
            category: "kitchen",
            price: 2,
            url: "https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL127_SR127,127_.jpg",
          },
          {
            id: 1,
            name: "test",
            category: "kitchen",
            price: 2,
            url: "https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL127_SR127,127_.jpg",
          },
          {
            id: 1,
            name: "test",
            category: "kitchen",
            price: 2,
            url: "https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL127_SR127,127_.jpg",
          },
        ];
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <hr />
      <h2 className="title">Products</h2>
      <hr />
      <div className="product">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
