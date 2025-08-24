import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`} className='block group'>
        <div className='w-full bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300 group-hover:-translate-y-1'>
            <div className='w-full mb-4 overflow-hidden rounded-lg'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300' />
            </div>
            <h2 className='text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2'>
                {title}
            </h2>
        </div>
    </Link>
  )
}


export default PostCard