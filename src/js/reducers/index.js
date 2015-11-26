import { combineReducers } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import newSolution from './new_solution_reducers';
import solutionList from './solution_list_reducers';
import projectList from './project_list_reducers';

var rootReducer = combineReducers({
  router: routerStateReducer,
  new_solution: newSolution,
  solution_list: solutionList,
  project_list: projectList
});

export default rootReducer;