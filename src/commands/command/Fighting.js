import React from "react";
import Command from "./Command.js";

export default function Fighting(props) {
  return (
    <div className="commandsdiv">
      <h1> Fighting </h1>
      {props.commands.map((com) => (
        <Command key={com.title} command={com} />
      ))}
    </div>
  );
}
