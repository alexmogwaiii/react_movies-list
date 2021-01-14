import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

import { MovieType } from '../../types';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired,
};