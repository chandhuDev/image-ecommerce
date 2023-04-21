import Axios from 'axios'

export default async function getPost({userId}){
    const response = await Axios.get('http://localhost:5000/post/viewInfo',{
        "userId": userId
    })
    return response
}
