import { FaEdit, FaTrash } from "react-icons/fa";

function StudentTable({
  students,
  loading,
  onDelete,
  onEdit,
}) {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-lg font-semibold">
          Loading students...
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Class</th>
            <th className="text-left p-4">Phone</th>
            <th className="text-left p-4">Status</th>
            <th className="text-center p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="text-center py-10 text-slate-500"
              >
                No students found.
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr
                key={student.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {student.name}
                </td>

                <td className="p-4">
                  {student.className}
                </td>

                <td className="p-4">
                  {student.phone}
                </td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {student.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => onEdit(student)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit Student"
                    >
                      <FaEdit size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(student.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Student"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;