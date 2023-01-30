import { styled } from '@mui/system';

import Card from '@mui/material/Card';


export const CardContainer = styled('Card')({
  width: '40rem',
  height: '20rem',
  margin: '1rem 0',
  paddingLeft: '1rem',
  textAlign: 'left',
})
const options = {
  shouldForwardProp: (prop) => prop !== 'hoverShadow',
};

export const StyledCard = styled(
  CardContainer,
  options,
)(({ theme, hoverShadow = 1 }) => ({
  ':hover': {
    boxShadow: hoverShadow,
  },
}));

export const ItemName = styled('p')({
  fontFamily: 'Montserrat',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: 'black',
  marginBottom: '.5em',
})


export const ItemDescription = styled('p')({
  fontFamily: 'Roboto',
  fontSize: '1rem',
  fontStyle: 'italic',
  color: '#525151',
  marginTop: '.5em',
  marginBottom: '.5em',
  minHein: '1.5rem',
})

export const ItemPrice = styled(ItemName)({
  margin: 0,
})
