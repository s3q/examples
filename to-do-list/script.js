let inputtask = document.querySelector('.box-input-task .input-task');
let addtask = document.querySelector('.box-input-task .add-task');

let tasksBox = document.querySelector('.tasks-box');


window.addEventListener('load', _ => {
    inputFocus();

    tasksAcompletedCount();

    tasksStatus();
});


let tasksCount = document.querySelector('.box-tasks-status .tasks-count .count');
let completeddCount = document.querySelector('.box-tasks-status .completed-count .count');

addtask.addEventListener('click', _ => {

    let inputtaskVal = inputtask.value;
 
    if (inputtaskVal !== '') {

        tasksBox.appendChild(createtask(inputtaskVal));

        tasksAcompletedCount();

        tasksStatus();

    }

    inputtask.value = '';
    inputFocus();
    
    makeLineThrough();
});

function inputFocus() {
    inputtask.focus();
}

function createtask(data) {
    let taskBox = document.createElement('div');
    taskBox.classList.add('task-box');

    let taskInfo = document.createElement('span');
    let deletetask = document.createElement('span');

    taskInfo.classList.add('task-info');
    taskInfo.textContent = data;

    deletetask.classList.add('delete-task');
    deletetask.textContent = 'delete';

    taskBox.appendChild(taskInfo);
    taskBox.appendChild(deletetask);
    
    deletetask.addEventListener('click', _ => {

        if (deletetask.parentElement == taskInfo.parentElement) {

            deletetask.parentElement.remove();

            tasksAcompletedCount();

            tasksStatus();

            makeLineThrough();

        }


    });

    return taskBox;
}


function tasksStatus() {
    let createTasksStatusElement = document.createElement('span');

    createTasksStatusElement.textContent = 'There are no tasks ..';
    createTasksStatusElement.classList.add('tasks-status');

    if (tasksBox.childElementCount == 0) {

        tasksBox.appendChild(createTasksStatusElement);

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

    let lineThrough = document.querySelectorAll('.tasks-box .task-box .task-info');

    lineThrough.forEach(element => {

        element.onclick = _ => {

            element.classList.toggle('line-through');

            tasksAcompletedCount();
        }

    });

    return lineThrough;
}


function tasksAcompletedCount() {

    let arrtasksBox = Array.from(tasksBox.children);


    let arrtasksBoxTasks = arrtasksBox;
    arrtasksBoxTasks = arrtasksBoxTasks.filter(u => u != tasksStatus());

    tasksCount.textContent = arrtasksBoxTasks.length;



    let arrtasksBoxCompleted = Array.from(makeLineThrough());

    arrtasksBoxCompleted = arrtasksBoxCompleted.filter(u => u.classList.contains('line-through'));

    completeddCount.textContent = arrtasksBoxCompleted.length;
}