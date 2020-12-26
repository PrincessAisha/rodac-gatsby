import React from "react"
import Layout from "../components/layout"
import images from "../content/galleryPageCarousel.json"

const Gallery = () => {
  const { image1 } = images
  return <Layout image={image1}></Layout>
}

export default Gallery
