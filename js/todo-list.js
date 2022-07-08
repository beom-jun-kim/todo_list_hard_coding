const toDoform = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteBtn(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text
  const button = document.createElement('button');
  button.addEventListener('click', deleteBtn);
  button.innerText = 'x';
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}
toDoform.addEventListener('submit', handleSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo !== null) {
  const parseToDo = JSON.parse(savedToDo);
  toDos = parseToDo;
  parseToDo.forEach(paintToDo);
}