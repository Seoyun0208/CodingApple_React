/*eslint-disable*/ 
import React, {useState, lazy, Suspense} from 'react';
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import Main from './Main'
// import Detail from './Detail';
let Detail = lazy(()=> import ('./Detail.js') );
import Cart from './Cart';
import Data from './data'; 

import { Link, Route, Switch } from 'react-router-dom';

export let leftAllContext = React.createContext();


function App() {

  let [shoes, setShoes] = useState(Data.slice(0,3));
  let [leftAll, setLeftAll] = useState([10, 11, 12]);
  let [shoesAll, setShoesAll] = useState(Data);


  return (
    <div className="App">

        {/* Navbar */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to='/'>Shoes shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/detail/0'>Detail</Nav.Link>
                <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>

          {/* Main */}
          <Route exact path='/'>
            <Main shoes={shoes} setShoes={setShoes} shoesAll={shoesAll} setShoesAll={setShoesAll}/>
          </Route>

          {/* Detail */}
          <Route path='/detail/:id'>
            <leftAllContext.Provider value={leftAll}>
              <Suspense fallback={<div>로딩중입니다.</div>}>
                <Detail shoes={shoes} setShoes={setShoes} leftAll={leftAll} setLeftAll={setLeftAll} shoesAll={shoesAll} setShoesAll={setShoesAll}/>
              </Suspense>
            </leftAllContext.Provider>
          </Route>

          {/* Cart */}
          <Route path='/cart'>
            <Cart shoesAll={shoesAll} setShoesAll={setShoesAll}/>
          </Route>

        </Switch>
      
    </div>
  );
}



export default App;
