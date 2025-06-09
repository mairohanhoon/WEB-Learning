import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState("");
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
    fetchProducts()
  }, []);

  const handgleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logout Successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProducts = async() => {
    try {
        const url = "http://localhost:8080/products";
        const headers = {
            headers: {
                'Authorization' : localStorage.getItem('token')
            }
        }
        const response = await fetch(url, headers);
        const result = await response.json();
        console.log(result)
        setProducts(result)
    } catch (error) {
        handleError(err);
    }
  }

  return (
    <div>
      Home Page
      <h1>{loggedInUser}</h1>
      <button
        type="button"
        className="px-3 bg-green-500 text-white py-3 text-sm sm:text-base rounded-lg hover:bg-green-600 transition"
        onClick={(e) => handgleLogout(e)}
      >
        Logout
      </button>
      <div>
        {
            products && products?.map((item, index) => (
                <ul key={index}>
                    <span>{item.name} : {item.price}</span>
                </ul>
            ))
        }
      </div>
      <ToastContainer/>
    </div>
  );
};

export default HomePage;
