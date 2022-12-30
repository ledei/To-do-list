const todoContainer = document.querySelector(".todo-container");
const popUpContainer = document.querySelector(".pop-up-container");
const addBtn = document.querySelector(".add-btn");
const inputTitle = document.querySelector(".title");
const inputDescription = document.querySelector(".description");
const inputSearch = document.querySelector(".search");
const inputDeadline = document.querySelector(".deadline");

let todoList = new TodoList();
let todo = new TodoItem();
let popUp = new PopUp();
let deleteBtn = new DeleteBtn();
let searchedTodos = "";

addBtn.addEventListener("click", handleAddBtnClick);
inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getPopUpInfo();
    initializePopUp();
  }
});
function getPopUpInfo() {
  searchedTodos = todoList.getTodosByTitle(inputSearch.value);
  popUp = new PopUp();
  popUp.title = searchedTodos.title;
  popUp.content = searchedTodos.content;
  popUp.startDate = searchedTodos.startDate;
  popUp.endDate = searchedTodos.endDate;
}

function handleAddBtnClick() {
  getTodoInfo();
  initializeListItem();
}

function initializePopUp() {
  let section = createPopUp(popUp);
  popUpContainer.appendChild(section);
  let closeBtn = new CloseBtn(section, popUpContainer);
  closeBtn.attachTo(section);
  popUpContainer.classList.remove("hide");
}

function initializeListItem() {
  let li = createTodoListItem(todo);
  deleteBtn = new DeleteBtn(li, todoList, todo, todoContainer);
  todoContainer.appendChild(li);
  deleteBtn.attachTo(li);
}

function deadlineValueChecker(input) {
  let checker = input.value;
  if (checker == "") {
    todo.endDate = "Deadline wasnt set";
  } else {
    todo.setDeadlineIn(parseInt(checker));
  }
}

function getTodoInfo() {
  todo = new TodoItem();
  todo.title = inputTitle.value;
  todo.content = inputDescription.value;
  deadlineValueChecker(inputDeadline);
  todoList.addTodoItem(todo);
}

function createPopUp(popUp) {
  let section = document.createElement("section");
  section.innerHTML = `
        <h3>${popUp.title}</h3>
        <p>${popUp.content}</p>
        <p>${popUp.startDate} - ${popUp.endDate}</p>
        `;

  return section;
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
