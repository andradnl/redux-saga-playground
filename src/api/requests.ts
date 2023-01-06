const API_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUserData() {
  return await fetch(`${API_URL}/users`).then((response) => response.json());
}

export async function fetchUserPosts() {
  return await fetch(`${API_URL}/posts`).then((response) => response.json());
}

export async function fetchPost(id: string) {
  return await fetch(`${API_URL}/posts/${id}`).then((response) =>
    response.json()
  );
}
