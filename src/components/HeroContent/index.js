import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import { StaticImage } from "gatsby-plugin-image"

import './style.css'

const HeroContent = () => {

  return (
  <div className='heroContainer'>
    <StaticImage
      className="heroImage"
      layout="fullWidth"
      placeholder="blurred"
      // You can optionally force an aspect ratio for the generated image
      aspectRatio={2 / 1}
      quality={80}
      // This is a presentational image, so the alt should be an empty string
      alt=""
      src={"../../images/background-slider.jpeg"}
      formats={["auto", "webp", "avif"]}
    />
    <div className='heroText'>
      <p className='premiumText'>Premium</p>
      <p className='qualityText'>QUALITY</p>
      <p className='donutText'>Donuts</p>
      <p className='kolacheText'>&Kolaches</p>
    </div>
  </div>
  )
}

export default HeroContent