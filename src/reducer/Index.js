const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREDENTIALS":
      return action.payload;
    default:
      return state;
  }
}
