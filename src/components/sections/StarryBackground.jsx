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
        key={i}
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

  return <div className="stars-container">{stars}</div>;
};