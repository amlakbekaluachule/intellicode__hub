const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const token = "mock-jwt-token";

  res.status(200).json({
    user: mockUser,
    token,
  });
};

export const getMe = (req, res) => {
  res.status(200).json({ user: mockUser });
};
