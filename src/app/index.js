import React from "react"
import {combineReducers} from "redux"
import {reducers as homeReducers} from "./pages/home"
import Homepage from "./pages/home"


const App = () => (
  <div>
    <Homepage />
  </div>
)


export const reducers = combineReducers(
  homeReducers
)

export default App
