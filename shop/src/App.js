/*eslint-disable*/ 
import React, {useState} from 'react';
import './App.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Main from './Main'
import Detail from './Detail';
import Data from './data'; 

import { Link, Route, Switch } from 'react-router-dom';

export let leftAllContext = React.createContext();


function App() {

  let [shoes, setShoes] = useState(Data);
  let [leftAll, setLeftAll] = useState([10, 11, 12]);


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

        <Switch>

          {/* Main */}
          <Route exact path='/'>
            <Main shoes={shoes} setShoes={setShoes} />
          </Route>

          {/* Detail */}
          <Route path='/detail/:id'>
            <leftAllContext.Provider value={leftAll}>
              <Detail shoes={shoes} setShoes={setShoes} leftAll={leftAll} setLeftAll={setLeftAll}/>
            </leftAllContext.Provider>
          </Route>

        </Switch>
      
    </div>
  );
}



export default App;
