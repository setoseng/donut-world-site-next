import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'


import './style.css'

const WhatWeOffer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background-slider.jpeg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <div className="container">
      <div className="item1"></div>
      <div className="item2">
        <h2 className='offerText'>What We Offer</h2>
        <div className="heartContainer">
          <div className="divider">
            <div></div>
            <hr></hr>
          </div>
          <p className="heartTextTwo">from our hearts</p>
          <div className="divider">
            <hr></hr>
            <div></div>
          </div>
        </div>
      </div>
      <div className="item3"></div>
      <div className="item4">
        
      </div>
      <div className="item5">
      </div>
      <div className="item6">
      </div>
    </div>
  )
}

export default WhatWeOffer