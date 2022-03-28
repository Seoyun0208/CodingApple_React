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

function Cart(props) {
    return(
        <CartContainer>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    {/* <th>옵션 변경</th> */}
                </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((item, idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{ idx + 1 }</td>
                                    <td>{item.name}</td>
                                    <td>{item.quan}</td>
                                    {/* <td>Table cell</td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </CartContainer>
    )
}

function Store(state) {

    return {
        state : state        
    }

}

export default connect(Store)(Cart);
// export default Cart;