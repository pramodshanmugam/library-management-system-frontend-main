import React, { useState } from 'react';
import axios from 'axios';

export default function SearchArtifacts() {
    const [APIData, setAPIData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/api/artworks/artist/${searchInput}`)
            .then((response) => {
                setAPIData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }

    const artifactList = () => {
        return APIData.map(currArtifact => {
          return <tr>
          <td>{currArtifact.title}</td>
          <td>{currArtifact.artist}</td>
          <td>{currArtifact.year}</td>
          <td>{currArtifact.medium}</td>
          <td>{currArtifact.dimensions}</td>
          <td>{currArtifact.description}</td>
        </tr>;
        })
    };

    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <div className="form-group"> 
                        <label>Artist Name: </label>
                        <input type="text"
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
            {APIData.length ? 
                <div>
                    <h3>Artifacts Found</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Year</th>
                                <th>Medium</th>
                                <th>Dimensions</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artifactList()}
                        </tbody>
                    </table>
                </div>
                : <p>No artifacts found for the specified artist.</p>
            }
        </div>
    );
}
