import React, { useRef } from "react"
import { createPortal } from "react-dom"

import Fade from "../../animation/fade"
import SlideRight from "../../animation/slideRight"
import SlideLeft from "../../animation/slideLeft"
import SlideBottom from "../../animation/slideBottom"
import useCreatePortal from "../../../hooks/useCreatePortal"
import DrawerHeader from "./drawerHeader"
//import useClickOutside from "../../../hooks/useClickOutside"

import "./style.scss"

const Drawer = ({
  children,
  callback = () => {},
  type = "right",
  open = false,
  NamePortal = "Portal",
}) => {
  useCreatePortal(NamePortal)

  const ref = useRef(null)
  //useClickOutside(ref, () => callback())

  return typeof document !== "undefined" && document.getElementById(NamePortal)
    ? createPortal(
        <Fade
          open={open}
          classes={`
          ${type == "bottom" ? "drawer-Wrapper-bottom" : " "}
          ${type == "right" ? "drawer-Wrapper" : " "}
          ${type == "left" ? "drawer-Wrapper-left" : " "}
        `}
        >
          {type == "bottom" ? (
            <SlideBottom classes="drawer-Container" open={open}>
              <DrawerHeader callback={callback} type={type} open={open} />
              {children}
            </SlideBottom>
          ) : null}
          {type == "left" ? (
            <SlideLeft classes="drawer-Container" open={open}>
              <DrawerHeader callback={callback} type={type} />
              {children}
            </SlideLeft>
          ) : null}
          {type == "right" ? (
            <SlideRight classes="drawer-Container" open={open}>
              <DrawerHeader callback={callback} type={type} />
              {children}
            </SlideRight>
          ) : null}
        </Fade>,
        document.getElementById(NamePortal)
      )
    : null
}

export default Drawer
