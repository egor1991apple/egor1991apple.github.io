import React from "react"
import { Col } from "react-bootstrap"
import MainSearchForm from "../../../components/forms/mainSearchForm"

export default function formOffers({ type = "hor" }) {
  return <MainSearchForm type={type} />
}
