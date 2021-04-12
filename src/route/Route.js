import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import Home from "../contents/Home";
import Food from "../contents/Food";
import Fruit from "../contents/Fruit";
import Wares from "../contents/Wares";
import Vegetable from "../contents/Vegetable";
import ProductsPopular from "../contents/ProductsPopular";
import Settingshop from "../contents/Settingshop";
import AddProduct from "../contents/AddProduct";
import AddType from "../contents/AddType";
import Dashboard from "../contents/Dashboard";
import Warehouse from "../contents/Warehouse";


class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/Food"} component={Food} />
                    <Route exact path={"/Fruit"} component={Fruit} />
                    <Route exact path={"/Wares"} component={Wares} />
                    <Route exact path={"/Vegetable"} component={Vegetable} />
                    <Route exact path={"/ProductsPopular"} component={ProductsPopular} />
                    <Route exact path={"/Settingshop"} component={Settingshop} />
                    <Route exact path={"/AddProduct"} component={AddProduct} />
                    <Route exact path={"/AddType"} component={AddType} />
                    <Route exact path={"/Dashboard"} component={Dashboard} />
                    <Route exact path={"/Warehouse"} component={Warehouse} />
                </Router>
            </div>
        );
    }
}

export default Routing;