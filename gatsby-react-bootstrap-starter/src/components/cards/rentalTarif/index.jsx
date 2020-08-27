import React, { useRef, useEffect } from "react"
import { Card, FormCheck, Row, Col } from "react-bootstrap"
import "./style.scss"
export default function RentalTarifCard({
  id = null,
  title = null,
  price = null,
  currency = null,
  checked = false,
  callback = () => {},
}) {
  const formCheckBox = useRef(null)
  //const cardChecked = useRef(null)

  useEffect(() => {
    if (checked == true || checked == "true") {
      formCheckBox.current.checked = true
    } else {
      formCheckBox.current.checked = false
      //cardChecked.current.classList.remove("active")
    }
  }, [checked])
  return (
    <tr onClick={() => callback(id)}>
      <td className="border-right">
        <FormCheck ref={formCheckBox} />
      </td>
      <td className="border-right">{title}</td>
      <td className="text-right">
        {price} {currency}
      </td>
    </tr>
  )
}
