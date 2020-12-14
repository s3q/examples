let inputTask = document.querySelector('.box-input-task .input-task');
let addTask = document.querySelector('.box-input-task .add-task');

let tasksBox = document.querySelector('.tasks-box');
let localStorageTasksBox = tasksBox.innerHTML;

let dataIndex = 0;

window.addEventListener('load', _ => {

    if (localStorage.length != 0) {

        tasksBox.innerHTML = localStorage.getItem('tasksBox');

    }

    inputFocus();

    deleteTask();

    tasksAcompletedCount();

    tasksStatus();

});

function localStorageBox() {

    localStorageTasksBox = tasksBox.innerHTML;

    localStorage.setItem('tasksBox', localStorageTasksBox);

}

let tasksCount = document.querySelector('.box-tasks-status .tasks-count .count');
let completeddCount = document.querySelector('.box-tasks-status .completed-count .count');


addTask.addEventListener('click', _ => {

    let inputTaskVal = inputTask.value;
 
    if (inputTaskVal !== '') {

        tasksBox.appendChild(createtask(inputTaskVal));

        localStorageBox();

        deleteTask();

        tasksAcompletedCount();
        
        tasksStatus();

    }

    inputTask.value = '';
    inputFocus();
    
    makeLineThrough();

});

function inputFocus() {

    inputTask.focus();

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

    taskBox.setAttribute('data-index', dataIndex++);
    
    return taskBox;

}


function tasksStatus() {

    let createTasksStatusElement = document.createElement('span');

    createTasksStatusElement.textContent = 'There are no tasks ..';
    createTasksStatusElement.classList.add('tasks-status');

    if (tasksBox.childElementCount == 0) {

        tasksBox.appendChild(createTasksStatusElement);

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

            localStorageBox();

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



function deleteTask() {
    
    let deleteTaskElement = document.querySelectorAll('.tasks-box .task-box .delete-task');

    deleteTaskElement.forEach(element => {

        element.addEventListener('click', _ => {

                element.parentElement.remove();
    
                localStorageBox();

                tasksAcompletedCount();
    
                tasksStatus();
    
                makeLineThrough();
    
        });

    });

}