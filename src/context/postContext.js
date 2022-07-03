import { useState, createContext, useContext, useEffect } from 'react';
import { getPostsRequest, addPostsRequest, deletePostsRequest, getPostRequest, updatePostRequest } from '@/services/api/PostsRequest';

// container post context
const PostContext = createContext();

// use post context
export const usePosts = () => {
  const context = useContext(PostContext);
  return context;
}

// post context

// propagate post context
export const PostProvider = ({ children }) => {

  // posts
  const [posts, setPosts] = useState([]);

  // save state post
  const getPosts = async () => {
    const response = await getPostsRequest();

    setPosts(response);
  }

  // onload page 
  useEffect(() => {
    getPosts()
  }, [])

  // add post
  const addPost = async (post) => {
    const response = await addPostsRequest(post)

    setPosts([...posts, response])
  }

  // delete post
  const deletePost = async (postId) => {

    const response = await deletePostsRequest(postId)

    if (response.status === 204) {
      setPosts(posts.filter((post) => post.postId != postId))
    }
  }

  // get post by id
  const getPost = async (postId) => {

    const response = await getPostRequest(postId)

    return response.data
  }

  const updatePost = async (postId, newFields) => {

    const data = await updatePostRequest(postId, newFields);

    setPosts(posts.map((post => (post.postId === data.postId ? data : post))));
  }

  // component con el context
  return <PostContext.Provider value={{ posts, setPosts, getPosts, addPost, deletePost, getPost, updatePost }}>
    {children}
  </PostContext.Provider>
}