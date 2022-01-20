let addInput = document.querySelector('.todo-input');
let addButton = document.querySelector('.add-todo-btn');
let todoList = document.querySelector('.todoList');
let countTodo = document.querySelector('.count-todo');
let deleteAllBtn = document.querySelector('.clear-todo-btn');

addInput.addEventListener('keyup', () => {
    if (addInput == '') return

    let userData = addInput.value;

    if (userData.trim() != 0) {
        addButton.classList.add("active");
    } else {
        addButton.classList.remove("active");
    }

});

showToDo();

addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        addTodo()
    }
})

addButton.addEventListener('click', () => {
    addTodo()
});

function addTodo() {
    let userData = addInput.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listTodo = [];
    } else {
        listTodo = JSON.parse(getLocalStorage);
    }
    listTodo.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listTodo));
    showToDo();
    addInput.value = '';

    addButton.classList.remove("active");
}

function showToDo() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listTodo = [];
    } else {
        listTodo = JSON.parse(getLocalStorage);
    }
    if (listTodo.length > 0) {
        deleteAllBtn.classList.add('active');
    } else {
        addInput.value = '';
        deleteAllBtn.classList.remove('active');
    }
    let todoLI = '';
    listTodo.forEach((element, index) => {
        todoLI += `<li><span>${element} </span>
        <button id="removeToDoBtn" onclick='deleteTodo(${index})' class="remove-todo-btn">-</button></li>`;
    });
    todoList.innerHTML = todoLI;
    countTodo.innerText = listTodo.length;
}

function deleteTodo(i) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listTodo = JSON.parse(getLocalStorage);
    listTodo.splice(i, 1);
    localStorage.setItem("New Todo", JSON.stringify(listTodo));
    showToDo();
}
deleteAllBtn.addEventListener('click', () => {
    listTodo = [];
    localStorage.setItem("New Todo", JSON.stringify(listTodo));
    showToDo();
});