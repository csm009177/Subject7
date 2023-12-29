import React from "react";
import { stateData } from "./data.js";

export function SideComponent() {
  return (
    <ul id="sideUl">
      {stateData.map((item, index) => (
        <li key={index}>
          <a id={item.hash.substring(1)} href={item.hash}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
}
