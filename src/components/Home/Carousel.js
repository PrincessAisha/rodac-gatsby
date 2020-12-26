import React from "react"
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
              <a
                href="#signup"
                className="btn btn-large btn-primary btn-round"
                data-aos="fade-up"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
