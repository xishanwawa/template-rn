const initialState = {};

function todoApp(state = initialState, action) {
  switch (action.type) {
    case "init_state":
      return Object.assign({}, state, {
        list: []
      });
    default:
      return state;
  }
}
