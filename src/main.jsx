import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>Welcome to the Github User Finder</h1>
      <Link to="/users/octocat">View Octocat's Github Profile</Link>
    </div>
  );
};

export default main;