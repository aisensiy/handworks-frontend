import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import routes from '../routers'

var combinedCreateStore = compose(reduxReactRouter({ routes, createHistory }))(createStore);
var finalCreateStore = applyMiddleware(thunk)(combinedCreateStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  //if (module.hot) {
  //  // Enable Webpack hot module replacement for reducers
  //  module.hot.accept('../reducers', () => {
  //    const nextRootReducer = require('../reducers');
  //    store.replaceReducer(nextRootReducer)
  //  })
  //}

  return store
}
