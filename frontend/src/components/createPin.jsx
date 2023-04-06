import React, { useState } from 'react'
import Spinner from './Spinner'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { categories } from '../utils/dataUtils';

const CreatePin = () => {
  const [loading,setLoading]=useState(true)
  const [wrongImageType, setWrongImageType] = useState(true)
  const [imageAsset, setImageAsset] = useState()
  const [about, setAbout] = useState('');
  const [category, setCategory] = useState();
  const [saved,setSaved]=useState(false)
  
  const navigate=useNavigate()
  
 const user=localStorage.getItem('user')
  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') {
      setWrongImageType(false);
      setImageAsset(selectedFile);
    } else {
      
      setWrongImageType(true);
    }
  }

  const postData = async ({pinDetails}) => {
    try {
      
      const response = await fetch(`http://localhost:1337/api/posts`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(pinDetails),
      });
  
      const createdData = await response.json();
      
      if (!response.ok) {
        throw new Error(createdData.message);
      }
  
      console.log('createdData successful:', createdData);
      return
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
  };

  const savePin = () => {
    if (about && imageAsset && category) {
      setSaved(!saved)
      const pinDetails = {
        Description:about,
        Section : category,
        profileImage: imageAsset,
      };
      postData(pinDetails)
      navigate('/');
    } else {
       throw new Error("Error in saving the pin , Check all fields are filled once")
      }
   }

  return (
    <>
      <div className='flex flex-col items-center gap-y-10 w-full h-full  bg-slate-400'>
      <div className=" flex flex-row justify-center items-center bg-red-400  p-4 lg:w-4/5 w-full">
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
            {loading && (
              <Spinner message={'Just wait for a couple of seconds to upload the file'}/>
            )}
            {
              wrongImageType && (
                <p>It&apos;s wrong file type.</p>
              )
            }
            {!imageAsset ? (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-2xl">
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
              <div className="relative h-full">
                <img
                  src={imageAsset}
                  alt="uploaded-pic"
                  className="h-full w-full"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                  onClick={() => setImageAsset(null)}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-6 pl-5 mt-5 w-full">
          
          {user && (
            <div className="flex gap-2 mt-2 mb-2 items-center bg-white rounded-lg ">
              <img
                src={user.image}
                className="w-10 h-10 rounded-full"
                alt="user-profile"
              />
              <p className="font-bold">{user.userName}</p>
            </div>
          )}
          <input
            type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell everyone what your Pin is about"
            className="outline-none text-base sm:text-lg border-b-2 border-gray-200 p-3"
          />
         
          <div className="flex flex-col">
            <div>
              <p className="mb-2 font-semibold text:lg sm:text-xl">Choose Pin Category</p>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value="others" className="sm:text-bg bg-white">Select Category</option>
                {categories.map((item) => (
                  <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              </div>
            <div className="flex justify-center items-end mt-5">
              <button
                type="button"
                onClick={savePin}
                className={`${saved ? 'bg-blue-500':'bg-red-500'} text-white font-bold p-2 rounded-full w-28 outline-none`}
              >
                Save Pin
              </button>
            </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default CreatePin
