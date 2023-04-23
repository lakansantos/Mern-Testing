import http from "../utils/http";

export function getPosts() {
    return http('GET', '/posts')
}


export function getPost(id) {
    return http('GET', `/posts/${id}`)
}
export function addPost(data) {
    return http('POST', '/posts', data);
}


export function deletePost(id) {
    return http('DELETE', `/posts/${id}`)
}

  