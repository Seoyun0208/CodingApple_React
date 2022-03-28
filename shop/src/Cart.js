import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';
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
    return(
        <CartContainer>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    {/* <th>수량 변경</th> */}
                </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item, idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{ idx + 1 }</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <ChangeNum onClick={ ()=>{ props.dispatch({ type : 'plus' , payload : {id : {idx}} }) } }>+</ChangeNum>
                                            {item.quan}
                                        <ChangeNum onClick={ ()=>{ props.dispatch({ type : 'minus', payload : {id : {idx}} }) } }>-</ChangeNum>
                                    </td>
                                    {/* <td>cell</td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                props.alert === true ? (
                    <Alert>
                        <span className='me-3'>신규가입시 최대 20% 할인 쿠폰 제공!</span>
                        <button className='btn btn-outline-danger' onClick={ ()=>{ props.dispatch({ type : 'close' }) } }>닫기</button>
                    </Alert>
                ) : null
            }
        </CartContainer>
    )
}

function Store(state) {

    return {
        data : state.reducer,
        alert : state.reducer2
    }

}

export default connect(Store)(Cart);
// export default Cart;