import React, { useContext, useEffect, useMemo } from "react"
import BookingInfo from "../bookingInfo"
import SectionBooking from "../booking"
import MobileControl from "../mobileControl"

import { GlobalContext } from "../../../store/context"

import Drawer from "../../../components/dialog/drawer"
import { Transition } from "react-transition-group"
import { navigate } from "gatsby"

export default function Basket({ children }) {
  const {
    SHOW_MOBILE_BASKET_BOOKING = false,
    SHOW_MOBILE_BASKET_DETAIL = false,
    onShowMobileBasketDetail = () => {},
    onShowMobileBasketBooking = () => {},
  } = useContext(GlobalContext)

  return (
    <>
      <MobileControl />

      <Drawer
        type="bottom"
        open={SHOW_MOBILE_BASKET_BOOKING}
        NamePortal="BookingDrawer"
        callback={onShowMobileBasketBooking}
      >
        <SectionBooking />
      </Drawer>

      <Drawer
        type="bottom"
        open={SHOW_MOBILE_BASKET_DETAIL}
        NamePortal="BookingInfoDrawer"
        callback={onShowMobileBasketDetail}
      >
        {children}
      </Drawer>
    </>
  )
}
