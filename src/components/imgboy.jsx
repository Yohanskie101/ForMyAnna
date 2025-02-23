import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import img1 from "../assets/img-boy.png";
import img2 from "../assets/thinking.png";

function Imgboy() {
  const [showNextText, setShowNextText] = useState(false);
  const [isTyping, setIsTyping] = useState(true); // State to control typing animation

  const handleNextClick = () => {
    setShowNextText(true);
    setIsTyping(true); // Restart typing effect for the next text
  };

  useEffect(() => {
    if (isTyping) {
      // Simulate typing effect duration
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000); // Adjust duration based on text length

      return () => clearTimeout(typingTimeout);
    }
  }, [isTyping]);

  return (
    <div className="imgboy-container">
      <div className="imgboy absolute bottom-12 left-0">
        <img src={img1} className="w-60" alt="Boy" />
      </div>

      <div className="absolute left-36 bottom-80">
        <img src={img2} className="bubble-chat w-48" alt="Thinking Bubble" />
      </div>

      <div className="absolute left-40 top-44">
        {!showNextText && (
          <>
            <p className={`anna-text ${isTyping ? "typing-effect" : ""}`}>
              Hi, Anna!
            </p>
            {!isTyping && (
              <button onClick={handleNextClick} className="next-button">
                Next
              </button>
            )}
          </>
        )}
        {showNextText && (
          <>
            <p className={`anna-text ${isTyping ? "typing-effect" : ""}`}>
              Look at this.
            </p>
            {!isTyping && (
              <button
                onClick={() => setShowNextText(false)}
                className="next-button"
              >
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Imgboy;
