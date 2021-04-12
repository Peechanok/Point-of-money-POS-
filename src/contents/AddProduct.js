import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "../components/Topnav";
import "../App.css";

class AddProduct extends React.Component {
  render() {
    const mystyle = {
      fontFamily: "Kanit",
    };

    return (
      <div style={mystyle}>
        <Topnav />
        <br></br>

        <div class="container" >
          <div class="col">
            <h1 style={{ color: "#191970" }}>เพิ่มสินค้า</h1>
            <h3 style={{ color: "#20B2AA" }}>( Add product )</h3>
            <br></br>
            <div id="box2" class="border border-dark rounded"  style={{ padding: "10%" ,background:"#F5F5F5"}}>
              <form name="itemAdd" onSubmit={this.onFormSubmit}>
                <div class="form-group">
                  <label>ชื่อสินค้า</label>
                  <input
                    type="text"
                    class="form-control border border-success"
                    placeholder="Shopee"
                    required
                  ></input>
                  <br></br>
                  <label>ประเภท</label>
                  <select class="custom-select  border border-primary">
                    <option selected>ผู้ใช้</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <br></br> <br></br>
                  <label>จำนวน</label>
                  <input
                    class="form-control border border-warning"
                    style={{ width: "100%" }}
                    type="number"
                    min="1"
                    max="1000"
                    placeholder="1"
                    required
                  ></input>
                  <br></br> <br></br>
                  <label>ราคา</label>
                  <input
                  class="border border-primary"
                    style={{ width: "100%" }}
                    type="number"
                    min="1"
                    max="1000"
                    placeholder="1"
                    required
                  ></input>
                  <br></br>
                  <br></br>
                  <label for="">รูปสินค้า</label>
                 
                    <input
                      class="form-control form-control-lg  border border-success"
                      id="formFileLg"
                      type="file"
                      accept="image/*"
                    />

                    <br></br>
                 
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>{" "}
                  <button
                    class="btn buttom"
                    style={{ width: "50%" }}
                    type="submit"
                  >
                    ยืนยัน
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
