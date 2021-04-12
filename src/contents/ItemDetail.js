import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from '../components/Navbar'
import Topnav from '../components/Topnav'

import axios from 'axios';

class ItemDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: {},
      itemid: this.props.match.params.itemid
    }
  }
  componentDidMount() {
    console.log(this.state.itemid)
    axios.get(`http://localhost:8080/api/product/${this.state.itemid}`)
      .then(res => {
        this.setState({ product: res.data });
      })

  }
  renderTableData() {
    const { id, product_name, product_description, product_price,product_number, product_picture, type_product_id, createdAt, updatedAt } = this.state.product //destructuring
    console.log(id, product_name, product_description, product_price,product_number, product_picture, type_product_id, createdAt, updatedAt)
    return (
      <div class="col-lg " style={{ maxWidth: '80%' }}>
        <br></br>
        <div style={{ display: 'flex', width: '90%' }}>
          <div style={{ display: '-webkit-box' }}>
            <div style={{ width: 500, height: 500 }}>
              <img
                style={{ display: 'block', width: 500 }}
                src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
                alt="DOS0fk.jpg"
                border="0"
              />
            </div>
          </div>
          <div style={{ display: 'flex', flex: '1 1 auto', width: '50%' }}>
            <div style={{ display: 'block', width: '100%', display: 'flex', flexDirection: 'column', padding: '1.25rem 2.1875rem 0 1.25rem' }}>
              <h7 style={{ fontWeight: 500, fontSize: '1.25rem', overflow: 'visible', overflowWrap: 'break-word' }}>{product_name}</h7> <br></br>
              <div style={{ display: 'block', background: "rgb(245 245 245)" }}>
                <h8 style={{ display: 'block', background: "rgb(245 245 245)", padding: 3, fontSize: '1.875rem', margin: 5 }} class="product-price">{product_price} ฿</h8>
              </div>
              <br></br>

              <br></br>
              <span class="product-stock">
                <i class="fas fa-check-circle"></i> 20 in stock
                  </span>
              <button type="button" class="btn btn-info btn-block" >
                {this.state.itemid} <i class="fas fa-shopping-cart"></i>
                {this.state.itemid}

              </button>
              <br></br><br></br>
              <div style={{ display: 'block', border: 1, borderColor: 'rgb(245 245 245)', borderStyle: 'solid' }}>
                <h8 style={{ display: 'block', background: "rgb(245 245 245)", padding: 3, margin: 5 }} class="product-price">รายละเอียดสินค้า</h8>
                <p style={{ display: 'block', padding: 3, margin: 5, overflow: 'visible', overflowWrap: 'break-word' }} >{product_description}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
  render() {
    const mystyle = {
      fontFamily: "Kanit",

    }
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
            {this.renderTableData()}

          </div>
        </div>
      </div>
    );
  }
}



export default ItemDetail;
