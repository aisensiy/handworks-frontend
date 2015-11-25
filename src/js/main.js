import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app';
import todoApp from './reducers/reducers'
let store = createStore(todoApp);

require("bootstrap-webpack");

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("main")
);