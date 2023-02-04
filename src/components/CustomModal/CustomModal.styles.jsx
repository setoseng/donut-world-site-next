import { styled } from '@mui/system'

import { Box } from '@mui/material'

export const ModalContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 'calc(100% - 64px)',
  backgroundColor: '#FFFF',
  borderRadius: '5px',
  boxShadow: 24,
  padding: '2rem',
})

export const DividerContainer = styled(Box)({
  borderBottom: '1px solid #c8c8c8'
});

