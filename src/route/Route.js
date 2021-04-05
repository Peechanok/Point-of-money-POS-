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
                    <Route exact path={"/ItemDetail/:itemid"} component={ItemDetail} />
                </Router>
            </div>
        );
    }
}

export default Routing;