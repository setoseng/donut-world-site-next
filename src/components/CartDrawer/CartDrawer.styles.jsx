import { styled } from "@mui/system"
import { Box, Typography } from "@mui/material";

export const DrawerCartContainer = styled(Box)({
  borderBottom: '1px solid #c8c8c8'
});

export const DrawerTotalContainer = styled(Box)({
  borderBottom: '1px solid #c8c8c8',
  borderTop: '1px solid #c8c8c8',
});

export const EmptyCartContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
})

export const EmptyCartText = styled(Typography)({
  color: 'rgba(0, 0, 0, 0.34)',
  fontSize: '1rem',
  lineHeight: '1.5',
  fontWeight: 400,
})