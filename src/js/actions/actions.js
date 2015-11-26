import request from 'superagent';
import addItemsToForm from '../utils/post_as_form';

const API_PREFIX = 'http://localhost:3000';

function remotePostAction(name, url) {
  var requestAction = `${name.toUpperCase()}_REQUEST`;
  var successAction = `${name.toUpperCase()}_SUCCESS`;
  var failureAction = `${name.toUpperCase()}_FAILURE`;

  return (entity) => {
    return (dispatch) => {
      dispatch(() => {
        return {
          type: requestAction
        }
      });
      request
        .post(url)
        .type('form')
        .send(entity)
        .end((err, res) => {
          if (res.type == 2) {
            dispatch(() => {
              return {
                type: successAction,
                payload: entity,
                location: res.headers['location']
              }
            });
          } else {
            dispatch(() => {
              return {
                type: failureAction
              }
            });
          }
        });
    }
  };
}


function remoteGetAction(name, url) {
  var requestAction = `${name.toUpperCase()}_REQUEST`;
  var successAction = `${name.toUpperCase()}_SUCCESS`;
  var failureAction = `${name.toUpperCase()}_FAILURE`;

  return (dispatch) => {
    dispatch(() => {
      return {
        type: requestAction
      }
    });
    request
        .get(url)
        .end((err, res) => {
          if (res.type == 2) {
            dispatch(() => {
              return {
                type: successAction,
                payload: entity,
                location: res.headers['location']
              }
            });
          } else {
            dispatch(() => {
              return {
                type: failureAction
              }
            });
          }
        });
  }
}

export var LoginAction = remotePostAction("LOGIN", `${API_PREFIX}/members/login`);

export var NewSolutionAction = remotePostAction("NEW_SOLUTION", `${API_PREFIX}/solutions`);

