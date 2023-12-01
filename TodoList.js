// TodoList.js

let todoList = []; // Initial empty array for todos

// Function to add a new task to the todo list
const addTask = (name) => {
  // Create a new ID based on the last ID in the todoList
  const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;
  const newTodo = { id: newId, name: name, isComplete: false };
  todoList = [...todoList, newTodo];
  return newId; // Return the new todo's ID
};

// Function to clear all tasks from the todo list
const clearAll = () => {
  todoList = []; // Reset the todoList to an empty array
};

// Function to change the status of a task based on its ID
const changeStatus = (id) => {
  todoList = todoList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isComplete: !todo.isComplete };
    }
    return todo;
  });
};

// Function to remove a single task from the todo list
const removeTask = (id) => {
  todoList = todoList.filter((todo) => todo.id !== id);
};

// Optionally, if you need a function to get the current state of the todo list:
const getTodoList = () => {
  return todoList;
};

export { addTask, clearAll, changeStatus, removeTask, getTodoList };
