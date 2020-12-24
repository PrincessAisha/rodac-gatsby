import React from "react"
// import ReactMarkdownWithHtml from "react-markdown/with-html"

export default function Footer() {
  return (
    <footer
      className="py-6 pt-5 leadpara"
      style={{ background: "black" }}
      id="contact"
    >
      <div className="">
        <div className="row margin-round">
          <div className="col-md-4 col-sm-6">
            <h5 className="text-white">Careers</h5>
            <p className="about" style={{ textAlign: "justify" }}>
              Presently, we do not have any opportunities, but we do appreciate
              the opportunity to work with brilliant individuals in sync with
              our company's objectives and mission. Please send us your profile
              and contact details, and we will reach you as and when
              opportunities arise. Thank you.
            </p>
          </div>

          <div className="col-md-3 col-sm-6 ml-auto">
            <h5 className="text-white">Contact</h5>
            <ul className="list-unstyled mt-4">
              <li>
                <p className="blue">Telephone:</p>
                <p style={{ color: "white" }}>
                  +233 20 822 3938
                  <br />
                  +233 54 105 4343
                </p>
              </li>
              <li>
                <p className="blue">Email:</p>
                <p style={{ color: "white" }}>
                  Info@rodacengineering.com
                  <br />
                  Johnson@rodacengineering.com
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6">
            <h5 className="text-white">Address</h5>
            <ul className="list-unstyled mt-4 ">
              <li>
                <p className="blue">Location:</p>
                <p style={{ color: "white" }}>
                  Near Techiman Post Office Techiman, Bono Region Ghana
                </p>
              </li>
              <li>
                <p className="blue">Postal Address:</p>
                <p style={{ color: "white" }}>
                  Post Office Box 42 Sunyani, Bono East Region Ghana
                </p>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row mt-5">
          <div
            style={{ color: "white" }}
            className="col-12  text-center small-xl"
          >
            <p style={{ color: "white" }}>
              &copy; 2020 Rodac. All rights reserved.Website developed by 
              <a href="https://sterde.com">Sterde</a>.
            </p>
          </div>
        </div>
      </div>
      
      <span className="back-to-top">
        <i className="icofont-simple-up"></i>
      </span>
    </footer>
  )
}
