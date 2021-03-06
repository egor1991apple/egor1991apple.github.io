import React, { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Modal, Tabs, Tab, Button } from "react-bootstrap"
import { GlobalContext } from "../../../store/context"
import { MdClose } from "react-icons/md"
import LogginForm from "../../forms/logginForm"
import RegForm from "../../forms/regForm"
import useCreatePortal from "../../../hooks/useCreatePortal"

const AuthDialog = () => {
  const {
    state,
    SHOW_AUTH_DIALOG,
    onOpenAuthDialog = null,
    lang = "ru",
    onSetAuth = () => {},
  } = useContext(GlobalContext)

  return (
    typeof document !== "undefined" &&
    typeof document !== "null" && (
      <Modal id="authDialog" show={SHOW_AUTH_DIALOG}>
        <Modal.Body>
          <Button
            onClick={() => onOpenAuthDialog()}
            className="btn-clear btn-close-dialog"
          >
            <MdClose size="21px" />
          </Button>
          <Tabs className="text-4 justify-content-center mt-2 mb-4">
            <Tab.Pane eventKey="login" title="Авторизация">
              <LogginForm language={lang} onSetAuth={onSetAuth} />
            </Tab.Pane>
            <Tab.Pane eventKey="reg" title="Регистрация">
              <RegForm language={lang} />
            </Tab.Pane>
          </Tabs>
        </Modal.Body>
      </Modal>
    )
  )
}

export default AuthDialog
