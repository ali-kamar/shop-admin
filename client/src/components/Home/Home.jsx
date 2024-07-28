import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import Products from "./Products/Products";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    msg: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get("/products");
        setProducts(data.product);
        setLoading(false);
      } catch (err) {
        setError({
          isError: true,
          msg: `${err.response.data.msg}`
        });
        setLoading(false);
      } 
    };

    fetchProducts();
  }, [navigate]);

const messageStyle = {
  fontSize: "2rem",
  color: "white",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  borderRadius: "10px",
};

if (loading) return <p style={messageStyle}>Loading...</p>;
if (error.isError) return <p style={messageStyle}>Error: {error.msg}</p>;

  return (
    <>
      <Navbar />
      <div>
        <h2 className="title">Products</h2>

        <div className="product">
          {products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
  
};

export default Home;
