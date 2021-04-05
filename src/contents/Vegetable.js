import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "../components/Main";

class Vegetable extends Component {
  render() {
    const mystyle = {
      fontFamily: "Kanit",
    };

    return (
      <Shop>
        <div id="box2">
          <div class="product">
            <img
              class="product-image"
              src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
              alt="DOS0fk.jpg"
              border="0"
            />
            <h7>คะน้า</h7> <br></br>
            <h8 class="product-price">£230</h8>
            <br></br>
            <span class="product-stock">
              <i class="fas fa-check-circle"></i> 20 in stock
                  </span>
            <button type="button" class="btn btn-info btn-block" >
              BUY NOW <i class="fas fa-shopping-cart"></i>


            </button>
          </div>

          <div class="product">
            <img
              class="product-image"
              src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
              alt="DOS0fk.jpg"
              border="0"
            />
            <h7>ผักกาดหอม</h7> <br></br>
            <h8 class="product-price">£230</h8>
            <br></br>
            <span class="product-stock">
              <i class="fas fa-exclamation-triangle"></i>3 in stock
                  </span>
            <button type="button" class="btn btn-info btn-block">
              BUY NOW <i class="fas fa-shopping-cart"></i>

            </button>
          </div>

          <div class="product">
            <img
              class="product-image"
              src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
              alt="DOS0fk.jpg"
              border="0"
            />
            <h7>ขึ้นช่าย</h7> <br></br>
            <h8 class="product-price">£230</h8>
            <br></br>
            <span class="product-stock">
              <i class="fas fa-exclamation-triangle"></i> 20 in stock
                  </span>
            <button type="button" class="btn btn-info btn-block">
              BUY NOW <i class="fas fa-shopping-cart"></i>
            </button>
          </div>

          <div class="product">
            <img
              class="product-image"
              src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
              alt="DOS0fk.jpg"
              border="0"
            />
            <h7>ผักชี</h7> <br></br>
            <h8 class="product-price">£230</h8>
            <br></br>
            <span class="product-stock">
              <i class="fas fa-exclamation-triangle"></i> 20 in stock
                  </span>
            <button type="button" class="btn btn-info btn-block">
              BUY NOW <i class="fas fa-shopping-cart"></i>

            </button>
          </div>


        </div>
      </Shop>
    );
  }
}

export default Vegetable;
