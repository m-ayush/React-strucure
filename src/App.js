import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Application from "./Application";
import { Provider } from "react-redux";
import configureStore from "./_store/configureStore.js";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Application></Application>
    </Provider>
  );
}

export default App;
