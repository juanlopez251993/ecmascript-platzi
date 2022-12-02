// arrays destructuring array

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);


// object destructuring objeto

let user = { username: 'Juan', age: 29};
let { username, age } = user;
console.log(username, user.agege);


// spread operator objeto

let person = { name:'Juan', age: 29 };
let country = 'MX';

let data = { ...person, country};
console.log(data);

// rest 

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(21, 29, 26, 28);


