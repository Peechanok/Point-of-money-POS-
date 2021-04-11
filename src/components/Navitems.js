import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navitems extends Component {
    render() {
        if (this.props.typeid) {
            return (
                <li class="nav-item" id={this.props.item}>
                    <Link class="buttom btn-block" to={{ pathname: `${this.props.tolink}`, query: this.props.typeid }} onClick={this.props.activenav.bind(this, this.props.item)}>{this.props.item}</Link>
                </li>
            )
        }

        return (
            <li class="nav-item" id={this.props.item}>
                <Link class="buttom btn-block" to={this.props.tolink} onClick={this.props.activenav.bind(this, this.props.item)}>{this.props.item}</Link>
            </li>
        )
    }
}

export default Navitems
