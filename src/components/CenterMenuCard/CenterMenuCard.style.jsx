import { styled } from '@mui/system';

export const ItemName = styled('p')({
  fontFamily: 'Montserrat',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: 'black',
  marginBottom: '.5em',
})

export const MenuTypeContainer = styled('div')({
  textAlign: 'left',
  height: 0,
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  marginTop: '3rem',
  marginBottom: '4rem',
  textAlign: 'left',
  lineHeight: 0,
  marginBottom: '24px',
  letterSpacing: '2px',
  width: '40rem',
})

export const MenuType= styled('h1')({
  fontSize: '1.3rem',
  textTransform: 'capitalize',
  display: 'inline',
  lineHeight: 0,
  paddingRight: '8px',
  backgroundColor: 'white'
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
