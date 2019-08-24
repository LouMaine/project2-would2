import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
//import logger from "./middleware";
import reducer from "./reducers";
import middleware from "./middleware";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);


