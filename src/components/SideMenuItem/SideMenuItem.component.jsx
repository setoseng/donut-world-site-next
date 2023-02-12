import React from 'react'

import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

import { useScrollTo } from 'react-use-window-scroll'


const SideMenuItem = ({ menuProps }) => {
  const { menuType } = menuProps
  let cleanMenuItemType = menuType.charAt(0).toUpperCase() + menuType.slice(1);
  const scrollTo = useScrollTo()

  const scrollX = {
   'biscuit': 900,
   'croissant': 1250,
   'donut': 1800,
   'kolache': 3000, 
  }
  
  const scrollById = (id) => {
    const xDirection = scrollX[id];
    scrollTo({ top: xDirection, left: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    scrollById(menuType)
  }

  return (
    <ListItem>
      <ListItemButton
        onClick={handleScroll}
        sx={{
          '&:hover': { backgroundColor: 'rgba(246, 65, 107, 0.032)' },
        }}
      >
        <ListItemText
          disableTypography
          primary={<Typography variant="h6">{cleanMenuItemType}</Typography>}
        />
      </ListItemButton>
    </ListItem>
  )
}

export default SideMenuItem