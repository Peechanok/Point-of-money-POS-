import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "../components/Main";
import { Link } from 'react-router-dom'

import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/product/all`)
      .then(res => {
        this.setState({ product: res.data });
      })

  }
  renderTableData() {
    return this.state.product.map((product, index) => {
      const { id, product_name, product_description,product_number, product_price, product_picture, type_product_id, createdAt, updatedAt } = product //destructuring
      return (
        <Link to={{ pathname: `/ItemDetail/${id}` }}>
          <div class="product">
            <img
              class="product-image"
              src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
              alt="DOS0fk.jpg"
              border="0"
            />
            <h7>{product_name}</h7> <br></br>
            <h8 class="product-price">{product_price} ฿</h8>
            <br></br>
            <span class="product-stock">
              <i class="fas fa-check-circle"></i> {product_number} in stock
                </span>
            <button type="button" class="btn btn-info btn-block" >
              BUY NOW <i class="fas fa-shopping-cart"></i>


            </button>
          </div>
        </Link>
      )
    })
  }

  render() {
    const mystyle = {
      fontFamily: "Kanit",
    };
    return (
      <Shop>
        <div id="box2">
          {this.renderTableData()}
        </div>
      </Shop>
    );
  }
}

export default Home;
