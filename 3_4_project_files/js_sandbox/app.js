const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// document.getElementsByTagName

let list = document.getElementsByTagName('li');
console.log(list);

list = Array.from(list);
console.log(list);

list.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(list);