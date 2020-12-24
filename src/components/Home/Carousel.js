import React from "react"
import Carousel from "react-bootstrap/Carousel"
// import { graphql, useStaticQuery } from "gatsby"
import images from "../../content/homePageCarousel.json"

export default function Carousels() {
  const { caption } = images
  let image;
  image = 'img/r_3.jpg'
  //todo : make text show without abs positioning use background img
  return (
    <section id="intro">
      <div style={{position: "relative"}}>
        <div style={{ height: "50vh"}}>
            <img
              className="d-block w-100 img-3"
              // src='img/dominik-vanyi-Mk2ls9UBO2E-unsplashsmaller.jpg'
              src={image}
              alt="Third slide"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            
          </div>
          <div className='bg-warning display-3' style={{position: 'absolute', top: "70px", left:'100px'}}>
          Check me
           <div className='btn-primary rounded'>Contact us</div>
            </div>
      </div>

    </section>
  )
}
