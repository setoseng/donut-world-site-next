import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import SignUpForm from "../components/SignUpForm/SignUpForm.component"

const SignUp = () => (
  <div>
    <Seo title="Authentication" />
    <SignUpForm />
  </div>
)

export default SignUp
