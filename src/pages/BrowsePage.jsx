import React from 'react';
import { Link } from 'react-router-dom';

export const BrowsePage = () => (
  <div>
    <h2>dis cool fgt</h2>
    <div>
      <Link to="/data">Load more data</Link>
    </div>
    <div>
      <label>Search for new recipes</label>
    </div>
    <div>
      <input />
    </div>
    <h3>Recommended for you</h3>
    <Link to="/analyze">Analyze my mental wellbeing</Link>
  </div>
);
