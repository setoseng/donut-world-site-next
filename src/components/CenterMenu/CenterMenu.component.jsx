import React, { useEffect, useState, useContext } from 'react'

import {
  Grid,
  Container,
} from '@mui/material';

import { MenuContext } from '../../contexts/menu.context.jsx'
import { ModalContext } from '../../contexts/modal.context.jsx';

import CenterMenuCard from '../CenterMenuCard/CenterMenuCard.jsx';
import CustomModal from '../CustomModal/CustomModal.component';


import {
  MenuTypeContainer,
  MenuType,
} from './CenterMenu.styles'

const CenterMenu = () => {
  const [ menuState, setMenuState ] = useState(null);
  const { menuData } = useContext(MenuContext);
  const { selectedItem } = useContext(ModalContext)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    setMenuState(menuData);
  }, [menuData])

  return (
    <Container spacing={1}>
      <CustomModal props={{handleOpen, handleClose, open, selectedItem}}/>
      <Grid xs={4} md={4}>
        {
          menuState != null
          ?
          Object.entries(menuState).map((menu) => {
            const menuType = menu[0]
            const menuItem = menu[1]
            return(
              <>
                <MenuTypeContainer>
                  <MenuType>{menuType}</MenuType>
                </MenuTypeContainer>
                <CenterMenuCard key={menuType} menuItem={menuItem}/>
              </>
              )
          })
          :
          ''
        }
      </Grid>
      <Grid xs={8} md={8}></Grid>
      
    </Container>
  )
}

export default CenterMenu