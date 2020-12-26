import React from "react"
import Layout from "../components/layout"
import images from "../content/galleryPageCarousel.json"
import GalleryPage from "../components/Gallery/GalleryPage"

const Gallery = () => {
  const { image1 } = images
  return (
    <Layout image={image1}>
      <GalleryPage />
    </Layout>
  )
}

export default Gallery
