import React, {useState } from "react";
import { stateData,strData } from "./data.js";
import {createElement, render, hashCompo} from './Component.js'


const MiddleComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const handleButtonClick = () => {
    const matchedItem = stateData.find((item) => item.text === inputValue);
    if (matchedItem) {
      window.location.hash = matchedItem.hash;
    } else {
      alert("일치하는 이름을 찾을 수 없습니다.");
    }
  };

  return (
    <div id="board">
      <div id="boardHead"></div>
      <div id="boardBody"></div>
      <div id="boardFoot">
        <input
          id="inputTag"
          placeholder="write your name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button id="button" onClick={handleButtonClick}>
          show
        </button>
      </div>
    </div>
  );
};

export default MiddleComponent;
