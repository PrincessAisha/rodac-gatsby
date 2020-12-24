import React from "react"

export default function SectionTitle(props) {
  return (
    <div className="n-section-title mb-3">
      <h2 className="text-capitalize text-center">{props.title}</h2>
      {/* <p>{props.subtitle}</p> */}
    </div>
  )
}
