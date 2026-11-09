import React, { useEffect, useState } from 'react'
import Top from './Top'
import Sidebar from './Sidebar'
import Filter from './Filter'
import Posts from './posts/Posts'

function Page() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('http://localhost:3000/posts')
            const data = await res.json()

            setPosts(data)
        }

        getPosts()
    }, [])

    return (
        <div className='flex items-start gap-6'>
            <Sidebar />

            <div className='flex flex-col gap-6 p-5 w-full'>
                <Top postCount={posts.length} />
                <Filter />
                <Posts posts={posts} />
            </div>
        </div>
    )
}

export default Page