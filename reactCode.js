import React from "react";
import "./style.css";
import cardsJson from "./cards.json";

export const Presentational = (props) => {
  return (
    <Page parentProps={props}/>
  );
}

const Page = (props) => {
  const cards = cardsJson.map(card => (
    <Card
      title={card.title}
      price={props.parentProps.anually ? card.price2 : card.price1}
      storage={card.storage}
      users={card.users}
      sending={card.sending}
      featured={card.featured}
    />
  ))

  return (
    <div>
      <div class="pricing">
        <h1>
          Our Pricing
        </h1>
        <div class="toggle-wrapper">
          <span>Annually</span>
          <div 
            class={`toggle${props.parentProps.anually ? " on" : ""}`}
            onClick={props.parentProps.handleToggle}
          />
          <span>Monthly</span>
        </div>
      </div>
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

const Card = (props) => {
  return (
    <div class={`card${props.featured ? " featured" : ""}`}>
      <b>{props.title}</b>
      <b class="price">
        <span>$</span>{props.price}
      </b>
      <ul>
        <li>
          {props.storage}
        </li>
        <li>
          {props.users}
        </li>
        <li>
          {props.sending}
        </li>
      </ul>
      <a href="#" class="button">
        Learn More
      </a>
    </div>
  );
}