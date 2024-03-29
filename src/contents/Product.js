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
      carts: this.props.cart,
      searcher: "",
    }
  }
  componentDidMount() {

    axios.get(`/api/product/all`)
      .then(res => {
        this.setState({ product: res.data });
      })

  }

  handleSales = () => {
    this.state.carts.map((cart, index) => {
      const { product, quantity } = cart
      const { id, product_name, product_description, product_number, product_price, product_picture, type_product_id, createdAt, updatedAt } = product
      const products = {
        product_name: product_name,
        product_description: product_description,
        product_price: product_price,
        product_picture: product_picture,
        type_product_id: type_product_id,
        product_number: product_number - quantity,

      };
      console.log(product)
      axios.put(`/api/product/${id}`, products)
        .then(res => {
          console.log(res);
          console.log(res.data);
          console.log(this.props.cart);
        }).catch((error) => {
          console.log(error)
        });
      const nnproduct = this.state.product.filter(product => product.id !== id);
      const nproduct = {
        id: id,
        product_name: product_name,
        product_description: product_description,
        product_price: product_price,
        product_picture: product_picture,
        type_product_id: type_product_id,
        product_number: product_number - quantity,
        createdAt: createdAt,
        updatedAt: updatedAt

      };
      this.setState({ product: [...nnproduct, nproduct] })
      return 0
    })
  }

  halndleSearch = (text) => {
    this.setState({ searcher: text })
    console.log(this.state.searcher)
  }

  handleDelete = (id) => {
    this.props.removeFromCart(id);
    const cart = this.state.carts.filter(item => item.product.id !== id);
    this.setState({ carts: cart });
    localStorage.setItem('cart', JSON.stringify(cart));

  }

  handleDeleteAll = () => {
    this.props.cart.map((cart, index) => {
      const { product, quantity } = cart
      return this.props.removeFromCart(product.id);
    })
    const cart = []
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
    if (this.state.type_id != this.props.location.query && this.props.location.query != undefined) {
      this.setState({ type_id: this.props.location.query, searcher: "" });
    }
    let products = this.state.product.filter(product => {
      console.log(product)
      return product.product_name.toLowerCase().includes(this.state.searcher.toLowerCase())
    })
    products = products.sort((a, b) => a.id > b.id ? 1 : -1)
    return products.map((product, index) => {
      const { id, product_name, product_description, product_number, product_price, product_picture, type_product_id, createdAt, updatedAt } = product //destructuring
      const cart = this.state.carts.find(item => item.product.id === id)
      let images = 0
      if (product_picture != "") {
        images = 1
      }
      const button = () => {
        if ((cart && product_number - cart.quantity <= 0) || product_number <= 0) {
          return <button type="button" class="btn btn-danger btn-block">OUT OF ORDER <i class="fas fa-shopping-cart"></i></button>

        }
        else {
          return <button type="button" class="btn btn-info btn-block" onClick={() => {
            this.addToCart(product, 1)
            localStorage.setItem('cart', JSON.stringify(this.props.cart));
          }}>
            ADD TO CART <i class="fas fa-shopping-cart"></i>
          </button>
        }
      }
      if (this.state.type_id == type_product_id) {
        return (

          <div class="product">
            <Link to={{ pathname: `/ItemDetail/${id}` }}>
              <img
                class="product-image"
                src={images ? `data:image/png;base64,${product_picture}` : "https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"}
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
            {button()}
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
      <Shop carts={this.state.carts} handleDelete={this.handleDelete} handleDeleteAll={this.handleDeleteAll} halndleSearch={this.halndleSearch} handleSales={this.handleSales}>
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
