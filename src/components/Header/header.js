import React, {useState} from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import { Link as Scroll } from "react-scroll"

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <header id="nav1" >
      <Navbar
        expanded={expanded}
        onClick={() => setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))}
        expand="lg"
        variant=""
        collapseOnSelect
        className="navbar navbar-expand-lg p-0 nav-menu "
        
      >
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> */}
        <Link className="navbar-brand p-0 mr-auto p-1" to="/">
          <Navbar.Brand>
            RODAC
        </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className="py-2">
          <span className='navButton '>MENU</span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ height: "60px" }}
          // onClick={() => setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))}
        >
          <Nav className="navbar-nav  mt-2 mt-lg-0 mr-xl-5 ml-md-auto">
            <Link activeClassName="active" to="/">
            <Nav.Link as='span' className="nav-item  ">
                Home
            </Nav.Link>
              <hr className="d-lg-none m-0 border-primary"/>
              </Link>
            <Nav.Link className="nav-item" as='span'>
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
<hr className="d-lg-none m-0 border-primary"/>
            <Nav.Link className="nav-item" as='span'>
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
            </Nav.Link >
            <hr className="d-lg-none m-0 border-primary" />
            <Link to="/gallery" activeClassName="active">
            <Nav.Link as='span' className="nav-item">
                GALLERY
            </Nav.Link>
<hr className="d-lg-none m-0 border-primary"/>
              </Link>
            <Nav.Link as='span' className="nav-item">
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
