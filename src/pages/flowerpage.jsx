import React from "react";
import { Link } from "react-router-dom"; // Import Link
import transition from "./transition"; // Corrected import path

function flowerpage() {
  return (
    <div>
      <h1>This is the Flowerpage</h1>
      <p>
        Go back to the <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
}

export default transition(flowerpage); // Apply transition
