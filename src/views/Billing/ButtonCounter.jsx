/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import BillingState from "./cartState";

export default function ButtonCounter({ row }) {
  const [counter, setCounter] = useState(1);
  const { cart, setCart, addItemCount } = useContext(BillingState);

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
    addItemCount(row, cart, setCart);
  };

  const handleDecrementCounter = () => {
    if (counter > 1) setCounter(counter - 1);
    addItemCount(row, cart, setCart, true);
  };

  return (
    <div style={{ width: "100px", color: "navy", fontWeight: "bold" }}>
      <button
        onClick={handleDecrementCounter}
        style={{
          borderRadius: "10px",
          background: "crimson",
          color: "#FFF",
          fontWeight: "bold",
          width: "25px",
          height: "25px",
          marginRight: "10px"
        }}
      >
        -
      </button>
      {row.quantity}
      <button
        style={{
          borderRadius: "10px",
          background: "crimson",
          color: "#FFF",
          fontWeight: "bold",
          width: "25px",
          height: "25px",
          marginLeft: "10px"
        }}
        onClick={handleIncrementCounter}
      >
        +
      </button>
    </div>
  );
}
