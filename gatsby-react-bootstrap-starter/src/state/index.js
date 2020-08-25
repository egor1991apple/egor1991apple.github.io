import React, { createContext } from "react"
import Store from "../store"

const NewGlobalContext = createContext({ data: "hello" })

export default function wrapGlobalProvider({ element }) {
  return (
    <NewGlobalContext.Provider value={{ hello: "hello" }}>
      {" "}
      <Store> {element} </Store>
    </NewGlobalContext.Provider>
  )
}
