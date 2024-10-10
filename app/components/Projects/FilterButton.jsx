import React from "react";

function FilterButton({ category, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none ${
        isActive
          ? "border-blue-400 text-blue-300"
          : "text-white cursor-base border-gray-700 hover:border-gray-400"
      }`}
    >
      {category}
    </button>
  );
}

export default FilterButton;
