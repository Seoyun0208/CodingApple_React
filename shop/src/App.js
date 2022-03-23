/*eslint-disable*/ 
import React, {useState} from 'react';
import './App.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Main from './main'

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">

        {/* Navbar */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Shoes shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main */}
      <Route exact path='/'>
        <Main />
      </Route>

      {/* Detail */}
      <Route path='/detail'>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-5 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div>
      </Route>
      
    </div>
  );
}



export default App;
