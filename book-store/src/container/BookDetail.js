import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.book.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.activeBook
  };
};

export default connect(mapStateToProps)(BookDetail);
