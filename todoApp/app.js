let menu = document.querySelector('.menu');
let menubtn = document.querySelector('#menubtn');
let inputItem = document.querySelector('#inputItem');
let showItems = document.querySelector('.showItems');
let showcase = document.querySelector('.showcase');
let logInBtn = document.querySelector('#log-in');
let username = document.querySelector('#name');
let password = document.querySelector('#password');
let todoHead = document.querySelector('.todo-head');
let todoBody = document.querySelector('.todo-body');
let main = document.querySelector('.main');
let errormsg = document.getElementById('error')
let todoCount = document.getElementById('count')
let logInErroMsg = document.querySelector('.errormsg')

inputItem.addEventListener('keyup', () => {
    if (inputItem.value.length > 0 && inputItem.value.trim() !== 0) {
        errormsg.style.display = 'none'
    }

})


displayTodo();

function addTodo() {
    let userData = inputItem.value;
    if (userData.trim().length !== 0 && userData !== "") {
        let getFromLocalStorage = localStorage.getItem('new todo');
        if (getFromLocalStorage == null) {
            todoItems = [];
        } else {
            todoItems = JSON.parse(getFromLocalStorage); //coverting the string into json object
        }

        todoItems.push(userData)
        localStorage.setItem('new todo', JSON.stringify(todoItems)); //transforming the json object into string
        displayTodo();
        errormsg.style.display = 'none'
    } else {
        errormsg.style.display = 'block'
    }

    todoCount.innerText = todoItems.length;

}

function removeAllTodos() {
    let getFromLocalStorage = localStorage.getItem('new todo');
    todoItems = JSON.parse(getFromLocalStorage)
    todoItems = [];
    localStorage.setItem("new todo", JSON.stringify(todoItems)) //updating the local storage
    displayTodo();
}


function displayTodo() {
    // let userData = inputItem.value;
    let getFromLocalStorage = localStorage.getItem('new todo');
    if (getFromLocalStorage == null) {
        todoItems = [];
    } else {
        todoItems = JSON.parse(getFromLocalStorage);
    }
    let items = '';
    todoItems.forEach((element, index, day, hour, mins, secs, month, amp, newDate) => {
        newDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        let time = new Date();
        amp = (hour >= 12) ? "PM" : "AM";
        mins = time.getMinutes();
        hour = time.getHours()
        secs = time.getSeconds()
        month = time.getMonth()
        day = time.getDay()

        items += `<li> <p> <i class="fas fa-calendar-alt" id="calendar"></i>${newDate}, ${hour}: ${mins}:${secs}</p> <p title="${element}" id="content"><input type="checkbox" name="checkbox" id="checkbox" /> ${element}</p><span onclick = "removeTask(${index})">delete</span></li>`
    });
    showItems.innerHTML = items;
    inputItem.value = "";
    todoCount.innerText = todoItems.length;
}

// creating remove task function
function removeTask(index) {
    let getFromLocalStorage = localStorage.getItem('new todo')
    todoItems = JSON.parse(getFromLocalStorage)
    todoItems.splice(index, 1); //detete that item you've choosen
    localStorage.setItem('new todo', JSON.stringify(todoItems)) //updating the local storage after deleting as item
    displayTodo();
}

username.addEventListener('keyup', () => {
    logInErroMsg.style.display = 'none'
})

password.addEventListener('keyup', () => {
    logInErroMsg.style.display = 'none'
})
// attaching an event listerner to the log in button
logInBtn.addEventListener('click', () => {
    if (username.value === "kukwa clovis" && password.value === "herald") {
        showcase.classList.add('hide-showcase');
        // todoHead.classList.add('show-todo-head');
        // todoBody.classList.add('show-todo-body');
        main.classList.add('show-main');
        username.value = "";
        password.value = "";
    } else if (username === "kukwa clovis" && password !== "herald") {
        password.classList.toggle("wrong-password");
        logInErroMsg.style.display = 'block'

    } else if (username !== "kukwa clovis" && password === "herald") {
        username.classList.toggle('wrong-name');
        logInErroMsg.style.display = 'block'

    } else {
        username.classList.toggle('wrong-info')
        password.classList.toggle('wrong-info')
        logInErroMsg.style.display = 'block'
    }
})


window.onload = displayTodo();