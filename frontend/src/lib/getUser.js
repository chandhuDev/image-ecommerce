import Axios from 'axios'

export default async function getUser({userId}){
    const response = await Axios.get(`http://localhost:5000/user/getUserInfo/${userId}`)
    return response
}
