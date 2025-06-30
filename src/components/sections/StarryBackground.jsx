import React from "react";
import "./StarryBackground.css";

export const StarryBackground = () => {
  const stars = Array.from({ length: 150 }).map((_, i) => <span key={i} className="star" />);
  return <div className="stars-container">{stars}</div>;
};