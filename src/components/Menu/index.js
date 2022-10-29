import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import menuData from '../../data/menuData.js'


import './style.css'

const getMenuDonut = (menuData) => {
  return(
    <div>{
      menuData.donut.map((item) => {
        return(
          <div key={item}>
            <div className="menuItemContainer">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          <div className="menuItemBorder"></div>
            <p className="menuItemDescription">{item.description}</p>
          </div>
        )
      })
    }</div>
  )
}

const getMenuKolache = (menuData) => {
  return(
    <div>{
      menuData.kolache.map((item) => {
        return(
          <div key={item}>
            <div className="menuItemContainer">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          <div className="menuItemBorder"></div>
            <p className="menuItemDescription">{item.description}</p>
          </div>
        )
      })
    }</div>
  )
}

const getMenuCroissant = (menuData) => {
  return(
    <div>{
      menuData.croissant.map((item) => {
        return(
          <div key={item}>
            <div className="menuItemContainer">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          <div className="menuItemBorder"></div>
            <p className="menuItemDescription">{item.description}</p>
          </div>
        )
      })
    }</div>
  )
}

const getMenuBiscuit = (menuData) => {
  return(
    <div>{
      menuData.biscuit.map((item) => {
        return(
          <div key={item}>
            <div className="menuItemContainer">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          <div className="menuItemBorder"></div>
            <p className="menuItemDescription">{item.description}</p>
          </div>
        )
      })
    }</div>
  )
}

const Menu = () => {

  return (
    <div className="menuContainer">
      <StaticImage
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          placeholder="blurred"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={1 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          src={"../../images/chocolate-donut.jpeg"}
          formats={["auto", "webp", "avif"]}
        />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        <div className="menuPanel">
          <div className="menuHeaderContainer">
            <StaticImage
              src={'../../images/icon-donut.png'}
              width={75}
              height={75}
              alt="donut icon"
              className="offerImage"
            />
            <h1 className="menuText">Our Menu</h1>
            <hr className="menuDivider" />
          </div>
          <div className="menuSubContainer">
            <div className="menuColumnLeft">
              <h2 className="menuTypeText">Donuts</h2>
              {getMenuDonut(menuData)}
            </div>
            <div className="menuColumnRight">
              <h2 className="menuTypeText">Kolache</h2>
              {getMenuKolache(menuData)}
            </div>
          </div>
          <div className="menuSubContainer">
            <div className="menuColumnLeft">
              <h2 className="menuTypeText">Croissant</h2>
              {getMenuCroissant(menuData)}
            </div>
            <div className="menuColumnRight">
              <h2 className="menuTypeText">Biscuit</h2>
              {getMenuBiscuit(menuData)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu