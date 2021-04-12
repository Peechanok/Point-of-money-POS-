import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "../components/Topnav";
import "../App.css";
import { Line, Bar } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "../variables/charts.js";

import PanelHeader from "../components/PanelHeader/PanelHeader.js";

class Dashboard extends React.Component {
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
            <h1 style={{ color: "#228B22" }}>รายงานการขาย</h1>
            <h3 style={{ color: "#90EE90" }}>( Sales report )</h3>
            <br></br>
            <PanelHeader
              size="lg"
              content={
                <Line
                  data={dashboardPanelChart.data}
                  options={dashboardPanelChart.options}
                />
              }
            />
            <div className="content">
              <Row>
                <Col xs={12} md={4}>
                  <Card className="card-chart">
                    <CardHeader>
                      <h5 className="card-category">รายวัน</h5>
                      <CardTitle tag="h4">Daily</CardTitle>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-round btn-outline-default btn-icon"
                          color="default"
                        >
                          <i className="now-ui-icons loader_gear" />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem className="text-danger">
                            Remove data
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-area">
                        <Line
                          data={dashboardAllProductsChart.data}
                          options={dashboardAllProductsChart.options}
                        />
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="stats">
                        <i className="now-ui-icons arrows-1_refresh-69" /> ยอดขายวันนี้ : 1880 $
                      </div>
                    </CardFooter>
                  </Card>
                </Col>

                <Col xs={12} md={4}>
                  <Card className="card-chart">
                    <CardHeader>
                      <h5 className="card-category">รายเดือน</h5>
                      <CardTitle tag="h4">Monthly</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-area">
                        <Bar
                          data={dashboard24HoursPerformanceChart.data}
                          options={dashboard24HoursPerformanceChart.options}
                        />
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="stats">
                        <i className="now-ui-icons ui-2_time-alarm" /> ยอดขายเดือนนี้ : 1880 $
                      </div>
                    </CardFooter>
                  </Card>
                </Col>

                <Col xs={12} md={4}>
                  <Card className="card-chart">
                    <CardHeader>
                      <h5 className="card-category">รายปี</h5>
                      <CardTitle tag="h4">Yearly</CardTitle>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-round btn-outline-default btn-icon"
                          color="default"
                        >
                          <i className="now-ui-icons loader_gear" />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem className="text-danger">
                            Remove data
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-area">
                        <Line
                          data={dashboardShippedProductsChart.data}
                          options={dashboardShippedProductsChart.options}
                        />
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="stats">
                        <i className="now-ui-icons arrows-1_refresh-69" /> ยอดขายปีนี้ : 1880 $
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <br></br>
              <Col xs={12} md={6} lg={12}>
                <Card>
                  <CardHeader>
                    <h5 className="card-category">ยอดขายตามพนักงาน</h5>
                    <CardTitle tag="h4">Employees Stats</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>ชื่อ</th>
                          <th>ตำแหน่ง</th>

                          <th className="text-right">Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ชาย</td>
                          <td>ผู้จัดการ</td>

                          <td className="text-right">$36,738</td>
                        </tr>
                        <tr>
                          <td>หญิง</td>
                          <td>พนักงานเติมสินค้า</td>

                          <td className="text-right">$23,789</td>
                        </tr>
                        
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <br></br> <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
