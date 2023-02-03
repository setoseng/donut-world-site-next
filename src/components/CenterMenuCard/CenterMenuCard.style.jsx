import { styled } from '@mui/system';

export const ItemName = styled('p')({
  fontFamily: 'Montserrat',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: 'black',
  marginBottom: '.5em',
})

export const HorizontalLine = styled('span')({
  width: '1px',
  borderColor: 'black',
  borderStyle: 'solid'
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
