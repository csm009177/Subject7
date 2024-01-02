import React, { useState } from "react";
import { stateData, strData } from "./data.js";
import { createElement, render, hashCompo } from './Component.js';


const MiddleComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const handleButtonClick = () => {
    const matchedItem = stateData.find((item) => item.text === inputValue);
    
    if (matchedItem) {
      const boardHead = document.getElementById("boardHead");
      const boardBody = document.getElementById("boardBody");

      
      // 기존의 h1 요소가 있다면 삭제
      const existingHeadTitle = boardHead.querySelector("h1");
      if (existingHeadTitle) {
        boardBody.innerHTML = ""
        boardHead.innerHTML = ""
      }
      
      // 새로운 h1 요소 생성 및 추가
      const creHeadTitle = document.createElement("h1");
      const creHeadContent = document.createElement("p");
      const creBodyTitle = document.createElement("h1");
      const creBodyContent = document.createElement("p");
      creHeadTitle.innerHTML = matchedItem.text;
      creHeadContent.innerHTML = strData[0].str1;
      creBodyTitle.innerHTML = matchedItem.text;
      creBodyContent.innerHTML = strData[0].str2;
      boardHead.appendChild(creHeadTitle);
      boardHead.appendChild(creHeadContent)
      boardBody.appendChild(creBodyTitle);
      boardBody.appendChild(creBodyContent)

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
        <button id="button" onClick={handleButtonClick}>show</button>
      </div>
    </div>
  );
};

export default MiddleComponent;
