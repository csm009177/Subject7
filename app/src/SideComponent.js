import React from "react";
import { stateData } from "./data.js";

export function SideComponent() {
  const boardChange = () => {
    // boardHead의 배경색을 빨간색으로 변경
    const boardHead = document.getElementById("boardHead");
    if (boardHead) {
      boardHead.style.backgroundColor = 'red';
    }
  };

  return (
    <ul id="sideUl">
      {stateData.map((item, index) => (
        <li key={index} >
          {/* boardChange 함수를 클릭 이벤트에 연결 */}
          <a id={item.hash.substring(1)} href={item.hash} onClick={boardChange}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function BoardComponent() {
  return (
    <div>
      <div id="boardHead">Board Head</div>
      <div id="boardBody">Board Body</div>
      <div id="boardFoot">Board Foot</div>
    </div>
  );
}
