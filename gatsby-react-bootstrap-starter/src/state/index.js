import React, { createContext } from "react"
import Store from "../store"

const NewGlobalContext = createContext()

export default function wrapGlobalProvider({ element }) {
  return (
    <NewGlobalContext.Provider>
      <Store> {element} </Store>
    </NewGlobalContext.Provider>
  )
}
