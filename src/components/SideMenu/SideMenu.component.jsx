import React, { useContext, useState, useEffect } from 'react'
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'

import { MenuContext } from '../../contexts/menu.context.jsx'

import SideMenuItem from '../SideMenuItem/SideMenuItem.component.jsx'

const SideMenuBar = () => {
  const [ menuState, setMenuState ] = useState(null)
  const { menuData } = useContext(MenuContext)

  const drawerWidth = 240

  useEffect(() => {
    setMenuState(menuData)
  }, [menuData])

  return (
    // <Drawer
    //   variant="permanent"
    //   sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    //       maxHeight: 40,
    //     }}
    //   open
    // >
      <Box sx={{
          pt: 3,
          overflow: 'auto',
          position: 'sticky',
          top: '64px',
        }}
      >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          aria-label="contacts"
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
        </List>

      </Box>
    // </Drawer>
  )
}

export default SideMenuBar