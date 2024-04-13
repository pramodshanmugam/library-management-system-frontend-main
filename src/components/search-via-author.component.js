import React, { useState } from 'react';
import axios from 'axios';
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [searchInput, setSearchInput] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3000/book/get/author/' + searchInput)
            .then((response) => {
                setAPIData(response.data);
            })
        
    }

    const bookList = () => {
        return APIData.map(currBook => {
          return <tr>
          <td>{currBook.title}</td>
          <td>{currBook.author}</td>
          <td>{currBook.price}</td>
          <td>{currBook.publisher}</td>
          <td>{currBook.pubdate}</td>
        </tr>;
        })
      };

    return (
        <div>

        <div >
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Author Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={searchInput}
                onChange={(e) => {setSearchInput(e.target.value)}}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>

        </form>
        </div>
        <div>
            {APIData.length ? 
            <div>
            <h3>Books in System</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Publisher</th>
                  <th>Publish Date</th>
                </tr>
              </thead>
              <tbody>
                {bookList()}
              </tbody>
            </table>
          </div>
            : null}
        </div>
        </div>
    )
}