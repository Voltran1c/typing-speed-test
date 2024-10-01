import React from "react";

const TextAreaTyping = ({ onType, value, isDisable }) => {
  const handleChange = (e) => {
    onType(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      disabled={isDisable}
      className="w-full h-32 border border-gray-300 p-2 font-mono text-lg"
      placeholder="Start typing here..."
    />
  );
};

export default TextAreaTyping;
