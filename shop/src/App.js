import React from 'react';
import './App.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

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
      <div className="main-visual">
        <h2>Welcome to visit SHOES.COM!</h2>
        <hr/>
        <h1>20% Season Off</h1>
        <button>SHOP THIS DEAL</button>
      </div>

      {/* Grid */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 grid">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" />
            <h5>Stinson Sneaker</h5>
            <p>$64.95</p>
          </div>
          <div className="col-md-4 grid">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" />
            <h5>Running Shoes</h5>
            <p>$29.98</p>
          </div>
          <div className="col-md-4 grid">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" />
            <h5>Hiking Boots</h5>
            <p>$89.98</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
