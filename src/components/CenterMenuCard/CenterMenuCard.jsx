import React, { useState, useContext } from 'react'

import {
  Card,
  Container,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { ModalContext } from '../../contexts/modal.context';

import {
  ItemName,
  ItemDescription,
  ItemPrice,
} from './CenterMenuCard.style'

const CenterMenuCard = ({ menuItem }) => {
  //const [selectedItem, setSelectedItem] = useState(defaultSelectedItem)
  //const [open, setOpen] = useState(false)
  const { setItemSelection } = useContext(ModalContext)

  const handlesSelection = (item) => {
    setItemSelection(item)
  }

  return (
    <Container spacing={1}>
      <Grid xs={4} md={4}>
        {menuItem.map(item =>
          <Card
            sx={{
              ':hover': {
                boxShadow: 20, // theme.shadows[20]
              },
              width: '40rem',
              margin: '1rem 0',
              padding: '1rem',
              textAlign: 'left',
            }}
            onClick={handlesSelection(item)}
            key={item.name}>
            <ItemName>{item.name}</ItemName>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemPrice>${item.price}</ItemPrice>
          </Card>
        )}
      </Grid>
      <Grid xs={8} md={8}></Grid>
    </Container>
  )
}

export default CenterMenuCard