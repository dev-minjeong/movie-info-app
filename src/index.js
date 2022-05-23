import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

function Btn({ text, fontSize = 16 }) {
  // props의 기본값 설정 가능
  return (
    <button
      style={{
        backgroundColor: 'salmon',
        color: 'white',
        padding: '10px 20px',
        border: 0,
        borderRadius: 10,
        cursor: 'pointer',
        fontSize, // === fontSize: fontSize
      }}
    >
      {text}
    </button>
  );
}
// PropTypes을 활용해 각각 prop의 타입 지정 가능 → 타입 지정 실수 방지
Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  // fontSize를 prop로 설정하지 않은 Btn이 있음 → isRequired 설정 시 오류남
};

function App() {
  return (
    <div>
      <Btn text='Submit' fontSize={24}></Btn>
      <Btn text='Reset'></Btn>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
