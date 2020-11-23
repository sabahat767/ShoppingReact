import React, { Component } from 'react';
import logo from '../images/logo.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert,Nav} from 'react-bootstrap';
import '../App.css';


class Header extends React.Component{
  render(){
    const mystyle = {
     marginLeft:'50%',
     marginRight:'50%',
    };
    return(
      <div>
        <div>      
          <img src={logo} style={mystyle} alt="logo" />
     </div>
     <Alert style={{backgroundColor:'#DCDCDC'}}>
     <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home" style={{color:'#696969'}}><b>HOME</b></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="CartLink" style={{color:'#696969'}}><b>CART</b></Nav.Link>
  </Nav.Item>
</Nav>
  </Alert>
      </div>
    )
  }
}
export default Header