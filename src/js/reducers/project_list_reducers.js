var initialState = {
  projects: []
};

export default function projectList(state=initialState, action) {
  console.log(action);
  switch (action.type) {
    case "PROJECT_LIST_REQUEST":
      return Object.assign({
        projects: state.projects.slice(0)
      }, {
        is_loading: true
      });
    case "PROJECT_LIST_SUCCESS":
      return {
        is_success: true,
        projects: action.payload
      };
    case "PROJECT_LIST_FAILURE":
      Object.assign({
        projects: state.projects.slice(0)
      }, {
        is_failed: true
      });
    default:
      return state;
  }
}