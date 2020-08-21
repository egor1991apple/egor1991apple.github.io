import React, { useContext } from "react"
import "./style.scss"
import { Button } from "react-bootstrap"
import { GlobalContext } from "../../../store/context"
import { useCountTickets } from "../../../hooks/useCountTickets"

const MobileControl = () => {
  const {
    onShowMobileBasketInOffers = () => {},
    onShowMobileFilterInOffers = () => {},
  } = useContext(GlobalContext)
  const count = useCountTickets()

  return (
    <div className="mobileControlContainer">
      <Button
        className="btn-block mr-2 my-auto"
        variant="danger"
        size="sm"
        disabled={count == 0}
        onClick={onShowMobileBasketInOffers}
      >
        В корзине: {count}
      </Button>
      <Button
        className="btn-block ml-2 my-auto"
        size="sm"
        onClick={onShowMobileFilterInOffers}
      >
        Фильтр
      </Button>
    </div>
  )
}

export default MobileControl
