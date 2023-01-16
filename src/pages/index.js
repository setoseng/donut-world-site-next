import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../components/typography.css'


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
  </Layout>
)

export default IndexPage
