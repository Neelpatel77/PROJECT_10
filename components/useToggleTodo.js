import { useState } from 'react';

const useToggleTodo = (initialIsComplete) => {
  const [isComplete, setIsComplete] = useState(initialIsComplete);

 
  const toggle = () => {
    setIsComplete(!isComplete);
  };

  return [isComplete, toggle];
};

export default useToggleTodo;
