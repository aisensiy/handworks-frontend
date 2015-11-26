import request from 'superagent';
import addItemsToForm from '../utils/post_as_form';

const API_PREFIX = 'http://localhost:3000';

function remotePostAction(name, url) {
  var requestAction = `${name.toUpperCase()}_REQUEST`;
  var successAction = `${name.toUpperCase()}_SUCCESS`;
  var failureAction = `${name.toUpperCase()}_FAILURE`;

  var requestAction = () => {
    return {
      type: requestAction
    }
  };

  var requestSuccess = (res) => {
    return {
      type: successAction,
      payload: entity,
      location: res.headers['location']
    }
  };

  var requestFailed = () => {
    return {
      type: failureAction
    }
  };

  return (entity) => {
    return (dispatch) => {
      dispatch(requestAction());
      request
          .post(url)
          .type('form')
          .send(entity)
          .end((err, res) => {
            if (res.type == 2) {
              console.log(res);
              dispatch(requestSuccess(res));
            } else {
              dispatch(requestFailed());
            }
          });
    }
  };
}


function remoteGetAction(name, url) {
  var requestAction = `${name.toUpperCase()}_REQUEST`;
  var successAction = `${name.toUpperCase()}_SUCCESS`;
  var failureAction = `${name.toUpperCase()}_FAILURE`;

  var requestAction = () => {
    return {
      type: requestAction
    }
  };

  var requestSuccess = (data) => {
    return {
      type: successAction,
      payload: data
    }
  };

  var requestFailed = () => {
    return {
      type: failureAction
    }
  };

  return () => {
    return (dispatch) => {
      dispatch(requestAction());
      request
          .get(url)
          .end((err, res) => {
            if (res.statusType == 2) {
              dispatch(requestSuccess(res.body));
            } else {
              dispatch(requestFailed());
            }
          });
    }
  }
}

export var LoginAction = remotePostAction("LOGIN", `${API_PREFIX}/members/login`);

export var NewSolutionAction = remotePostAction("NEW_SOLUTION", `${API_PREFIX}/solutions`);

export var SolutionListAction = remoteGetAction("SOLUTION_LIST", `${API_PREFIX}/solutions`);
export var ProjectListAction = remoteGetAction("PROJECT_LIST", `${API_PREFIX}/projects`);

