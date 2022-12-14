import React, { useState } from 'react'

import * as orderMenu from "./orderMenu.module.css"
import menuData from '../../data/menuData.js'

let menuItemTypeArray = [];
let menuItem = [];

const getMenuItem = (menuItems) => {
  menuItems.forEach((item, index)=> {
    menuItem.push(
      <div className={orderMenu.menuItemContainer}>
        <p key={item.name + index}>{item.name}</p>
        <p key={item.description + index}>{item.description}</p>
        <p key={item.price + index}>{item.price}</p>
      </div>
    );
  });
}

const getMenuData = () => {
  for(let x = 0; x <menuData.length; x++) {    
    for (const [key, value] of Object.entries(menuData[x])) {
      menuItemTypeArray.push(<h1 key={key + x}>{key.toUpperCase()}</h1>);
      getMenuItem(value);
    }
  }
}
// To Do
// Use State for menuItemTypeArray
// Use State for menuItem

function SideMenuBar() {
  getMenuData();
  return (
    <div>
      <div className={orderMenu.container}>
        <div className={orderMenu.menuItemTypeContainer}>
          {menuItemTypeArray}
        </div>
      </div>
      <div>
        {menuItem}
      </div>
    </div>
  )
}

export default SideMenuBar