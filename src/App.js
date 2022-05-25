import { useState, useEffect } from 'react';
/** useEffect(() => {}, [])
 *  처음 렌더링 시 한번만 실행되길 원할때 사용함
 *  렌더링 후 업데이트 되어도 useEffect 설정한 부분은 실행 안됨
 *  [] 안에 지정한 값이 변화 시에만 실행함
 *  [] 안에 지정 값이 없을 시 처음 렌더링 할때 한번만 실행
 *  useEffect가 destroy시 return에 원하는 콜백함수를 주면 됨 → cleanUp
 *  정리가 필요한 effect에 cleanUp사용함
 */
function App() {
  const [count, setCount] = useState(0);
  const [keyword, setkeyword] = useState('');
  const [text, setText] = useState(false);
  console.log('render!');
  const onClick = () => {
    setCount(() => count + 1);
  };
  const onChange = (event) => {
    setkeyword(event.target.value);
  };
  const changeText = () => {
    setText(!text);
  };
  useEffect(() => {
    console.log('I run only once.');
  }, []);
  useEffect(() => {
    if (keyword.length > 5) {
      console.log('search for', keyword);
    }
    console.log('I run when "keyword" changes.');
  }, [keyword]);
  useEffect(() => {
    console.log('I run when "count" changes.');
  }, [count]);
  useEffect(() => {
    console.log('I run when "keyword & count" changes.');
  }, [keyword, count]);

  return (
    <>
      <input value={keyword} type='text' onChange={onChange}></input>
      <h1>{count}</h1>
      <button onClick={onClick}>Click Me!</button>
      {text ? null : <Greet></Greet>}
      <button onClick={changeText}>{text ? 'Showing' : 'Hide'}</button>
    </>
  );
}
function Greet() {
  useEffect(() => {
    console.log('hi^^');
    // cleanUp
    return () => {
      console.log('byeTT');
    };
  }, []);
  return <h3>Hi!</h3>;
}
export default App;
/* 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useEffect } from 'react';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 */
