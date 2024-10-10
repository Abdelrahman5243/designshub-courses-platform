"use client"
import React from "react";
import { useRouter } from "next/navigation";

function ProjectItem({ id, category, title, image }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <div
      className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
      style={{ backgroundImage: `url('${image}')` }}
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
        <h2 className="mt-4 text-xl font-semibold text-white capitalize">
          {title}
        </h2>
        <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
          {category}
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;