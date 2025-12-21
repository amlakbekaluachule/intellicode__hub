let mockProjects = [
  {
    id: 1,
    name: "First Project",
    description: "This is a sample project",
    published: false,
    ownerId: 1, // Mock user ID
  },
  {
    id: 2,
    name: "Second Project",
    description: "Another example project",
    published: true,
    ownerId: 1,
  },
];

let nextProjectId = mockProjects.length + 1;

export const createProject = (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  const newProject = {
    id: nextProjectId++,
    name,
    description,
    published: false,
    ownerId: 1, 
  };

  mockProjects.push(newProject);

  res.status(201).json({ project: newProject });
};

export const getProjects = (req, res) => {
  
  const userProjects = mockProjects.filter(p => p.ownerId === 1);
  res.status(200).json({ projects: userProjects });
};


export const getProjectById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const project = mockProjects.find(p => p.id === id && p.ownerId === 1);

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  res.status(200).json({ project });
};


export const publishProject = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const project = mockProjects.find(p => p.id === id && p.ownerId === 1);

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  project.published = true;

  res.status(200).json({ project });
};
