import api from "../_api/baseApi";

export async function getAllCountry() {
  const { data } = await api.get("countries");
  return data;
}

export async function getDivion(id) {
  const { data } = await api.get(`divisons/${id}`);
  return data;
}

export async function getDistricts(id) {
  const { data } = await api.get(`districts/${id}`);
  return data;
}
