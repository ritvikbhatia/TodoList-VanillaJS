const todoInput = document.getElementById('input');
const addButton = document.getElementById('addButton');
const todoList = document.querySelector('.todo-list');


addButton.addEventListener('click',addTodo);

function addTodo(event){

    event.preventDefault();

    if(todoInput.value==='')
        return;

    //create new list item on clicking add button
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    //check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.innerHTML = '<i class="far fa-check-square"></i>';
    listItem.appendChild(checkButton);

    //todo-text
    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');
    todoText.innerText = todoInput.value;
    listItem.appendChild(todoText);
    
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    listItem.appendChild(deleteButton);

    //Append the list item to the ul
    todoList.appendChild(listItem);

    //clear input value
    todoInput.value = '';

    task++;
    taskLeft.innerText = task;
}