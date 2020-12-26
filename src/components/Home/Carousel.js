import React from "react"
import { Link } from "react-scroll"
// import images from "../../content/homePageCarousel.json"

export default function Carousels({ images }) {
  // const { image1 } = images
  return (
    <section id="intro">
      <div style={{ height: "65vh" }}>
        <img
          className="d-block w-100"
          src={images}
          alt="First slide"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="overlay"></div>

        <div className="container textContainer">
          <div className="homeText">
            <div className="maxWidth">
              <h1 className="rodacSize text-white">
                Rodac Engineering Limited
              </h1>
              <p className="lead text-light m-top m-bottom">
                Results-oriented design, architecture, and construction at your
                service
              </p>
              {/* <Link
                to="/#contact"
                className="btn btn-large btn-primary btn-round"
              >
                CONTACT US
              </Link> */}
              <Link
                activeClass="active"
                className="btn btn-primary btn-round btn-primary d-inline-flex flex-row align-items-center"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                {" "}
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
