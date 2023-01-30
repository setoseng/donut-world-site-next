import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroContent from "../components/HeroContent"
import WhatWeOffer from "../components/WhatWeOffer"
import Menu from "../components/Menu/Menu.component"
import Information from "../components/Information"

import '../components/typography.css'





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
