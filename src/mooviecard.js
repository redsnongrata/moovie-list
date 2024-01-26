import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '200px' }}>
      <Link to={`/movies/${movie.title.toLowerCase().replace(/\s+/g, '-')}`}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
