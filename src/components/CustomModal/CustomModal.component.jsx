import React from 'react'
import {
  Button,
  Modal,
  Box,
  Typography
} from '@mui/material'

import { ModalContainer } from './CustomModal.styles';

const CustomModal = ({ props }) => {
  const {
    handleOpen,
    handleClose,
    open,
    selectedItem
  } = props;
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <ModalContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default CustomModal