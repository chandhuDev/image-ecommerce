import React from 'react'

const CommentPin = ({comments}) => {
const commentArray=comments.data.attributes.comments.data.map((comment)=>{
    return {
        body: comment.attributes.Comment,
        name: comment.attributes.userlist.data.attributes.username,
        id:comment.id
    }
})
   
if(commentArray.length===0){
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
          <div key={comment.id} className="bg-white rounded-lg shadow-md ml-2 flex flex-row">
            <p className=" font-serif text-2xl text-justify">{" - "}{comment.body}<span className="text-gray-500 text-xl font-sans ml-3">{" - By  "}{comment.name}</span></p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default CommentPin
