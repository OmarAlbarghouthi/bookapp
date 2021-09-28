import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Form from './components/Form';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    let email = this.props.user.email;
    let serverUrl = `${process.env.REACT_APP_SERVER}/books?email=${email}`;

    axios.get(serverUrl).then((booksData) => {
      console.log(booksData);

      this.setState({
        books: booksData.data

      })
    })




  }

//   addBook = (event) =>{
// event.preventDefault;

//   }


  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

           {/* <Form
           addBookFunc = {this.addBook}
           /> */}
            <Carousel>
              {this.state.books.length > 0 && this.state.books.map(item => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://www.glorify.com/wp-content/uploads/2020/12/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )

              })}

            </Carousel>



          </>
        )  
  }
}

          export default withAuth0(MyFavoriteBooks);
