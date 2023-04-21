import Axios from 'axios'

export default async function updatePost({comment,postId,like,userId}){
    const response = await Axios.put(`http://localhost:5000/post/update`,{
        "comment":comment,
        "postId":postId,
        "like":like,
        "userId":userId
    })
    return response
}
