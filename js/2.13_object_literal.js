// 2.13 Object Literal
const person = {
    firstName : 'Steve',
    lastName : 'Smith',
    email : 'steve@aol.com',
    age : 35,
    hobbies : ['music', 'sports'],
    address : {
        city : 'Miami',
        state: 'FL'
    },
    getBirthYear : function(){
        return 2017 - this.age;
    }
}

const people = [
    { name : 'John', info : person },
    { name : 'Mike', age : 30 }
]

let val;

val = person;
val = person.firstName;
val = person.address.city;
val = person.address.state;
val = person.hobbies.find(hobby => hobby === 'music');

for(i=0; i < people.length; i++){
    console.log(people[i].name);
}

console.log(val);
console.log(person.getBirthYear());