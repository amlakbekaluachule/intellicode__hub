const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const handleResponse = async (response) => {
  let data;
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.error || data.message || "An error occurred");
  }
  return data;
};

// Accept a single object { email, password }
export const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

export const logout = async () => {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(response);
};

export const getCurrentUser = async () => {
  const response = await fetch(`${BASE_URL}/auth/me`, {
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(response);
};
