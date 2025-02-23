import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import transition from "./transition";

function FlowerPage() {
  useEffect(() => {
    // Add class to body when the component mounts
    document.body.classList.add("flower-page-active");

    // Load and play background music
    const audio = new Audio("/bgmusic1.mp3"); // Ensure the file is in the public folder
    audio.loop = true;
    audio.play().catch((error) => console.log("Audio play failed:", error));

    // Remove the "not-loaded" class after 1 second for animations
    const timeout = setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);

    // Cleanup function: remove class and stop music
    return () => {
      document.body.classList.remove("flower-page-active");
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flower-page">
      <div className="night"></div>
      <div className="flowers">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            {/* Lights */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flower__light flower__light--${i + 1}`}
              ></div>
            ))}
          </div>

          {/* Flower Line */}
          <div className="flower__line">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`flower__line__leaf flower__line__leaf--${i + 1}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            {/* Lights */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flower__light flower__light--${i + 1}`}
              ></div>
            ))}
          </div>

          {/* Flower Line */}
          <div className="flower__line">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`flower__line__leaf flower__line__leaf--${i + 1}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            {/* Lights */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flower__light flower__light--${i + 1}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Long Grass Animation */}
      {[...Array(3)].map((_, gIndex) => (
        <div key={gIndex} className={`long-g long-g--${gIndex}`}>
          {[3, 2.2, 3.4, 3.6].map((delay, leafIndex) => (
            <div
              key={leafIndex}
              className="grow-ans"
              style={{ "--d": `${delay + gIndex * 0.4}s` }}
            >
              <div className={`leaf leaf--${leafIndex}`}></div>
            </div>
          ))}
        </div>
      ))}

      <h1>This is the Flower Page</h1>
      <p>
        Go back to the <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
}

export default transition(FlowerPage);
