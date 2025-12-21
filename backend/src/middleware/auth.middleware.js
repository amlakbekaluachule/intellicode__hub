const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  req.user = { id: 1, name: "John Doe", email: "john@example.com" };

  next();
};

export default authMiddleware;
