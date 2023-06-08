export default async function createPost(data) {
  const response = await fetch(
    `/post/create`,
    {
      method: "POST",
      body: data,
    }
  );
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json();
}
