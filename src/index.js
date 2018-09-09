import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Root from "./components/Root";
import configureStore from "./store/configureStore";
import "./styles/index.scss";
require("./favicon.ico");
const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NewRoot = require("./components/Root").default;
    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
