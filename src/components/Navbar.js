import React, { Component } from 'react'
import Navitems from './Navitems'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
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
                    <Navitems item="หน้าแรก" tolink="/" activenav={this.activeitem} ></Navitems>
                    <Navitems item="สินค้ายอดนิยม" tolink="/ProductsPopular" activenav={this.activeitem}></Navitems>
                    <Navitems item="อาหาร" tolink="/Food" activenav={this.activeitem}></Navitems>
                    <Navitems item="ผัก" tolink="/Vegetable" activenav={this.activeitem}></Navitems>
                    <Navitems item="ผลไม้" tolink="/Fruit" activenav={this.activeitem}></Navitems>
                    <Navitems item="ของใช้" tolink="/Wares" activenav={this.activeitem}></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;