import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Artifact = props => (
  <tr>
    <td>{props.artifact.title}</td>
    <td>{props.artifact.artist}</td>
    <td>{props.artifact.year}</td>
    <td>{props.artifact.medium}</td>
    <td>{props.artifact.dimensions}</td>
    <td>{props.artifact.description}</td>
    <td>
      <img src={props.artifact.imageURL} alt="artifact" style={{ width: "50px", height: "auto" }} />
    </td>
    <td>
      <Link to={"/edit/"+props.artifact._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteArtifact(props.artifact._id) }}>Delete</a>
    </td>
  </tr>
)

export default class ArtifactsList extends Component {
  constructor(props) {
    super(props);

    this.deleteArtifact = this.deleteArtifact.bind(this)

    this.state = {artifacts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/artworks')
      .then(response => {
        this.setState({ artifacts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteArtifact(id) {
    axios.delete('http://localhost:8080/api/artworks/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      artifacts: this.state.artifacts.filter(el => el._id !== id)
    })
  }

  artifactList() {
    return this.state.artifacts.map(currentArtifact => {
      return <Artifact artifact={currentArtifact} deleteArtifact={this.deleteArtifact} key={currentArtifact._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Artifacts Count = {this.state.artifacts.length}</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Year</th>
              <th>Medium</th>
              <th>Dimensions</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.artifactList() }
          </tbody>
        </table>
      </div>
    )
  }
}
