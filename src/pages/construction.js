import * as React from "react"
import { Link } from "gatsby"

import * as constructionStyle from '../styles/construction.module.css'

const ConstructionPage = () => (
  <div className={constructionStyle.container}>
      <h1>Under Construction</h1>
      <p>Apologies! It looks like you've reached a feature of the site that is under construction</p>
      <p>Please reach out to an admin for any questions or concerns</p>
        <Link
            to="/"
            className={constructionStyle.homeButton}
          >Go Home</Link>
      {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
  </div>
)

export default ConstructionPage
