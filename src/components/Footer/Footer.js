import React from "react"
import { Link } from "gatsby"
import data from "../../content/contactData.json"
// import ReactMarkdownWithHtml from "react-markdown/with-html"

export default function Footer() {
  return (
    // <footer id="footer" style={{ borderTop: "2px solid white" }}>
    //   <div className="footer-top">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-3 col-md-6 footer-links">
    //           <h4>Links</h4>
    //           <ul>
    //             <li>
    //               <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //               <Link to="/#order">Order</Link>
    //             </li>
    //             <li>
    //               <Link to="/company">Company</Link>
    //             </li>
    //             <li>
    //               <Link to="/contact">Contact Us</Link>
    //             </li>
    //             <li>
    //               <Link to="/privacy">Privacy policy</Link>
    //             </li>
    //           </ul>
    //         </div>

    //         <div className="col-lg-3 col-md-6 footer-contact">
    //           <h4>Contact Us</h4>
    //           <div>
    //             <strong>Location:</strong>
    //             <br />
    //             <div>{data.locationInfo}</div>
    //             {/* {<ReactMarkdownWithHtml children={data.locationInfo} allowDangerousHtml />} */}
    //             {/* H/No. C684 <br />
    //         Nii Kwamena Bonnie Crescent<br />
    //         Dzorwulu, Accra, Ghana<br /><br /> */}
    //             <strong>Postal Address:</strong> <br />
    //             {/* {<ReactMarkdownWithHtml children={data.postalInfo} allowDangerousHtml />}
    //              */}
    //             <div>{data.postalInfo}</div>
    //             <br />
    //           </div>
    //         </div>

    //         <div className="col-lg-3 col-md-6 footer-contact pushed-down">
    //           <div>
    //             <strong className="font-weight-bold">Phone:</strong>
    //             <div>{data.phoneInfo}</div>
    //             <br />
    //             <strong>Email:</strong>
    //             <br />
    //             <div> {data.emailInfo} </div>
    //           </div>
    //         </div>

    //         <div className="col-lg-3 col-md-6 footer-info">
    //           <h3> Careers</h3>
    //           <div>{data.careers}</div>
    //           <br />

    //           {/* <a href="contact.html" className="text-dark" > </a>*/}
    //           <button className="btn btn-warning"> Send mail</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container-fluid p-0" style={{ backgroundColor: "ash" }}>
    //     <p className="copyright mb-0">
    //       &copy; Copyright{" "}
    //       {new Date().getFullYear() > 2020 ? new Date().getFullYear() : "2020"}{" "}
    //       <strong>
    //         <span>Jasey Farms Ltd</span>
    //       </strong>
    //       . All Rights Reserved. Developed and maintained by{" "}
    //       <a href="https://sterde.com" style={{ color: "#fdb305" }}>
    //         Sterde
    //       </a>
    //     </p>
    //   </div>
    //   <span className="back-to-top">
    //     <i className="icofont-simple-up"></i>
    //   </span>
    // </footer>

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
            <ul className="list-inline social social-rounded social-sm">
              <li className="list-inline-item">
                <a href="">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <i className="icon-google-plus"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <i className="icon-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 ml-auto">
            <h5 className="text-white">Contact</h5>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="#">Telephone:</a>
                <p style={{ color: "white" }}>
                  +233 20 822 3938
                  <br />
                  +233 54 105 4343
                </p>
              </li>
              <li>
                <a href="#">Email:</a>
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
                <a href="#">Location:</a>
                <p style={{ color: "white" }}>
                  Near Techiman Post Office Techiman, Bono Region Ghana
                </p>
              </li>
              <li>
                <a href="#">Postal Address:</a>
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
              <a href="https://sterde.com" target="_blank">
                Sterde
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
