import React, { Component } from 'react';
import axios from 'axios';

export default class BookCount extends Component {
    constructor(props) {
        super(props);
        this.state = { bookCount: {}, error: null };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/artworks/count-by-artist')
            .then(response => {
                this.setState({ bookCount: response.data });
            })
            .catch(error => {
                console.error("Failed to fetch artifacts:", error);
                this.setState({ error: "Failed to load artifacts." });
            });
    }

    render() {
        const { bookCount, error } = this.state;
        return (
            <div>
                {error && <p className="error">{error}</p>}
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Artist</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(bookCount).map(([artist, count]) => (
                            <tr key={artist}>
                                <td>{artist}</td>
                                <td>{count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
