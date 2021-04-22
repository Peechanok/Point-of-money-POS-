import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from '../components/Navbar'
import Topnav from '../components/Topnav'
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Redirect } from "react-router";

function EditItem(props) {
    const { itemid } = props.match.params
    const [name, setName] = useState("ข้าวผัดต้มยำ");
    const [price, setPrice] = useState(230);
    const [stock, setStock] = useState(20);
    const [detail, setDetail] = useState("");
    const [pic, setPic] = useState("");
    const [type, setType] = useState("");
    const [product, setproduct] = useState({});
    const [product_type, setProduct_type] = useState([]);
    const [addType, setisaddType] = useState(null);

    const [isRedirect, setisRedirect] = useState(false);


    const setD = () => {
        setName(product.product_name);
        setPrice(product.product_price);
        setStock(product.product_number);
        setDetail(product.product_description);
        setPic(product.product_picture);
        setType(product.type_product_id);
    }
    useEffect(() => {
        axios.get(`http://localhost:8080/api/product/${itemid}`)
            .then(pro => {
                if (JSON.stringify(product) != JSON.stringify(pro.data)) {
                    setproduct(pro.data);
                }
            })
    }, [product]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/type_product/all`)
            .then(res => {
                if (JSON.stringify(product_type) != JSON.stringify(res.data)) {
                    setProduct_type(res.data);
                }
            })
    }, [product_type]);

    useEffect(() => {
        setD()
    }, [product]);

    const successThisGoal = () => {

        const getData = () => (
            <SweetAlert
                success
                title="Success!"
                confirmBtnBsStyle="success"
                onConfirm={() => setisRedirect(true)}
            >
                บันทึกข้อมูลเรียบร้อย
            </SweetAlert>
        );
        const product = {
            product_name: name,
            product_description: detail,
            product_price: price,
            product_picture: pic,
            type_product_id: type,
            product_number: stock,

        };
        console.log(product)
        axios.put(`http://localhost:8080/api/product/${itemid}`, product)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            });
        setisaddType(getData());
    }
    const hide = () => {
        console.log('Hiding alert...');

        setisaddType(null);
    }

    const mystyle = {
        fontFamily: "Kanit",

    }

    if (isRedirect == true) {
      return <Redirect to='/Warehouse' />
    }

    return (
        <div style={mystyle}>

            {/* <nav class="navbar navbar-light bg-light navbar-expand nav-pills nav-justified flex-column flex-md-row bd-navbar"> */}
            <Topnav />

            <br></br>
            <form >
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-2  ">
                        </div>
                        <div class="col-lg " style={{ maxWidth: '80%' }}>
                            <br></br>
                            <div style={{ display: 'flex', width: '90%' }}>
                                <div>
                                    <button type="button" class="btn btn-info btn-block" >
                                        <i class="fas fa-camera"></i>  UPLOAD
                                </button>
                                    <br></br>
                                    <div style={{ display: '-webkit-box' }}>

                                        <div style={{ width: 500, height: 500 }}>
                                            <img
                                                style={{ display: 'block', width: 500 }}
                                                src="https://sv1.picz.in.th/images/2021/03/20/DOS0fk.jpg"
                                                alt="DOS0fk.jpg"
                                                border="0"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flex: '1 1 auto', width: '50%' }}>
                                    <div style={{ display: 'block', width: '100%', display: 'flex', flexDirection: 'column', padding: '1.25rem 2.1875rem 0 1.25rem' }}>
                                        <input
                                            placeholder="ชื่อสินค้า"
                                            style={{ fontWeight: 500, fontSize: '1.25rem', overflow: 'visible', overflowWrap: 'break-word' }}
                                            type="text"
                                            id="name"
                                            name="name"
                                            class='form-control'
                                            value={name}
                                            onChange={(name) => { setName(name.target.value) }}
                                            required
                                        />
                                        <br></br>
                                        <div style={{ display: 'block', background: "rgb(245 245 245)" }}>

                                            <input
                                                placeholder="0"
                                                style={{ display: 'block', background: "rgb(245 245 245)", padding: 3, fontSize: '1.875rem', margin: 5 }}
                                                type="number"
                                                id="price"
                                                name="price"
                                                class='form-control'
                                                value={price}
                                                onChange={(price) => { setPrice(price.target.value) }}
                                                required
                                            />
                                        </div>
                                        <br></br>
                                        <select class="custom-select  border border-primary"
                                            onChange={(id) => { setType(id.target.value); }}>
                                            {product_type.map((product_type) => {
                                                if (product_type.id == product.type_product_id) {
                                                    return <option value={product_type.id} selected>{product_type.type_name}</option>
                                                }
                                                else {
                                                    return <option value={product_type.id}>{product_type.type_name}</option>
                                                }

                                            })}
                                        </select>
                                        <br></br>
                                        <span class="product-stock">
                                            <i class="fas fa-check-circle"></i> <input
                                                type="number"
                                                min="1"
                                                max="999"
                                                step="1"
                                                placeholder="7"
                                                value={stock}
                                                onChange={(stock) => { setStock(stock.target.value) }}
                                                required
                                            ></input>
                                        </span>
                                        <br></br><br></br>
                                        <div style={{ display: 'block', border: 1, borderColor: 'rgb(245 245 245)', borderStyle: 'solid' }}>
                                            <h8 style={{ display: 'block', background: "rgb(245 245 245)", padding: 3, margin: 5 }} class="product-price">รายละเอียดสินค้า</h8>
                                            <textarea
                                                name="detail"
                                                value={detail}
                                                onChange={(detail) => { setDetail(detail.target.value) }}
                                                style={{ display: 'block', padding: 3, margin: 5, overflow: 'visible', overflowWrap: 'break-word', width: '100%', }}
                                                rows={15}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-success btn-block" onClick={() => successThisGoal()}>
                                <i class="far fa-save"></i>  SAVE
                                </button>
                            {addType}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}



export default EditItem;
