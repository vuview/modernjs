const li = document.createElement('li');

// Add class

li.className = 'collection-item';
li.id = 'new-item';

li.setAttribute('title', 'New Item');

// Create text node and append

li.appendChild(document.createTextNode("Hello Worlds"));

// Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);