import React, { useContext } from "react"
import "./style.scss"
import { Button } from "react-bootstrap"
import { GlobalContext } from "../../../store/context"
import { useCountTickets } from "../../../hooks/useCountTickets"

const MobileControl = () => {
  const { onShowMobilePersonalMenu = () => {} } = useContext(GlobalContext)

  return (
    <div className="mobileControlContainer">
      <Button
        className="btn-block mr-2 my-auto"
        variant="danger"
        size="sm"
        onClick={onShowMobilePersonalMenu}
      >
        Меню пользователя
      </Button>
    </div>
  )
}

export default MobileControl
