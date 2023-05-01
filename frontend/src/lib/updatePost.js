export default async function updatePost(data){
  const response= await fetch('http://localhost:5000/post/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
     body: JSON.stringify(data)
   })
   if(!response.ok){
    throw new Error(response.message)
    }
    return response.json()
}
