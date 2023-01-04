import api from "../_api/baseApi";

export async function getAllStudent() {
  try {
    const { data } = await api.get("students");
    return data;
  } catch (error) {
    return error;
  }
}

export async function getSingleStudent(id ) {
  try {
    const { data } = await api.get(`student/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export async function addStudent(student) {
  try {
    return await api.post("student", student);
  } catch (error) {
    return error;
  }
}

export async function updateStudent(student) {
  try {
    return await api.patch(`student/${student.id}`, student);
  } catch (error) {
    return error;
  }
}

export async function deleteStudent(id) {
  try {
    return await api.delete(`student/${id}`, id);
  } catch (error) {
    return error;
  }
}
