import React, { useContext, useState, useEffect } from 'react'

import { MenuContext } from '../../contexts/menu.context.jsx'

import {
  Container,
  menuTypeContainer,
  menuItemContainer,
  menuTypeText,
} from "./SideMenu.styles.jsx"

import SideMenuItem from '../SideMenuItem/SideMenuItem.component.jsx'


function SideMenuBar() {
  const [ menuState, setMenuState ] = useState(null);
  const { menuData } = useContext(MenuContext);
  useEffect(() => {
    setMenuState(menuData);
  }, [menuData])

  return (
    <div>
      { 
        menuState != null 
        ?
        Object.entries(menuState).map((menu) => {
          const menuType = menu[0]
          const menuItem = menu[1]
          return(
          <SideMenuItem key={menuType} menuProps={{menuType, menuItem}}/>)
        })
        :
        ''
      }
    </div>
  )
}

export default SideMenuBar