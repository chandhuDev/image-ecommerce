export default async function getUser(id) {
  const response = await fetch(
    `/user/getUserInfo/${id}`
  );
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json();
}
