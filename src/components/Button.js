import React from "react";

export default function Button({ title, color, icon, link }) {
  return (
    <button
      title={title}
      className={`transition duration-500 ease-in-out opacity-75 hover:text-${color} transform hover:scale-125 hover:opacity-100 mx-1`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <i className={`fab fa-${icon}-square`} />
      </a>
    </button>
  );
}
