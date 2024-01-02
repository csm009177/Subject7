import React from 'react';
import SideComponent from './SideComponent';
import MiddleComponent from './MiddleComponent';

const App = () => {
  return (
    <div id="side">
      {/* 상태 데이터를 사용하여 메뉴 생성 */}
      <SideComponent />
      {/* 해시 컴포넌트 */}
      <MiddleComponent />
    </div>
  );
};

export default App;