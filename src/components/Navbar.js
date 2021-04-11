import React, { Component } from 'react'
import Navitems from './Navitems'

import axios from 'axios';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': '',
            product_type: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/type_product/all`)
            .then(res => {
                this.setState({ product_type: res.data });
            })

    }

    renderTableData() {
        return this.state.product_type.map((product_type, index) => {
            const { id, type_name, type_description, createdAt, updatedAt } = product_type
            return (
                <Navitems item={type_name} tolink={`/Product/${type_name}`} typeid={id} activenav={this.activeitem}></Navitems>
            )
        })
    }

    activeitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': item }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }

    render() {
        return (
            <nav>
                <ul class="nav flex-column nav-tabs" >
                    <Navitems item="หน้าแรก" tolink="/Product" activenav={this.activeitem} ></Navitems>
                    {this.renderTableData()}
                </ul>
            </nav>
        )
    }
}

export default Navbar;