import React, { useState } from "react";

const mockProjects = [
  { id: 1, name: "Personal Website", description: "My portfolio site", isPublished: true },
  { id: 2, name: "Task Manager", description: "Simple todo app", isPublished: false },
  { id: 3, name: "Blog Platform", description: "Custom blog engine", isPublished: true },
];

const DashboardPage = () => {
  const [projects, setProjects] = useState(mockProjects);

  const handleCreateProject = () => {
    
    const newProject = {
      id: projects.length + 1,
      name: `New Project ${projects.length + 1}`,
      description: "Description here",
      isPublished: false,
    };
    setProjects([newProject, ...projects]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleCreateProject}
          className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          + New Project
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              {project.isPublished && (
                <span className="text-green-600 font-medium text-sm">Published</span>
              )}
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <button
              className="text-blue-600 font-medium hover:underline"
              onClick={() => alert(`Open project ${project.id}`)}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
