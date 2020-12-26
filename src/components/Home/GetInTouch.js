import React from "react"

const GetInTouch = () => {
  return (
    <section
      className="py-5 py-md-6 bg-hero inverse"
      style={{ backgroundImage: "url(img/r_9.jpg)" }}
    >
      <div className="">
        <div className="row margin-round btn-round" id="contact">
          <div className="col-md-6 my-md-auto text-center text-md-left pb-5 pb-md-0">
            <h2 className="display-4 text-white">Please get in touch</h2>
            <p
              className="leadpara text-light about"
              style={{ textAlign: "justify" }}
            >
              The engineers at Rodac will be glad to assist you in your desire
              to construct your facilities from the design phase to the
              landscaping phase. Working with us certainly reduces your chance
              of making errors in your construction works, which will save you
              time and money.
            </p>
          </div>
          <div className="col-md-5 ml-auto">
            <br />
            <br />
            <div style={{ boxShadow: "#222223c2" }} className="card">
              <div className="card-body p-4">
                <form className="signup-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Short description"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-block btn-round"
                      style={{ fontSize: "1.5rem", letterSpacing: "0.1rem" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
