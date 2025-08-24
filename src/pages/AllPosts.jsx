import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        })
    }, [])
    
    if (loading) {
        return (
            <div className='w-full py-12'>
                <Container>
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-slate-600">Loading posts...</p>
                    </div>
                </Container>
            </div>
        )
    }
    
    if (posts.length === 0) {
        return (
            <div className='w-full py-12'>
                <Container>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-800 mb-4">No Posts Yet</h1>
                        <p className="text-lg text-slate-600 mb-8">Be the first to create a blog post!</p>
                        <Link to="/add-post" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                            Create Post
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
    
  return (
    <div className='w-full py-12'>
        <Container>
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">All Blog Posts</h1>
                <p className="text-lg text-slate-600">Explore all the amazing content from our community</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {posts.map((post) => (
                    <PostCard key={post.$id} {...post} />
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts