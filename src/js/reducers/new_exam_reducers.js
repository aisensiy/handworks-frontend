export default function new_exam_profile(state = {}, action) {
  console.log(action);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case "NEW_EXAM_PROFILE_REQUEST":
      return Object.assign(newState, {
        request_status: "LOADING"
      });
    case "NEW_EXAM_PROFILE_SUCCESS":
      return Object.assign(newState, {
        solution: action.payload,
        request_status: "SUCCESS"
      });
    case "NEW_EXAM_PROFILE_FAILURE":
      return Object.assign(newState, {
        request_status: "FAILED"
      });
    default:
      return state;
  }
}