import React, { useContext } from "react"
import "./style.scss"
import { Button } from "react-bootstrap"
import { GlobalContext } from "../../../store/context"

const MobileControl = () => {
  const {
    onShowMobileBasketBooking = () => {},
    onShowMobileBasketDetail = () => {},
  } = useContext(GlobalContext)

  return (
    <div className="mobileControlContainer">
      <Button
        className="btn-block mr-2 my-auto"
        variant="danger"
        size="sm"
        onClick={onShowMobileBasketBooking}
      >
        К оплате
      </Button>
      <Button
        className="btn-block ml-2 my-auto"
        size="sm"
        onClick={onShowMobileBasketDetail}
      >
        О рейсе
      </Button>
    </div>
  )
}

export default MobileControl
