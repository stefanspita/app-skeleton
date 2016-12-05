import "./main.css"
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducers from "./reducers"
// import App from "./components/App"

let store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <p>This is where the app is gonna be inserted</p>
  </Provider>,
  document.getElementById("app-container")
)
