import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

function Title() {
  return (
    <h3 id='title' onMouseEnter={() => console.log('enter!')}>
      Hello I'm a title
    </h3>
  );
}
const Button = () => (
  <button
    style={{ backgroundColor: 'tomato' }}
    onClick={() => console.log('clicked!')}
  >
    Click
  </button>
);
const Container = () => (
  <div>
    <Title></Title>
    <Button></Button>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root')
);
