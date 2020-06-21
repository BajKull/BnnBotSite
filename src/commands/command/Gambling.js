import React from "react";
import Command from "./Command.js";

export default function Gambling(props) {
  return (
    <div className="commandsdiv">
      <h1> Gambling </h1>
      {props.commands.map((com) => (
        <Command key={com.title} command={com} />
      ))}
    </div>
  );
}
