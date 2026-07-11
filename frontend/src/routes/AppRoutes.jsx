import { Routes, Route, Navigate } from "react-router-dom";

// Auth
import Login from "../pages/auth/Login";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Students
import Students from "../pages/students/Students";

function Register() {
  return <h1>Register Page</h1>;
}

function Teachers() {
  return <h1>Teachers Page</h1>;
}

function Attendance() {
  return <h1>Attendance Page</h1>;
}

function Fees() {
  return <h1>Fees Page</h1>;
}

function Exams() {
  return <h1>Exams Page</h1>;
}

function Settings() {
  return <h1>Settings Page</h1>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />

      <Route path="/teachers" element={<Teachers />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;