import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { photos } from "./photos"
import { Link } from "gatsby"

function Gallerys() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <section className="py-7 pb-5" style={{ backgroundColor: "lightgrey" }}>
      <div className="margin-round">
        <div className="col-12  small-xl  text-center mb-3 ">
          <h2 className="n-section-title pt-3 text-primary">Gallery</h2>
        </div>
        <div className="py-7">
          <h3 className="text-center mb-5">Projects</h3>
        </div>
        <div>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <div className="mt-5 text-right">
          <Link
            to="/gallery"
            className="btn btn-lg btn-primary btn-round leadpara"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallerys
