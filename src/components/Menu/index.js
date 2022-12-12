import * as React from "react"
import { useInView } from 'react-intersection-observer';
import { Link } from "gatsby"
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
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const getMenuAnimation = () => {
    let menuAnimation = ""
      inView ?
      menuAnimation =  {
        position: 'relative',
        opacity: '100%',
        animation: 'slideInUp ease 1s',
      }
        : menuAnimation = {}
      return menuAnimation;
  }

  return (
      <div className="menuContainer" ref={ref}>
        <div className="menuPanel" style={getMenuAnimation()}>
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
            <Link
              to="/ordering"
              className="menuOrderButton"
              >Order Now
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Menu