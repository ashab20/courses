import api from "../_api/baseApi";

export async function checkUserEmail(data) {
  const res = await api.post("/usercheck", data, {});
  return res;
}

export async function registrationApi(user) {

  const { data } = await api.post("/registration", user);
  return data;
}

export async function loginApi(user) {

    const { data } = await api.post("/login", user);
    return data;
}


export async function logincheck() {

    const { data } = await api.get("/logincheck");
    return data;
}



export async function logout() {

    const { data } = await api.post("/logout");
    return data;
}
