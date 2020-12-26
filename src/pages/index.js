import React from "react"
import Layout from "../components/layout"
// import App from "../components/App";
import Home from "../components/Home/Home"
// import images from "../../content/homePageCarousel.json"
import images from "../content/homePageCarousel.json"

// import 'react-bootstrap'
export default function Index() {
  const { image1 } = images
  return (
    <Layout image={image1}>
      <Home />
    </Layout>
  )
}
