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
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1" key="leaf1"></div>
            <div className="flower__leaf flower__leaf--2" key="leaf2"></div>
            <div className="flower__leaf flower__leaf--3" key="leaf3"></div>
            <div className="flower__leaf flower__leaf--4" key="leaf4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1" key="light1"></div>
            <div className="flower__light flower__light--2" key="light2"></div>
            <div className="flower__light flower__light--3" key="light3"></div>
            <div className="flower__light flower__light--4" key="light4"></div>
            <div className="flower__light flower__light--5" key="light5"></div>
            <div className="flower__light flower__light--6" key="light6"></div>
            <div className="flower__light flower__light--7" key="light7"></div>
            <div className="flower__light flower__light--8" key="light8"></div>
          </div>
          <div className="flower__line">
            <div
              className="flower__line__leaf flower__line__leaf--1"
              key="lineLeaf1"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--2"
              key="lineLeaf2"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--3"
              key="lineLeaf3"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--4"
              key="lineLeaf4"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--5"
              key="lineLeaf5"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--6"
              key="lineLeaf6"
            ></div>
          </div>
        </div>

        <div class="flower flower--2">
          <div class="flower__leafs flower__leafs--2">
            <div class="flower__leaf flower__leaf--1"></div>
            <div class="flower__leaf flower__leaf--2"></div>
            <div class="flower__leaf flower__leaf--3"></div>
            <div class="flower__leaf flower__leaf--4"></div>
            <div class="flower__white-circle"></div>

            <div class="flower__light flower__light--1"></div>
            <div class="flower__light flower__light--2"></div>
            <div class="flower__light flower__light--3"></div>
            <div class="flower__light flower__light--4"></div>
            <div class="flower__light flower__light--5"></div>
            <div class="flower__light flower__light--6"></div>
            <div class="flower__light flower__light--7"></div>
            <div class="flower__light flower__light--8"></div>
          </div>
          <div class="flower__line">
            <div class="flower__line__leaf flower__line__leaf--1"></div>
            <div class="flower__line__leaf flower__line__leaf--2"></div>
            <div class="flower__line__leaf flower__line__leaf--3"></div>
            <div class="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div class="flower flower--3">
          <div class="flower__leafs flower__leafs--3">
            <div class="flower__leaf flower__leaf--1"></div>
            <div class="flower__leaf flower__leaf--2"></div>
            <div class="flower__leaf flower__leaf--3"></div>
            <div class="flower__leaf flower__leaf--4"></div>
            <div class="flower__white-circle"></div>

            <div class="flower__light flower__light--1"></div>
            <div class="flower__light flower__light--2"></div>
            <div class="flower__light flower__light--3"></div>
            <div class="flower__light flower__light--4"></div>
            <div class="flower__light flower__light--5"></div>
            <div class="flower__light flower__light--6"></div>
            <div class="flower__light flower__light--7"></div>
            <div class="flower__light flower__light--8"></div>
          </div>
          <div class="flower__line">
            <div class="flower__line__leaf flower__line__leaf--1"></div>
            <div class="flower__line__leaf flower__line__leaf--2"></div>
            <div class="flower__line__leaf flower__line__leaf--3"></div>
            <div class="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Add the rest of the flower and grass elements here */}
      </div>
      <h1>This is the Flower Page</h1>
      <p>
        Go back to the <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
}

export default transition(FlowerPage);
