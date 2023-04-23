export default async function createPost({description,category,id,imageData}){
     const formData = new FormData()
     const imageDetails={
        "description": description,
        "category": category,
        "userId": id
     } 
     formData.append("files.postImage",imageData,"imagePost.jpg")
     formData.append("data",JSON.stringify(imageDetails))   
    const response = await fetch(`http://localhost:5000/post/update`,{
        method: 'POST', 
        body: formData,
      })
    return response.json()
}
