import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "../components/Topnav";
import "../App.css";
import SweetAlert from 'react-bootstrap-sweetalert';

class AddType extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addType: null,
    };
  }


  successThisGoal() {
    const getData = () => (
      <SweetAlert 
      success 
      title="Success!" 
      confirmBtnBsStyle="success"
      onConfirm={() => this.hide()}     
      >
        เพิ่มข้อมูลเรียบร้อย
      </SweetAlert>
    );

    this.setState({
      addType: getData()
    });
  }

  hide() {
    console.log('Hiding alert...');
    this.setState({
      addType: null
    });

  }

  render() {
    const mystyle = {
      fontFamily: "Kanit",
    };

    return (
      <div style={mystyle}>
        <Topnav />
        <br></br>
        <div class="container">
          <h1 style={{ color: "#191970" }}>เพิ่มประเภทสินค้า</h1>
          <h3 style={{ color: "#20B2AA" }}>( Add product category )</h3>
          <br></br>
          <div id="box2" style={{ background: "#F5F5F5" }}>
            <div
              class="form-group"
              style={{ padding: "10%", boxShadow: "0px 5px 10px #87CEEB" }}
            >
              <p>
                <b>ชื่อประเภท</b>
              </p>
              <input
                type="text"
                class="form-control"
                placeholder="ชื่อประเภทใหม่"
                required
              ></input>

              <br></br>
              <button class="btn buttom btn-block" type="submit" onClick={() => this.successThisGoal()}>
                ยืนยัน
              </button>
              {this.state.addType}
            </div>
          </div>
          <div id="box2">
            <br></br>
            <table
              class="table table-bordered "
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: '40px', overflow: 'hidden'
              }}
            >
              <tr>
                <th style={{ background:"#8FBC8F", color:"white"}}>#</th>
                <th style={{ width: '70%' ,background:"#8FBC8F", color:"white"}}>ชื่อประเภท</th>
              </tr>

              <tr>
                <td>1</td>
                <td>ของหวาน </td>
              </tr>

              <tr> 
                <td >1</td>
                <td >ของหวาน </td>
              </tr>

              <tr>
                <td>1</td>
                <td>ของหวาน </td>
              </tr>

            
              <tr>
                <th style={{ background:"#90EE90", color:"black"}}>จำนวนทั้งหมด</th>
                <th style={{ background:"#90EE90", color:"black"}}>3 </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AddType;
