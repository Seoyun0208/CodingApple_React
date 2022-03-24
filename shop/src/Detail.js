import React, { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  margin: 10px;
  padding: 20px 0;
`

let Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${ props => props.color }
`

function Detail(props) {

    let history = useHistory();
    let { id } = useParams();
    
    let findId = props.shoes.find(function(item) {
        return item.id == id;
    });

    return (
      <div className="container">
        <Box>
          <Title className="darkgrey">Detail</Title>
        </Box>
        <div className="my-alert-gold">
          <p>
            재고가 얼마 남지 않았습니다. 구매를 서두르세요!
          </p>
        </div>
        <div className="row">
          <div className="col-md-7">
            <img src={`https://codingapple1.github.io/shop/shoes${parseInt(findId.id)+1}.jpg`} width="100%" />
          </div>
          <div className="col-md-5 mt-4">
            <h4 className="pt-5">{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}</p>
            <button className="btn btn-danger mx-1">주문하기</button> 
            <button className="btn btn-danger mx-1" onClick={()=>{history.goBack()}}>뒤로가기</button> 
          </div>
        </div>
      </div>
    )
}

export default Detail;