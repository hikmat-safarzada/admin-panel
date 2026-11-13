import { useEffect, useState } from 'react'
import Top from './Top'
import Sidebar from './Sidebar'
import Filter from './Filter'
import Posts from './posts/Posts'
import CreatePost from './crud/CreatePost'
import DeletePost from './crud/DeletePost'
import Edit from './crud/Edit'
const baseUrl = 'http://localhost:3000/posts'

function Page() {
    const [posts, setPosts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState(null)
    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch(baseUrl)
            const data = await res.json()

            setPosts(data)
        }
        getPosts()
    }, [])

    const createPosts = async (newPost) => {
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        const data = await res.json()

        setPosts(prev => [...prev, data])
    }

    const handleDelete = async (id) => {
        setSelectedPostId(id);
        setIsDeleteModalOpen(true);
    }


    const deletePost = async (id) => {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        })

        if (res.ok) {
            setPosts(prev => prev.filter(post => post.id !== id))
            setIsDeleteModalOpen(false)
        }
    }

    const handleEdit = async (id) => {
        setSelectedPostId(id);
        setIsEditModalOpen(true);
    }

    const editPost = async (id, updatedData) => {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        const data = await res.json()
        setPosts(prev => prev.map(post => post.id === id ? data : post))
        return true
    }
    return (
        <div className='flex items-start gap-6'>
            <Sidebar />

            <div className='flex flex-col gap-6 p-5 w-full'>
                <Top postCount={posts.length} onAddClick={setIsModalOpen} />
                <Filter />
                <Posts posts={posts} onDelete={handleDelete} onEdit={handleEdit} />
            </div>

            {
                isModalOpen && (

                    <CreatePost
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={createPosts}
                    />

                )
            }
            {
                isDeleteModalOpen && (
                    <DeletePost onClose={() => setIsDeleteModalOpen(false)}
                        onConfirm={() => deletePost(selectedPostId)} item={posts.find(post => post.id === selectedPostId)} />
                )
            }
            {
                isEditModalOpen && (
                    <Edit 
                    item={posts.find(post => post.id === selectedPostId)}
                    onClose={() => setIsEditModalOpen(false)} 
                    onSubmit={editPost} />
                )
            }
        </div>
    )
}

export default Page