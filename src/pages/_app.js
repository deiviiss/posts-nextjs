import { Toaster } from 'react-hot-toast';
import { PostProvider } from '@/context/postContext';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 container m-auto'>
        <PostProvider>
          <Component {...pageProps} />
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default MyApp;
