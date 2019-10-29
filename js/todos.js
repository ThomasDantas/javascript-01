var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || []; // se o storage estiver vazio ele retorna um array vazio;

// var todos = [
//   "Fazer café",
//   "Estudar Javascript",
//   "Acessar comunidade da rocketseat"
// ];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    var poist = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + poist + ")");

    var linkText = document.createTextNode(" Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}
renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(posit) {
  todos.splice(posit, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
