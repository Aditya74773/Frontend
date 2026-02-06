import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { AiTwotoneLike } from "react-icons/ai";

const Feed = () => {
  // state variable for posts

  const [posts, setPosts] = useState([]);
  console.log("posts", posts);

  const getAllPosts = async () => {
    try {
      const response = await axios.get("https://backend-smoky-sigma-70.vercel.app/api/get-Posts");
      setPosts(response.data.posts);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-gray-600 my-12"> Feed</h1>
      <ul className="mt-10 flex flex-col gap-6">
        {posts.map((post, idx) => (
          <div keyn = {idx} className=" flex flex-col gap-4 w-96 border-2 border-black p-4 rounded-lg">
            <li className="text-xs text-gray-600">
              Posted By : {post.author.username}
            </li>
            <li className="text-center font-semibold text-lg" key={idx}>
              {post.content}
            </li>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <span className="text-sm text-gray-500">Likes: {post.likes?.length ?? 0}</span>
                <span className="text-sm text-gray-500">Comments: {post.numberOfComments ?? 0}</span>
              </div>
              <div>
              
                <AiTwotoneLike className="text-2xl"/>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Feed;