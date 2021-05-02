import React, { Component, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import user from "../assets/user.png";
import logout from "../assets/logout.png";
import goods from "../assets/goods.png";

import Home from "../contents/Home";
import axios from 'axios';

function Navigations() {

  const mystyle = {
    fontFamily: "Kanit",

  }
  const [warn, setWarn] = useState(0);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/product/all`)
      .then(pro => {
        if (JSON.stringify(product) != JSON.stringify(pro.data)) {
          setproduct(pro.data);
        }
      })
    warnset()
  }, [product]);
  const navDropdownTitle = (<img src={user} alt="user" width="50" height="50" />);

  const warning = (<i class="fa fa-bell"><span class="badge badge-danger">{warn}</span></i>);
  const nowarning = (<i class="fa fa-bell"><span class="badge badge-secondary">0</span></i>);

  const warnset = () => {
    let count = 0
    product.map((product) => {
      if (product.product_number <= 20) {

        count++
      }
      setWarn(warn + count)
    })
  }

  return (
    <div style={mystyle}>

      {/* <Navbar defaultActiveKey="/" class="navbar navbar-expand-lg navbar-light bg-light  nav-justified "> */}

      <Navbar defaultActiveKey="/Product" collapseOnSelect toggleable="lg" expand='sm' bg='light' variant='light' >

        <Navbar.Brand href="/"> <img
          alt=""
          src={goods}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} <t></t>POINT OF MONEY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav justified className="ml-auto" >
            <Nav.Link href="/">หน้าร้าน</Nav.Link>
            <Nav.Link href=""></Nav.Link>

            <Nav.Link href="/Warehouse">คลังสินค้า</Nav.Link>
            <Nav.Link href=""></Nav.Link>

            <Nav.Link href="/Dashboard">ยอดขาย</Nav.Link>
            <Nav.Link href=""></Nav.Link>

            {/* ถ้าของไม่หมด
                <Nav.Link style={{color: '#807b7b'}}>{nowarning}</Nav.Link>
                */}


            <NavDropdown title={warning} id="nav-dropdown">
              {product.map((product) => {
                if (product.product_number <= 0) {
                  return <NavDropdown.Item style={{ color: "red" }}>  สินค้าหมด! : {product.product_name}</NavDropdown.Item>
                }
                else if (product.product_number <= 20) {
                  return <NavDropdown.Item style={{ color: "orange" }}>  สินค้าใกล้หมด! : {product.product_name}</NavDropdown.Item>
                }

              })}
            </NavDropdown>

            <Nav.Link href=""></Nav.Link>

            <NavDropdown title={navDropdownTitle} id="nav-dropdown">
              <NavDropdown.Item href="/Employee">จัดการร้านค้า</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{ color: "red" }} href="/" onClick={() => { localStorage.removeItem("token"); }}> <img src={logout} alt="user" width="20" height="20" /><t></t>ออกจากระบบ</NavDropdown.Item>
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