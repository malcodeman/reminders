import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions";

class BookList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.books.map((book, index) => {
            return (
              <li key={book.id} onClick={() => this.props.selectBook(book)}>
                {book.title}
              </li>
            );
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

const mapDispatchToProps = dispatch => {
  return {
    selectBook: book => dispatch(selectBook(book))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
