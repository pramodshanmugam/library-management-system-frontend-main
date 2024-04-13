import React, { useState } from 'react';
import axios from 'axios';

export default function BookCount() {

    const [bookCountData, setBookCountData] = useState(-1);
    const [authorName, setAuthorName] = useState('');
   
    const onSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3000/book/reduce/' + authorName)
            .then((response) => {
                 setBookCountData(response.data.results[0].value);
                 setAuthorName(response.data.results[0]._id);
            })
    }

   
    return (
        <div>
            <h3>Find Book Count for Author</h3>
        <div >
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Author Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={authorName}
                onChange={(e) => {setAuthorName(e.target.value)}}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>

        </form>
        </div>
        <div>
            {bookCountData >=0 ? 
            <div>
            <h3>Result</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Author</th>
                  <th>Book Count</th>                
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>{authorName}</td>
                    <td>{bookCountData}</td>
                </tr>
              </tbody>
            </table>
          </div>
            : null}
        </div>
        </div>
    )
}