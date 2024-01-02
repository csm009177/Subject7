import React from 'react';
import SideComponent from './SideComponent';
import MiddleComponent from './MiddleComponent';

const App = () => {
  return (
    <div id="bigcont">
      {/* 상태 데이터를 사용하여 메뉴 생성 */}
      <div id ="side"><SideComponent /></div>
      {/* 해시 컴포넌트 */}
      <div id="board"><MiddleComponent /></div>
    </div>
  );
};

export default App;