import Link from 'next/link';
import { BeakerIcon } from '@heroicons/react/solid'

export default function Home() {

  return (

    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-white text-4xl p-y4'>Home</h1>
        <div>
          <BeakerIcon className="h-19 w-20 text-white" />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <h1 className='text-white text-4xl p-y4 p-x1'>Navbar</h1>
        <div className='px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded'>


          <Link href={'/posts'}>Lista de posts</Link>
        </div>
      </div>
    </>
  );
}