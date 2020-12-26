import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import { Link as Scroll } from "react-scroll"

export default function Header() {
  return (
    <header id="nav1" style={{ height: "30px" }}>
      <Navbar
        expand="lg"
        variant=""
        collapseOnSelect
        className="navbar navbar-expand-lg p-0 nav-menu shadow"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> */}
        <Navbar.Collapse id="responsive-navbar-nav" style={{ height: "60px" }}>
          <Navbar.Brand>
            <div>
              <Link className="navbar-brand p-0 mr-auto p-1" to="/">
                RODAC
              </Link>
            </div>
          </Navbar.Brand>
          <Nav className="navbar-nav  mt-2 mt-lg-0 mr-xl-5 ml-md-auto">
            <Nav.Link className="nav-item ">
              <Link activeClassName="active" to="/">
                Home
              </Link>
              {/* <Scroll
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                HOME
              </Scroll> */}
            </Nav.Link>
            <Nav.Link className="nav-item">
              {/* <Link to="/#about" activeClassName="active">
                ABOUT US
              </Link> */}
              <Scroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                ABOUT US
              </Scroll>
            </Nav.Link>
            <Nav.Link className="nav-item">
              {/* <Link to="/#services" activeClassName="active">
                SERVICES
              </Link> */}
              <Scroll
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                {" "}
                SERVICE
              </Scroll>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <Link to="/gallery" activeClassName="active">
                GALLERY
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-item">
              {/* <Link to="/#contact" activeClassName="active">
                CONTACT
              </Link> */}
              <Scroll
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                {" "}
                CONTACT
              </Scroll>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </div> */}
      </Navbar>
    </header>
  )
}
