export default async function getAllPosts() {
  const response = await fetch(
    `/post/getAllPosts`
  );
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json();
}
