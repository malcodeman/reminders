import React from "react";
import BookList from "../container/BookList";
import BookDetail from "../container/BookDetail";

const App = props => {
  return (
    <React.Fragment>
      <BookList />
      <BookDetail />
    </React.Fragment>
  );
};
export default App;
