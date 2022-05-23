import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { useState } from 'react';

/** props를 전달하는 두가지 방법
 *  1. 인자를 props로 전달 후 {props.banana}로 접근하기
 *  2. 인자를 {banana, ...} 로 전달 후 {banana}로 접근하기
 */
function Btn(props) {
  // function Btn({banana, apple}) {
  return (
    <button
      style={{
        backgroundColor: 'salmon',
        color: props.apple ? 'black' : 'white',
        // color: apple ? 'black' : 'white',
        padding: '10px 20px',
        border: 0,
        borderRadius: 10,
        cursor: 'pointer',
      }}
    >
      {props.banana}
      {/* {banana} */}
    </button>
  );
}

function App() {
  return (
    <div>
      <Btn banana='Submit' apple={false}></Btn>
      <Btn banana='Reset' apple={true}></Btn>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
