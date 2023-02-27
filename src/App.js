import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {setKeyword(event.target.value)}
  console.log("i run all the time");
  useEffect( () => {
    console.log("한번만 호출돼요 ! ");
  }, []);
  useEffect( () => {
    console.log("키워드 변화 생김 !");
  }, [keyword]);
  useEffect(()=>{
    console.log("카운트 변화 생김 !");
  },[counter]);
  useEffect(()=>{
    console.log("키워드 와 카운트 변화 생김 !");
  },[keyword,counter]);
  return (
  <div>
  <input value={keyword} type="text" onChange={onChange} placeholder="검색어를 입력해주세요. "/>
    <h1>{counter}</h1>
    <button onClick={onClick}>click me</button>
  </div>
  );
}

export default App;
 