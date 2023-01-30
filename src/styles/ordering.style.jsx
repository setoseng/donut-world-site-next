import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"


export const Container = styled.div `
  display: grid;
  align-items: center;
  text-align: center;
`
// Static Image from Gatsby does not support higher order component
// Must do in-line styling
// export const HeroImage = styled(StaticImage) `
//   display: grid;
//   height: 40vh;
//   grid-area: 1/1;
//   width: auto;
// `
export const HeroTextContainer = styled.div `
  display: grid;
  grid-area: 1/1;
  position: relative;
  text-align: center;
`
export const HeroText = styled.h1 `
  font-family: "Montserrat";
  text-transform: capitalize;
  color: white;
  font-size: 4rem;
  margin-bottom: 1rem;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.10);
`
export const HeroSubText = styled.p `
  color: white;
  text-transform: capitalize;
  margin-top: 1rem;
  font-size: 1.5rem;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.50);
`
export const HorizontalLine = styled.div `
  background-color: white;
  align-self: center;
  justify-self: center;
  width: 30rem;
  border: 1px white solid;
`

export const Body = styled.div `
  display: grid;
  grid-template-areas: 'sidemenu centerMenu sidegutter';
  grid-template-columns: 1fr 4fr .5fr;
`