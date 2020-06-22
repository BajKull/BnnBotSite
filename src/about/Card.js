import React from "react";

export default function Card(props) {
  return (
    <div className="aboutCard">
      <h3> {props.title} </h3>
      <img src={props.image} alt={props.title} />
      <p> {props.description} </p>
    </div>
  );
}
