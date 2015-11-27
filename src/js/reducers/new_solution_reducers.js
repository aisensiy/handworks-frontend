export default function newSolution(state={}, action) {
  switch (action.type) {
    case "NEW_SOLUTION_REQUEST":
      return {
        is_loading: true
      };
    case "NEW_SOLUTION_SUCCESS":
      return {
        is_success: true,
        location: action.location
      };
    case "NEW_SOLUTION_FAILURE":
      return {
        is_failed: true
      };
    default:
      return state;
  }
}
