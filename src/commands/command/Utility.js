import React from "react";
import Command from "./Command.js";

export default function Utility(props) {
  return (
    <div className="commandsdiv">
      <h1> Utility </h1>
      {props.commands.map((com) => (
        <Command key={com.title} command={com} />
      ))}
    </div>
  );
}
