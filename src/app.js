/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Provider } from "./stateContext";
import { getRecord } from "./utils/index";

const App = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showSideBar, setShowSideBar] = useState(true);
  const [secondCart, setSecondCart] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const getProductData = () => {
    getRecord("product/all").then(({ data }) => setProducts(data));
  };

  const getCustomerData = () => {
    getRecord("customer/all").then(({ data }) => setCustomers(data));
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    getProductData();
    getCustomerData();
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Provider
      value={{
        products,
        customers,
        getProductData,
        getCustomerData,
        showSideBar,
        setShowSideBar,
        secondCart,
        setSecondCart,
        user,
        setUser,
        clearStorage
      }}
    >
      {children}
    </Provider>
  );
};

export default App;
