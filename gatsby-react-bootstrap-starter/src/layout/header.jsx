import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "../components/navbar"

import { Container, Row, Col } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <NavBar />
  </header>
)

export default Header
