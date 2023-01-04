import api from "../_api/baseApi";

export async function getAllCourse() {
  const { data } = await api.get("courses");
  return data;
}

export async function getSingleCourse(id ) {
  
    const { data } = await api.get(`course/${id}`);
    return data;
}

export async function addCourse(course) {  
    const {data} = await api.post("course", course);
  return data;
}

export async function updateCourse(course) {
  try {
    return await api.patch(`course/${course.id}`, course);
  } catch (error) {
    return error;
  }
}

export async function deleteCourse({ id }) {
  try {
    return await api.delete(`course/${id}`, id);
  } catch (error) {
    return error;
  }
}
