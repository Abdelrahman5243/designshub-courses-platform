"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import projectsData from "@/app/components/Projects/projectsData";
import Image from "next/image";

const ProjectPage = ({ params }) => {
  const { id } = params;

  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 text-gray-300">
      <Link
        href="/projects"
        className="bg-secBg hover:bg-opacity-60 text-white font-semibold max-w-max my-4 p-2.5 px-5
           rounded flex justify-center items-center gap-2 text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>
      <div className="w-full h-96 my-8">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full rounded-lg mb-8 object-cover"
          placeholder="blur"
        />
      </div>
      <p className="w-max mb-8 bg-indigo-600 text-indigo-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
        {project.category}
      </p>
      <h1 className="main-heading">{project.title}</h1>
      <p className="paragraph my-4">{project.description}</p>
      <div className="prose max-w-none text-gray-300">
        <h2 className="sec-heading">Technologies Used</h2>
        <ul className="list-disc list-inside my-4">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
