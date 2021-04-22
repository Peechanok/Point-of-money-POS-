import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from './Navbar'
import Topnav from './Topnav'

function App(props) {
  const mystyle = {
    fontFamily: "Kanit",

  }
  let num = 0;
  
  props.carts.map(item => {num += item.product.product_price * item.quantity});
  let tax = num*7.0/100.0;
  let total = num+tax;
    
  return (
    <div style={mystyle}>
      {/* <nav class="navbar navbar-light bg-light navbar-expand nav-pills nav-justified flex-column flex-md-row bd-navbar"> */}
      <Topnav />

      <br></br>

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2  ">
            <ul class="nav flex-column nav-tabs">
              <li>
                <h5>
                  ประเภทสินค้า
                  </h5>
              </li >
              <Navbar />
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
            {props.children}


          </div>
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
                {props.carts.map((item, index) => {
                const { product, quantity } = item
                return (
                  <tr>
                    <td>{product.product_name}</td>
                    <td>{product.product_price}</td>
                    <td>{quantity}</td>
                    <td><a href="#" style={{ fontsize: "24px", color: "red" }}> <i class="fas fa-minus-circle" onClick={()=>{props.handleDelete(product.id)}}></i></a></td>
                 </tr>
                )
              })
              }
                </tbody>

                <tr>
                  <th >จำนวน</th>
                  <th ></th>
                  <th ></th>
                  <th >{num}</th>
                </tr>

                <tr>
                  <th >ภาษี</th>
                  <th ></th>
                  <th ></th>
                  <th >{tax}</th>
                </tr>

                <tr>
                  <th >เงินทั้งหมด</th>
                  <th ></th>
                  <th ></th>
                  <th >{total}</th>
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



export default (App);
