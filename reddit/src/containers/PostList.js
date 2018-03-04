import React, { Component } from "react";
import { connect } from "react-redux";

import { requestPosts } from "../actions";

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <p>Loading</p>
        ) : (
          <ul>
            {this.props.posts.map((post, index) => {
              return <li key={index}>{post.title}</li>;
            })}
          </ul>
        )}

        <button onClick={this.props.requestPosts}>Fetch posts</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPosts: () => dispatch(requestPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
