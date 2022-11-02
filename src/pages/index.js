import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import style from '../components/typography.css'

import HeroContent from "../components/HeroContent"
import WhatWeOffer from "../components/WhatWeOffer"
import Menu from "../components/Menu"
import Information from "../components/Information"





const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroContent />
    <WhatWeOffer />
    <Menu />
    <Information />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
