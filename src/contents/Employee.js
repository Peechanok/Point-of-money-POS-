import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-awesome-modal";
import Topnav from "../components/Topnav";
import "../App.css";
import SweetAlert from 'react-bootstrap-sweetalert';
import childe from "../assets/childe.jpg";
import { Link } from "react-router-dom";


class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      status: false,
      alert: null,
    };
  }

  openAddEmpolyee() {
    this.setState({
      visible: true,
    });
  }

  closeAddEmpolyee() {
    this.setState({
      visible: false,
    });
  }

  openDesEmpolyee() {
    this.setState({
      status: true,
    });
  }

  closeDesEmpolyee() {
    this.setState({
      status: false,
    });
  }

  deleteThisGoal() {
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        showCloseButton
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={() => this.hideAlert()}
        onCancel={() => this.hideAlert()}
        cancelBtnBsStyle="light"
      >
        ถ้าลบแล้วข้อมูลจะไม่สามารถกู้คืนได้
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  checkRole() {
    //if (JSON.parse(localStorage.getItem('token'))[0].role == "ผู้จัดการ") {
    if (1) {
      return <Link
        style={{
          borderRadius: "50%",
          width: "50px",
          height: "50px",
        }}
        class="btn buttom "
        onClick={() => this.openAddEmpolyee()}
      >
        <i class="fas fa-user-plus"></i>
      </Link>
    }
    return <br></br>
  }

  hideAlert() {
    console.log('Hiding alert...');
    this.setState({
      alert: null
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
          <div class="col">
            <h1 style={{ color: "#228B22" }}>พนักงาน</h1>
            <h3 style={{ color: "#90EE90" }}>( Employee )</h3>

            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "right",
              }}
            >
              {this.checkRole()}
            </div>

            <section>
              <Modal
                visible={this.state.visible}
                width="500"
                height="450"
                effect="fadeInUp"
                onClickAway={() => this.closeAddEmpolyee()}
              >
                <a
                  href="javascript:void(0);"
                  onClick={() => this.closeAddEmpolyee()}
                  style={{ padding: "2%" }}
                >
                  <i class="fas fa-times"></i>
                </a>
                <div
                  style={{
                    padding: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <h4>
                    <b>เพิ่มผู้ใช้</b>
                  </h4>
                  <h7>( Add users )</h7>
                  <hr></hr>
                  <br></br>

                  <form>
                    <table class="table table-borderless table-sm">
                      <div class="form-group">
                        <tr>
                          <th>ผู้ใช้งาน</th>
                          <th>
                            <select class="custom-select">
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
                          <th>
                            {" "}
                            <input
                              type="text"
                              class="form-control"
                              placeholder="user"
                              required
                            ></input>
                          </th>
                        </tr>

                        <tr>
                          <th>รหัสผ่าน</th>
                          <th>
                            {" "}
                            <input
                              type="password"
                              class="form-control"
                              placeholder="ต้องมีอย่างน้อย 8 ตัว"
                              required
                            ></input>
                          </th>
                        </tr>

                        <br></br>
                        <a class="btn buttom btn-block" type="submit">
                          ยืนยัน
                        </a>
                        <br></br>
                        <br></br>
                      </div>
                    </table>
                  </form>
                </div>
              </Modal>
            </section>

            <br></br>

            <table
              class="table table-bordered"
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {" "}
              <thead>
                <tr>
                  <th>#</th>
                  <th style={{ width: '50%' }}>รายชื่อ</th>
                  <th>ตำแหน่ง</th>
                  <th>รายละเอียด</th>
                  <th>ลบข้อมูล</th>
                </tr>
              </thead>
              <tbody>


                <tr>
                  <th>1</th>
                  <td>Tartaglia </td>
                  <td>ผู้จัดการ</td>
                  <td>
                    {" "}
                    <Link
                      class="btn btn-outline-primary btn-block"
                      onClick={() => this.openDesEmpolyee()}
                    >
                      <i class="fas fa-file-alt"></i>
                    </Link>
                  </td>

                  <td>
                    {" "}
                    <Link
                      class="btn btn-outline-danger btn-block"
                      onClick={() => this.deleteThisGoal()}
                    >
                      <i class="fas fa-trash-alt"></i>
                    </Link>
                    {this.state.alert}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* SHOW INFORMATION OF EMPLOYEE */}

            <section>
              <Modal
                visible={this.state.status}
                width="500"
                height="400"
                effect="fadeInUp"
                onClickAway={() => this.closeDesEmpolyee()}
              >
                <Link
                  href="javascript:void(0);"
                  onClick={() => this.closeDesEmpolyee()}
                  style={{ padding: "2%" }}
                >
                  <i class="fas fa-times"></i>
                </Link>
                <div
                  style={{
                    padding: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <h4>รายละเอียดพนักงาน</h4>
                  <h7>( Employee profile )</h7>
                  <hr></hr>
                  <div class="container">
                    <div class="row">
                      <div class="col-5">
                        <img src={childe} alt="" width="150" height="auto" />
                      </div>
                      <div class="col-7">
                        <p>
                          <b>ชื่อ :</b> Tartaglia <t></t>Childe
                        </p>
                        <p>
                          <b>ตำแหน่ง :</b> (11th of the Eleven Fatui Harbingers)
                        </p>

                        <p>
                          <b>username :</b> Tartaglia
                        </p>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                </div>
              </Modal>
            </section>

            {/* END SHOW  */}
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
