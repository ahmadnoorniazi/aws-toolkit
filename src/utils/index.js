import axios from "axios";

const baseUrl = "http://moderenelectric.ml/";

function cloneArray(Objects) {
  return Object.keys(Objects).map(key => ({ ...Objects[key], id: key }));
}

export default cloneArray;

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    Promise.reject(error);
  }
);

export async function getRecord(path) {
  try {
    const product = await axios.get(`${baseUrl}${path}`);
    return product;
  } catch (error) {
    return error;
  }
}

export async function addRecord(path, data) {
  try {
    const product = await axios.post(`${baseUrl}${path}`, data);
    return product;
  } catch (error) {
    return error;
  }
}

export async function updateRecord(path, id, data) {
  try {
    const product = await axios.put(`${baseUrl}${path}/${id}`, data);
    return product;
  } catch (error) {
    return error;
  }
}

export async function deleteRecord(path, id) {
  try {
    const product = await axios.delete(`${baseUrl}${path}/${id}`);
    return product;
  } catch (error) {
    return error;
  }
}
