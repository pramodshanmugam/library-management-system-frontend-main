import React, { Component } from 'react';
import axios from 'axios';
import ArtifactRow from './artifact';  // Assuming Artifact is moved to a separate file

export default class ArtifactsList extends Component {
    constructor(props) {
        super(props);
        this.state = { artifacts: [], error: null };
    }

    componentDidMount() {
        axios.get(`${'http://localhost:8080'}/api/artworks`)
            .then(response => {
                this.setState({ artifacts: response.data });
            })
            .catch((error) => {
                console.error("Failed to fetch artifacts:", error);
                this.setState({ error: "Failed to load artifacts." });
            });
    }

    deleteArtifact = (id) => {
      console.log('ID for API call:', id);
        axios.delete(`${'http://localhost:8080'}/api/artworks/${id}`)
            .then(response => {
                this.setState(prevState => ({
                    artifacts: prevState.artifacts.filter(el => el._id !== id)
                }));
            })
            .catch(error => {
                console.error("Failed to delete artifact:", error);
                this.setState({ error: "Failed to delete artifact." });
            });
    }

    render() {
        const { artifacts, error } = this.state;
        return (
            <div>
                <h3>Artifacts Count = {artifacts.length}</h3>
                {error && <p className="error">{error}</p>}
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th>Medium</th>
                            <th>Dimensions</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artifacts.map(artifact => (
                            <ArtifactRow key={artifact._id} artifact={artifact} deleteArtifact={this.deleteArtifact} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
