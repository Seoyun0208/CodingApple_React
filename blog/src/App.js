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

  let [title, setTitle] = useState(['[React] React 설치와 개발환경 셋팅하기', '[React]  JSX 를 이용해 HTML 페이지 제작해보기'])

  return (
    <div className="App">
      <div className="veryperi-nav">
        <div>
          <FontAwesomeIcon icon={faStarAndCrescent} /> Seoyun's Blog
          </div>
      </div>
        <h2 className='intro'>배움에서 가치를 찾는 예비 개발자입니다</h2>
        <div className='list'>
          <h3>{title[0]}</h3>
          <p>2022-03-18</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{title[1]}</h3>
          <p>2022-03-18</p>
          <hr/>
        </div>
    </div>
  );
}

export default App;
