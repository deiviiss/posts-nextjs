//endpoints diccionario
const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  posts: {
    getPosts: () => {
      return `${API}/api/${VERSION}/posts`
    },
    getPost: (id) => {
      return `${API}/api/${VERSION}/posts/${id}`
    },
    addPost: `${API}/api/${VERSION}/posts`,
    updatePost: (id) => `${API}/api/${VERSION}/posts/${id}`,
    deletePost: (id) => `${API}/api/${VERSION}/posts/${id}`
  }
}
console.log('from index dictionary');
console.log(endPoints);
export default endPoints;