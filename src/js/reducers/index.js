import { combineReducers } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import newSolution from './new_solution_reducers';
import solutionList from './solution_list_reducers';
import projectList from './project_list_reducers';
import solution from './solution_reducers';
import stack from './stack_reducers';

var rootReducer = combineReducers({
  router: routerStateReducer,
  new_solution: newSolution,
  solution_list: solutionList,
  project_list: projectList,
  solution: solution,
  stack: stack
});

export default rootReducer;