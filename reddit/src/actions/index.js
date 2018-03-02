export const requestPosts = () => {
  return {
    type: "REQUEST_POSTS"
  };
};

export const recivePosts = data => {
  return {
    type: "RECIVE_POSTS",
    payload: data
  };
};
