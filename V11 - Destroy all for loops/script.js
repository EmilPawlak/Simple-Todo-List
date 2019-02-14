var todoList = {
  todos: [

  ],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    this.todos.forEach(function(todooo) {
      if (todooo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todooo) {
      if (completedTodos === totalTodos) {
        todooo.completed = false;
      } else {
        todooo.completed = true;
      }
    })
  }
};

var handlers = {
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');

    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var todoChangeTextInput = document.getElementById('todoChangeTextInput');
    var todoChangePositionInput = document.getElementById('todoChangePositionInput');

    todoList.changeTodo(todoChangePositionInput.value, todoChangeTextInput.value);
    todoChangeTextInput.value = '';
    todoChangePositionInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');

    todoList.toggleCompleted(toggleCompletedPositionInput.value);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function(){
    var todosOl = document.querySelector('ol');
    todosOl.innerHTML = '';
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText + ' ';
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText + ' ';
      };

      todoLi.id = position;

      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosOl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';

    return deleteButton;
  },
  setUpEventListener: function () {
    var todosOl = document.querySelector('ol')

    todosOl.addEventListener('click', function(event){
      var elementClicked = event.target;

      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListener();
