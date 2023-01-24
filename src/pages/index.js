import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroContent from "../components/HeroContent"
import WhatWeOffer from "../components/WhatWeOffer"
import Menu from "../components/Menu/Menu.component"
import Information from "../components/Information"

import { CartProvider } from "../contexts/cart.context"
import { MenuProvider } from "../contexts/menu.context"

import '../components/typography.css'





const IndexPage = () => (
  <CartProvider>
    <Layout>
      <Seo title="Home" />
      <HeroContent />
      <WhatWeOffer />
      <MenuProvider>
        <Menu />
      </MenuProvider>
      <Information />
    </Layout>
  </CartProvider>
)

export default IndexPage
