import axios from 'axios';
import endPoints from '@services/api';

const getPostsRequest = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    },
  };

  //endpoints diccionary
  const response = await axios.get(endPoints.posts.getPosts(), config)

  return response.data;
}

const addPostsRequest = async (post) => {

  const form = new FormData();

  // add post to form
  for (let key in post) {
    form.append(key, post[key])
  }

  // request axios endpoints diccionary
  const response = await axios.post(endPoints.posts.addPost, form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })

  return response.data;
}

const deletePostsRequest = async (postId) => {

  // request axios endpoints diccionary
  const response = await axios.delete(endPoints.posts.deletePost(postId));

  return response
}

const getPostRequest = async (postId) => {
  // request axios endpoints diccionary
  const response = await axios.get(endPoints.posts.getPost(postId));

  return response;
}

const updatePostRequest = async (postId, newFields) => {

  const response = await axios.put(endPoints.posts.updatePost(postId), newFields);

  return response.data;
}

export { getPostsRequest, addPostsRequest, deletePostsRequest, getPostRequest, updatePostRequest };