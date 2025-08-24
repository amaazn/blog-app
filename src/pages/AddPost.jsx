import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-12'>
        <Container>
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Create New Post</h1>
                <p className="text-lg text-slate-600">Share your thoughts and ideas with the world</p>
            </div>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost