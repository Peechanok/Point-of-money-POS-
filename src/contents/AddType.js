import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "../components/Topnav";
import "../App.css";
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Redirect } from "react-router";

class AddType extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addType: null,
      count: 0,
      product_type: [],type_product: [],
      type_name: '',
      type_description: '',
      isRedirect: false
    };
  }

  handleDelete(id){
    console.log(id);
    axios.delete(`http://localhost:8080/api/type_product/${id}`)  
        .then(res => {  
        console.log(res);
        console.log(res.data);  

        const type_product = this.state.type_product.filter(type_product => type_product.id !== id);  
        this.setState({ type_product : type_product });  
    }).catch((error) => {
        console.log(error.response)
    })  
    this.hideAlert()
}

hideAlert() {
    console.log('Hiding alert...');
    this.setState({
        alert: null
        
    });
    window.location.reload();
}
  componentDidMount() {
    axios.get(`http://localhost:8080/api/type_product/all`)
      .then(res => {
        this.setState({ product_type: res.data });
      })
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
    const product_type = {
      type_name: this.state.type_name,
      type_description: this.state.type_description,

    };
    axios.post(`http://localhost:8080/api/type_product/`, product_type)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
    this.setState({
      addType: getData(),
      product_type: [...this.state.product_type, product_type]
    });
  }

  hide() {
    console.log('Hiding alert...');
    this.setState({
      addType: null
    });
    window.location.reload();

  }
  deleteThisGoal(id, type_name) {
    console.log(type_name);
    const getAlert = () => (
      
        <SweetAlert
            warning
            showCancel
            showCloseButton
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={() => this.handleDelete(id)}
            onCancel={() => this.hideAlert()}
            cancelBtnBsStyle="light"
        >
            ลบ "{type_name}" ใช่หรือไม่<br></br>
            ถ้าลบแล้วข้อมูลจะไม่สามารถกู้คืนได้
        </SweetAlert>
    );

    this.setState({
        alert: getAlert()
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
                onChange={(type_name) => { this.setState({ type_name: type_name.target.value }); }}
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
                <th style={{ background: "#8FBC8F", color: "white" }}>#</th>
                <th style={{ width: '70%', background: "#8FBC8F", color: "white" }}>ชื่อประเภท</th>
                <th style={{  background: "#8FBC8F", color: "white" }}>ลบ</th>
              </tr>
              {this.state.product_type.map((product_type, index) => {
                const { id, type_name, type_description, createdAt, updatedAt } = product_type
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{type_name} </td>
                    <td style={{ width: 100 }}><Link class='btn btn-outline-danger btn-block' onClick={() => this.deleteThisGoal(id, type_name)} ><i class="fas fa-trash-alt"></i></Link></td>
                  </tr>
                )
              })
              }
              <tr>
                <th style={{ background: "#90EE90", color: "black" }}>จำนวนทั้งหมด</th>
                <th style={{ background: "#90EE90", color: "black" }}>{this.state.product_type.length} </th>
                <th style={{ background: "#90EE90", color: "black" }}></th>
              </tr>
            </table>
            {this.state.alert}
          </div>
        </div>
      </div>
    );
  }
}

export default AddType;
