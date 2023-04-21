import Axios from 'axios'

export default async function getAllPosts(){
    const response = await Axios.get('http://localhost:5000/post/viewInfo')
    return response
}
