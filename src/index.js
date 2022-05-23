import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { useState } from 'react';

function MinutesToHours() {
  const [amount, setAmount] = useState();
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const onReset = () => {
    setAmount('');
  };
  const onFlip = () => {
    onReset();
    setFlipped(!flipped);
  };
  return (
    <>
      <label htmlFor='minutes'>Minutes</label>
      <input
        value={flipped ? amount * 60 : amount}
        id='minutes'
        placeholder='Minutes'
        type='number'
        onChange={onChange}
        disabled={flipped}
      ></input>
      <label htmlFor='hours'>Hours</label>
      <input
        value={!flipped ? Math.round(amount / 60) : amount}
        id='hours'
        placeholder='Hours'
        type='number'
        onChange={onChange}
        disabled={!flipped}
      ></input>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </>
  );
}
function KmToMiles() {
  const [amount, setAmount] = useState();
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const onReset = () => {
    setAmount('');
  };
  const onFlip = () => {
    onReset();
    setFlipped(!flipped);
  };
  return (
    <>
      <label htmlFor='km'>Km</label>
      <input
        value={flipped ? Math.round(amount * 1.61) : amount}
        id='km'
        placeholder='km'
        type='number'
        onChange={onChange}
        disabled={flipped}
      ></input>
      <label htmlFor='miles'>Miles</label>
      <input
        value={!flipped ? Math.round(amount * 0.62) : amount}
        id='miles'
        placeholder='miles'
        type='number'
        onChange={onChange}
        disabled={!flipped}
      ></input>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </>
  );
}

function App() {
  const [select, setSelect] = useState('select');
  function onSelect(event) {
    setSelect(event.target.value);
  }
  return (
    <div>
      <h1>Super Converter</h1>
      <select onChange={onSelect}>
        <option value='select'>선택하세요</option>
        <option value='minutes'>MinutesToHours</option>
        <option value='km'>KmToMiles</option>
      </select>
      <hr></hr>
      <div>
        {select === 'minutes' ? (
          <MinutesToHours></MinutesToHours>
        ) : select === 'km' ? (
          <KmToMiles></KmToMiles>
        ) : (
          <h4>변환 단위를 선택하세요!</h4>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
