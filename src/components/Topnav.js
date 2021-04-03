import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import user from "../assets/user.png";
import logout from "../assets/logout.png";
import goods from "../assets/goods.png";

import Home from "../contents/Home";

function Navigations() {

  const mystyle = {
    fontFamily: "Kanit",

  }

  const navDropdownTitle = (<img src={user} alt="user" width="50" height="50" /> );

  const warning = (<i class="fa fa-bell"><span class="badge badge-danger">10</span></i>);
  const nowarning = (<i class="fa fa-bell"><span class="badge badge-secondary">0</span></i>);

  return (
    <div style={mystyle}>

      {/* <Navbar defaultActiveKey="/" class="navbar navbar-expand-lg navbar-light bg-light  nav-justified "> */}

      <Navbar defaultActiveKey="/" collapseOnSelect  toggleable="lg"  expand='sm' bg='light' variant='light' >

      <Navbar.Brand href="/"> <img
        alt=""
        src={goods}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} <t></t>POINT OF MONEY</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">

            <Nav justified  className="ml-auto" >
            <Nav.Link href="/">หน้าร้าน</Nav.Link>
            <Nav.Link href=""></Nav.Link>

            <Nav.Link href="#link">คลังสินค้า</Nav.Link>
            <Nav.Link href=""></Nav.Link>

            <Nav.Link href="#link">ยอดขาย</Nav.Link>
            <Nav.Link href=""></Nav.Link>
            
              {/* ถ้าของไม่หมด
                <Nav.Link style={{color: '#807b7b'}}>{nowarning}</Nav.Link>
                */} 
               
        
            <NavDropdown title={warning} id="nav-dropdown">
            <NavDropdown.Item style={{ color: "red" }}>  สินค้าหมด! : ถ้วย</NavDropdown.Item>
            <NavDropdown.Item style={{ color: "red" }}>  สินค้าหมด! : ถ้วย</NavDropdown.Item>
           </NavDropdown>
           
           <Nav.Link href=""></Nav.Link>

            <NavDropdown title={navDropdownTitle} id="nav-dropdown">
            <NavDropdown.Item href="/Settingshop">จัดการร้านค้า</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  style={{ color: "red" }}> <img src={logout} alt="user" width="20" height="20" /><t></t>ออกจากระบบ</NavDropdown.Item>
          </NavDropdown>
            
          <Nav.Link href=""></Nav.Link>
          <Nav.Link href=""></Nav.Link>
          <Nav.Link href=""></Nav.Link>
          <Nav.Link href=""></Nav.Link>

            </Nav>
          </Navbar.Collapse>
            </Navbar>

    </div>
  );
}



export default Navigations;