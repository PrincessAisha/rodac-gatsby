import React from "react"
// import Carousels from "./Carousel"
import AboutUs from "./AboutUs"
import Client from "./Client"
import Service from "./Service"
// import GetInTouch from "./GetInTouch"
import Gallerys from "./Gallery"

export default function Home() {
  return (
    <React.Fragment>
      <section id="home">
        <AboutUs />

        <Client />
        <Service />
        <Gallerys />
      </section>
    </React.Fragment>
  )
}
