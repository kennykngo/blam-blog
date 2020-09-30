import React from "react";

import CardItem from "../CardItem/CardItem";

import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Desintinations!</h1>
      <div className="cards__container"></div>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/contact"
          />
          <CardItem
            src="images/img-2.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/contact"
          />
        </ul>
      </div>
    </div>
  );
}

export default Card;
