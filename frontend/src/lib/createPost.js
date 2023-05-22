export default async function createPost(data) {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/post/create`,
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
