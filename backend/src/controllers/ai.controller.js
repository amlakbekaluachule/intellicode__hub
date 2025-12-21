export const completeCode = (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Code input is required" });
  }

  const completion = `// Mock completion for: ${code.slice(0, 30)}...`;

  res.status(200).json({ completion });
};

export const explainCode = (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Code input is required" });
  }

  const explanation = `This is a mock explanation of the provided code snippet.`;

  res.status(200).json({ explanation });
};
