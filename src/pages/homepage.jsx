import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import HomeBG from '../assets/HomeBG.mp4';

function Homepage() {
    return (
      <div className="homepage-container">
        {/* Video container */}
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={HomeBG} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
  
        {/* Content */}
        <div className="content">
          <h1>This is the Homepage</h1>
          <p>
            Go to the <Link to="/flower">Flower Page</Link>.
          </p>
        </div>
      </div>
    );
  }
  
  export default Homepage;