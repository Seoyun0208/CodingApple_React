import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {Nav} from 'react-bootstrap';
import {leftAllContext} from './App.js'

import {CSSTransition} from 'react-transition-group';

import { useDispatch } from 'react-redux';


let Box = styled.div`
  margin: 10px;
  padding: 20px 0;
`

let Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${ props => props.color }
`

let TabContentTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  background: #eee;
  padding:200px 0;
`

function Detail(props) {

  let dispatch = useDispatch();

  let [alert, setAlert] = useState(true);
  let [clickedTab, setClickedTab] = useState(0);
  let [onOff, setOnOff] = useState(false);

  useEffect(()=>{
      let timer = setTimeout(()=>{setAlert(false)}, 2000);
      return ()=>{ clearTimeout(timer)};
  },[alert]);

  let history = useHistory();
  let { id } = useParams();
  
  let findId = props.shoes.find(function(item) {
      return item.id === parseInt(id);
  });

  let leftAll = useContext(leftAllContext);

  return (
    <div className="container">
      { findId !== undefined ? (
      <>
        <Box>
          <Title className="darkgrey">Detail</Title>
        </Box>

        {
        alert === true 
        ? (<div className='my-alert-gold'>
          <p>
            재고가 얼마 남지 않았습니다. 구매를 서두르세요!
            </p>
          </div>) 
        : null
        }
        
        <div className="row">
          <div className="col-md-7">
            <img src={`https://codingapple1.github.io/shop/shoes${parseInt(findId.id)+1}.jpg`} width="100%" alt="shoes"/>
          </div>
          <div className="col-md-5 mt-4">
            <h4 className="pt-5">{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}</p>
            <LeftInfo leftOne={leftAll[findId.id]}/>
            <button className="btn btn-danger mx-1" onClick={()=>{
              changeLeftAll(props, findId.id);
              dispatch({ type : 'addItem', payload : { findId } });
              history.push('/cart')
              }}>주문하기</button> 
            <button className="btn btn-danger mx-1" onClick={()=>{history.goBack()}}>뒤로가기</button> 
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
          <Nav.Item>
            <Nav.Link eventKey="0" onClick={()=>{setOnOff(false); setClickedTab(0)}}>상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1" onClick={()=>{setOnOff(false); setClickedTab(1)}}>리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" onClick={()=>{setOnOff(false); setClickedTab(2)}}>Q&A</Nav.Link>
          </Nav.Item>
        </Nav>

        <CSSTransition in={onOff} classNames="show" timeout={1000}>
          <TabContent clickedTab={clickedTab} setOnOff={setOnOff}/>
        </CSSTransition>
      </>
      ) : history.push('/') }

    </div>
  )
}

function LeftInfo(props) {
  return (
    <p> 재고 : {props.leftOne}</p>
  )
}

function changeLeftAll(props, id) {
  let newLeftAll = [...props.leftAll];
  newLeftAll[id] = props.leftAll[id] - 1;
  props.setLeftAll(newLeftAll);
}

function TabContent(props) {

  useEffect(()=>{
    props.setOnOff(true);
  })

  if (props.clickedTab === 0){
    return (<TabContentTitle className="mt-5">상세정보 내용입니다.</TabContentTitle>)
  } else if (props.clickedTab === 1) {
    return (<TabContentTitle  className="mt-5">리뷰 내용입니다.</TabContentTitle>)
  } else if (props.clickedTab === 2) {
    return (<TabContentTitle className="mt-5">Q&A 내용입니다.</TabContentTitle>)
  }
}

export default Detail;