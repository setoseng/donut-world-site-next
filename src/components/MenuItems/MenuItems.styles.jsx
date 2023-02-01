import styled from '@emotion/styled';

export const MenuItemContainer = styled.div `
  display: grid;
  margin-bottom: .5rem;
`

export const MenuItemType = styled.h1 `
  margin-top: 1.5rem;
  margin-bottom: .7rem;
  font-size: 2em;
  font-family: 'Cormorant Garamond'!important;
  color:#d1466c;
  font-weight: 300 !important;
`

export const MenuTextContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`
export const  MenuItemText = styled.p `
  font-family: "Montserrat";
  font-size: 1em;
  color: #525151;
  margin-bottom: .5em;
`
export const MenuTextPrice = styled(MenuItemText) `
    justify-self: end;
`

export const MenuItemBorder = styled.div `
  border-bottom: 1px dashed #e5e5e5;
`

export const MenuItemDescription =  styled.p `
  font-family: "Montserrat";
  font-size: .7em;
  font-style: italic;
  color: #525151;
  margin-top: .5em; 
  min-height: 4em;
`