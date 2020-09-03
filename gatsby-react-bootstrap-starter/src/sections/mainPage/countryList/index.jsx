import React, { useContext, useMemo } from "react"

import { Container, Row, Col } from "react-bootstrap"
import { GlobalContext } from "../../../store/context"
import {
  CountryList,
  CountryListItem,
  CountryListLink,
} from "../../../components/list/country"
import { chunk } from "lodash"

export default function MainSectionBestPrice() {
  const { COUNTRY_LIST = null } = useContext(GlobalContext)

  const countColumns = useMemo(() => {
    return Math.round(COUNTRY_LIST.length / 5)
  }, [COUNTRY_LIST])

  return (
    COUNTRY_LIST && (
      <Container as="section">
        <Row>
          {chunk(COUNTRY_LIST, countColumns).map((item, index) => {
            if (item.length > 0) {
              return (
                <Col sm="2" key={`${index}-country-list`}>
                  <CountryList>
                    {item.map(
                      (
                        { id = null, title = null, img = null, link = null },
                        index
                      ) => (
                        <CountryListItem key={`${index}-country-list-item`}>
                          <CountryListLink link={link}>
                            <img src={img} /> {title}
                          </CountryListLink>
                        </CountryListItem>
                      )
                    )}
                  </CountryList>
                </Col>
              )
            }
          })}
        </Row>
      </Container>
    )
  )
}
