// ArtifactRow.js
import React from 'react';
import { Link } from 'react-router-dom';

const ArtifactRow = ({ artifact, deleteArtifact }) => (
  <tr>
    <td>{artifact.title}</td>
    <td>{artifact.artist}</td>
    <td>{artifact.year}</td>
    <td>{artifact.medium}</td>
    <td>{artifact.dimensions}</td>
    <td>{artifact.description}</td>
    <td>
      <Link to={`/edit/${artifact.id}`}>Edit</Link> |
      <Link onClick={() => deleteArtifact(artifact.id)} 
    aria-label={`Delete ${artifact.title}`}
    >
    Delete
</Link>
    </td>
</tr>
);

export default ArtifactRow;