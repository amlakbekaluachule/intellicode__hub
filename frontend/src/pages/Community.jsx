import React from "react";

const mockProjects = [
  { id: 1, name: "Open Source Blog", description: "A blog platform for everyone", owner: "Alice" },
  { id: 2, name: "Weather App", description: "Real-time weather updates", owner: "Bob" },
  { id: 3, name: "Chat App", description: "Simple messaging platform", owner: "Charlie" },
  { id: 4, name: "Portfolio Site", description: "Showcase your projects", owner: "Dana" },
];

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Community Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-500 text-sm">Owner: {project.owner}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
