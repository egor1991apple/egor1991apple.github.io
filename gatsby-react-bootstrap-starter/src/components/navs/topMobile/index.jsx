import React, { useState, useContext } from "react"
import { GlobalContext } from "../../../store/context"
import Drawer from "../../dialog/drawer"
import { Transition } from "react-transition-group"
import { ListGroup, Nav } from "react-bootstrap"
import Social from "../../contacts/social"
import Contact from "../../contacts/contact"
import Collapse from "../../collapse"
import { Link } from "gatsby"
import { MdMenu } from "react-icons/md"

//import Hamburger from 'hamburger-react';

const TopMobile = ({ children }) => {
  const {
    onToggleMobileNav = null,
    SHOW_MOBILE_NAV = false,
    TOP_NAVS = [],
  } = useContext(GlobalContext)

  return TOP_NAVS.length ? (
    <div>
      <button className={"btn-clear btn-animate"} onClick={onToggleMobileNav}>
        <MdMenu size="28" />
      </button>

      <Drawer
        styles={{}}
        callback={onToggleMobileNav}
        open={SHOW_MOBILE_NAV}
        NamePortal="NavMobileDrawer"
      >
        <div className="drawer-content">
          <Nav>
            <ListGroup variant="flush">
              {TOP_NAVS.map(({ title, link, children = [], id }, index) => {
                return !children.length ? (
                  <ListGroup.Item key={`${id}_mobile`}>
                    <Link className="nav-link" to={link}>
                      {title}
                    </Link>
                  </ListGroup.Item>
                ) : (
                  <ListGroup.Item key={`${id}_mobile`}>
                    <Collapse key={`${id}_children_mobile`} title={title}>
                      <ListGroup variant="flush">
                        {children.map(({ title, link, id }) => (
                          <Link
                            className="nav-link"
                            key={`${id}_children`}
                            to={link}
                          >
                            {title}
                          </Link>
                        ))}
                      </ListGroup>
                    </Collapse>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Nav>
        </div>

        <div className="drawer-footer">
          <Contact />
          <Social />
        </div>
      </Drawer>
    </div>
  ) : null
}
export default TopMobile
