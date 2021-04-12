import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from '../components/Navbar'
import Topnav from '../components/Topnav'

function EditItem(props) {
    const { itemid } = props.match.params
    const [name, setName] = useState("ข้าวผัดต้มยำ");
    const [price, setPrice] = useState(230);
    const [stock, setStock] = useState(20);
    const [detail, setDetail] = useState("");

    const nameChange = ({ name }) => {
        setName(name);
    }
    const priceChange = ({ price }) => {
        setPrice(price);
    }
    const stockChange = ({ stock }) => {
        setStock(stock);
    }
    const detailChange = ({ detail }) => {
        setDetail(detail);
    }


    const mystyle = {
        fontFamily: "Kanit",

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
                                        <input placeholder="ชื่อสินค้า" style={{ fontWeight: 500, fontSize: '1.25rem', overflow: 'visible', overflowWrap: 'break-word' }} type="text" id="name" name="name" class='form-control' value={name} onChange={(name) => { nameChange(name) }} required /><br></br>
                                        <div style={{ display: 'block', background: "rgb(245 245 245)" }}>

                                            <input placeholder="0" style={{ display: 'block', background: "rgb(245 245 245)", padding: 3, fontSize: '1.875rem', margin: 5 }} type="number" id="price" name="price" class='form-control' value={price} onChange={(price) => { priceChange(price) }} required />
                                        </div>
                                        <br></br>

                                        <br></br>
                                        <span class="product-stock">
                                            <i class="fas fa-check-circle"></i> <input
                                                type="number"
                                                min="1"
                                                max="999"
                                                step="1"
                                                placeholder="7"
                                                value={stock}
                                                onChange={(stock) => { stockChange(stock) }}
                                                required
                                            ></input>
                                        </span>
                                        <br></br><br></br>
                                        <div style={{ display: 'block', border: 1, borderColor: 'rgb(245 245 245)', borderStyle: 'solid' }}>
                                            <h8 style={{ display: 'block', background: "rgb(245 245 245)", padding: 3, margin: 5 }} class="product-price">รายละเอียดสินค้า</h8>
                                            <textarea
                                                name="detail"
                                                value={detail}
                                                onChange={(detail) => { detailChange(detail) }}
                                                style={{ display: 'block', padding: 3, margin: 5, overflow: 'visible', overflowWrap: 'break-word', width:'100%', }}
                                                rows={15} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}



export default EditItem;
