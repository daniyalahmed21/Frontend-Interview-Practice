import React, { useRef } from "react";
import "./customCursor.css";

const CustomCursor = () => {
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    console.log(e)
    if (circleRef.current) {
      circleRef.current.style.left = `${e.clientX}px`;
      circleRef.current.style.top = `${e.clientY}px`;
    }
  };

  return (
    <div className="h-screen" onMouseMove={handleMouseMove}>
      <div className="cursor-circle" ref={circleRef}></div>
    </div>
  );
};

export default CustomCursor;
