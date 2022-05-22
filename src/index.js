import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(0);
  function onClick() {
    setData(data + 1);
  }
  return (
    <div>
      <h3>Total Clicks : {data}</h3>
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
