import React from "react"
import { Link } from "gatsby"
import "./style.scss"
export const CountryList = ({ children }) => {
  return <ul className="country-list--container">{children}</ul>
}
export const CountryListItem = ({ children }) => {
  return <li className="country-list--item">{children}</li>
}
export const CountryListLink = ({ children, link = "" }) => {
  return (
    <Link to={link} className="country-list--link">
      {children}
    </Link>
  )
}
