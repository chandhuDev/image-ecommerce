export default async function getAllPosts(){
    const response = await fetch('http://localhost:5000/post/getAllPosts')
    return response.json()
}
