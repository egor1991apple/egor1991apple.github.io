import React from "react"
import "./style.scss"
export default function SectionTitle({
  children,
  title = null,
  subtitle = null,
}) {
  return (
    <div className="section_title">
      {subtitle ? <h5>{subtitle}</h5> : null}
      {title ? <h2>{title}</h2> : null}
      <div className="line"></div>
    </div>
  )
}
