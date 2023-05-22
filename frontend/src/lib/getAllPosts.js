export default async function getAllPosts() {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/post/getAllPosts`
  );
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json();
}
