import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../../store/context"
import { Col, Button, Container, Row } from "react-bootstrap"
import BasketCard from "../../../components/cards/basket"
import FormPromoCode from "../../../components/forms/formPromoCode"
import { navigate } from "gatsby"
import useMedia from "../../../hooks/useMedia"
import {
  Transition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group"
import "./style.scss"

import { useCountTickets } from "../../../hooks/useCountTickets"

export default function BasketOffers({ transitionStyles }) {
  const {
    BASKET = [],
    onRemoveBaksetItem = () => {},
    onBasketCommit = () => {},
  } = useContext(GlobalContext)
  const FROM = BASKET[0] || []
  const BACK = BASKET[1] || []

  const count = useCountTickets()
  const isMobile = useMedia(992)
  return (
    <>
      <Col lg="9" className="basketList d-flex overflow-auto">
        <Container className="px-0">
          {FROM.length ? (
            <Row className="mb-4 ">
              <Col xs="12">
                <h3 className="w-100 mb-3">Билеты туда</h3>
              </Col>
              {FROM.map(({ place, offers, status, ticket_id }, index) => {
                if (status == 1) {
                  return (
                    <Col md="6" key={index + "basket_item"} className="mb-3">
                      <BasketCard
                        {...{ place, ...offers, status, ticket_id }}
                        callback={onRemoveBaksetItem(0)}
                      />
                    </Col>
                  )
                } else {
                  return null
                }
              })}
            </Row>
          ) : null}

          {BACK.length ? (
            <Row className="">
              <Col xs="12">
                <h3 className="w-100 mb-3">Билеты Обратно</h3>
              </Col>

              {BACK.map(
                (
                  {
                    place = null,
                    offers = null,
                    status = null,
                    ticket_id = null,
                  },
                  index
                ) => {
                  if (status == 1) {
                    return (
                      <Col
                        md="6"
                        className=""
                        key={index + "basket_item_back"}
                        className="mb-3"
                      >
                        <BasketCard
                          key={index + "basket_item_back"}
                          {...{ place, ...offers, status, ticket_id }}
                          callback={onRemoveBaksetItem(1)}
                        />
                      </Col>
                    )
                  } else {
                    return null
                  }
                }
              )}
            </Row>
          ) : null}
        </Container>
      </Col>
      <Col
        lg="3"
        className={`d-flex flex-column ${
          !isMobile ? "border-left" : "border-top mt-auto"
        } bg-light-3 px-0`}
      >
        <div className=" p-3">
          <div className="text-3 mb-2">У вас есть промокод?</div>
          <FormPromoCode />
          <hr />
          <h5>Итого: 400 USD</h5>

          <Button
            variant="danger"
            className="btn-block  zIndex"
            size={isMobile ? "sm" : "md"}
            onClick={() => {
              onBasketCommit()()
              navigate("/basket")
            }}
          >
            Бронировать
          </Button>
        </div>
      </Col>
    </>
  )
}
