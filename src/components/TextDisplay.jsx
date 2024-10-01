import React from "react";

const TextDisplay = ({ text, currentIndex }) => {
  return (
    <div className="text-xl font-mono whitespace-pre-wrap">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={index < currentIndex ? "text-red-600" : "text-gray-500"}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextDisplay;
