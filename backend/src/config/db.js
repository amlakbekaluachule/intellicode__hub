export const connectDB = async () => {
  try {
    console.log("Database connected successfully (mock)");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); 
  }
};
