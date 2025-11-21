import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Utils/CartContext";


export default function Product({ item }) {
  const { addToCart } = useContext(CartContext);

  let { id, title, price, image, rating } = item;

  return (
    <div className="card m-3">
      <div className="card-header">
        <img
          src={image}
          className="img-fluid"
          alt=""
          style={{ height: "200px", objectFit: "contain", paddingTop: "10px" }}
        />
      </div>

      <div className="card-body text-center">
        <h5>{title}</h5>
        <h4>${price}</h4>
        <h4>⭐ {rating.rate}</h4>

        <button
          className="btn btn-dark mt-2"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>

        <Link to={`/product/${id}`} className="btn btn-dark m-2">
          View Details
        </Link>
      </div>
    </div>
  );
}
