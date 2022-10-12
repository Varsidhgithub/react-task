import React from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "../src/images/logo.png";
import userpic from "../src/images/Userpic.png";
import table from "../src/images/talking.png";
import leave from "../src/images/t2.png";
import mobile from "../src/images/mobile.png";
import gpay from "../src/images/gpay.png";
import app from "../src/images/app(2).png";
import dish from "../src/images/dinner.png";
import delivery from "../src/images/delivery.png";
import { MdLocationPin } from "react-icons/md";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { RiArrowLeftCircleLine } from "react-icons/ri";

function App() {
  return (
    <div>
      <div className="entire">
        {/* navbar and mainpart */}
        <section className="main-section">
          <Navbar expand="lg" className="nav">
            <Container>
              <Navbar.Brand href="#" className="logo">
                <img src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link className="me-4">Menu One</Nav.Link>
                  <Nav.Link className="me-4">Menu Two</Nav.Link>
                  <Nav.Link className="me-4">Menu Three</Nav.Link>
                  <Nav.Link className="me-4">Menu Four</Nav.Link>
                </Nav>

                <Nav
                  className="ms-auto my-2 my-lg-0 link"
                  style={{ maxHeight: "100px" }}
                >
                  <Navbar.Brand href="#" className="w-100">
                    <img src={userpic} alt="logo" />
                  </Navbar.Brand>
                  <NavDropdown
                    className="nav-menu user"
                    title="User"
                    id="navbarScrollingDropdown"
                  >
                    <div className="scroll">
                      <NavDropdown.Item className="nav-menu">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item className="nav-menu">
                        Orders
                      </NavDropdown.Item>
                      <NavDropdown.Item className="nav-menu">
                        Logout
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="slider">
            <Container>
              <div>
                <Row>
                  <Col md={6} sm={12}>
                    <div className="main">
                      <div className="main-heading">
                        <h1 className="slidercon"> Discover Restaurant</h1>
                        <h1 className="slidercon mainline">& Delicious Food</h1>
                      </div>

                      <div class="input-group mb-3 p-2 bg-white w-75 searckresponsive">
                        <input
                          type="text"
                          className="form-control search"
                          placeholder="search restaurant"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="input-group-text submit"
                            id="basic-addon2"
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div>
                      <img
                        src={leave}
                        className="mt-0 w-100"
                        alt="leave"
                        // style={{
                        //   position: "absolute",
                        //   top: "0px",
                        //   right: "278px",
                        // }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="m-0 d-flex justify-content-between locationicon">
              <span className="location px-5 pt-2">
                <MdLocationPin className="location-icon" />
                Hydrabad
              </span>
              <span className="px-5 pt-1 arrow">
                <RiArrowLeftCircleLine className="arrowIcon" />
                <RiArrowRightCircleLine className="arrowIcon" />
              </span>
            </div>
          </div>
        </section>

        {/* services part */}
        <section>
          <Container>
            <Row className="services">
              <Col md={4}>
                <div className="our">
                  <h1 className="line">Our Service</h1>
                </div>
              </Col>
              <Col md={8}>
                <div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* services */}
        <section>
          <Container>
            <Row className="thirdcon">
              <Col md={6}>
                <div className="d-flex ">
                  <div>
                    <img src={table} className="table p-5" />
                  </div>
                  <div className="p-4 fooddesc1">
                    <h4>advanced table booking</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-1">
                  <div className="p-5 ps-0 fooddesc">
                    <h4>Food for Free</h4>
                    <h3 className="hour">24/7</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                  <div>
                    <img src={dish} className="table p-5" />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="table_2">
                  <div className="d-flex justify-content-center mt-3">
                    <img src={delivery} className="tables p-3" />
                  </div>
                  <div className="p-2 d-flex justify-content-center mt-2 ">
                    <div className="w-50 text-center deliverytext">
                      <h4>
                        free Home Delivery
                        <br />
                        at Your door steps
                      </h4>
                      <div className="afterline">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer section */}
        <section>
          <div className="footer pt-5">
            <Container>
              <Row>
                <Col lg={6} xl={6} className="footerdesc">
                  <Row>
                    <Col sm={6} md={12} xl={12}>
                      <div>
                        <h1 className="linedesc">
                          Download app for
                          <br /> Exciting Deals
                        </h1>
                      </div>
                    </Col>
                    <Col sm={6} md={12} xl={12}>
                      <div className="appdownload w-50 pt-4">
                        <p className="ms-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <div className="d-flex centerapp">
                      <Row>
                        <Col md={6}>
                          <img src={gpay} alt="gpay" />
                        </Col>
                        <Col md={6}>
                          <img src={app} alt="appstore" className="appstore" />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col lg={6} xl={6}>
                  <img src={mobile} alt="logo" className="mobile" />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
