import { stateData, strData } from "./data.js";

export function createElement(type, props, ...children) {
  return { type, props, children };
}

export function render(virtualDom) {
  if (typeof virtualDom === "string") {
    return document.createTextNode(virtualDom);
  }
  const element = document.createElement(virtualDom.type);
  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }
  return element;
}

export function hashCompo(index) {
  const middle = document.getElementById("middle");
  const middlebody = createElement(
    "div",
    { id: stateData[index].text, class: "middleCont" },
    createElement(
      "div",
      { class: "top" },
      createElement("h1", {}, stateData[index].text),
      createElement("p", {}, strData[0].str1)
    ),
    createElement(
      "div",
      { class: "middle" },
      createElement("h1", {}, stateData[index].text + " 장점"),
      createElement("p", {}, strData[0].str2)
    ),
    createElement(
      "div",
      { class: "bottom" },
      createElement("input", {
        id: "inputTag",
        placeholder: "write your name",
      }),
      createElement("div", {}, "")
    )
  );
  middle.appendChild(render(middlebody));
}
