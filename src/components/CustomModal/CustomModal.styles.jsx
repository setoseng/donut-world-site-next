import { styled } from '@mui/system'

import { Box } from '@mui/material'

export const ModalContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFFF',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
})

