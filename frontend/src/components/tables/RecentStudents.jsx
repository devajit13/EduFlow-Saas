const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    class: "X",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Riya Das",
    class: "IX",
    phone: "9876543211",
  },
  {
    id: 3,
    name: "Aman Kumar",
    class: "VIII",
    phone: "9876543212",
  },
  {
    id: 4,
    name: "Sneha Roy",
    class: "VII",
    phone: "9876543213",
  },
];

function RecentStudents() {
  return (
    <div
      style={{
        marginTop: "30px",
        background: "#fff",
        borderRadius: "16px",
        padding: "25px",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Recent Students
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Class</th>
            <th align="left">Phone</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td style={{ padding: "15px 0" }}>
                {student.name}
              </td>

              <td>{student.class}</td>

              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentStudents;