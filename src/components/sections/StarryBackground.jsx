import React from "react";
import "./StarryBackground.css";

export const StarryBackground = () => {
  const stars = Array.from({ length: 120 }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 5;

    return (
      <span
        key={`star-${i}`}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      ></span>
    );
  });

  const meteors = Array.from({ length: 6 }).map((_, i) => {
    const top = Math.random() * 80; // avoid bottom edge
    const left = Math.random() * 100;
    const delay = Math.random() * 10;

    return (
      <div
        key={`meteor-${i}`}
        className="meteor"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      ></div>
    );
  });

  return <div className="stars-container">{stars}{meteors}</div>;
};