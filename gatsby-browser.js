/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import RootLayout from "./src/components/RootLayout"

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
)