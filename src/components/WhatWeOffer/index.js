import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'

import BackgroundImage from 'gatsby-background-image'



import './style.css'


const WhatWeOffer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "Always-fresh2.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
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
      fluid={imageData}
      className="container"
    >
      <div>
        <h2 className='offerText'>What We Offer</h2>
        <div className="heartContainer">
          <hr className="heartLine" style={{ marginRight: '15px'}}/>
          <p className="heartTextTwo">from our hearts</p>
          <hr className="heartLine" style={{ marginLeft: '15px'}}/>
        </div>
      </div>
      {/*To Do
        * Add background for entire statementContainer
        * Fix Side Margins for statementContainer
        */}
      <div className="imageContainer">
        <div>
          <StaticImage
            src={'../../images/pink-donut.jpg'}
            width={350}
            height={350}
            className="offerImage"
          />
          <div className="statementContainer">
            <h2 className="statementText">
              Always Fresh
            </h2>
            <p className="statementSubText">
              All donuts are made in house daily.
              Never frozen or left-over to bring you the freshest experience.
            </p>
          </div>
        </div>
        <div>
          <StaticImage
            src={'../../images/flour-bag.jpeg'}
            width={350}
            height={350}
            className="offerImage"
          />
          <div className="statementContainer">
            <h2 className="statementText">
              Made from Scratch
            </h2>
            <p className="statementSubText">
              Starting from the base flour to the delicious delicacy of your choosing, 
              our donuts and kolaches are never imported.
            </p>
          </div>
        </div>
        <div>
          <StaticImage
            src={'../../images/flour-egg.jpg'}
            width={350}
            height={350}
            className="offerImage"
          />
          <div className="statementContainer">
            <h2 className="statementText">
              Quality Ingredients
            </h2>
            <p className="statementSubText">
              Sourced from suppliers top in the industry,
              our ingredients are selected for quality, freshness, and taste.
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default WhatWeOffer