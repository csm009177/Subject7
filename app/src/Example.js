import React, { useState } from 'react';

function Example() {
  // useState 훅을 사용하여 상태 변수 count와 이를 변경할 수 있는 함수 setCount를 선언합니다.
  const [count, setCount] = useState(0);

  // count 상태를 업데이트하는 함수
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Example;

