// 2.12 Array, array find, filter, etc... 
const numbers = [4,5,6,7,12,82,'Apple',9];
const numbers2 = new Array(2,3,5,6,7);
const fruit = ['Apple', 'Banana', 'Orage', 'Pear'];
const persons = [
    {name : 'Minh Vu', age : 38},
    {name : 'Soi Tran', age: 39},
    {name : 'Yen Yen', age: 5}
];

let val;
val = numbers.length;
val = numbers[3];


numbers[2] = 100;
val = numbers.indexOf(4);

// add to front
numbers.push(250);

// add on to front
numbers.unshift(9);

// take pff from end
numbers.pop();


numbers.sort(); // regular sort
numbers.sort(function(x,y){ // comparison sort
    return x-y;
})

function filter(num){
    return num < 50;
}

val = numbers.filter(filter);

result = persons.filter(search => search.age > 30);

console.log(numbers);
console.log(val);
console.log(typeof result);
console.log(result);