import * as React from "react"

import LogInForm from "../components/LogIn/LogInForm.component"

import Seo from "../components/seo"


const LogIn = () => (
  <div>
    <Seo title="Authentication" />
    <LogInForm />
  </div>
)

export default LogIn
