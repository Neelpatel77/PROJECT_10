import { useState } from 'react';

const useToggleTodo = (initialIsComplete) => {
  const [isComplete, setIsComplete] = useState(initialIsComplete);

  // Function to toggle the completion status
  const toggle = () => {
    setIsComplete(!isComplete);
  };

  return [isComplete, toggle];
};

export default useToggleTodo;
