{
//selectors
const todoInput = document.getElementById('input');
const addButton = document.getElementById('addButton');
const todoList = document.querySelector('.todo-list');
const total = document.querySelector('#counter');
var task = 0;

// ***************************************************************
// function to a add task 

addButton.addEventListener('click',addTask);

function addTask(event){

    event.preventDefault();

    if(todoInput.value==='')
        return;

    //create new list item on clicking add button
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    //check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
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
    total.innerText = task;
}

// ***********************************************************
// function to delete a task

todoList.addEventListener('click',DeleteTask);

 function DeleteTask(event){
    //Delete functionality
    console.log(event.target.classList[0])
    if(event.target.classList[0]==='delete-button')
    { 
        event.target.parentElement.remove();
        task--;
    }
    //click on icon
    if(event.target.classList[0]==='fas')
    {
           event.target.parentElement.parentElement.remove();
           task--;
       }
   //Checkmark functionality
    if(event.target.classList[0]==='check-button'){
        event.target.parentElement.classList.toggle('checked');
    }
    total.innerText = task;
}
// **************************************************************************
}