import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import {  combineReducers, applyMiddleware, compose, createStore  } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app';
import { createHistory } from 'history';

import SolutionList from './components/solution_list';
import Solution from './components/solution';
import Stack from './components/stack';
import NewSolution from './components/new_solution';
import NewStack from './components/new_stack';
import NewExamProfile from './components/new_exam_profile';
import ProjectList from './components/project_list';
import Project from './components/project';
import NewProject from './components/new_project';

require("bootstrap-webpack");
//require("./all_components");

var routes = (
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={ProjectList}/>
        <Route path="projects" component={ProjectList}>
          <Route path="new" component={NewProject}/>
          <Route path=":project_id" component={Project}/>
        </Route>
        <Route path="solutions" component={SolutionList}>
          <Route path="new" component={NewSolution}/>
          <Route path=":solution_id" component={Solution}>
            <Route path="stacks/:stack_id" component={Stack}>
              <Route path="exam_profiles/new" component={NewExamProfile}/>
            </Route>
            <Route path="stacks/new" component={NewStack}/>
          </Route>
        </Route>
      </Route>
    </Router>
);

const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
    applyMiddleware(),
    reduxReactRouter({
      routes,
      createHistory
    })
)(createStore)(reducer);

ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>,
    document.getElementById("main")
);

