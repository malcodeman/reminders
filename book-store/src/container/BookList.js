import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.books.map((book, index) => {
            return <li key={book.id}>{book.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(BookList);
