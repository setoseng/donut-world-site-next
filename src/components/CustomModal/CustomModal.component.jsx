import React, { useContext } from 'react'
import {
  Container,
  Modal,
  Button,
  Typography
} from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { ModalContext } from '../../contexts/modal.context';

import {
  ModalContainer,
  DividerContainer,
  ButtonContainer,
} from './CustomModal.styles';

const CustomModal = () => {
  const {open, handleClose, selectedItem } = useContext(ModalContext)
  return (
    <Container>
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
          <Grid container direction="row" mt={2}>
            <Grid xs={5} md={5} columnGap={1} container direction="row" alignContent="center" alignItems="center">
              <Button variant="outlined">-</Button>
              <Typography>1</Typography>
              <Button variant="outlined">+</Button>
            </Grid>
            <Grid xs={7} md={7}>
              <Button variant="contained" fullWidth="true">Add To Cart ${selectedItem.price}</Button>
            </Grid>
          </Grid>
        </ModalContainer>
      </Modal>
    </Container>
  )
}

export default CustomModal