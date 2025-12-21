import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import EditorPage from "./pages/EditorPage.jsx";
import CommunityPage from "./pages/CommunityPage.jsx";

const App = () => {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/editor/:projectId" element={<EditorPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Router>
  );
};

export default App;
