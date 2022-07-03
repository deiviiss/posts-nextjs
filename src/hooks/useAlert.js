import { useState } from 'react';

const useAlert = (options) => {
  // default elements
  const defaultOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };

  // unstructured to be able to join more options
  const [alert, setAlert] = useState(
    {
      ...defaultOptions,
      ...options,
    }
  );


  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return {
    alert,
    setAlert,
    toggleAlert
  };

};

export default useAlert;