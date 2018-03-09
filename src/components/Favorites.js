import React, {Component} from 'react';
import FavoriteFood from './FavoriteFood';
import FavoriteMovie from './FavoriteMovie';

const Favorites = () => (
  <div>
    <h1>My Favorites</h1>
    <FavoriteFood />
    <FavoriteMovie />
  </div>
)

export default Favorites;
