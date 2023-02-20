import { styled } from "@mui/system"
import { Box, Typography } from "@mui/material";

export const DrawerCartContainer = styled(Box)({
  borderBottom: '1px solid rgb(200 200 200 / 10%)'
});

export const DrawerTotalContainer = styled(Box)({
  borderBottom: '1px solid rgb(200 200 200 / 40%)',
  borderTop: '1px solid rgb(200 200 200 / 40%)',
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