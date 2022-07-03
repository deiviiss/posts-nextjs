import { usePosts } from '@context/postContext';
import Image from 'next/image'
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function PostCard({ post }) {

  const router = useRouter();

  const { deletePost } = usePosts();

  const handleDelete = (postId) => {

    toast((t) => (
      <div>
        <p className='text-white py-3'>¿Seguro que quieres borrar el <strong>post {postId}</strong> ?</p>

        <div className='flex items-center justify-between'>
          <button className="bg-red-600 hover:bg-red-500  text-white px-3 py-2 rounded-sm mx-2"
            onClick={() => {
              deletePost(postId)
              toast.dismiss(t.id)
            }}
          >Borrar</button>

          <button className="bg-indigo-500 hover:bg-indigo-600  text-white px-3 py-2 rounded-sm mx-2"
            onClick={() => { toast.dismiss(t.id) }}
          >Cancelar</button>
        </div>
      </div>
    ), {
      style: {
        background: "#202020"
      }
    })

  }

  return (
    <>
      <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
        onClick={() => { router.push(`/posts/edit/${post.postId}`); }}
      >
        <div className="px-4 py-7">

          <div className="flex justify-between">
            <h3>{post.post}</h3>
            <button className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(post.postId)
              }}
            >Borrar</button>
          </div>
          <p>{post.description}</p>
        </div>

        {post.image && <Image src={post.image.url} className="w-full h-96 object-cover" alt={post.post} />}
      </div>
    </>
  );
}
