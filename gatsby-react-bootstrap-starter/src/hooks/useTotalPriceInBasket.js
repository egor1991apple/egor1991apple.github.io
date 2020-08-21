import React, { useMemo } from "react"

export default function useTotalPriceInBasket(BASKET) {
  const memoTotalCost = useMemo(() => {
    const totalCost = {
      price: 0,
      cur: "",
    }
    Object.keys(BASKET).forEach(key => {
      BASKET[key].forEach(({ offers }) => {
        console.log(offers)
        totalCost.price += parseInt(offers.cost)
        totalCost.cur = offers.currency
      })
    })

    return totalCost
  }, [BASKET])
  return memoTotalCost
}
