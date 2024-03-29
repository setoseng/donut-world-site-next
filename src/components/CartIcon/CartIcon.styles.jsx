import styled from '@emotion/styled'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  width: 10rem;
  height: 2rem;
  background-color: #F6416C;

`
export const ShoppingIconStyle = styled(ShoppingCartOutlinedIcon)`
  width: 1.5rem;
  height: 1.5rem;
`

export const ItemCount = styled.span`
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 400;
  bottom: 12px; 
`
