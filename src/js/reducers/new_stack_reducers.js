export default function new_stack(state = {}, action) {
  console.log(action);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case "NEW_STACK_REQUEST":
      return Object.assign(newState, {
        request_status: "LOADING"
      });
    case "NEW_STACK_SUCCESS":
      return Object.assign(newState, {
        solution: action.payload,
        request_status: "SUCCESS"
      });
    case "NEW_STACK_FAILURE":
      return Object.assign(newState, {
        request_status: "FAILED"
      });
    default:
      return state;
  }
}