import React from "react"
import Header from "./Header/header"
import Footer from "./Footer/Footer"
//CSS styles

import "./style.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"

import GetInTouch from "./Home/GetInTouch"
import Carousels from "./Home/Carousel"
// import images from "../../content/homePageCarousel.json"
// import AOS from "aos";//trying to implement aos

const Layout = props => {
  return (
    <div>
      <Header />
      <Carousels images={props.image} />
      {props.children}
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Layout
