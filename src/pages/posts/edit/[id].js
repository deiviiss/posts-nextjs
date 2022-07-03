import PostForm from '../../../components/PostForm';
import { useState } from 'react';
import Modal from '../../../common/Modal';

export default function EditPost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PostForm setOpen={setOpen} />
      {/* post form */}
      <Modal open={open} setOpen={setOpen}>
      </Modal>
    </>)
};
