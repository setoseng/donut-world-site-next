import React, { useContext, useState } from 'react'
import {
  Container,
  Modal,
  Button,
  Typography
} from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2/Grid2'

import { multiply, round } from 'mathjs'

import { ModalContext } from '../../contexts/modal.context'
import { CartContext } from '../../contexts/cart.context'

import {
  ModalContainer,
  DividerContainer,
  ButtonContainer,
} from './CustomModal.styles';

const CustomModal = () => {
  const { 
    open,
    handleClose,
    selectedItem,
    itemCount,
    handleCountDecrease,
    handleCountIncrease,
  } = useContext(ModalContext)
  const { addItemToCart, cartItems } = useContext(CartContext)

  const handleAddItem = () => {
    addItemToCart(selectedItem, itemCount)
    handleClose()
  }

  return (
    <Container sx={{zIndex: (theme) => theme.zIndex.drawer + 99}}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <ModalContainer>
          <DividerContainer>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {selectedItem.name}
            </Typography>
          </DividerContainer>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedItem.description}
          </Typography>
          <Grid container direction="row" mt={2} sx={{ justifyContent: "space-between"}}>
            <Grid xs={5} md={5} lg={5} columnGap={2} container direction="row" alignContent="center" alignItems="center">
              <Button
                variant="outlined"
                type="button"
                onClick={handleCountDecrease}
                disabled={itemCount <=1 ? true : false}
                >
                  -
                </Button>
              <Typography>{itemCount}</Typography>
              <Button variant="outlined" type="button" onClick={handleCountIncrease}>+</Button>
            </Grid>
            <Grid xs={7} md={7} lg={7}>
              <Button
                variant="contained"
                fullWidth={true}
                onClick={handleAddItem}
                >
                Add To Cart ${round(multiply(selectedItem.price, itemCount), 2)}
              </Button>
            </Grid>
          </Grid>
        </ModalContainer>
      </Modal>
    </Container>
  )
}

export default CustomModal