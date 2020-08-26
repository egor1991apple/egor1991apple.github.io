import React, { useContext } from "react"

import { Modal, Button } from "react-bootstrap"
import { GlobalContext } from "../../../store/context"
import { MdClose } from "react-icons/md"

const RentBusDialog = ({ children, disabled, callback }) => {
  const {
    SHOW_BUSRENTAL_RATE_DIALOG = false,
    onShowBusRentalRateDialog = () => {},
  } = useContext(GlobalContext)

  return (
    SHOW_BUSRENTAL_RATE_DIALOG && (
      <Modal
        size="sm"
        id="PaySystemDialog"
        show={SHOW_BUSRENTAL_RATE_DIALOG}
        onHide={onShowBusRentalRateDialog}
      >
        <Modal.Header>
          <div className="text-4">Укажите тариф</div>
          <Button
            Button
            onClick={onShowBusRentalRateDialog}
            className="btn-clear btn-close-dialog"
          >
            <MdClose size="21px" />
          </Button>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button
            disabled={disabled}
            size="sm"
            onClick={() => callback && callback()}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    )
  )
}

export default RentBusDialog
