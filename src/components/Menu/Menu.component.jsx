import React, { useContext, useEffect, useState } from "react"
import { useInView } from 'react-intersection-observer';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import MenuItems from "../MenuItems/MenuItems.component";

import { MenuContext } from "../../contexts/menu.context";


import './style.css'

const getMenuData = (menuData) => {
  let
    menuItem,
    menuItemType,
    menuItemData = "";
  menuData.map((menuItem) => {
    console.log(menuItem);
  })
  //Loop through menuData to assign each menu item names to menuItemType
  // menuItemData = menuData.map(itemType => {
  //   for(const [key, value] of Object.entries(itemType)) {
  //     let cleanMenuItemType = key.charAt(0).toUpperCase() + key.slice(1);
  //     menuItemType = <h2 className="menuItemType">{cleanMenuItemType}</h2>
  //     menuItem = value.map((item, index) => {
  //       return(
  //         <div key={`${item} : ${index}`} className="menuItemContainer">
  //           <div className="menuTextContainer">
  //             <p className="menuItemText">{item.name}</p>
  //             <p className="menuItemText">{item.price}</p>
  //           </div>
  //           <div className="menuItemBorder"></div>
  //           <p className="menuItemDescription">{item.description}</p>
  //         </div> 
  //       )
  //     })
  //     return(
  //       <div>
  //         {menuItemType}
  //         {menuItem}
  //       </div>
  //     )
  //   }
  // });
  return menuItemData;
};

const Menu = () => {
  const [ menuState, setMenuState ] = useState(null);
  const { menuData } = useContext(MenuContext);

  useEffect(() => {
    setMenuState(menuData);
  }, [menuData])

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
          { 
            menuState != null 
            ?
            Object.entries(menuState).map((menu) => {
              const menuType = menu[0]
              const menuItem = menu[1]
              return(
              <MenuItems key={menuType} menuProps={{menuType, menuItem}}/>)
            })
            :
            ''
          }
        </div>
        <div style={{ height: '10em', justifySelf: 'center' }}>
          <Link
            to="/construction"
            className="menuOrderButton"
            >Order Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu