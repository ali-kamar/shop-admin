import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import Products from "./Products/Products";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
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
        setLoading(false);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchProducts();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      <div>
        <h2 className="title">Products</h2>

        <div className="product">
          {products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
  
};

export default Home;
