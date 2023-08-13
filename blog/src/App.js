// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "맛집"]);
  let [count, setCount] = useState(0)
  // title는 state에 보관했던 자료
  // b는 state를 변경하는 함수

  const sorting = () => {
    let copy_title = [...title];
    copy_title.sort((a,b)=> a.localeCompare(b));
    setTitle(copy_title);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <h1 style={{ color: 'red', fontSize: '16px' }}>JJamVa 블로그</h1>
      </div>

      <button onClick={sorting}>글 정렬</button>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '겨울 옷 추천'
        // useState는 spread를 통해 변경을 해야 정상적으로 변경이 가능
        setTitle(copy)
      }}>제목 수정</button>

      <div className="list">
        <h4>{title[0]} <span onClick={() => { setCount(count++) }}>👍</span> {count} </h4>
        <p>내용</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>내용</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>내용</p>
      </div>
      <h4>{post}</h4>
      {/* {}는 데이터 바인딩 */}
    </div >
  );
}

export default App;
