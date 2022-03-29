import React from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

let CartContainer = styled.div`
    border: 5px solid lightgrey;
    border-radius: 15px;
    padding: 15px 20px;
    margin: 50px 30px;
`

let ChangeNum = styled.button`
    border: 1px solid lightgrey;
    border-radius : 5px;
    margin: 0 15px;
    width: 25px;
`

let Alert = styled.div`
    background: #eee;
    max-width: none;
    font-weight: bold;
    color: red;
    font-size : 20px;
    padding: 15px 20px;
`

function Cart(props) {

    let state = useSelector((state)=>state);
    let dispatch = useDispatch();

    return(
        <CartContainer>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((item, idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{ idx + 1 }</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <ChangeNum onClick={ ()=>{ dispatch({ type : 'plus' , payload : {id : {idx}} }) } }>+</ChangeNum>
                                            {item.quan}
                                        <ChangeNum onClick={ ()=>{ dispatch({ type : 'minus', payload : {id : {idx}} }) } }>-</ChangeNum>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                state.reducer2 === true ? (
                    <Alert>
                        <span className='me-3'>신규가입시 최대 20% 할인 쿠폰 제공!</span>
                        <button className='btn btn-outline-danger' onClick={ ()=>{ dispatch({ type : 'close' }) } }>닫기</button>
                    </Alert>
                ) : null
            }
        </CartContainer>
    )
}

export default Cart;