class TodoItem {
  constructor() {
    this.title = "Placeholder title...";
    this.content = "Placeholder content...";
    this.startDate = new Date().toLocaleString();
  }

  render() {
    let div = document.createElement("div");
    div.innerHTML = `
    <li>
      <h3>${this.title}</h3>
        <p>${this.content}</p>
        <p>${this.startDate} - ${this.endDate}</p>
        <button class = "delete-btn">Remove from list</button>
    </li>
      `;

    let el = div.firstElementChild;
    let deleteBtn = div.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => this.handleClick());

    return el;
  }

  handleClick() {
    this.modalElement.remove();
  }

  attachTo(container) {
    this.modalElement = this.render();
    container.append(this.modalElement);
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

class PopUp {
  constructor() {
    this.title = "title";
    this.content = "content";
    this.startDate = "startDate";
    this.endDate = "endDate";
  }

  render() {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class = "pop-up-container" >
      <section>
        <h3>${this.title}</h3>
          <p>${this.content}</p>
          <p>${this.startDate} - ${this.endDate}</p>
          <button class = "close-btn">Close</button>
      </section>
    </div>
      `;

    let el = div.firstElementChild;
    let deleteBtn = div.querySelector(".close-btn");

    deleteBtn.addEventListener("click", () => this.handleClick());

    return el;
  }

  handleClick() {
    this.modalElement.remove();
  }

  attachTo(container) {
    this.modalElement = this.render();
    container.append(this.modalElement);
  }
}

// title, content, startDate, endDate
