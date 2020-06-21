import React from "react";
import Command from "./Command.js";

export default function Money(props) {
  return (
    <div className="commandsdiv">
      <h1> Money </h1>
      {props.commands.map((com) => (
        <Command key={com.title} command={com} />
      ))}
    </div>
  );
}
