import React, {useState} from 'react';
import axios from 'axios';

function Main(props) {

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
          <button className='btn btn-primary' onClick={()=>{ 
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              console.log(result.data);
              let newData = result.data;
              props.setShoes([...props.shoes, ...newData]);
              console.log('상품 데이터를 불러오는 데에 성공했습니다.');
            })
            .catch(()=>{
              console.log('상품 데이터를 불러오는 데에 실패했습니다.')
            });
           }}>상품 더보기</button>
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