import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

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
    <BackgroundImage
      Tag="section"
      className='heroContainer'
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <div className='heroText'>
        <p className='premiumText'>Premium</p>
        <p className='qualityText'>QUALITY</p>
        <p className='donutText'>Donuts</p>
        <p className='kolacheText'>&Kolaches</p>
      </div>
    </BackgroundImage>
  )
}

export default WhatWeOffer