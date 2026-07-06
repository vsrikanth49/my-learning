import React, { useState } from "react";
import { recipesData } from "./data";
import "./cart.css";
const Receipe = () => {
  const [minRating, setMinRating] = useState(4);
  const [cart, setCart] = useState([]);
  const handleChange = (e) => {
    setMinRating(e.target.value);
  };
  const handleCart = (res) => {
    setCart((prev) => [...prev, res]);
  };
  const filterData = recipesData.filter((res) => res.rating >= minRating);
  const avgRating =
    filterData.reduce((acc, data) => {
      acc = acc + data.rating;
      return acc;
    }, 0) / filterData.length;

  return (
    <>
      <div className="r-container">
        <h1>🍽️Recipe Explorer </h1>

        <div className="filter-cart-section">
          <div>
            <label>Filter by rating : </label>{" "}
            <select
              value={minRating}
              id="ratingFilter"
              onChange={(e) => handleChange(e)}
            >
              <option value={4.0}>4.0+</option>
              <option value={4.3}>4.3+</option>
              <option value={4.5}>4.5+</option>
              <option value={4.7}>4.7+</option>
              <option value={4.9}>4.9</option>
            </select>
          </div>
          <h3 className="card-items">Cart items : {cart.length}</h3>
        </div>
        <h3>
          Average Rating : {avgRating.toFixed(2)} {filterData.length} Receips
        </h3>
        <div className="card-container">
          {filterData.map((res) => {
            return (
              <div key={res.id} className="receipe-card">
                <img src={res.image} className="receipe-card-img"></img>
                <h4>{res.name}</h4>
                <p> 🍴Cuisne : {res.cuisine}</p>
                <p> ⭐Rating :{res.rating} </p>
                <button onClick={() => handleCart(res)} className="add-cart">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Receipe;
