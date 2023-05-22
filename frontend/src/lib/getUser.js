export default async function getUser(id) {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/user/getUserInfo/${id}`
  );
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json();
}
