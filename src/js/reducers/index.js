import { combineReducers } from 'redux';
import newSolution from './new_solution_reducers';


const rootReducer = combineReducers({
  new_solution: newSolution
});

export default rootReducer;