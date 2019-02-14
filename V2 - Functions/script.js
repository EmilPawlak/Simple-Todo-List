var todos = ['item1', 'item2', 'item3']

// It should have a function to display todos
function displayTodos() {
  console.log('My Todos:', todos);
}

// It should have a function to add new todos
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// It should have a function to change a todo
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// It should have a function to delete a todo
function deleteTodos(position) {
  todos.splice(position, 1);
  displayTodos();
}
