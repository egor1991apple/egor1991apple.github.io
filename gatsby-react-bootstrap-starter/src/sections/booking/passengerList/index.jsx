import React, { useContext } from "react"
import { Col, Card } from "react-bootstrap"
import { useMaxPlacements } from "../../../hooks/useMaxPlacements"
import { MdClose } from "react-icons/Md"
import BookingFormPassenger from "../../../components/forms/booking/passenger"
import { GlobalContext } from "../../../store/context"
export default function PassengerList() {
  const {
    onToggleAlert = () => {},
    onSelectPassengerId = () => {},
  } = useContext(GlobalContext)

  const maxPlacements = useMaxPlacements()

  return (
    <Card className={`border-0`}>
      {(() => {
        const template = []
        for (let i = 1; i <= maxPlacements; i++) {
          template.push(
            <Card.Body
              key={`${i}_passenger`}
              className={"border-bottom px-0 px-lg-3"}
            >
              <div className="text-6 mb-3 d-flex">
                Пассажир №{i}{" "}
                {maxPlacements > 1 && (
                  <MdClose
                    className={"ml-auto cursor"}
                    onClick={() => {
                      onSelectPassengerId(i)
                      onToggleAlert("bookingRemovePassenger")(true)
                    }}
                  />
                )}
              </div>
              <p className="text-dark line-height-14 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti nulla molestias quibusdam corrupti temporibus, quidem
                ducimus quis ut sapiente doloribus quasi recusandae obcaecati
                cum harum? A nobis esse excepturi! Repudiandae?
              </p>
              <BookingFormPassenger indexPassenger={i} />
            </Card.Body>
          )
        }
        return template
      })()}
    </Card>
  )
}
//
