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

type Resource = "users" | "posts" | string;

export async function fetchResource(
  resource: Resource,
  params?: Record<string, string>
) {
  const additionalUrlParams = params?.id ? `/${params?.id}` : "";
  const url = `${API_URL}/${resource}${additionalUrlParams}`;

  return await fetch(url).then((response) => response.json());
}
