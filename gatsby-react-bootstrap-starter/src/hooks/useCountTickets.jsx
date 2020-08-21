import { useContext } from "react"
import { GlobalContext } from "../store/context"

export const useCountTickets = () => {
  const { BASKET = { 1: [], 0: [] } } = useContext(GlobalContext)

  const FROM = BASKET[0]
  const BACK = BASKET[1]

  return FROM.length + BACK.length
}
