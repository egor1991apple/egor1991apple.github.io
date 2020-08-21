import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../../store/context"
import { Col, Button } from "react-bootstrap"
import BasketCard from "../../../components/cards/basket"
import { navigate } from "gatsby"
import {
  Transition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group"
import "./style.scss"

import { useCountTickets } from "../../../hooks/useCountTickets"

const duration = 600

export default function BasketOffers({ isMobile, transitionStyles }) {
  const {
    BASKET = [],
    onRemoveBaksetItem = () => {},
    onBasketCommit = () => {},
  } = useContext(GlobalContext)
  const FROM = BASKET[0] || []
  const BACK = BASKET[1] || []

  const count = useCountTickets()

  return (
    <Col
      lg={3}
      className={` d-flex flex-column p-0 ${
        count > 0 && !isMobile ? "border-left-dashed" : " h-100"
      }`}
      style={!isMobile ? transitionStyles : {}}
    >
      <div className="basketList">
        <TransitionGroup>
          {FROM.length &&
            FROM.map(({ place, offers, status, ticket_id }, index) => {
              if (status == 1) {
                return (
                  <CSSTransition
                    key={index + "basket_item"}
                    classNames="scale"
                    timeout={1000}
                  >
                    <BasketCard
                      {...{ place, ...offers, status, ticket_id }}
                      callback={onRemoveBaksetItem(0)}
                    />
                  </CSSTransition>
                )
              }
            })}
        </TransitionGroup>
        <TransitionGroup>
          {BACK.length &&
            BACK.map(
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
                    <CSSTransition
                      key={index + "basket_item"}
                      classNames="scale"
                      timeout={300}
                    >
                      <BasketCard
                        {...{ place, ...offers, status, ticket_id }}
                        callback={onRemoveBaksetItem(1)}
                      />
                    </CSSTransition>
                  )
                }
              }
            )}
        </TransitionGroup>
      </div>

      <CSSTransition classNames="scale" timeout={1000}>
        <div className="mt-auto mb-3 p-3">
          <Button
            variant="danger"
            className="btn-block  zIndex bottom-0"
            style={{ bottom: 0, right: 0 }}
            onClick={() => {
              onBasketCommit()()
              navigate("/basket")
            }}
          >
            Бронировать
          </Button>
        </div>
      </CSSTransition>
    </Col>
  )
}
