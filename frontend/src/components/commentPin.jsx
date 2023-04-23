import React from 'react'

const CommentPin = ({comment}) => {
const commentArray=comment.map((comment)=>{
    return {
        text: comment.text,
        image: comment.image,
    }
})

if(comment.length===0){
  return <div>
     <div className='w-full h-full bg-slate-400 flex justify-center items-center mx-auto px-4 py-8'>
       <h2 className='fornt-bold text-2xl font-serif'>There is not comments to show up for this Image</h2>
     </div>
  </div>
}

  return (
    <>
      <div className="w-full h-full bg-slate-400 flex flex-col items-start  mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex-col">
        {commentArray.map((comment) => (
          <div key={comment._id} className="bg-white rounded-lg shadow-md ml-2 flex flex-row">
            <p className=" font-serif text-2xl text-justify">{" - "}{comment.text}<span className='w-10 h-10 rounded-full'><img src={comment.image} alt='user image'/></span></p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default CommentPin
