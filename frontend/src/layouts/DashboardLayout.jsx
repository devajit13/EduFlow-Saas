import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaMoneyBill,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f1f5f9",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "#0f172a",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "25px",
            fontSize: "28px",
            fontWeight: "bold",
            borderBottom: "1px solid #1e293b",
          }}
        >
          🎓 EduFlow
        </div>

        <nav
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          <MenuItem icon={<FaHome />} text="Dashboard" to="/dashboard" />
          <MenuItem icon={<FaUserGraduate />} text="Students" to="/students" />
          <MenuItem icon={<FaChalkboardTeacher />} text="Teachers" to="/teachers" />
          <MenuItem icon={<FaCalendarCheck />} text="Attendance" to="/attendance" />
          <MenuItem icon={<FaMoneyBill />} text="Fees" to="/fees" />
          <MenuItem icon={<FaClipboardList />} text="Exams" to="/exams" />
          <MenuItem icon={<FaCog />} text="Settings" to="/settings" />
        </nav>

        <div style={{ padding: "20px" }}>
          <button
            onClick={logout}
            style={{
              width: "100%",
              padding: "12px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div
        style={{
          flex: 1,
          padding: "25px",
        }}
      >
        <Navbar />

        {children}
      </div>
    </div>
  );
}

function MenuItem({ icon, text, to }) {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        color: "white",
        textDecoration: "none",
        padding: "14px",
        borderRadius: "10px",
        background: "#1e293b",
        marginBottom: "10px",
      }}
    >
      {icon}
      {text}
    </Link>
  );
}

export default DashboardLayout;