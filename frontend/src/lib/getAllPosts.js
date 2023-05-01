export default async function getAllPosts(){
    const response = await fetch('http://localhost:5000/post/getAllPosts')
    if(!response.ok){
        throw new Error(response.message)
    }
    return response.json()
}
