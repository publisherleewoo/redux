import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Container from "./Container";
import { createStore } from "redux";
import counter from "./modules/counter";
import { Provider } from "react-redux";

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById("root")
);
