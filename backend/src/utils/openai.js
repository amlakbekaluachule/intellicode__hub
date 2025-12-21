export const getAIResponse = async (prompt) => {
  if (!prompt) {
    throw new Error("Prompt text is required");
  }

  const mockResponse = `Mock AI response for prompt: "${prompt.slice(0, 50)}..."`;

  return mockResponse;
};