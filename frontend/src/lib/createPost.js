export default async function createPost(data){
  const response=await fetch('http://localhost:5000/post/create', {
            method: 'POST',
            body: data
      })
      if(!response.ok){
        throw new Error(response.message)
    }
  return response.json()
 
     
}
