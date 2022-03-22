/* esLint-disable */

import './App.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';

function App() {

  // * 구조 분해 문법(Destructuring Assignment)
  // let [a, b] = useState('c') 형태로 사용하면
  // useState('c') = [state 데이터, state 데이터 변경 함수] 와 동일

  // * state 는 자주 바뀌는 중요한 데이터들을 저장하기에 용이
  // 1. 변수 대신 사용하는 데이터 저장공간
  // 2. useState() 를 이용해 만들어야 함
  // 3. 문자, 숫자, array, object 다 저장 가능

  let [title, setTitle] = useState(['[React] React 설치와 개발환경 셋팅하기', '[React] JSX 를 이용해 HTML 페이지 제작해보기', '[React] React 에서 state 변경해보기']);

  let [thumbsUp, setThumbsUp] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  let [clickedNum, setClickedNum] = useState(0);

  let [input, setInput] = useState('');

  function changeTitle0() {
    // title[0] = '[React] React 설치 및 개발환경 셋팅 완료' 와 같이 state 를 직접 수정 불가
    let newTitle = [...title]; // ! array, object deep copy 하는 방법!
    newTitle[0] = '[React] React 설치 및 개발환경 셋팅 완료'
    setTitle(newTitle);
  }

  function orderTitle() {
    let newOrder = [...title].sort();
    setTitle(newOrder);
  }

  function changeThumbsUp(idx) {
    let newThumbsUp = [...thumbsUp];
    newThumbsUp[idx] = thumbsUp[idx] + 1;
    setThumbsUp(newThumbsUp);
  }

  function addTitle(input) {
    let newTitle = [...title];
    newTitle.unshift(input);
    setTitle(newTitle);
  }

  // function repeatTitle(title) {
  //   let arr = [];
  //   for (let i = 0; i < title.length; i++) {
  //     arr.push(
  //     <div className='list'>
  //       <h3>{title[i]}<span className='thumbs-up' onClick={ ()=>{ setThumbsUp(thumbsUp + 1) } }>👍</span> {thumbsUp} </h3>
  //       <p>2022-03-18</p>
  //       <hr/>
  //     </div>
  //     )
  //   }
  //   return arr;
  // }

  return (
    <div className="App">
      <div className="veryperi-nav">
        <div>
          <FontAwesomeIcon icon={faStarAndCrescent} /> Seoyun's Blog
          </div>
      </div>
      <h2 className='intro'>배움에서 가치를 찾는 예비 개발자입니다</h2>

      {/* {repeatTitle(title)} */}

      {
        title.map(function(content, idx){
          return (
          <div className='list' key={idx}>
            <h3 onClick={()=>{setClickedNum(idx)}}>{content}<span className='thumbs-up' onClick={ ()=>{ changeThumbsUp(idx) } }>👍</span> {thumbsUp[idx]} </h3>
            <p>2022-03-18</p>
            <hr/>
          </div>            
          )
        })
      }

      <div className='publish'>
        <input onChange={ (e)=>{ setInput(e.target.value) } } />
        <button onClick={()=>{addTitle(input)}}>등록하기</button>
      </div>

      <button onClick={ changeTitle0 }>첫번째 글제목 바꾸기</button>
      <button onClick={ orderTitle }>가나다순으로 정렬하기</button>
      <button onClick={ ()=>{ setModal(!modal) } }>모달창 여닫기</button>
      {modal === true ? <Modal title={title} clickedNum={clickedNum}/> : null}
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h2>제목: {props.title[props.clickedNum]}</h2>
      <p>날짜: 2022-03-18</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
