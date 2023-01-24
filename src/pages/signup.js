import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SignUpForm from "../components/SignUpForm/SignUpForm.component"

import { SignUpContainer } from "../styles/signup.styles"

const SignUp = () => (
  <SignUpContainer>
    <Seo title="Authentication" />
    <SignUpForm />
  </SignUpContainer>
)

export default SignUp
