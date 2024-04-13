import React, { Component } from 'react';
import axios from 'axios';

export default class CreateArtifact extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeMedium = this.onChangeMedium.bind(this);
    this.onChangeDimensions = this.onChangeDimensions.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImageURL = this.onChangeImageURL.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        title: '',
        artist: '',
        year: '',
        medium: '',
        dimensions: '',
        description: '',
        imageURL: ''
    }
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeArtist(e) {
    this.setState({ artist: e.target.value })
  }

  onChangeYear(e) {
    this.setState({ year: e.target.value })
  }

  onChangeMedium(e) {
    this.setState({ medium: e.target.value })
  }

  onChangeDimensions(e) {
    this.setState({ dimensions: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value })
  }

  onChangeImageURL(e) {
    this.setState({ imageURL: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const artifact = {
        title: this.state.title,
        artist: this.state.artist,
        year: this.state.year,
        medium: this.state.medium,
        dimensions: this.state.dimensions,
        description: this.state.description,
        imageURL: this.state.imageURL
    }

    console.log(artifact);

    axios.post('http://localhost:8080/api/artworks', artifact)
      .then(res => console.log(res.data));

    this.setState({
        title: '',
        artist: '',
        year: '',
        medium: '',
        dimensions: '',
        description: '',
        imageURL: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create Artifact</h3>
        <form onSubmit={this.onSubmit}>
          {/* ... rest of your form fields ... */}
          <div className="form-group">
            <input type="submit" value="Create Artifact" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
