import http from "../utils/http";

export function getPosts() {
    return http('GET', '/posts')
}
export function addPost(data) {
    return http('POST', '/posts', data);
}

  