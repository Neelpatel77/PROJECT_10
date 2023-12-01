import { useState } from 'react';

// Custom hook for toggling todo completion status
const useToggleTodo = (initialState) => {
  const [isComplete, setIsComplete] = useState(initialState);

  const toggle = () => {
    setIsComplete(!isComplete);
  };

  return [isComplete, toggle];
};

export default useToggleTodo;
 