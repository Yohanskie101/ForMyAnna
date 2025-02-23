import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Homepage() {
  return (
    <div>
      <h1>This is the Homepage</h1>
      <p>Go to the <Link to="/flower">Flower Page</Link>.</p>
    </div>
  );
}

export default Homepage;