import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import Home from "../contents/Home";
import Employee from "../contents/Employee";
import ItemDetail from "../contents/ItemDetail";
import EditItem from "../contents/EditItem";
import Warehouse from "../contents/Warehouse";
import Product from "../contents/Product";
import Login from '../components/Login';
import Registers from '../components/Registers';
import Start from '../components/Start';
import AddProduct from '../contents/AddProduct';
import AddType from '../contents/AddType';
import Dashboard from '../contents/Dashboard';

class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    
                    <Route  exact path={"/"} component={Home} />
                    <Route exact path={"/Employee"} component={Employee} />
                    <Route  exact path={"/ItemDetail/:itemid"} component={ItemDetail} />
                    <Route  exact path={"/EditItem/:itemid"} component={EditItem} />
                    <Route  exact path={"/Warehouse"} component={Warehouse} />
                    <Route  exact path={"/Product/:product_type"} component={Product} />
                    <Route exact  path={"/Login"} component={Login} />
                    <Route  exact path={"/Registers"} component={Registers} />
                    <Route  exact path={"/Login"} component={Start} />
                   
                    <Route exact path={"/AddProduct"} component={AddProduct} />
                    <Route exact path={"/AddType"} component={AddType} />
                    <Route exact path={"/Dashboard"} component={Dashboard} />
                </Router>
            </div>
        );
    }
}

export default Routing;