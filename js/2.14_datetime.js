// 2.14 Date Time function
let val;

const today = new Date();
const birthday = new Date('03-18-1980');

val = today;
val = today.getDate();
val = today.getDay();

birthday.setMonth(3);

console.log(val);
console.log(birthday);