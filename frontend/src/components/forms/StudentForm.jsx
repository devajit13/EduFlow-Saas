import { useEffect, useState } from "react";
import {
  createStudent,
  updateStudent,
} from "../../services/studentService";

function StudentForm({
  onClose,
  editStudent = null,
  onSuccess,
}) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
    rollNo: "",
    status: "Active",
  });

  const [loading, setLoading] = useState(false);

  // Fill form when editing
  useEffect(() => {
    if (editStudent) {
      setStudent({
        name: editStudent.name || "",
        email: editStudent.email || "",
        phone: editStudent.phone || "",
        className: editStudent.className || "",
        rollNo: editStudent.rollNo || "",
        status: editStudent.status || "Active",
      });
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (editStudent) {
        await updateStudent(editStudent.id, student);

        alert("Student Updated Successfully!");
      } else {
        await createStudent(student);

        alert("Student Added Successfully!");
      }

      onSuccess();

      onClose();

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "500px",
          background: "#fff",
          borderRadius: "15px",
          padding: "30px",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            color: "#2563eb",
          }}
        >
          {editStudent ? "Edit Student" : "Add Student"}
        </h2>

        <form onSubmit={handleSubmit}>
          <Input
            label="Student Name"
            name="name"
            value={student.name}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={student.phone}
            onChange={handleChange}
          />

          <Input
            label="Class"
            name="className"
            value={student.className}
            onChange={handleChange}
          />

          <Input
            label="Roll Number"
            name="rollNo"
            value={student.rollNo}
            onChange={handleChange}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              style={{
                padding: "12px 18px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "12px 18px",
                border: "none",
                borderRadius: "8px",
                background: "#2563eb",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {loading
                ? "Saving..."
                : editStudent
                ? "Update Student"
                : "Save Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
        }}
      >
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        required
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #cbd5e1",
        }}
      />
    </div>
  );
}

export default StudentForm;