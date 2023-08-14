// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let [title, setTitle] = useState(["React"]);
  let [content, setContent] = useState(["리액트 짱!"]);
  let [count, setCount] = useState(new Array(title.length).fill(0));
  // title는 state에 보관했던 자료
  // setCount는 state를 변경하는 함수
  let [modal, setModal] = useState(false);
  let [modaltitle, setModalTitle] = useState(0);
  let [modalcontent, setModalContent] = useState(0);
  let [inputtitle, setInputTitle] = useState("");
  let [inputcontent, setInputContent] = useState("");

  // const sorting = () => {
  //   let copy_title = [...title];
  //   copy_title.sort((a, b) => a.localeCompare(b));
  //   setTitle(copy_title);
  // }

  // {/* {}는 데이터 바인딩 */}


  return (
    <div className="App">
      <div className="black-nav">
        <h1 style={{ color: 'red', fontSize: '16px' }}>JJamVa Tech Blog</h1>
      </div>


      <input placeholder="추가할 제목을 입력" onChange={(e) => {
        setInputTitle(e.target.value)
      }}></input>

      <input type="text" placeholder='내용을 입력해주세요' onChange={(e) => {
        setInputContent(e.target.value)
      }}></input>

      <button onClick={() => {
        setTitle([inputtitle, ...title]);
        setContent([inputcontent, ...content])
        setCount([0, ...count]);
      }}>게시글 추가</button>

      {/* <button onClick={sorting}>글 정렬</button> */}

      {/* <button onClick={() => {
        let copy = [...title];
        copy[0] = '겨울 옷 추천'
        // useState는 spread를 통해 변경을 해야 정상적으로 변경이 가능
        setTitle(copy)
      }}>제목 수정</button> */}

      {/* <div className="list">
        <h4>{title[0]} <span onClick={() => { setCount(count++) }}>👍</span> {count} </h4>
        <p>내용</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>내용</p>
      </div>

      <div className="list">
        <h4
          onClick={() => { setModal(!modal) }}
        >{title[2]}</h4>
        <p>내용</p>
      </div> */}

      {
        title.map((e, i) => {
          return (
            // 에러가 뜨는데 key를 이용해서 item의 순서라고 생각하면 좋음
            <div className="list" key={i} onClick={() => {
              setModalTitle(i)
              setModalContent(i)
              setModal(!modal)
            }}>
              <h2>{e}
                <span onClick={(e) => {
                  e.stopPropagation();
                  // 이모지 눌렀을 때 밑의 모달창 활성화 x
                  let count_arr = [...count]
                  count_arr[i]++
                  setCount(count_arr)
                }}>👍</span>
                {count[i]}
              </h2>

              <p>{content[i]}</p>

              <button onClick={(e) => {
                e.stopPropagation();
                // check point
                let title_copy = [...title];
                title_copy.splice(i, 1);
                let content_copy = [...content];
                content_copy.splice(i, 1)
                setTitle(title_copy);
                setContent(content_copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      {
        modal
          ? <Modal modalcontent={modalcontent} modaltitle={modaltitle} change={setTitle} content={content} title={title} />
          : null
      }

    </div>
  );
}

function Modal(props) {
  let today = new Date();
  return (
    <>
      <div className="modal">
        <h4>{props.title[props.modaltitle]}</h4>
        <p>{`${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDay()}일`}</p>
        <p>{props.content[props.modalcontent]}</p>

        {/* <button onClick={() => {
          let title_arr = [...props.title]
          title_arr[0] = 'React'
          props.change(title_arr)
        }}>글수정</button> */}
      </div>
    </>
  );
}

// class형으로 표현
// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'kim',
//       age: 20
//     }
//   }
//   render() {
//     return (
//       <div>{this.state.name}
//         <button onClick={()=> this.setState({age: 21})}>변경</button>
//       </div>
//     )
//   }
// }

export default App;
