import { useState } from 'react';
import { usePosts } from '@context/postContext';
import PostCard from '@components/PostCard';
import PostForm from '@components/PostForm';
import Modal from '@common/Modal';

export default function Posts() {

  const { posts } = usePosts();
  const [open, setOpen] = useState(false);
  const title = 'Nuevo post'

  return (
    <>

      <div className="text-white">
        <header className='flex justify-between py-4'>

          <h1 className='text-2xl text-gray-300 font-bold'>Posts ({posts.length})</h1>

          <button
            type="button"
            className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded"
            onClick={() => setOpen(true)}
          >
            Agregar post
          </button>
        </header>
      </div>

      {/* posts list */}
      <div className='font-medium text-indigo-600 hover:text-indigo-500 p-y4 p-x4'>
        <div className="grid grid-cols-3 gap-4">
          {posts?.map(post => (

            <PostCard post={post} key={`Post-${post.postId}`} />

          ))}
        </div>
      </div>

      {/* post form */}
      <Modal open={open} setOpen={setOpen} title={title}>
        <PostForm setOpen={setOpen} />
      </Modal>
    </>
  );
}