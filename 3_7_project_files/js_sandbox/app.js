// REPLACE Element

// Create Element
const newHeading = document.createElement("h2");
newHeading.id = 'task-title';
newHeading.innerHTML = 'Task List';

const oldHeading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, oldHeading);

// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();
list.removeChild(lis[3]);

console.log(newHeading);