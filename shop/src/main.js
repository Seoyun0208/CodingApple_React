import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { version } from 'styled-components';


let Loading = styled.div`
  font-size : 20px;
  font-weight : bold;
  color: #484848;
  padding: 15px 20px;
  background : #eee;
  border-radius : 5px;
  margin : 10px 0;
`

function Main(props) {

  let [count, setCount] = useState(2);
  let [load, setLoad] = useState(false);
  let [loadFail, setLoadFail] = useState(false);
  let [view, setView] = useState(true);

  function failTimer(){
    setTimeout(()=>{
      setLoadFail(false);
    },2000)
    clearTimeout(failTimer);
  };


    return (
        <>
        {/* Main */}
        <div className="main-visual">
          <h2>Welcome to visit SHOES.COM!</h2>
          <hr/>
          <h1>20% Season Off</h1>
          <button>SHOP THIS DEAL</button>
        </div>

        {/* Grid */}
        <div className="container">

          <div className="row">

            {
            props.shoes.map((item, idx)=>{
              return (
                <Grid shoes={props.shoes[idx]} key={idx} />
                )
              })
            }

          </div>
          
          {
            load == true ? (<Loading>로딩중입니다...</Loading>) : null
          }

          {
            loadFail == true ? (<Loading>로딩에 실패했습니다.</Loading>) : null
          }
          
          {
            view == true 
            ?
            (
              <button className='btn btn-primary' onClick={()=>{ 
                setLoad(true);
                axios.get(`https://codingapple1.github.io/shop/data${count}.json`)
                .then((result)=>{
                  setLoad(false);
                  setCount(count+1);
                  // console.log(count);
                  // console.log(result.data);
                  let newData = result.data;
                  props.setShoes([...props.shoes, ...newData]);
                  console.log('상품 데이터를 불러오는 데에 성공했습니다.');
                })
                .catch(()=>{
                  setLoad(false);
                  setView(false);
                  setLoadFail(true);
                  failTimer();
                  console.log('상품 데이터를 불러오는 데에 실패했습니다.')
                });
               }}>상품 더보기</button>
            )
            : null
          }

        </div>
        </>
    )
}

function Grid(props) {
    return (
      <div className="col-md-4 grid">
        <img src={'https://codingapple1.github.io/shop/shoes'+ (props.shoes.id + 1 ) +'.jpg'} />
        <h5>{props.shoes.title}</h5>
        <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
    )
}

export default Main;