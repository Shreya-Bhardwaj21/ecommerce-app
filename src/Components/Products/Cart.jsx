import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Utils/CartContext";


export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="container mt-4">
        <button className="mt-5 btn btn-dark"><Link to="/productsList" className="nav-link">Back</Link></button>
      <h2>Your Cart ({cart.length})</h2>

      {cart.length === 0 && <h4>No items in cart</h4>}

      {cart.map((item) => (
        <div className="card m-2 p-3" key={item.id}>
          <h5>{item.title}</h5>
          <p>${item.price}</p>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
