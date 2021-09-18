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


menubtn.addEventListener('click', () => {
    menu.classList.toggle('menu-toggle');
})
displayTodo();

function addTodo() {
    let userData = inputItem.value;
    let getFromLocalStorage = localStorage.getItem('new todo');
    if (getFromLocalStorage == null) {
        todoItems = [];
    } else {
        todoItems = JSON.parse(getFromLocalStorage); //coverting the string into json object
    }

    todoItems.push(userData)
    localStorage.setItem('new todo', JSON.stringify(todoItems)); //transforming the json object into string
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
    todoItems.forEach((element,day,hour,mins,secs,month,amp,newDate) => {
       newDate = new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
        let time = new Date();
        amp = (hour >= 12 ) ? "PM" : "AM";
       mins = time.getMinutes();
       hour = time.getHours()
       secs = time.getSeconds()
       month = time.getMonth()
       day = time.getDay()

        items += `<li> <p> <i class="fas fa-calendar-alt" id="calendar"></i>${newDate}, ${hour}: ${mins}:${secs}</p> <p title="${element}">${element}</p><span><i class="fa fa-trash"></i></span></li>`
    });
    showItems.innerHTML = items;
    inputItem.value = "";
}

// attaching an event listerner to the log in button
logInBtn.addEventListener('click', () => {
    if( username.value === "kukwa clovis" && password.value === "herald"){
        showcase.classList.add('hide-showcase');
        // todoHead.classList.add('show-todo-head');
        // todoBody.classList.add('show-todo-body');
        main.classList.add('show-main');
        username.value = "";
        password.value = "";
    } else if(username === "kukwa clovis" && password !== "herald"){
        password.classList.toggle("wrong-password");
        
    }else if(username !== "kukwa clovis" && password === "herald"){
        username.classList.toggle('wrong-name');

    } else{
            username.classList.toggle('wrong-info')
        password.classList.toggle('wrong-info')
        
    }
})

// window.location.href = "url?videoid = dkfldfjlfk" (javascript routing)
/*
looping through and loading in the html
socialMediaApps = [
    {
        title: 'kdfdk',
        url: 'dkfldf'
    },
    etc...
]
socialMediaApps.forEach(item => {
    socialItem = `div(html)`;
    parentcontainer.appenchild(socialItem);
    socialItem = "";
})
*/