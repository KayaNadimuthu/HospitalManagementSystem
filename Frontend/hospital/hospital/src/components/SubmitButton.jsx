import React from "react";

const SubmitButton = ({ text,onClick }) => {
  return (
    <div className="felx items-center w-full"onClick={onClick}>
      <button className="w-full bg-cyan-500 py-2 px-6 rounded shadow text-gray-100 hover:bg-cyan-600">
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
