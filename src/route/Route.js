import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import Home from "../contents/Home";
import Food from "../contents/Food";
import Fruit from "../contents/Fruit";
import Wares from "../contents/Wares";
import Vegetable from "../contents/Vegetable";
import ProductsPopular from "../contents/ProductsPopular";
import Settingshop from "../contents/Settingshop";
import ItemDetail from "../contents/ItemDetail";
import EditItem from "../contents/EditItem";
import Warehouse from "../contents/Warehouse";
import Product from "../contents/Product";

class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path={"/Product"} component={Home} />
                    <Route exact path={"/Food"} component={Food} />
                    <Route exact path={"/Fruit"} component={Fruit} />
                    <Route exact path={"/Wares"} component={Wares} />
                    <Route exact path={"/Vegetable"} component={Vegetable} />
                    <Route exact path={"/ProductsPopular"} component={ProductsPopular} />
                    <Route exact path={"/Settingshop"} component={Settingshop} />
                    <Route exact path={"/ItemDetail/:itemid"} component={ItemDetail} />
                    <Route exact path={"/EditItem/:itemid"} component={EditItem} />
                    <Route exact path={"/Warehouse"} component={Warehouse} />
                    <Route exact path={"/Product/:product_type"} component={Product} />
                </Router>
            </div>
        );
    }
}

export default Routing;