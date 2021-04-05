import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-awesome-modal';
import Topnav from '../components/Topnav'


class Settingshop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    const mystyle = {
      fontFamily: "Kanit",
    };



    return (

      <div style={mystyle}>
        <Topnav />
        <br></br>

        <div class="container">
          <div class="row">
            <div class="col  ">
              <h4>ตั้งค่าร้านค้า</h4>

              <form class="was-validated">
                <table class="table table-borderless table-sm">
                  <tbody>
                    <div class="form-group">
                      <tr>
                        <th>ชื่อร้าน</th>
                        <th>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Shopee"
                            required
                          ></input>
                        </th>
                      </tr>
                      <tr>
                        <th>สาขา</th>
                        <th>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="9"
                            required
                          ></input>
                        </th>
                      </tr>
                      <tr>
                        <th>เบอร์โทรศัพท์ร้าน</th>
                        <th>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="123456789"
                            required
                          ></input>
                        </th>
                      </tr>
                      <tr>
                        <th>ภาษีมูลค่าเพิ่ม</th>
                        <th>
                          <input
                            type="number"
                            min="1"
                            max="50"
                            step="1"
                            placeholder="7"
                            required
                          ></input>
                          %
                        </th>
                      </tr>
                      <tr>
                        <th>ค่าบริการ</th>
                        <th>
                          <input
                            type="number"
                            min="1"
                            max="50"
                            step="1"
                            placeholder="10"
                            required
                          ></input>
                          %
                        </th>
                      </tr>
                      <tr>
                        <th></th>
                        <th>
                          {" "}
                          <button class="btn btn-primary btn-block" type="submit">
                            ยืนยัน
                          </button>
                        </th>
                      </tr>
                    </div>
                  </tbody>
                </table>
              </form>
            </div>

            <div class="col">
              <h4>พนักงาน</h4>

              <br></br>

              <a class="btn btn-outline-primary btn-block" href="#" onClick={() => this.openModal()}>
                <i class="fas fa-user-plus"></i></a>

              <section>

                <Modal visible={this.state.visible} width="500" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                  <a href="javascript:void(0);" onClick={() => this.closeModal()} style={{ padding: "2%" }}><i class="fas fa-times" ></i></a>
                  <div style={{ padding: "5%", alignItems: "center" }}>
                    <h4>เพิ่มผู้ใช้</h4>
                    <hr></hr><br></br>

                    <form>
                      <table class="table table-borderless table-sm">
                        <div class="form-group">


                          <tr>
                            <th>ผู้ใช้งาน</th>
                            <th>
                              <select class="custom-select ">
                                <option selected>ผู้ใช้</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </th>
                          </tr>


                          <tr>
                            <th>ตำแหน่ง</th>
                            <th>
                              <select class="custom-select">
                                <option selected>ตำแหน่ง</option>
                                <option value="1">ผู้จัดการ</option>
                                <option value="2">แคร์เซียร์</option>
                                <option value="3">ผู้จัดการสินค้า</option>
                              </select>
                            </th>
                          </tr>



                          <tr>
                            <th>ชื่อผู้ใช้</th>
                            <th> <input
                              type="text"
                              class="form-control"
                              placeholder="user"
                              required
                            ></input></th>

                          </tr>

                          <tr>
                            <th>รหัสผ่าน</th>
                            <th> <input
                              type="password"
                              class="form-control"
                              placeholder="ต้องมีอย่างน้อย 8 ตัว"
                              required
                            ></input></th>

                          </tr>



                          <br></br>
                          <button class="btn btn-info btn-block" type="submit">
                            ยืนยัน
                          </button>
                          <br></br><br></br>
                        </div>
                      </table>
                    </form>



                  </div>
                </Modal>
              </section>


              <br></br>
              <table class="table table-bordered">
                <tr>
                  <th>#</th>
                  <th>รายชื่อ</th>
                  <th>ตำแหน่ง</th>
                  <th>แก้ไข</th>
                  <th>ลบ</th>
                </tr>

                <tr>
                  <td>1</td>
                  <td>Adimin</td>
                  <td>ผู้จัดการ</td>
                  <td>
                    {" "}
                    <a class="btn btn-outline-warning btn-block" href="#">
                      <i class="fas fa-sliders-h"></i>


                    </a>
                  </td>
                  <td>
                    {" "}
                    <a class="btn btn-outline-danger btn-block" href="#">
                      <i class="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>อลิซ</td>
                  <td>แคชเชียร์</td>
                  <td>
                    {" "}
                    <a class="btn btn-outline-warning btn-block" href="#">
                      <i class="fas fa-sliders-h"></i>


                    </a>
                  </td>
                  <td>
                    {" "}
                    <a class="btn btn-outline-danger btn-block" href="#">
                      <i class="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settingshop;