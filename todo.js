class TodoItem {
  constructor() {
    this.title = "Placeholder title...";
    this.content = "Placeholder content...";
    this.startDate = new Date().toLocaleString();
  }

  setDeadline(endDate) {
    this.endDate = endDate;
  }

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
  constructor(remove, todoList, todoItem, container) {
    this.text = "Remove from list";
    this.remove = remove;
    this.todoList = todoList;
    this.todoItem = todoItem;
    this.container = container;
  }

  render() {
    return `<button class="delete-btn">${this.text}</button>`;
  }

  handleClick() {
    this.container.removeChild(this.remove);
    let index = this.todoList.todos.indexOf(this.todoItem);
    this.todoList.todos.splice(index, 1);
  }

  attachTo(element) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = this.render();

    let el = tempDiv.firstElementChild;

    el.addEventListener("click", this.handleClick.bind(this));

    element.appendChild(el);
  }
}

class PopUp {
  constructor() {
    this.title = "title";
    this.content = "content";
    this.startDate = "startDate";
    this.endDate = "endDate";
  }
}

class CloseBtn {
  constructor(remove) {
    this.text = "Close";
    this.remove = remove;
  }

  render() {
    return `<button class="close-btn">${this.text}</button>`;
  }

  handleClick() {
    popUpContainer.removeChild(this.remove);
  }

  attachTo(element) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = this.render();

    let el = tempDiv.firstElementChild;

    el.addEventListener("click", this.handleClick.bind(this));

    element.appendChild(el);
  }
}

// title, content, startDate, endDate
