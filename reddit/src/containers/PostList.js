import React, { Component } from "react";
import { connect } from "react-redux";

class PostList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map((post, index) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostList);
