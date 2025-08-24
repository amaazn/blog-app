import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='flex items-center space-x-2'>
      <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
        <span className='text-white font-bold text-lg'>B</span>
      </div>
      <span className='font-bold text-xl text-slate-800'>BlogApp</span>
    </div>
  )
}

export default Logo