import Axios from 'axios'

export default async function createPost({description,category,userId,imageData}){
     const formData = new Formdata()
     const imageData={
        "description": description,
        "category": category,
        "userId": userId
     } 
     formData.append("files.postImage",imageData,"imagePost.jpg")
     formData.append("data",JSON.stringify(imageData))   
    const response = await Axios.post(`http://localhost:5000/post/update`,{
        formData
    })
    return response
}
