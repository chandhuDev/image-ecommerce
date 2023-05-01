export default async function getUser(id){
  const response = await fetch(`http://localhost:5000/user/getUserInfo/${id}`)
    if(!response.ok){
        throw new Error(response.message)
    }
    return response.json()
}
