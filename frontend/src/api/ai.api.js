export const getCompletion = async (prompt) => {
  if (!prompt) {
    throw new Error("Prompt is required");
  }
  await new Promise((resolve) => setTimeout(resolve, 500)); 

  return {
    completion: `Mock completion for: "${prompt.slice(0, 50)}..."`,
  };
};

export const explainCode = async (code) => {
  if (!code) {
    throw new Error("Code is required");
  }

  await new Promise((resolve) => setTimeout(resolve, 500)); 
  return {
    explanation: "This is a mock explanation of the provided code snippet.",
  };
};
