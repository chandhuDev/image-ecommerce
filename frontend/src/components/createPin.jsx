import React, { useEffect, useState } from 'react'
import Spinner from './spinner'
import {ViewFeed} from './index'
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { categories,user } from '../utils/dataUtils';
import { createPost } from '../lib/index';


const CreatePin = () => {
  const [loading,setLoading]=useState(false)
  const [wrongImageType, setWrongImageType] = useState(true)
  const [imageAsset, setImageAsset] = useState()
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [saved,setSaved]=useState(false)
  const navigate=useNavigate()
  
const uploadImage = (e) => {
    const selectedFile = e.target.files[0]
    setLoading(true)
    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff' || selectedFile.type === 'image/webp') {
      setWrongImageType(false);
      setImageAsset(selectedFile);
      setLoading(false)
    } else {
      setWrongImageType(true);
      setLoading(false)
    }
  }

 
 const savePin =async () => {
    if (description && imageAsset && category) {
      const formdata=new FormData()
      formdata.append('description',description)
      formdata.append('category',category)
      formdata.append('userId',user?._id)
      formdata.append('postImage',imageAsset)
      postData(formdata)
    } else {
       throw new Error("Error in saving the pin , Check all fields are filled once")
    }
}


const postData = async (data) => {
    const createdPost = createPost(data)
    const newPost =await createdPost
    setSaved(!saved)
    window.alert("Hurray , New Pin created Succesfully!")
    navigate('/home')  
};

useEffect(()=>{
},[saved])


  return (
    <>
      <div className='flex flex-col items-center gap-y-10 w-full h-full '>
      <div className=" flex flex-row justify-center items-center p-2  w-full ">
        <div className=" p-2 flex w-full ">
          <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 md:w-3/5 h-380 w-2/4">
            {loading && (
              <Spinner message={'Just wait for a couple of seconds to upload the file'}/>
            )}
            {
              wrongImageType && (
                <p>It&apos;s wrong file type.</p>
              )
            }
            {!imageAsset ? (
              <label>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col justify-center items-center cursor-pointer">
                    <p className="font-bold text-2xl ">
                      <AiOutlineCloudUpload />
                    </p>
                    <p className="text-lg">Click to upload</p>
                  </div>
                  <p className="mt-32 text-gray-400">
                    Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
                  </p>
                </div>
                <input
                  type="file"
                  name="upload-image"
                  onChange={uploadImage}
                  className="w-0 h-0"
                />
              </label>
            ) : (
              <div className="relative h-full flex flex-col">
                <img
                  src={URL.createObjectURL(imageAsset)}
                  alt="uploaded-pic"
                  className="h-full object-cover w-full"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-white md:text-2xl text-sm cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                  onClick={() => setImageAsset(null)}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
          <div className="flex  flex-col gap-2 pl-3 ml-3 md:mt-3 mt-1 w-2/5">
          {user && (
            <div className="flex gap-2 md:mt-2 mb-2 items-center rounded-lg ">
              <img
                src={user?.profileImage}
                className="w-10 h-10 rounded-full"
                alt="user-profile"
              />
              <p className="font-bold">{user?.username}</p>
            </div>
          )}
          <label htmlFor="description" className="block md:text-xl text-base text-gray-700 font-semibold">
             Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell everyone what your Pin is about"
            className="outline-none text-base md:text-lg border-b-2 border-gray-200 md:p-3 p-1"
          />
         <div className="flex flex-col">
            <div>
              <p className="mb-2 font-semibold text:lg sm:text-xl">Choose Pin Category</p>
              <select
                onChange={(e) => {
                  setCategory(e.target.value.toLowerCase());
                }}
                className="outline-none w-4/5 text-base border-b-2 border-gray-200 md:p-2  rounded-md cursor-pointer"
              >
                <option value="others" className="text-xs md:text-xl bg-white">Select Category</option>
                {categories.map((item) => (
                  <option className="md:text-base text-xs border-0 outline-none capitalize bg-white text-black " value={item.name} key={item.name} >
                    {item.name}
                  </option>
                ))}
              </select>
              </div>
            <div className="flex justify-center items-end mt-5">
              <button
                type="button"
                onClick={savePin}
                className={` bg-blue-500 text-white font-bold p-2 rounded-full md:w-28 w-20 outline-none`}
              >
                Save Pin
              </button>
            </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      <ViewFeed />
    </>
  )
}

export default CreatePin
