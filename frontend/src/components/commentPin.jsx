import React from 'react'

const CommentPin = ({comment}) => {
const commentArray=comment?.map((comment)=>{
    return {
        text: comment?.text,
        image: comment?.image,
        name: comment?.name
    }
})

if(!comment){
  return <div>
     <div className='w-full h-full  flex justify-center items-center mx-auto px-4 py-8'>
       <h2 className='fornt-bold text-2xl font-serif'>There is not comments to show up for this Image</h2>
  </div>
  </div>
}

return (
    <>
      <div className="w-full h-full  flex flex-col items-start  mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div className="space-y-4 flex flex-col w-full">
      {commentArray.map((comment, index) => (
        <Comment key={index}  {...comment} />
      ))}
    </div>
    </div>
    </>
  )
}

function Comment({ text,image,name }) {
  return (
    <div className="w-full space-x-4 px-4 py-3 flex flex-col text-2xl gap-y-4 border border-gray-200 bg-white/90 shadow-xl rounded-lg">
      <div className='flex flex-row gap-x-3 ml-3'>
        <img className="w-8 h-8 rounded-full" src={image} alt='profile picture'/>
        <p className="text-gray-900/80  font-semibold">{name}</p>
      </div>
      <h3 className='text-xl text-start'>{text}</h3>
    </div>
  );
}

export default CommentPin
