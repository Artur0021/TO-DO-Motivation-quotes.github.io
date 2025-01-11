
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const todoListContainer = document.querySelector('.dolist');

if (taskForm) {
taskForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const taskText = taskInput.value.trim(); 
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.className = 'task-text';

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.className = 'done-btn';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

   
    taskItem.appendChild(taskContent);
    taskItem.appendChild(doneButton);
    taskItem.appendChild(deleteButton);

   
    todoListContainer.appendChild(taskItem);

    
    taskInput.value = '';

    
    doneButton.addEventListener('click', function () {
        taskContent.classList.toggle('completed');
    });

    deleteButton.addEventListener('click', function () {
        taskItem.remove();
    });
});
}




  export const modal = document.getElementById('modal');
  export const helpButton = document.querySelector('.helpa'); 
  export const closeButton = document.querySelector('.close');

export function openmodalwindow(){


helpButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    modal.style.display = 'block';
});


closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape"){
        modal.style.display = "none";
    }
})
}

openmodalwindow();

