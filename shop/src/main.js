import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Data from './data'; 

function Main() {

  let [shoes, setShoes] = useState(Data);

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
            shoes.map((item, idx)=>{
              return (
                <Grid shoes={shoes[idx]} key={idx} />
                )
              })
            }

          </div>
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