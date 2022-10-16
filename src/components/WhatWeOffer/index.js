import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'



import './style.css'

const WhatWeOffer = () => {
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
      {/* To Do
        * Fix Column for First Row to be 1/3 each
        * Allow for additional Row to have Auto Column
        * Add background for entire statementContainer
        * Fix Side Margins for statementContainer
        */}
      <div className="statementContainer">
        <div className="item4">
          <StaticImage
            src={'../../images/pink-donut.jpg'}
            width={350}
            height={350}
            className="offerImage"
          />
          <h2>
            Always Fresh
          </h2>
        </div>
        <div className="item5">
          <StaticImage
            src={'../../images/flour-bag.jpeg'}
            width={350}
            height={350}
            className="offerImage"
          />
        </div>
        <div className="item6">
      </div>
      
        <StaticImage
          src={'../../images/flour-egg.jpg'}
          width={350}
          height={350}
          className="offerImage"
        />
      </div>
    </div>
  )
}

export default WhatWeOffer