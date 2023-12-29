import React from "react";
import { stateData, strData } from "./data.js";

export function SideComponent() {
  const boardChange = (text) => {
    const boardHead = document.getElementById("boardHead");
    const boardBody = document.getElementById("boardBody");
    const boardFoot = document.getElementById("boardHead");


      // title 요소가 이미 존재하는 경우, 새로 추가하지 않기 위해 조건 확인
      let headtitle = boardHead.querySelector('h1');
      if (!headtitle) {
        headtitle = document.createElement('h1');
        boardHead.appendChild(headtitle);
      }
      let headcontent = boardHead.querySelector('p');
      if (!headcontent) {
        headcontent = document.createElement('p');
        headcontent.innerHTML= strData[0].str1
        boardHead.appendChild(headcontent);
      }
      // body
      let bodytitle = boardBody.querySelector('h1');
      if (!bodytitle) {
        bodytitle = document.createElement('h1');
        bodytitle.innerHTML = text;
        boardBody.appendChild(bodytitle);
      }
      let bodycontent = boardBody.querySelector('p');
      if (!bodycontent) {
        bodycontent = document.createElement('p');
        bodycontent.innerHTML= strData[0].str2
        boardBody.appendChild(bodycontent);
      }
      // foot
      let foottitle = boardFoot.querySelector('h1');
      if (!foottitle) {
        foottitle = document.createElement('h1');
        boardFoot.appendChild(foottitle);
      }
      let footcontent = boardFoot.querySelector('p');
      if (!footcontent) {
        footcontent = document.createElement('p');
        footcontent.innerHTML= strData[0].str2
        boardFoot.appendChild(footcontent);
      }
      
      
      headtitle.innerHTML = text;  // 클릭된 hash 값을 title에 설정
      bodytitle.innerHTML = text  + " 장점";  
  };

  return (
    <ul id="sideUl">
      {stateData.map((item, index) => (
        <li key={index}>
          {/* boardChange 함수를 클릭 이벤트에 연결하고 hash 값을 전달 */}
          <a id={item.hash.substring(1)} href={item.hash} onClick={() => boardChange(item.text)}>
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
