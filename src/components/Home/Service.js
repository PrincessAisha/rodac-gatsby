import React from "react"

const Service = () => {
  return (
    <section className="py-7 secserv" id="services">
      <div className="col-12  small-xl  text-center mb-3 ">
        <h2 className="n-section-title pt-3">Our Services</h2>
      </div>
      <div className="margin-round">
        <h3 className="text-center mb-4" id="s1">
          Design and Architecture Services
        </h3>

        <div className="row bg-light">
          <div className="col-md-6 my-auto">
            <img
              src="img/r_4.jpg"
              className="img-fluid img-services d-block mx-auto "
              alt="Feature 1"
            />
          </div>

          <div className="col-md-6 my-auto text-center text-md-left pt-5 pt-md-0">
            <p className="leadpara p-2" style={{ textAlign: "justify" }}>
              Rodac Engineering architectural team has experience spanning both
              domestic and industrial facilities. With our unique portfolio of
              engineering expertise, we work with our clients to provide diverse
              designs that are balanced in terms of the use of space, impact
              positively on the quality of life of its users, economically
              rewarding to owners, and durable. Also, we provide bills of
              quantities, structural engineering, detailed drawing, and
              certification of drawing by an architect in good standing.
            </p>
          </div>
        </div>

        <h3 className="text-center mb-4 mt-4" id="s2">
          Construction and Project Management Services
        </h3>

        <div className="row bg-light">
          <div className="col-md-6 my-auto text-center text-md-left pt-5 pt-md-0">
            <p className="leadpara p-2" style={{ textAlign: "justify" }}>
              {" "}
              Our construction services allow us to work under the supervision
              of our clients or as subcontractors. On the other hand, our
              project management services enable us to take full control of a
              project and work to deliver on all the agreed-on scopes of works.
              Our experience cover:
            </p>
            <ul className="features-list leadpara">
              <li>Building works</li>
              <li>Warehousing</li>
              <li>Drainage works</li>
            </ul>
            <p className="leadpara mt-4">
              <a
                href="#signup"
                className="btn btn-primary btn-round btn-primary d-inline-flex flex-row align-items-center"
              >
                CONTACT US
              </a>
            </p>
          </div>
          <div className="col-md-6 my-auto">
            <img
              src="img/r_7.png"
              className="img-fluid img-services d-block mx-auto"
              alt="Feature 2"
            />
          </div>
        </div>

        <h3 className="text-center mb-4 mt-4" id="s3">
          Construction materials and consumables
        </h3>

        <div className="row bg-light">
          <div className="col-md-6 my-auto">
            <img
              src="img/r_6.jpg"
              className="img-fluid img-services d-block mx-auto "
              alt="Feature 3"
            />
          </div>
          <div className="col-md-6 my-auto text-center text-md-left pt-5 pt-md-0 animated  slideInUp delay-2s">
            <p className="leadpara p-2 " style={{ textAlign: "justify" }}>
              Our clients invest in facilities that are capital intensive, hence
              facilities that can stand the test of time should be guaranteed.
              These facilities include homes, offices, warehouses, factories,
              schools, and other social amenities. The quality of construction
              materials and consumables are a great determiner of the useful
              life span of a facility. Rodac engineering works to produce and
              also source quality third party’s construction materials and
              consumables such as sandcrete blocks, pavement block, sand and
              stone, electric cables and accessories, plumbing, and other
              materials.
            </p>
            <p className="leadpara mt-3">
              <a
                href="#signup"
                className="btn btn-primary btn-primary d-inline-flex flex-row align-items-center btn-round"
              >
                CONTACT US{" "}
              </a>
            </p>
          </div>
        </div>

        <h3 className="text-center mb-3 mt-3" id="s4">
          Rodac plant pool services
        </h3>

        <div className="row bg-light">
          <div className="col-md-6 my-auto">
            <img
              src="img/r_8.jpg"
              className="img-fluid img-services d-block mx-auto"
              alt="Feature 2"
            />
          </div>
          <div className="col-md-6 my-auto text-center text-md-left pt-5 pt-md-0">
            <p className="leadpara" style={{ textAlign: "justify" }}>
              Rodac Engineering Limited has progressively acquired a series of
              construction equipment that it uses for its jobs. It also
              harnesses the spare capacity of the company's machines by renting
              them. Some of the available machines include:
            </p>
            <ul className="leadpara">
              <li>Tipper trucks</li>
              <li>Excavators</li>
              <li>Backhoes</li>
              <li>Concrete mixers</li>
              <li>Pickup trucks</li>
            </ul>
            <p className="leadpara mt-5">
              <a
                href="#signup"
                className="btn btn-primary btn-primary d-inline-flex flex-row align-items-center btn-round"
              >
                CONTACT US
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
