import React from 'react'

const PostCard = (props) => {
    return(
        <div className='flex flex-col justify-between items-center'>
            <div className='flex flex-col justify-center bg-slate-400 p-2 m-2 rounded-md w-3/6 shadow-lg'>
                <p className=' text-center font-bold text-xl'>{props.title}</p>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default PostCard;