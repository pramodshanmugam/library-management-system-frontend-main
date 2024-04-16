import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ArtifactEdit() {
  const params = useParams();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [medium, setMedium] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/artworks/${params.id}`)
      .then(response => {
        setTitle(response.data.title);
        setArtist(response.data.artist);
        setYear(response.data.year);
        setMedium(response.data.medium);
        setDimensions(response.data.dimensions);
        setDescription(response.data.description);
      })
      .catch(error => console.error(error));
  }, [params.id]);

  const onSubmit = e => {
    e.preventDefault();
    const artifact = {
      title,
      artist,
      year,
      medium,
      dimensions,
      description
    };

    axios.put(`http://localhost:8080/api/artworks/${params.id}`, artifact)
      .then(res => console.log(res.data))
      .catch(error => console.error(error));

    // Optionally reset form fields here if necessary
  };

  return (
    <div>
      <h3>Edit Artifact</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input type="text"
                 className="form-control"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Artist: </label>
          <input type="text"
                 required
                 className="form-control"
                 value={artist}
                 onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Year: </label>
          <input type="text"
                 required
                 className="form-control"
                 value={year}
                 onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Medium: </label>
          <input type="text"
                 className="form-control"
                 value={medium}
                 onChange={(e) => setMedium(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Dimensions: </label>
          <input type="text"
                 className="form-control"
                 value={dimensions}
                 onChange={(e) => setDimensions(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <textarea
                 className="form-control"
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Artifact" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default ArtifactEdit;
