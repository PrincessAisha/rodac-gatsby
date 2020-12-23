import React from "react"
import ProductSection from "./ProductSection"
import Carousels from "./Carousel"
import Orders from "./Orders"
import AboutUs from "./AboutUs"
import BenefitSection from "./BenefitSection"
import Client from "./Client"
import Service from "./Service"

export default function Home() {
  return (
    <React.Fragment>
      <Carousels />
      <AboutUs />
      <Client />
      <Service />
      <ProductSection />
      <BenefitSection />
      <Orders />
    </React.Fragment>
  )
}
