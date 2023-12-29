import React from "react";
import { stateData } from "./data.js";

export function SideComponent() {
  const boardChange = (hash) => {
    const boardHead = document.getElementById("boardHead");

    // boardHead의 배경색을 빨간색으로 변경
    if (boardHead) {
      // title 요소가 이미 존재하는 경우, 새로 추가하지 않기 위해 조건 확인
      let title = boardHead.querySelector('h1');
      if (!title) {
        title = document.createElement('h1');
        boardHead.appendChild(title);
      }
      
      title.innerHTML = hash.substring(1);  // 클릭된 hash 값을 title에 설정
    }
  };

  return (
    <ul id="sideUl">
      {stateData.map((item, index) => (
        <li key={index}>
          {/* boardChange 함수를 클릭 이벤트에 연결하고 hash 값을 전달 */}
          <a id={item.hash.substring(1)} href={item.hash} onClick={() => boardChange(item.hash)}>
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
