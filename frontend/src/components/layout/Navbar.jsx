import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        height: "70px",
        background: "#ffffff",
        borderRadius: "15px",
        padding: "0 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 3px 12px rgba(0,0,0,.08)",
        marginBottom: "30px",
      }}
    >
      <div>
        <h2
          style={{
            color: "#2563eb",
          }}
        >
          Dashboard
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          Welcome back!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <FaBell
          size={22}
          color="#475569"
          style={{
            cursor: "pointer",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUserCircle
            size={35}
            color="#2563eb"
          />

          <div>
            <strong>
              {user?.name || "Admin"}
            </strong>

            <p
              style={{
                fontSize: "13px",
                color: "#64748b",
              }}
            >
              {user?.role || "ADMIN"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;