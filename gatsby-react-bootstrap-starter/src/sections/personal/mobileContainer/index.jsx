import React, { useContext, useEffect, useMemo } from "react"

import MobileControl from "../mobileControl"

import { GlobalContext } from "../../../store/context"

import Drawer from "../../../components/dialog/drawer"

export default function MobileContainer({ children }) {
  const {
    SHOW_MOBILE_PERSONAL_MENU = false,
    onShowMobilePersonalMenu = () => {},
  } = useContext(GlobalContext)

  return (
    <>
      <MobileControl />
      <Drawer
        type="left"
        NamePortal="PersonalMenuDrawer"
        callback={onShowMobilePersonalMenu}
        open={SHOW_MOBILE_PERSONAL_MENU}
      >
        {children}
      </Drawer>
      )
    </>
  )
}
