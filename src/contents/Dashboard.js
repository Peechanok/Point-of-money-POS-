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

import axios from 'axios';

import PanelHeader from "../components/PanelHeader/PanelHeader.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    var today = new Date()
    this.state = {
      sales: [],
      currentDateTime: Date().toLocaleString(),
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
      salesDay: [],
      salesMonth: [],
      salesYear: [],
      sDay: 0,
      sMonth: 0,
      sYear: 0,
      test: [{
        id: 1,
        username: "",
        password: "",
        email: "",
        fullname: "ชาย",
        role: "ผู้จัดการ",
        picture: "",
      }, {
        id: 2,
        username: "",
        password: "",
        email: "",
        fullname: "หญิง",
        role: "พนักงานเติมสินค้า",
        picture: "",
      },]
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/sales/all`)
      .then(res => {
        this.setState({ sales: res.data });
        let time = 0
        let day = 0
        let month = 0
        let timestate = 1
        let daystate = 1
        let monthstate = 1
        res.data.map((sale, index) => {
          const { id, sales, user_id, createdAt, updatedAt } = sale
          let created = new Date(createdAt)
          ////////////////// DAY  //////////////////////
          if (created.getFullYear() == this.state.year && created.getMonth() + 1 == this.state.month && created.getDate() == this.state.day) {
            const cal = (num) => {
              if (timestate != num) {
                for (timestate; timestate < num; timestate++) {
                  this.setState({ salesDay: [...this.state.salesDay, time], sDay: this.state.sDay + time })
                  time = 0
                }
                time += sales
              } else {
                time += sales
              }
            }
            if (created.getHours() > 0 && created.getHours() <= 3) {
              cal(1)
            }
            else if (created.getHours() > 3 && created.getHours() <= 6) {
              cal(2)
            }
            else if (created.getHours() > 6 && created.getHours() <= 9) {
              cal(3)
            }
            else if (created.getHours() > 9 && created.getHours() <= 12) {
              cal(4)
            }
            else if (created.getHours() > 12 && created.getHours() <= 15) {
              cal(5)
            }
            else if (created.getHours() > 15 && created.getHours() <= 18) {
              cal(6)
            }
            else if (created.getHours() > 18 && created.getHours() <= 21) {
              cal(7)
            }
            else if ((created.getHours() > 21 && created.getHours() <= 24) || created.getHours() == 0) {
              cal(8)
            }
            else {
              this.setState({ salesDay: [...this.state.salesDay, time], sDay: this.state.sDay + time })
              time = 0
            }
          }
          ////////////////// YEAR  //////////////////////
          if (created.getFullYear() == this.state.year) {
            const cal = (num) => {
              if (monthstate != num) {
                for (monthstate; monthstate < num; monthstate++) {
                  this.setState({ salesMonth: [...this.state.salesMonth, day], sMonth: this.state.sMonth + day })
                  day = 0
                }
                day += sales
              } else {
                day += sales
              }
            }
            if (created.getMonth() + 1 == 1) {
              cal(1)
            }
            else if (created.getMonth() + 1 == 2) {
              cal(2)
            }
            else if (created.getMonth() + 1 == 3) {
              cal(3)
            }
            else if (created.getMonth() + 1 == 4) {
              cal(4)
            }
            else if (created.getMonth() + 1 == 5) {
              cal(5)
            }
            else if (created.getMonth() + 1 == 6) {
              cal(6)
            }
            else if (created.getMonth() + 1 == 7) {
              cal(7)
            }
            else if (created.getMonth() + 1 == 8) {
              cal(8)
            }
            else if (created.getMonth() + 1 == 9) {
              cal(9)
            }
            else if (created.getMonth() + 1 == 10) {
              cal(10)
            }
            else if (created.getMonth() + 1 == 11) {
              cal(11)
            }
            else if (created.getMonth() + 1 == 12) {
              cal(12)
            }
            else {
              this.setState({ salesMonth: [...this.state.salesMonth, time], sMonth: this.state.sMonth + day })
              time = 0
            }
          }
          ////////////////// MONTH  //////////////////////
          if (created.getFullYear() == this.state.year && created.getMonth() + 1 == this.state.month) {
            const cal = (num) => {
              if (daystate != num) {
                for (daystate; daystate < num; daystate++) {
                  this.setState({ salesYear: [...this.state.salesYear, month], sYear: this.state.sYear + month })
                  month = 0
                }
                month += sales
              } else {
                month += sales
              }
            }
            if (created.getDate() == 1) {
              cal(1)
            }
            else if (created.getDate() == 2) {
              cal(2)
            }
            else if (created.getDate() == 3) {
              cal(3)
            }
            else if (created.getDate() == 4) {
              cal(4)
            }
            else if (created.getDate() == 5) {
              cal(5)
            }
            else if (created.getDate() == 6) {
              cal(6)
            }
            else if (created.getDate() == 7) {
              cal(7)
            }
            else if (created.getDate() == 8) {
              cal(8)
            }
            else if (created.getDate() == 9) {
              cal(9)
            }
            else if (created.getDate() == 10) {
              cal(10)
            }
            else if (created.getDate() == 11) {
              cal(11)
            }
            else if (created.getDate() == 12) {
              cal(12)
            }
            else if (created.getDate() == 13) {
              cal(13)
            }
            else if (created.getDate() == 14) {
              cal(14)
            }
            else if (created.getDate() == 15) {
              cal(15)
            }
            else if (created.getDate() == 16) {
              cal(16)
            }
            else if (created.getDate() == 17) {
              cal(17)
            }
            else if (created.getDate() == 18) {
              cal(18)
            }
            else if (created.getDate() == 19) {
              cal(19)
            }
            else if (created.getDate() == 20) {
              cal(20)
            }
            else if (created.getDate() == 21) {
              cal(21)
            }
            else if (created.getDate() == 22) {
              cal(22)
            }
            else if (created.getDate() == 23) {
              cal(23)
            }
            else if (created.getDate() == 24) {
              cal(24)
            }
            else if (created.getDate() == 25) {
              cal(25)
            }
            else if (created.getDate() == 26) {
              cal(26)
            }
            else if (created.getDate() == 27) {
              cal(27)
            }
            else if (created.getDate() == 28) {
              cal(28)
            }
            else if (created.getDate() == 29) {
              cal(29)
            }
            else if (created.getDate() == 30) {
              cal(30)
            }
            else if (created.getDate() == 31) {
              cal(31)
            }
            else {
              this.setState({ salesMonth: [...this.state.salesMonth, time] })
              time = 0
            }
          }
          return 0
        })
        this.setState({ salesDay: [...this.state.salesDay, time], sDay: this.state.sDay + time })
        this.setState({ salesMonth: [...this.state.salesMonth, day], sMonth: this.state.sMonth + day })
        this.setState({ salesYear: [...this.state.salesYear, month], sYear: this.state.sYear + month })
      })

  }

  hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
  chartColor = "#6A5ACD";
  gradientChartOptionsConfigurationWithNumbersAndGrid = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 7,
          },
        },
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false,
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 },
    },
  };
  dashboardAllProductsChart = {
    data: (canvas) => {
      var ctx = canvas.getContext("2d");
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#18ce0f");
      gradientStroke.addColorStop(1, this.chartColor);
      var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, this.hexToRGB("#18ce0f", 0.4));
      return {
        labels: ["3am", "6am", "9am", "12pm,", "3pm", "6pm", "9pm", "12am"],
        datasets: [
          {
            label: "ยอดขาย",
            borderColor: "#18ce0f",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#18ce0f",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: this.state.salesDay,
          },
        ],
      };
    },
    options: this.gradientChartOptionsConfigurationWithNumbersAndGrid,
  };
  dashboard24HoursPerformanceChart = {
    data: (canvas) => {
      var ctx = canvas.getContext("2d");
      var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, this.hexToRGB("#2CA8FF", 0.6));
      let daydata = []
      if (this.state.month == 1 || this.state.month == 3 || this.state.month == 5 || this.state.month == 7 || this.state.month == 8 || this.state.month == 10 || this.state.month == 12) {
        daydata = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
      } else if (this.state.month == 2) {
        daydata = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
      } else {
        daydata = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
      }
      return {
        labels: daydata,
        datasets: [
          {
            label: "ยอดขาย",
            backgroundColor: gradientFill,
            borderColor: "#2CA8FF",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#2CA8FF",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 1,
            data: this.state.salesYear,
          },
        ],
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 7,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
      layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 },
      },
    },
  };
  dashboardShippedProductsChart = {
    data: (canvas) => {
      var ctx = canvas.getContext("2d");
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#80b6f4");
      gradientStroke.addColorStop(1, this.chartColor);
      var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",

        ],
        datasets: [
          {
            label: "ยอดขาย",
            borderColor: "#f96332",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#f96332",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: this.state.salesMonth,
          },
        ],
      };
    },
    options: this.gradientChartOptionsConfiguration,
  };

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
                          data={this.dashboardAllProductsChart.data}
                          options={dashboardAllProductsChart.options}
                        />
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="stats">
                        <i className="now-ui-icons arrows-1_refresh-69" /> ยอดขายวันนี้ : {this.state.sDay.toFixed(2)} $
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
                          data={this.dashboard24HoursPerformanceChart.data}
                          options={dashboard24HoursPerformanceChart.options}
                        />
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="stats">
                        <i className="now-ui-icons ui-2_time-alarm" /> ยอดขายเดือนนี้ : {this.state.sMonth.toFixed(2)} $
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
                          data={this.dashboardShippedProductsChart.data}
                          options={dashboardShippedProductsChart.options}
                        />
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="stats">
                        <i className="now-ui-icons arrows-1_refresh-69" /> ยอดขายปีนี้ : {this.state.sYear.toFixed(2)}$
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <br></br>
              {/* <Col xs={12} md={6} lg={12}>
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
                        {this.state.test.map((user, index) => {
                          const { id, username, password, email, fullname, role, picture } = user
                          let salee = 0;
                          this.state.sales.map((sale, index) => {
                            const { sid, sales, user_id, createdAt, updatedAt } = sale
                            console.log(id, user_id, id == user_id, sales)
                            if (id == user_id) {
                              salee += sales
                            }
                            return 0
                          })

                          return (
                            <tr>
                              <td>{fullname}</td>
                              <td>{role}</td>

                              <td className="text-right">${salee}</td>
                            </tr>
                          )
                        })
                        }
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col> */}
              <br></br> <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
