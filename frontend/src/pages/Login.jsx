import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login } from "../api/auth.api"; // make sure this calls your backend

const LoginPage = () => {
  const { setUser } = useContext(AuthContext); // update user in context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const userData = await login({ email, password }); // call backend
      setUser(userData); // save in context
      console.log("Login successful:", userData);
      // Redirect to dashboard or editor
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
