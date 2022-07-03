import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { usePosts } from '@context/postContext';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { StopIcon } from '@heroicons/react/outline'
import * as Yup from "yup";

export default function FormPost({ setOpen }) {
  const { addPost, getPost, updatePost } = usePosts();
  // default post
  const [post, setPost] = useState({
    post: '',
    description: '',
    image: null
  });

  const router = useRouter();
  if (!router.isReady) return;

  const params = router.query;

  useEffect(() => {
    if (params.id) {
      (async () => {
        const data = await getPost(params.id)
        setPost(data)
      })();
    }
  }, [])

  // close modal, redirect to posts list
  // after save post on state, redirect to posts list

  // component title modal
  const HeaderForm = (id) => {
    if (id) {

      return (
        <header className='flex justify-between items-center py-4 text-white'>
          <h3 className='text-xl'>Post</h3>

          <Link href={'/posts'} className='text-gray-400 text-sm hover:text-gray-400'>Atrás</Link>
        </header>
      )
    }

  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-zinc-800 p-10 shadow-md shadow-black">

          {HeaderForm(params?.id)}

          <Formik

            initialValues={post}

            validationSchema={Yup.object({
              post: Yup.string().required('Ingresa el post'),
              description: Yup.string().required('Ingresa la descripción'),
              // image: Yup.object().required('Carga la imagen')
            })}

            // send form
            onSubmit={(values, actions) => {
              if (params.id) {
                updatePost(params.id, values);
                router.push(`/posts/`);
              } else {
                // on context
                addPost(values);
                setOpen(false);
              }

              actions.setSubmitting(false)
            }}

            enableReinitialize
          >

            {/* formulario */}
            {({ handleSubmit, setFieldValue, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <label htmlFor='post' className='text-sm block font-bold text-gray-400 pt-2 pb-1'>Título</label>
                <Field
                  name='post' placeolder='Título' className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                <ErrorMessage component='p' className='text-red-400 text-sm' name='post' />

                <label htmlFor='description' className='text-sm block font-bold text-gray-400 pt-2 pb-1'>Descripción</label>
                <Field
                  component='textarea'
                  rows={3}
                  name='description' placeolder='Descripción' className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' />
                <ErrorMessage component='p' className='text-red-400 text-sm' name='description' />


                <label htmlFor='image' className='text-sm block font-bold text-gray-400 pt-2 pb-1'>Imagen</label>
                <input type="file" name='image' className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
                  onChange={(e) => setFieldValue('image', e.target.files[0])}
                />
                <ErrorMessage component='p' className='text-red-400 text-sm' name='image' />

                <div className="flex justify-center py-4">
                  <button type='submit' className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disable:bg-indigo-400'
                    disabled={isSubmitting}
                  >{isSubmitting ? (
                    <StopIcon className='animate-spin h-5 w-5' />
                  ) : 'Guardar'}
                  </button>
                </div>
              </Form>
            )}

          </Formik>
        </div>
      </div>
    </>
  );
}
