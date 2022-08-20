import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image1.jpg"
              text="We generate accurate, reliable and verifiable data for diverse groups of users."
              label="Data Services"
              path="/services"
            />
            <CardItem
              src="images/image2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/image4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/image5.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
