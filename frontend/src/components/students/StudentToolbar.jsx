import Button from "../ui/Button";

function StudentToolbar({
  totalStudents,
  search,
  setSearch,
  onAddStudent,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          🎓 Student Management
        </h1>

        <p className="text-slate-500 mt-1">
          Total Students:{" "}
          <span className="font-semibold text-blue-600">
            {totalStudents}
          </span>
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="🔍 Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button onClick={onAddStudent}>
          + Add Student
        </Button>
      </div>
    </div>
  );
}

export default StudentToolbar;