import api from "./api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const createStudent = async (studentData) => {
  const response = await api.post(
    "/students",
    studentData,
    getAuthHeaders()
  );

  return response.data;
};

export const getStudents = async () => {
  const response = await api.get(
    "/students",
    getAuthHeaders()
  );

  return response.data.students;
};

export const deleteStudent = async (id) => {
  const response = await api.delete(
    `/students/${id}`,
    getAuthHeaders()
  );

  return response.data;
};

export const updateStudent = async (id, studentData) => {
  const response = await api.put(
    `/students/${id}`,
    studentData,
    getAuthHeaders()
  );

  return response.data;
};