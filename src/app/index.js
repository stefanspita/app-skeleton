import React from "react"
import {combineReducers} from "redux"
import {reducers as homeReducers} from "./pages/home"
import Homepage from "./pages/home"
import {Router, Route, hashHistory} from "react-router"

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Homepage}/>
  </Router>
)


export const reducers = combineReducers(
  homeReducers
)

export default App
