import React from "react";
import { stateData } from "./data.js";

export function SideComponent() {
  return (
    <ul>
      {stateData.map((item, index) => (
        <li key={index}>
          <a href={item.hash}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
}
