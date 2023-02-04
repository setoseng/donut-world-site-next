import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroContent from "../components/HeroContent/HeroContent.component"
import WhatWeOffer from "../components/WhatWeOffer/WhatWeOffer.component"
import Menu from "../components/Menu/Menu.component"
import Information from "../components/Information/Information.component"

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
