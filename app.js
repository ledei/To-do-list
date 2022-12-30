const todoContainer = document.querySelector(".todo-container");
const addBtn = document.querySelector(".add-btn");
const inputTitle = document.querySelector(".title");
const inputDescription = document.querySelector(".description");
const inputSearch = document.querySelector(".search");
const inputDeadline = document.querySelector(".deadline");

let todoList = new TodoList();
let todo = new TodoItem();
let popUp = new PopUp();
let searchedTodos = "";

addBtn.addEventListener("click", handleAddBtnClick);
inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSearchKeypress();
  }
});

function handleAddBtnClick() {
  todo = new TodoItem();
  todo.title = inputTitle.value;
  todo.content = inputDescription.value;
  deadlineValueChecker(inputDeadline);
  todoList.addTodoItem(todo);
  todo.attachTo(todoContainer);
  todo.grabIndexPosition(todo);
}

function handleSearchKeypress() {
  searchedTodos = todoList.getTodosByTitle(inputSearch.value);
  popUp = new PopUp();
  popUp.title = searchedTodos.title;
  popUp.content = searchedTodos.content;
  popUp.startDate = searchedTodos.startDate;
  popUp.endDate = searchedTodos.endDate;
  popUp.attachTo(document.body);
}

function deadlineValueChecker(input) {
  let checker = input.value;
  if (checker == "") {
    todo.endDate = "Deadline wasnt set";
  } else {
    todo.setDeadlineIn(parseInt(checker));
  }
}
