import React, { useState, useEffect } from 'react';

const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSphere, setShowSphere] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setShowSphere(true); // Show sphere when the mouse moves
      clearTimeout(window.sphereFadeTimeout); // Clear the fade timeout
      window.sphereFadeTimeout = setTimeout(() => setShowSphere(false), 500); // Start fade after 500ms of no movement
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!showSphere) return null;

  return (
    <div
      className="cursor"
      style={{
        left: `${mousePosition.x - 30}px`, // Adjust the position for cursor
        top: `${mousePosition.y - 30}px`, // Adjust the position for cursor
      }}
    >
      <div className="cursor-dot"></div> {/* The inner dot */}
    </div>
  );
};

export default MouseCursor;
