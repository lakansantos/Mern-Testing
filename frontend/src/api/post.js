import http, {parseSearchToObject} from "../utils/http";

export function getPosts(data) {
  return http("GET", "/posts", parseSearchToObject(data));
}

export function getPost(id) {
  return http("GET", `/posts/${id}`);
}
export function addPost(data) {
  return http("POST", "/posts", data);
}

export function deletePost(id) {
  return http("DELETE", `/posts/${id}`);
}

export function editPost(id, data) {
  return http("PUT", `/posts/${id}`, data);
}

export function searchPost(query) {
  return http("GET", "/search", query);
}
