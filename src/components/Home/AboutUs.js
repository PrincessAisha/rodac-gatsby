import React from "react"
import { Link } from "gatsby"
import { FaChartBar, FaRocket, FaBriefcase } from "react-icons/fa"
import { IconContext } from "react-icons"
import { mission, objective, approach } from "../../content/homeAboutData.json"
const AboutUs = ({ showReadMoreButton = true, showAboutText=false }) => {
  //whether to show a read more button below the about section, enable on homepage, disable on about page
  let aboutBtn = (showReadMoreButton) ? (
    <Link
      to="/about"
      style={{
        textDecoration: "none",
        color: "white",
        // letterSpacing: "0.3rem",
      }}
    >
    <button
      className="btn btn-primary btn-round"
      data-toggle="collapse"
    >
      
        READ MORE ...
         </button>
              </Link>
    ) : '';
  
  let readMoreText = (showAboutText)?(
    <div>
          <hr class='separator' />
          <div className="p-4">

            <div className="pt-2">
            Rodac Engineering Limited (Rodac) believes in providing our clients with design architectures that offer a sense of balance, improve quality of life, economically rewarding, and stand the test of time. We are more committed to bringing your design to life with the best materials, tools, techniques, and craft.
            </div>


            <div className="pt-4">
              Our business philosophy is embedded in our name "Rodac," which stands for result-oriented design, architecture, and construction. We work with clients to provide a comprehensive solution for all their construction needs. We offer quality building design and architectural services, construction and project management services, the supply of building materials, and consumables as well as a plant pool service for construction equipment.
            </div>


            <div className="pt-4">
              From our extensive industry experience in the construction sector, we apply our expert judgment, workmanship, and an array of tools to deliver excellent results for our clients. We equally recognize that our clients have budget constraints. For this reason, we work with them at the design stage to come up with concepts that can be implemented without cost overruns. To ensure quality results, Rodac work with the best quality construction materials which are directly supplied by us or acquired from third parties we trust. Over the years, Rodac has heavily invested in the procuring of quality construction equipment, which are also available for other contractors on hiring bases if not in use.
              </div>


            <div className="pt-4">
              The benefits of the service we offer our clients include excellent architecture designs that take the budget and use into consideration. Rodac ensures quality construction that provides long-lasting facilities that are fit for purpose for many years. Our project management services offer clients with little or no experience in the construction assured delivery. Other small contractors are allowed to tap into the spare capacity of our plant pool to do their works.
              </div>


            <div className="pt-4">
              The engineers at Rodac will be glad to assist you in your desire to construct your facilities from the design phase to the landscaping phase. Working with us certainly reduces your chance of making errors in your construction works, which will save you time and money.
              </div>

      </div>
    </div>
        
  ): '';

  
  return (
    <section id="about">
      <div className="mx-sm-3 mb-5">
        <br />
        <div data-aos="fade-up">
          <h2 className="n-section-title mb-4 text-center">About Us</h2>
        </div>
        <div className="pt-5 pb-4 margin-round shadow-lg">
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
            {aboutBtn}
            
          </div>
          {/* Long about text */}
          {readMoreText}
        </div>
		</div>
    </section>
  )
}

export default AboutUs
