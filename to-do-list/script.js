let inputUser = document.querySelector('.box-input-user .input-user');
let addUser = document.querySelector('.box-input-user .add-user');

let usersBox = document.querySelector('.users-box');


window.addEventListener('load', _ => {
    inputFocus();

    tasksAcompletedCount();

    tasksStatus();
});


let tasksCount = document.querySelector('.box-tasks-status .tasks-count .count');
let completeddCount = document.querySelector('.box-tasks-status .completed-count .count');

addUser.addEventListener('click', _ => {

    let inputUserVal = inputUser.value;
 
    if (inputUserVal !== '') {

        usersBox.appendChild(createUser(inputUserVal));

        tasksAcompletedCount();

        tasksStatus();

    }

    inputUser.value = '';
    inputFocus();
    
    makeLineThrough();
});

function inputFocus() {
    inputUser.focus();
}

function createUser(username) {
    let userBox = document.createElement('div');
    userBox.classList.add('user-box');

    let userInfo = document.createElement('span');
    let deleteUser = document.createElement('span');

    userInfo.classList.add('user-info');
    userInfo.textContent = username;

    deleteUser.classList.add('delete-user');
    deleteUser.textContent = 'delete';

    userBox.appendChild(userInfo);
    userBox.appendChild(deleteUser);
    
    deleteUser.addEventListener('click', _ => {

        if (deleteUser.parentElement == userInfo.parentElement) {

            deleteUser.parentElement.remove();

            tasksAcompletedCount();

            tasksStatus();

            makeLineThrough();

        }


    });

    return userBox;
}


function tasksStatus() {
    let createTasksStatusElement = document.createElement('span');

    createTasksStatusElement.textContent = 'There are no tasks ..';
    createTasksStatusElement.classList.add('tasks-status');

    if (usersBox.childElementCount == 0) {

        usersBox.appendChild(createTasksStatusElement);

        console.log('craete');

    } else {

        let tasksStatusElement = document.querySelector('.tasks-status');

        if (tasksStatusElement) {

            tasksStatusElement.remove();

        }

        return tasksStatusElement;
    }
}

function makeLineThrough() {

    let lineThrough = document.querySelectorAll('.users-box .user-box .user-info');

    lineThrough.forEach(element => {

        element.onclick = _ => {

            element.classList.toggle('line-through');

            tasksAcompletedCount();
        }

    });

    return lineThrough;
}


function tasksAcompletedCount() {

    let arrUsersBox = Array.from(usersBox.children);


    let arrUsersBoxTasks = arrUsersBox;
    arrUsersBoxTasks = arrUsersBoxTasks.filter(u => u != tasksStatus());

    tasksCount.textContent = arrUsersBoxTasks.length;



    let arrUsersBoxCompleted = Array.from(makeLineThrough());

    arrUsersBoxCompleted = arrUsersBoxCompleted.filter(u => u.classList.contains('line-through'));

    completeddCount.textContent = arrUsersBoxCompleted.length;
}