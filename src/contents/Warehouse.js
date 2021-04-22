import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from '../components/Navbar'
import Topnav from '../components/Topnav'
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Warehouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            product_type: [],
            alert: null,
        }
    }
    handleDelete(id){
        console.log(id);
        axios.delete(`http://localhost:8080/api/product/${id}`)  
            .then(res => {  
            console.log(res);
            console.log(res.data);  
    
            const product = this.state.product.filter(product => product.id !== id);  
            this.setState({ product : product });  
        }).catch((error) => {
            console.log(error.response)
        })  
        this.hideAlert()
    }

    hideAlert() {
        console.log('Hiding alert...');
        this.setState({
            alert: null
        });

    }
    deleteThisGoal(id, product_name) {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                showCloseButton
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"
                title="Are you sure?"
                onConfirm={() => this.handleDelete(id)}
                onCancel={() => this.hideAlert()}
                cancelBtnBsStyle="light"
            >
                ลบ "{product_name}" ใช่หรือไม่<br></br>
                ถ้าลบแล้วข้อมูลจะไม่สามารถกู้คืนได้
            </SweetAlert>
        );

        this.setState({
            alert: getAlert()
        });
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
            var i = 0
            var type = ""
            const { id, product_name, product_number, product_description, product_price, product_picture, type_product_id, createdAt, updatedAt } = product
            for (i = 0; i < this.state.product_type.length; i++) {
                if (this.state.product_type[i].id == type_product_id) {
                    type = this.state.product_type[i].type_name
                    break;
                }
            }
            return (
                <tr key={id}>
                    <td style={{ width: 100 }}>{index+1}</td>
                    <td style={{ width: 100 }}><img
                        style={{ display: 'block', maxWidth: 100, maxHeight: 100 }}
                        src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
                        alt="DOS0fk.jpg"
                        border="0"
                    /></td>
                    <td >{product_name}</td>
                    <td>{type}</td>
                    <td>{product_number}</td>
                    <td>{product_price}</td>
                    <td style={{ width: 100 }}><Link class='btn btn-outline-warning btn-block' to={{ pathname: `/EditItem/${id}` }}><i class="fas fa-edit"></i></Link></td>
                    <td style={{ width: 100 }}><Link class='btn btn-outline-danger btn-block' onClick={() => this.deleteThisGoal(id, product_name)} ><i class="fas fa-trash-alt"></i></Link></td>

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
                    <Link class='btn btn-outline-primary' style={{ float: 'right' }} to={{ pathname: `/AddType` }}><i class="fas fa-plus-square">  เพิ่มประเภทสินค้า</i></Link>
                    <Link class='btn btn-outline-success' style={{ float: 'right', marginRight: 15 }} to={{ pathname: `/AddProduct` }}><i class="fas fa-plus-square">  เพิ่มสินค้า</i></Link>
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
                            {this.state.alert}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



export default Warehouse;
