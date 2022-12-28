const todoContainer = document.querySelector(".todo-container");
const addBtn = document.querySelector(".add-btn");
const inputTitle = document.querySelector(".title");
const inputDescription = document.querySelector(".description");
const inputSearch = document.querySelector(".search");
const inputDeadline = document.querySelector(".deadline");

let todoList = new TodoList();
let todo = new TodoItem();
let searchedTodos = "";

addBtn.addEventListener("click", handleAddBtnClick);
inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchedTodos = todoList.getTodosByTitle(inputSearch.value);
    console.log(todoList.printTitles());
    console.log(searchedTodos);
    console.log(todo.startDate);
  }
});

function handleAddBtnClick() {
  getTodoInfo();
  let li = createTodoListItem(todo);
  let deleteBtn = new DeleteBtn(li, todoList, todo);
  todoContainer.appendChild(li);
  deleteBtn.attachTo(li);
}

function getTodoInfo() {
  todo = new TodoItem();
  todo.title = inputTitle.value;
  todo.content = inputDescription.value;
  todo.setDeadlineIn(parseInt(inputDeadline.value));
  todoList.addTodoItem(todo);
}

function createTodoListItem(todo) {
  let li = document.createElement("li");
  li.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.content}</p>
        <p>${todo.startDate} - ${todo.endDate}</p>
        `;

  return li;
}

// let searchedTodos = todoList.getTodosByTitle("test"); // [{title: "Bake pan...", content: "Promised my..."}]
