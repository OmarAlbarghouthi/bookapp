import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  didMount = async () => {
    
    let serverUrl = `${process.env.REACT_APP_SERVER}/books`;
    let booksData = await axios.get(serverUrl)

    this.setState({
      books: booksData.data
      
    })
    
  }


  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
