import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40vh;
  margin-left: 1rem;
  font-family: "Montserrat";
  p {
    margin: 0;
    padding: 0;
  }
`
export const menuTypeContainer = styled.div `
  text-align: left;
`
export const menuTypeText = styled.p `
  font-size: 2rem;
`

export const menuItemContainer = styled.div `
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  margin-bottom: 1rem;
  border: 1px solid rgb(0, 0, 0, .12);
  border-radius: 1px;
  text-align: left;
`