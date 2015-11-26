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
import configureStore from './stores/configureStore.dev';

require("bootstrap-webpack");

var store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <NewSolution />
    </Provider>,
    document.getElementById("main")
);

