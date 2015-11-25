import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app';
import todoApp from './reducers/reducers'
import SolutionList from './components/solution_list';
import Solution from './components/solution';
import Stack from './components/stack';
import NewSolution from './components/new_solution';
import NewStack from './components/new_stack';
import NewExamProfile from './components/new_exam_profile';
import ProjectList from './components/project_list';
import Project from './components/project';
let store = createStore(todoApp);

require("bootstrap-webpack");
require("./all_components");

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("main")
);

