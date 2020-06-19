import React, { useState } from "react";
import Utility from "./command/Utility.js";
import Gambling from "./command/Gambling.js";
import Fighting from "./command/Fighting.js";
import Pictures from "./command/Pictures.js";
import Money from "./command/Money.js";

import "./Commands.css";

export default function Commands() {
  const [key, setKey] = useState("utility");

  const btnClick = (btn, val) => {
    setKey(val);
    Array.from(
      document.getElementsByClassName("commandTabs")[0].children
    ).forEach((el) => el.classList.remove("commandsActive"));
    btn.target.classList.add("commandsActive");
  };

  return (
    <div className="commands">
      <div className="commandTabs">
        <button
          className="commandsActive"
          onClick={(e) => btnClick(e, "utility")}
        >
          Utility
        </button>
        <button onClick={(e) => btnClick(e, "gambling")}> Gambling </button>
        <button onClick={(e) => btnClick(e, "fighting")}> Fighting </button>
        <button onClick={(e) => btnClick(e, "pictures")}> Pictures </button>
        <button onClick={(e) => btnClick(e, "money")}> Money </button>
      </div>
      {key === "utility" && <Utility />}
      {key === "gambling" && <Gambling />}
      {key === "fighting" && <Fighting />}
      {key === "pictures" && <Pictures />}
      {key === "money" && <Money />}
      <p className="disclaimer">
        Detailed description through command{" "}
        <b>
          {" "}
          bnn help <i> command </i>{" "}
        </b>
      </p>
    </div>
  );
}
