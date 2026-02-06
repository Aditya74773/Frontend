import React, { useState, useEffect } from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])

  const getAllPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/get-Posts')
      setPosts(response.data.posts || [])
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <h1 className="text-4xl text-gray-600 my-12">Feed</h1>
      <ul className="mt-10 flex flex-col gap-6">
        {posts.map((post, idx) => (
          <li
            key={post._id || idx}
            className="flex flex-col gap-4 w-96 border-2 border-black p-4 rounded-lg"
          >
            <p className="text-xs text-gray-600">Posted by: {post.author.username}</p>
            <p className="text-center font-semibold text-lg">{post.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Likes: {post.likes?.length ?? 0}</span>
                <span className="text-sm text-gray-500">Comments: {post.numberOfComments ?? 0}</span>
              </div>
              <FaRegThumbsUp className="text-2xl" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Feed