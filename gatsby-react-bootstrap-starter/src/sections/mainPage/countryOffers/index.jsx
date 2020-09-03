import React, { useContext } from "react"
import CountryOffersCard from "../../../components/cards/country_offers"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "../../../components/title/section_title"
import SectionSubTitle from "../../../components/title/section_subtitle"
import { GlobalContext } from "../../../store/context"
import useMedia from "../../../hooks/useMedia"

export default function MainSectionBestPrice() {
  const { COUNTRY_OFFERS = null } = useContext(GlobalContext)
  const isMobile = useMedia(992)
  return (
    COUNTRY_OFFERS && (
      <Container as="section">
        <SectionTitle
          title={"Лучшие предложения по странам"}
          subtitle={
            "Ullamco laboris nisi sit incididunt nulla occaecat cupidatat veniam aliquip nostrud commodo."
          }
        />

        {!isMobile ? (
          <Row>
            <Col xs="12" lg="8">
              <CountryOffersCard {...COUNTRY_OFFERS[0]} />
            </Col>
            <Col xs="12" lg="4">
              {COUNTRY_OFFERS.map((item, index) => {
                return index > 0 ? (
                  <div className={index == 1 ? "mb-3" : " "}>
                    <CountryOffersCard {...item} />
                  </div>
                ) : null
              })}
            </Col>
          </Row>
        ) : (
          <Row className="flex-nowrap overflow-auto py-3">
            {COUNTRY_OFFERS.map((item, index) => {
              return (
                <Col xs={11} className={"px-2"}>
                  <CountryOffersCard {...item} />
                </Col>
              )
            })}
          </Row>
        )}
      </Container>
    )
  )
}
