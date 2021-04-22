import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "../components/Topnav";
import "../App.css";
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import { Redirect } from "react-router";

class AddProduct extends React.Component {
  state = {
    product_name: '',
    product_description: '',
    product_price: 0,
    product_number: 0,
    product_picture: '',
    type_product_id: 1,
    product_type: [],
    addType: null,
    isRedirect: false

  }

  successThisGoal() {

    const getData = () => (
      <SweetAlert
        success
        title="Success!"
        confirmBtnBsStyle="success"
        onConfirm={() => this.setState({ isRedirect: true })}
      >
        เพิ่มข้อมูลเรียบร้อย
      </SweetAlert>
    );
    const product = {
      product_name: this.state.product_name,
      product_description: this.state.product_description,
      product_price: this.state.product_price,
      product_picture: this.state.product_picture,
      type_product_id: this.state.type_product_id,
      product_number: this.state.product_number,

    };
    axios.post(`http://localhost:8080/api/product/`, product)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
    this.setState({
      addType: getData(),
      product_type: [...this.state.product_name, product]
    });
  }
  hide() {
    console.log('Hiding alert...');

    this.setState({
      addType: null

    });
  }

  // onFormSubmit = (e) => {
  //   e.preventDefault()
  //   const product = {
  //     product_name: this.state.product_name,
  //     product_description: this.state.product_description,
  //     product_price: this.state.product_price,
  //     product_picture: this.state.product_picture,
  //     type_product_id: this.state.type_product_id,
  //     product_number: this.state.product_number,

  //   };
  //   axios.post(`http://localhost:8080/api/product/`,  product)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     }).catch((error) => {
  //       console.log(error)
  //   });
  // }

  componentDidMount() {

    axios.get(`http://localhost:8080/api/type_product/all`)
      .then(res => {
        this.setState({ product_type: res.data });
      })

  }

  render() {
    const mystyle = {
      fontFamily: "Kanit",
    };
    let isRedirect = this.state.isRedirect;
    if (isRedirect == true) {
      return <Redirect to='/Warehouse' />
    }
    return (
      <div style={mystyle}>
        <Topnav />
        <br></br>

        <div class="container" >
          <div class="col">
            <h1 style={{ color: "#191970" }}>เพิ่มสินค้า</h1>
            <h3 style={{ color: "#20B2AA" }}>( Add product )</h3>
            <br></br>
            <div id="box2" class="border border-dark rounded" style={{ padding: "10%", background: "#F5F5F5" }}>

              <div class="form-group">
                <label>ชื่อสินค้า</label>
                <input
                  type="text"
                  class="form-control border border-success"
                  placeholder="Shopee"
                  onChange={(name) => { this.setState({ product_name: name.target.value }); }}
                  value={this.state.product_name}
                  required
                ></input>
                <br></br>
                <label>ประเภท</label>
                <select
                  class="custom-select  border border-primary"
                  onChange={(id) => { this.setState({ type_product_id: id.target.value }); }}
                >
                  {this.state.product_type.map((product_type) => {
                    return <option value={product_type.id}>{product_type.type_name}</option>
                  })}
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
                  onChange={(number) => { this.setState({ product_number: number.target.value }); }}
                  value={this.state.product_number}
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
                  onChange={(price) => { this.setState({ product_price: price.target.value }); }}
                  value={this.state.product_price}
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
                <button class="btn buttom btn-block" type="submit" onClick={() => this.successThisGoal()}>
                  ยืนยัน
              </button>
                {this.state.addType}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
