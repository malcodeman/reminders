const initialState = {
  loading: "true",
  posts: ["one", "two", "three"]
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "REQUEST_POSTS":
      return {
        ...state,
        loading: true,
        posts: []
      };
    case "RECIVE_POSTS":
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    default:
      return state;
  }
};
