import React from 'react';
import { stateData, strData } from './data.js';

const handlesideButtonClick = (e) => {
  // 클릭된 a 태그의 href 속성 값 (hash 값)을 가져옵니다.
  const hashValue = e.currentTarget.getAttribute('href');
  
  // stateData 배열에서 해당 hash 값과 일치하는 항목을 찾습니다.
  const matchedItem = stateData.find((item) => item.hash === hashValue);
  
  if (matchedItem) {
    const boardHead = document.getElementById("boardHead");
    const boardBody = document.getElementById("boardBody");

    // 기존의 h1 요소가 있다면 삭제합니다.
    boardHead.innerHTML = "";
    boardBody.innerHTML = "";
    
    // 새로운 요소들을 생성하여 추가합니다.
    const creHeadTitle = document.createElement("h1");
    const creHeadContent = document.createElement("p");
    const creBodyTitle = document.createElement("h1");
    const creBodyContent = document.createElement("p");
    
    creHeadTitle.innerHTML = matchedItem.text;
    creHeadContent.innerHTML = strData[0].str1;
    creBodyTitle.innerHTML = matchedItem.text;
    creBodyContent.innerHTML = strData[0].str2;
    
    boardHead.appendChild(creHeadTitle);
    boardHead.appendChild(creHeadContent);
    boardBody.appendChild(creBodyTitle);
    boardBody.appendChild(creBodyContent);

    // 해당 hash 값으로 URL의 해시를 업데이트합니다.
    window.location.hash = matchedItem.hash;
  }
};


const SideComponent = () => {
  return (
    <ul id="sideUl">
      {stateData.map((item, index) => (
        <li key={index} id={item.text+"liTag"} >
          <a href={item.hash} onClick={handlesideButtonClick}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default SideComponent;
