export default async function updatePost(data) {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/post/update`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json();
}
