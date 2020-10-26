const getUsername = () =>{
    const username = window.localStorage.getItem("username");
    if(username == null) {
    let newUser = prompt(`Please enter a username`);
    window.localStorage.setItem("username", newUser);
    }
    }
    getUsername();

//     To Do List
// Deliverables
// 1. Render items from localStorage - get that data/ parse it then use the data to create your li to your ul
// 2. Add new task  add through the browser visually and add to the localStorage
// 3. Toggle completed status when you click on the item you should be able to toggle or cross the item from the list
// 4. Remove task add event listeners on 2/3/4
// 5. Add category to each task, display category
// 6. Build category filters buttons

const form = document.querySelector('form');
const todoInput = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const todoUl = document.querySelector('#list')



const setTodos = (todos) =>{
window.localStorage.setItem('todoList', JdSON.stringify(todos));
};

const getTodos = () => {
const todoList = window.localStorage.getItem('todoList');
If (todoList == null) {
setTodos([]);
return[];
}
return JSON.parse(todoList);
};

const addTodo = () => {
If (todoInput.value !== ' ') {
const allTodos = getTodos();
const newTodo = {
Id: allTodos.length +1,
Task: todoInput.value,
isComplete: false,
};
todoInput.value = ' ';

const newTodos = [ …allTodos, newTodo];
setTodos(newTodos);

renderTodoLi (newTodo);
}
};


const updateTodo = (id) =>{
const allTodos = getTodos();
const todoToUpdate = allTodos.find(todo => todo.id === id);
const newTodos = [];
If (todoToUpdate) {
allTodos.forEach((todo) => {
If (todo.id == id) {
todo.isComplete = !todo.isComplete;
}
newTodos.push(todo);
});
setTodos(newTodos);
}
};

const toggleStatus = (event, todo) => {
const todoLi = event.target;
todoLi.classList.toggle('complete');
updateTodo(todo.id);
};

const removeTodo = (event, id) => {
const allTodos = getTodos();
const closeBtn = event.target;
const newTodos = allTodos.filter(todo => todo.id !== id);
setTodos(newTodos);

closeBtn.parentElement.remove();
};

const filterBy = (list, field) => {
switch (field) {
case 'completed':
return list.filter(item => item.isComplete);
case 'none':
return list;
Default:
};
}

const render = (filter, 'none') => {
todoUL.innerHtml = ' ' ;

const todos = getTodos ();
const todoList = filterBy (todos, filter);

todoList.forEach (todo) => {
renderTodoLi(todo);
})
};

const renderTodoLi = (todo) => {
const todoLi = document.createElement('li');
todoLi.appendChild(document.createTextNode(todo.task);
todoLi.setAttribute('id', todo.id);
todoLi.addEventListener('click', (event) => toggleStatus (event, todo));
If (todo.isComplete) todoLi.classList.add('complete');

const close = document.createElement('span');
close.innerText = 'x';
close.onclick = (event) => removeTodo (event, todo.id)
todLi.appendChild(close);

todoUL.appendChild(todoLi);
};



const init = () => {
Form.addEventListener ('submit', (e) => e.preventDefault());
AddBtn.addEventListener('click' addTodo);
render();
};

window.addEventListener('DOMContentLoaded', () => init(), false);