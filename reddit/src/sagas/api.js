import axios from "axios";
export const getPosts = () => {
  return axios.get("http://jsonplaceholder.typicode.com/posts");
};
