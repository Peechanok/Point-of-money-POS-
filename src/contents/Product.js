import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "../components/Main";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { addToCart, removeFromCart, updateCartQuantity } from "../store/actions/cartActions";

import axios from 'axios';

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      type_id: this.props.location.query,
      carts: this.props.cart
    }
  }
  componentDidMount() {

    axios.get(`http://localhost:8080/api/product/all`)
      .then(res => {
        this.setState({ product: res.data });
      })

  }
  handleDelete = (id) => {
    this.props.removeFromCart(id);
    const cart = this.state.carts.filter(item => item.product.id !== id);
    this.setState({ carts: cart });
    localStorage.setItem('cart', JSON.stringify(cart));

  }
  addToCart = (product, quantity) => {
    const cart = this.props.cart.find(item => item.product.id === product.id);
    if (cart) {
      this.props.updateCartQuantity(product.id, cart.quantity + 1);
    }
    else {
      this.props.addToCart(product, quantity);
      this.setState({ carts: [...this.props.cart] })
    }

  }

  renderTableData() {
    if (this.state.type_id != this.props.location.query) {
      this.setState({ type_id: this.props.location.query });
    }
    return this.state.product.map((product, index) => {
      const { id, product_name, product_description, product_number, product_price, product_picture, type_product_id, createdAt, updatedAt } = product //destructuring
      if (this.state.type_id == type_product_id) {
        return (

          <div class="product">
            <Link to={{ pathname: `/ItemDetail/${id}` }}>
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
            </Link>
            <button type="button" class="btn btn-info btn-block" onClick={() => {
              this.addToCart(product, 1)
              localStorage.setItem('cart', JSON.stringify(this.props.cart));
            }}>
              ADD TO CART <i class="fas fa-shopping-cart"></i>


            </button>
          </div>

        )
      }
    })
  }

  render() {
    const mystyle = {
      fontFamily: "Kanit",
    };
    console.log(this.props)
    return (
      <Shop carts={this.state.carts} handleDelete={this.handleDelete}>
        <div id="box2">
          {this.renderTableData()}
        </div>
      </Shop>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, quantity) => {
      dispatch(addToCart(product, quantity));
    },
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
    updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
