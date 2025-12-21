const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const handleResponse = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "An error occurred");
  }
  return data;
};
export const createProject = async (projectData) => {
  const response = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(projectData),
  });
  return handleResponse(response);
};

export const getProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects`, {
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(response);
};
export const getProjectById = async (id) => {
  const response = await fetch(`${BASE_URL}/projects/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(response);
};
export const publishProject = async (id) => {
  const response = await fetch(`${BASE_URL}/projects/${id}/publish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(response);
};
