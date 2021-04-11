import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from '../components/Navbar'
import Topnav from '../components/Topnav'

import { Link } from 'react-router-dom'
import axios from 'axios';

class Warehouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            product_type:[]
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/product/all`)
            .then(res => {
                this.setState({ product: res.data });
            })
        axios.get(`http://localhost:8080/api/type_product/all`)
            .then(res => {
                this.setState({ product_type: res.data });
            })

    }

    mystyle = {
        fontFamily: "Kanit",

    }

    renderTableData() {
        return this.state.product.map((product, index) => {
            var i= 0
            var type =""
            const { id, product_name, product_description, product_price, product_picture, type_product_id, createdAt, updatedAt } = product //destructuring
            console.log(id, product_name, product_description, product_price, product_picture, type_product_id, createdAt, updatedAt)
            for(i = 0;i<this.state.product_type.length;i++){
                if(this.state.product_type[i].id == type_product_id){
                    type = this.state.product_type[i].type_name
                    break;
                }
            }
            return (
                <tr key={id}>
                    <td style={{ width: 100 }}>{id}</td>
                    <td style={{ width: 100 }}><img
                        style={{ display: 'block', maxWidth: 100, maxHeight: 100 }}
                        src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
                        alt="DOS0fk.jpg"
                        border="0"
                    /></td>
                    <td >{product_name}</td>
                    <td>{type}</td>
                    <td>20</td>
                    <td>{product_price}</td>
                    <td style={{ width: 100 }}><Link class='btn btn-outline-warning btn-block' to={{ pathname: `/EditItem/${1}` }}><i class="fas fa-edit"></i></Link></td>
                    <td style={{ width: 100 }}><Link class='btn btn-outline-danger btn-block' to={{ pathname: `/EditItem/${1}` }}><i class="fas fa-trash-alt"></i></Link></td>

                </tr>
            )
        })
    }
    render() {
        console.log(this.state.product_type)
        return (
            <div style={this.mystyle}>
                {/* <nav class="navbar navbar-light bg-light navbar-expand nav-pills nav-justified flex-column flex-md-row bd-navbar"> */}
                <Topnav />
                <div style={{ display: 'block', marginTop: 40, marginLeft: 100, marginRight: 100 }}>
                    <h1 id='title'>คลังสินค้า</h1>
                    <br></br>
                    <Link class='btn btn-outline-primary' style={{ float: 'right' }} to={{ pathname: `/EditItem/${1}` }}><i class="fas fa-plus-square">  เพิ่มประเภทสินค้า</i></Link>
                    <Link class='btn btn-outline-success' style={{ float: 'right', marginRight: 15 }} to={{ pathname: `/EditItem/${1}` }}><i class="fas fa-plus-square">  เพิ่มสินค้า</i></Link>
                    <br></br><br></br><br></br>
                    <table id="box" class="table table-bordered" style={{ tableLayout: 'fixed', width: '100%', overflow: 'visible', overflowWrap: 'break-word' }} >
                        <tr>
                            <th>#</th>
                            <th>รูป</th>
                            <th style={{ width: '50%' }}>ชื่อสินค้า</th>
                            <th>ประเภท</th>
                            <th>จำนวน</th>
                            <th>ราคา</th>
                            <th>แก้ไข</th>
                            <th>ลบ</th>
                        </tr>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



export default Warehouse;
