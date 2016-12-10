import "./main.css"
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"
import {reducers} from "./app"
import App from "./app"

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app-container")
)
