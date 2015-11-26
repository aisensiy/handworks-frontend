import request from 'superagent';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

//function getRequestActions(name) {
//  function getAction(name, suffix) {
//    return `${name.toUpperCase()}_${suffix.toUpperCase()}`;
//  }
//
//  return ({
//    [getAction(name, "REQUEST")]: getAction(name, "REQUEST"),
//    [getAction(name, "SUCCESS")]: getAction(name, "SUCCESS"),
//    [getAction(name, "FAILURE")]: getAction(name, "FAILURE")
//  });
//}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const API_PREFIX = 'http://localhost:3000';

export function loginSuccess(entity) {
  return {
    type: LOGIN_SUCCESS,
    payload: entity
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

export function login(entity) {
  return (dispatch) => {
    dispatch(loginRequest());
    request
        .post(`${API_PREFIX}/members/login`)
        .send({name: entity.name, password: entity.password})
        .end((err, res) => {
          if (res.type != 2) {
            dispatch(loginFailure());
          } else {
            dispatch(loginSuccess(entity));
          }
        })
  }
}

