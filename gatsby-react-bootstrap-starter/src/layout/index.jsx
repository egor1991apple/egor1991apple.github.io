/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState, Fragment, useContext } from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import AuthDialog from "../components/dialog/authDialog"
import Preloader from "../components/preloader"
import { Transition } from "react-transition-group"
//import SectionAlerts from "sections/allPages/alerts"
import { GlobalContext } from "../store/context"

const duration = 2000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 1 },
}

const Layout = ({ children, pageInfo = "", ...rest }) => {
  const [loaderPage, setLoader] = useState(true)
  const {
    onCloseAllDialogAndDrawer = () => {},
    onSetLocationHref = () => {},
  } = useContext(GlobalContext)
  console.log()
  useEffect(() => {
    setLoader(false)
    onSetLocationHref(rest)
    onCloseAllDialogAndDrawer()
  }, [rest.pathname])

  return (
    <div id="ts">
      <Header />
      <main>{children}</main>
      <Footer />
      <AuthDialog />
      {/* <SectionAlerts /> */}
    </div>
  )
}

export default Layout
