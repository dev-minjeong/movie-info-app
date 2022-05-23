import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { useState } from 'react';

/** state를 설정하는 2가지 방법
 *  1. setData 이용해 직접 값 넣어주기
 *  - 현재 state와 관련없는 새로운 state로 설정 원할 시 사용
 *  2. 이전 값을 이용해 현재 값 계산하기 (콜백함수)
 *  - 리액트가 current가 확실히 현재값 보장 → 더 안정적
 *  - 현재 state에 조금의 변화를 주어 새로운 state를 주고싶을때 사용
 */
function App() {
  const [data, setData] = useState(0);
  function onClick() {
    // 1. 여러개 설정해도 하나만 실행한것같은 효과 나타남
    // setData(data + 1);
    // setData(data + 1);
    // setData(data + 1); // + 1 만 됨
    // 2. 지정한 함수개수만큼 실행됨
    setData((current) => current + 1);
    setData((current) => current + 1);
    setData((current) => current + 1); // + 3 실행됨
  }
  return (
    <div>
      <h3>My Total Clicks : {data}</h3>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
