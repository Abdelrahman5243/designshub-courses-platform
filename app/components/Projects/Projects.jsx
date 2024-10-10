"use client";
import React, { useState, useMemo } from "react";
import FilterButton from "./FilterButton";
import ProjectItem from "./ProjectItem";
import projectsData from "./projectsData";

const categories = [
  "All",
  ...new Set(projectsData.map((item) => item.category)),
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorkItems = useMemo(() => {
    return activeCategory === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="main-heading text-center">Latest Work</h1>

      <div className="relative mt-4">
        <div
          className="flex py-4 overflow-x-auto overflow-y-hidden md:justify-center 
       border-gray-700 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
         scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3">
        {filteredWorkItems.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
