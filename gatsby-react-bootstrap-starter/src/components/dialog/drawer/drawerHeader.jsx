import React from "react"
import { MdClose, MdKeyboardArrowUp } from "react-icons/md"
import Rotate from "../../animation/rotate"

export default function DrawerHeader({
  callback = () => {},
  type = "left",
  open = false,
}) {
  return (
    <div className="drawer-header p-2">
      <button
        className={`${
          type == "bottom" ? "mx-auto" : " "
        } btn-clear btn-animate text-white`}
        onClick={callback}
      >
        {type == "bottom" ? (
          <Rotate classes={{}} open={open}>
            <MdKeyboardArrowUp size="42" className="" />
          </Rotate>
        ) : (
          <MdClose size="28" className="" />
        )}
      </button>
    </div>
  )
}
