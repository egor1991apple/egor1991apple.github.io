import React from "react"
import { Router, Link, Location } from "@reach/router"
import AllRoute from "../templates/route"
import RouteDetail from "../templates/route_detail"
import { TransitionGroup, CSSTransition } from "react-transition-group"
//import "./main.css"

const Routes = () => (
  <Location>
    {({ location }) => (
      <Router location={location} className="router">
        <AllRoute path="routes" location={location} />
        <RouteDetail path="routes/:page" location={location} />
      </Router>
    )}
  </Location>
)

export default Routes
