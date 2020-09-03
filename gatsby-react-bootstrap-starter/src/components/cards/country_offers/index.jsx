import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import "./style.scss"
export default function CountryCard({
  cost = null,
  country_id = null,
  currency = null,
  discount = null,
  id = null,
  img = null,
  link = null,
  old_cost = null,
  old_currency = null,
  title = null,
}) {
  return (
    <Card as={Link} to={link} className="card--country shadow-sm">
      {img && <Card.Img src={img} />}
      <Card.Body>
        {title && <div className="mt-auto h4"> {title}</div>}
        <div className="ml-auto mt-auto">
          <s className="font-light font-small">
            {old_cost} {old_currency}
          </s>
          <div className="h5">
            {cost} {currency}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
