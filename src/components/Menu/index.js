import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import menuData from '../../data/menuData.js'


import './style.css'

const getMenuData = (menuData) => {
  let
    menuItem,
    menuItemType,
    menuItemData = "";

  //Loop through menuData to assign each menu item names to menuItemType
  menuItemData = menuData.map(itemType => {
    for(const [key, value] of Object.entries(itemType)) {
      let cleanMenuItemType = key.charAt(0).toUpperCase() + key.slice(1);
      menuItemType = <h2 className="menuItemType">{cleanMenuItemType}</h2>
      menuItem = value.map((item, index) => {
        return(
          <div key={`${item} : ${index}`}>
            <div className="menuTextContainer">
              <p className="menuItemText">{item.name}</p>
              <p className="menuItemText">{item.price}</p>
            </div>
            <div className="menuItemBorder"></div>
            <p className="menuItemDescription">{item.description}</p>
          </div> 
        )
      })
      return(
        <div>
          {menuItemType}
          {menuItem}
        </div>
      )
    }
  });
  return menuItemData;
};

const Menu = () => {

  return (
    <div className="menuContainer">
      <div className="menuPanel">
        <div></div>
        <div className="menuHeaderContainer">
          <StaticImage
            src={'../../images/icon-donut.png'}
            width={75}
            height={75}
            alt="donut icon"
            className="offerImage"
          />
          <h1 className="menuHeaderText">Our Menu</h1>
          <hr className="menuHeaderDivider" />
        </div>
        <div className="menuSubContainer">
          {getMenuData(menuData)}
        </div>
        <div style={{ height: '10em', justifySelf: 'center' }}>
          <button className="menuOrderButton">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Menu