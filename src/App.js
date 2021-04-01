import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import user from "./assets/user.png";
import logout from "./assets/logout.png";
import "./App.css";
import Home from "./contents/Home";
import Food from "./contents/Food";
import Fruit from "./contents/Fruit";
import Wares from "./contents/Wares";
import Vegetable from "./contents/Vegetable";
import Navbar from './components/Navbar'
import ProductsPopular from "./contents/ProductsPopular";
function App() {

  const mystyle = {
    fontFamily: "Kanit",

  }


  return (
    <div style={mystyle}>
      {/* <nav class="navbar navbar-light bg-light navbar-expand nav-pills nav-justified flex-column flex-md-row bd-navbar"> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light  nav-justified ">
        <a class="navbar-brand nav-link disabled" href="#">
          POINT OF MONEY
          </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item active">
              <a class="nav-item nav-link " href="#">
                หน้าร้าน
                </a>
            </li>

            <li class="nav-item active">
              <a class="nav-item nav-link " href="#">
                คลังสินค้า
                </a>
            </li>

            <li class="nav-item active">
              <a class="nav-item nav-link " href="#">
                รายงานการขาย
                </a>
            </li>

            <li class="nav-item dropdown">
              {/* ถ้าของไม่หมด
                 <a class="nav" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" style={{color: '#807b7b'}}>
                <i class="fa fa-bell"><span class="badge badge-secondary">0</span></i></a>*/}

              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-bell">
                  <span class="badge badge-danger">10</span>
                </i>
              </a>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" style={{ color: "red" }}>
                  สินค้าหมด! : ถ้วย
                  </a>
                <a class="dropdown-item" href="#" style={{ color: "red" }}>
                  สินค้าหมด! : ชาม
                  </a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                <img src={user} alt="user" width="50" height="50" />
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  แก้ไขโปรไฟล์
                  </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  ตั้งค่าร้านค้า
                  </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" style={{ color: "red" }}>
                  <img src={logout} alt="user" width="20" height="20" />{" "}
                  <t></t>
                    ออกจากระบบ
                  </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <br></br>

      <div class="container-fluid">
        <div class="row">
          <Router>
            <div class="col-lg-2  ">
              <ul class="nav flex-column nav-tabs">
                <li>
                  <h5>
                    ประเภทสินค้า
                  </h5>
                </li >

                <Navbar />
                <li class="nav-item">
                  <Route exact path="/" >

                  </Route>

                </li>
                <li class="nav-item">
                  <Route exact path="/ProductsPopular"  >

                  </Route>

                </li>
                <li>
                  <Route exact path="/Food"  >

                  </Route>
                </li>
                
                <li class="nav-item">
                  <Route exact path="/Vegetable"  >

                  </Route>
                </li>
                <li class="nav-item">
                  <Route exact path="/Fruit"  >

                  </Route>
                </li>
             
                
            
              </ul>
            </div>

            <div class="col-lg-6 ">
              <div class="input-group">
                <input
                  id="searchBox"
                  type="text"
                  class="form-control"
                  placeholder="ค้นหาสินค้าได้ที่นี่"
                  name="inputSearch"
                  value=""
                ></input>
                <div class="input-group-append">
                  <button type="button" class="btn btn-info" value="search" onclick="">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>

              <br></br>

              <Route exact path="/" >
                <Home />
              </Route>
              <Route exact path="/ProductsPopular" >
                <ProductsPopular />
              </Route>
              <Route exact path="/Food"  >
                <Food />
              </Route>
             
              <Route exact path="/Vegetable"  >
                <Vegetable />
              </Route>
             
              <Route exact path="/Fruit"  >
                <Fruit />
              </Route>
           
           



            </div>
          </Router>
          <div class="col-lg-3">
            <div id="box">

              <br></br>
              <h6>รายการสั่งซื้อ</h6>
              <hr></hr>

              <table class="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th scope="col">รายการ</th>
                    <th scope="col">ราคา</th>
                    <th scope="col"> จำนวน</th>
                    <th scope="col">ยกเลิก</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ส้ม</td>
                    <td>80</td>
                    <td>2</td>
                    <td><a href="#" style={{ fontsize: "24px", color: "red" }}> <i class="fas fa-minus-circle"></i></a></td>
                  </tr>

                  <tr>
                    <td>ส้ม</td>
                    <td>80</td>
                    <td>2</td>
                    <td><a href="#" style={{ fontsize: "24px", color: "red" }}> <i class="fas fa-minus-circle"></i></a></td>
                  </tr>
                </tbody>

                <tr>
                  <th >จำนวน</th>
                  <th ></th>
                  <th ></th>
                  <th >4</th>
                </tr>

                <tr>
                  <th >ภาษี</th>
                  <th ></th>
                  <th ></th>
                  <th >20</th>
                </tr>

                <tr>
                  <th >เงินทั้งหมด</th>
                  <th ></th>
                  <th ></th>
                  <th >160</th>
                </tr>
              </table>
              <br></br>

              <button type="button" class="btn btn-danger btn-block" style={{ borderradius: "20%" }}>
                ลบรายการทั้งหมด
                    </button>
              <button type="button" class="btn btn-success btn-block" style={{ borderradius: "20%" }}>
                บันทึกการขาย
                    </button>



              <br></br>


            </div>

            <br></br>
          </div>

        </div>
      </div>
    </div>
  );
}



export default App;
