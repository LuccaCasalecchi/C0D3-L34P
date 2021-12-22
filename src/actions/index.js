import { ADD_POST, EDIT_POST, DELETE_POST, RECEIVED_DATA } from "./types";
import api from "./api";

export async function fetchPosts(dispatch) {
  const response = await api.get("");
  dispatch({ type: RECEIVED_DATA, data: response.data.results });
}

export function saveNewPost(data) {
  return async function saveNewPostThunk(dispatch) {
    const response = await api.post("", data);
    dispatch({ type: ADD_POST, data: response.data });
  };
}

export function editPost(id, data) {
  return async function editPostThunk(dispatch) {
    const response = await api.patch(`/${id}/`, data);
    dispatch({ type: EDIT_POST, data: response.data });
  };
}

export function deletePost(id) {
  return async function deletePostThunk(dispatch) {
    await api.delete(`/${id}/`);
    dispatch({ type: DELETE_POST, id });
  };
}
