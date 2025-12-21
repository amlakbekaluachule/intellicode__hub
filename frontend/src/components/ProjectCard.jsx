import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{project.name}</h2>
        {project.isPublished && (
          <span className="text-green-600 font-medium text-sm">Published</span>
        )}
      </div>
      {project.description && <p className="text-gray-600 text-sm">{project.description}</p>}
    </div>
  );
};

export default ProjectCard;
