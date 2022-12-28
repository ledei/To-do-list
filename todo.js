class TodoItem {
  constructor() {
    this.title = "Placeholder title...";
    this.content = "Placeholder content...";
    this.startDate = new Date().toLocaleString();
  }

  //   setDeadline(endDate) {
  //     this.endDate = endDate;
  //   }

  setDeadlineIn(days) {
    let date = new Date();
    date = date.setDate(date.getDate() + days);
    date = new Date(date);
    this.endDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
  }
}

class TodoList {
  constructor() {
    this.todos = []; // empty array
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  printTitles() {
    console.log(`There are ${this.todos.length} entries in the todo list`);
    this.todos.forEach((todo) => console.log(todo.title));
  }

  getTodosByTitle(titleQuery) {
    let results = this.todos.find((todo) => todo.title.includes(titleQuery));

    if (results == undefined) {
      return [];
    } else {
      return results;
    }
  }
}

class DeleteBtn {
  constructor(remove, todoList, todoItem) {
    this.text = "Remove from list";
    this.remove = remove;
    this.todoList = todoList;
    this.todoItem = todoItem;
  }

  render() {
    return `<button class="delete-btn">${this.text}</button>`;
  }

  handleClick() {
    todoContainer.removeChild(this.remove);
    let index = this.todoList.todos.indexOf(this.todoItem);
    this.todoList.todos.splice(index, 1);
  }

  attachTo(container) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = this.render();

    let el = tempDiv.firstElementChild;

    el.addEventListener("click", this.handleClick.bind(this));

    container.appendChild(el);
  }
}
