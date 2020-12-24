import React from "react"
import { Link } from "gatsby"
import { FaChartBar, FaRocket, FaBriefcase } from "react-icons/fa"
import { IconContext } from "react-icons"
import { mission, objective, approach } from "../../content/homeAboutData.json"
const AboutUs = () => {
  return (
    <section id="about">
      <div className="ml-3 mr-3 mb-5">
        <br />
        <div data-aos="fade-up">
          <h2 className="n-section-title mb-4 text-center">About Us</h2>
        </div>
        <div className="pt-5 pb-4 margin-round c-shadow">
          <div className="about-us-main card-deck p-3">
            <div className=" col-md-4 col-sm-12">
              <div className="icon-box text-center mb-4 pt-1">
                <IconContext.Provider value={{ color: "blue", size: "3rem" }}>
                  <FaBriefcase />
                </IconContext.Provider>
              </div>
              <div className="card-title">
                <h5 className="card-head text-center">Our Objective</h5>
              </div>
              <div className=" card-body text-justify col-sm-12">
                <p className="card-text d-flex" style={{ width: "100%" }}>
                  {objective}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="icon-box text-center mb-4 pt-1">
                <IconContext.Provider value={{ color: "blue", size: "3rem" }}>
                  <FaRocket />
                </IconContext.Provider>
              </div>
              <div className="card-title">
                <h5 className="card-head text-center">Our Mission</h5>
              </div>
              <div className=" card-body text-justify col-sm-12">
                <p className="card-text">{mission}</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="icon-box text-center mb-4 pt-1">
                <IconContext.Provider value={{ color: "blue", size: "3rem" }}>
                  <FaChartBar />
                </IconContext.Provider>
              </div>
              <div className="card-title">
                <h5 className="card-head text-center">Our Approach</h5>
              </div>
              <div className=" card-body text-justify col-sm-12">
                <p className="card-text">{approach}</p>
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <button
              className="btn btn-primary btn-lg btn-round"
              data-toggle="collapse"
            >
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "white",
                  letterSpacing: "0.3rem",
                }}
              >
                READ MORE ...
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
