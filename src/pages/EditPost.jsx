import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            setLoading(true)
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
                setLoading(false)
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    
    if (loading) {
        return (
            <div className='py-12'>
                <Container>
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-slate-600">Loading post...</p>
                    </div>
                </Container>
            </div>
        )
    }
    
  return post ? (
    <div className='py-12'>
        <Container>
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Edit Post</h1>
                <p className="text-lg text-slate-600">Update your post content and settings</p>
            </div>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost