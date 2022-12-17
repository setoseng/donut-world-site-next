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
      src={"../../images/donut-hero.jpg"}
      formats={["auto", "webp", "avif"]}
    />
    <div className='heroText'>
      {/* <StaticImage
        className="iconDrop"
        width={25}
        height={25}
        placeholder="blurred"
        // You can optionally force an aspect ratio for the generated image
        quality={80}
        alt="image of a donut bouncing"
        src={"../../images/icon-donut.png"}
        formats={["auto", "webp", "avif"]}
      /> */}
      <p className='premiumText'>Premium</p>
      <p className='qualityText'>QUALITY</p>
      <p className='donutText'>Donuts</p>
      <p className='kolacheText'>&Kolaches</p>
    </div>
  </div>
  )
}

export default HeroContent