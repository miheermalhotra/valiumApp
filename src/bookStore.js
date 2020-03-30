import React, { Component } from "react";
import storyBook from "./mockData/storyBook";
import axios from "react-axios";

class BookStore extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    return axios
      .get(`./books`)
      .then(bookRespose => {
        this.setState({
          books: bookRespose.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    <div>
      <p>
        {this.state.books.map(book => {
          {
            book.author
          }
          {
            book.title
          }
        })}
      </p>
    </div>
  }
}
export default storyBooks;
