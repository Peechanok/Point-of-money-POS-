import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from '../components/Navbar'
import Topnav from '../components/Topnav'

import { Link } from 'react-router-dom'

class Warehouse extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            students: [
                { id: 1, name: 'Wasif', type: ['ผัก',"อาหาร"], stock: 20, price: 200 },
                { id: 2, name: 'Ali', type: ['ผัก',"อาหาร"], stock: 20, price: 200 },
                { id: 3, name: 'Saad', type: ['ผัก',"อาหาร"], stock: 10, price: 200 },
                { id: 4, name: 'Asad', type: ['ผัก',"อาหาร"], stock: 11, price: 200 }
            ]
        }
    }

    mystyle = {
        fontFamily: "Kanit",

    }

    renderTableData() {
        return this.state.students.map((student, index) => {
            const { id, name, type, stock, price } = student //destructuring
            console.log(id, name, type, stock, price)
            return (
                <tr key={id}>
                    <td style={{ width: 100 }}>{id}</td>
                    <td style={{ width: 100 }}><img
                        style={{ display: 'block', maxWidth: 100, maxHeight:100 }}
                        src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
                        alt="DOS0fk.jpg"
                        border="0"
                    /></td>
                    <td >{name}</td>
                    <td>{type.join(", ")}</td>
                    <td>{stock}</td>
                    <td>{price}</td>
                    <td style={{ width: 100 }}><Link class='btn btn-outline-warning btn-block' to={{ pathname: `/EditItem/${1}` }}><i class="fas fa-edit"></i></Link></td>
                    <td style={{ width: 100 }}><Link class='btn btn-outline-danger btn-block' to={{ pathname: `/EditItem/${1}` }}><i class="fas fa-trash-alt"></i></Link></td>

                </tr>
            )
        })
    }
    render() {

        return (
            <div style={this.mystyle}>
                {/* <nav class="navbar navbar-light bg-light navbar-expand nav-pills nav-justified flex-column flex-md-row bd-navbar"> */}
                <Topnav />
                <div style={{ display: 'block', marginTop: 40, marginLeft: 100, marginRight: 100 }}>
                    <h1 id='title'>คลังสินค้า</h1>
                    <br></br>
                    <Link class='btn btn-outline-primary' style={{ float: 'right'}} to={{ pathname: `/EditItem/${1}` }}><i class="fas fa-plus-square">  เพิ่มประเภทสินค้า</i></Link> 
                    <Link class='btn btn-outline-success' style={{ float: 'right', marginRight:15  }} to={{ pathname: `/EditItem/${1}` }}><i class="fas fa-plus-square">  เพิ่มสินค้า</i></Link>
                    <br></br><br></br><br></br>
                    <table id="box" class="table table-bordered" style={{tableLayout: 'fixed',width:'100%',  overflow: 'visible', overflowWrap: 'break-word' }} >
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
