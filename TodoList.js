let todoList = [];

const addTask = (name) => {
  const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;
  const newTodo = { id: newId, name: name, isComplete: false };
  todoList = [...todoList, newTodo];
  return newId;
};

const clearAll = () => {
  todoList = [];
};

const changeStatus = (id) => {
  todoList = todoList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isComplete: !todo.isComplete };
    }
    return todo;
  });
};

const removeTask = (id) => {
  todoList = todoList.filter((todo) => todo.id !== id);
};

const getTodoList = () => {
  return todoList;
};

export { addTask, clearAll, changeStatus, removeTask, getTodoList };
