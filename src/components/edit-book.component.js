import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

 function CreateBook() {
    const params = useParams();
    console.log(params);

const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [price, setPrice] = useState('');
const [publisher, setPublisher] = useState('');
const [pubdate, setPublishDate] = useState('');

const fetchBookDetails = () => {
    axios.get('http://localhost:3000/book/'+params.id)
      .then(response => {
        console.log(response.data);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPrice(response.data.price);
        setPublisher(response.data.publisher);
        setPublishDate(response.data.pubdate);
      })
      .catch(function (error) {
        console.log(error);
      })
};

useEffect(() => {
    fetchBookDetails();}
    , [])


    const onSubmit = (e) => {
    e.preventDefault();

    const book = {
        title: title,
        author: author,
        price: price,
        publisher: publisher,
        pubdate: pubdate
    }

    console.log(book);

    axios.put('http://localhost:3000/book/'+params.id, book)
      .then(res => console.log(res.data));

      setTitle('');
      setAuthor('');
      setPrice('');
      setPublisher('');
      setPublishDate('');
  }

    return (
      <div>
        <h3>Edit Book</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                />
          </div>

          <div className="form-group"> 
            <label>Author: </label>
            <input  type="text"
                required
                className="form-control"
                value={author}
                onChange={(e) => {setAuthor(e.target.value)}}
                />
          </div>

          <div className="form-group"> 
            <label>Price($): </label>
            <input  type="text"
                required
                className="form-control"
                value={price}
                onChange={(e) => {setPrice(e.target.value)}}
                />
          </div>

          <div className="form-group"> 
            <label>Publisher: </label>
            <input  type="text"
                required
                className="form-control"
                value={publisher}
                onChange={(e) => {setPublisher(e.target.value)}}
                />
          </div>

          <div className="form-group"> 
            <label>Publish Date: </label>
            <input  type="text"
                required
                className="form-control"
                value={pubdate}
                onChange={(e) => {setPublishDate(e.target.value)}}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
}

export default CreateBook;