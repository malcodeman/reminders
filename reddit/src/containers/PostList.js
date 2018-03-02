import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("https://www.reddit.com/r/popular.json")
      .then(res => {
        console.log(res.data.data.children);
        this.setState({posts: res.data.data.children})
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map((post, index) => {
            return <li key={post.data.id}>{post.data.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default PostList;
