import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.slice(0).concat([{text: action.text, completed: false}]);

    case COMPLETE_TODO:
      var before = state.slice(0, action.index);
      var after = state.slice(action.index + 1);
      return before.concat(
          [Object.assign({}, state[action.index], {
            completed: true
          })],
          after
      );
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp