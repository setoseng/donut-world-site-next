import React, { useContext, useState, useEffect } from 'react'
import { Drawer, Box } from '@mui/material'

import { MenuContext } from '../../contexts/menu.context.jsx'

import SideMenuItem from '../SideMenuItem/SideMenuItem.component.jsx'


import {
  Container,
  menuTypeContainer,
  menuItemContainer,
  menuTypeText,
} from "./SideMenu.styles.jsx"



const SideMenuBar = () => {
  const [ menuState, setMenuState ] = useState(null);
  const { menuData } = useContext(MenuContext);

  useEffect(() => {
    setMenuState(menuData);
  }, [menuData])

  return (
    <Box
      sx={{
        width: { sm: 240 },
        flexShrink: { sm: 0 },
        display: 'flex',
        overflow: 'auto'
      }}
      aria-label="menu navigator"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
        open
      >
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
          <></>
        }
      </Drawer>
    </Box>
  )
}

export default SideMenuBar