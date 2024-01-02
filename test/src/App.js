import React, { useState } from 'react';
import {stateData,strData } from './data.js'


const App = () => {
  const [inputValue, setInputValue] = useState('');

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
    <div>
      {/* 상태 데이터를 사용하여 메뉴 생성 */}
      <ul>
        {stateData.map((item, index) => (
          <li key={index}>
            <a href={item.hash}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* 해시 컴포넌트 */}
      <div id="middle">
        {/* 여기에 필요한 UI를 작성하고 이벤트 핸들러를 추가합니다. */}
        {/* 예: */}
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

export default App;