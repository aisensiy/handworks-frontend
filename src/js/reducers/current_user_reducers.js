export default function current_user(state={}, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        is_loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        is_success: true,
        current_user: action.current_user
      };
    case "LOGIN_FAILURE":
      return {
        is_failed: true
      };
    default:
      return state;
  }
}
