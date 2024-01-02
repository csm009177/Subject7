import React from "react";
import { stateData, strData } from "./data.js";

export function SideComponent() {

  const appendOrUpdateContent = (cont, text, contentstr) => {
    let title = cont.querySelector("h1");
    let content = cont.querySelector("p");

    if (!title) {
      title = document.createElement("h1");
      cont.appendChild(title);
    }
    title.innerHTML = text;

    if (!content) {
      content = document.createElement("p");
      cont.appendChild(content);
    }
    content.innerHTML = contentstr;
  };

  const appendOrUpdatefoot = (cont) => {
    let input = cont.querySelector("input");
    let button = cont.querySelector("button");

    if (!input) {
      const input = document.createElement("input");
      input.placeholder = "type here"
      cont.appendChild(input);
    }

    if (!button) {
      const button = document.createElement("button");
      button.innerHTML = "show"
      cont.appendChild(button);
    }

  };

  const boardChange = (text) => {
    const boardHead = document.getElementById("boardHead");
    const boardBody = document.getElementById("boardBody");
    const boardFoot = document.getElementById("boardFoot");

    appendOrUpdateContent(boardHead, text, strData[0].str1);
    appendOrUpdateContent(boardBody, `${text} 장점`, strData[0].str2);
    appendOrUpdatefoot(boardFoot)

  };

  return (
    <ul id="sideUl">
      {stateData.map((item, index) => (
        <li key={index}>
          <a
            id={item.hash.substring(1)}
            href={item.hash}
            onClick={() => boardChange(item.text)}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
