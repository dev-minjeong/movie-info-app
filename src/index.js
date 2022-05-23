import React, { memo } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { useState } from 'react';

/** props를 전달하는 두가지 방법
 *  1. 인자를 props로 전달 후 {props.banana}로 접근하기
 *  2. 인자를 {banana, ...} 로 전달 후 {banana}로 접근하기
 */
function Btn({ text, changeValue }) {
  console.log(text);
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: 'salmon',
        color: 'white',
        padding: '10px 20px',
        border: 0,
        borderRadius: 10,
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
}
// memo를 활용해서 변경되지 않은 prop은 re-render 되지 않게 설정 가능
const MemoBtn = memo(Btn);

function App() {
  const [value, setValue] = useState('Submit');
  const changeValue = () => setValue('Change');
  return (
    <div>
      <MemoBtn text={value} changeValue={changeValue}></MemoBtn>
      <MemoBtn text='Reset'></MemoBtn>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
