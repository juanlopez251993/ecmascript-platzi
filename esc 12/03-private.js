
// declarando
class User {};
// instancia de una clase 
//const newUser = new User();

class user {
    //metodos

    greeting() {
        return 'Juan Perez';
    }
};


const jhon = new user();
console.log(jhon.greeting());

const developer = new user();
console.log(developer.greeting());

// constructor

class User {
    constructor() {
        console.log('Nuevo Usuario Juan Perez') 
    }
    greeting() {
        return 'Hello';
    }
};

const juan = new user();

this 

class user {

    constructor(name) {
        this.name = name;
    }
    //metodo
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user("Juan Perez");
console.log(ana.greeting());

//setters getters

class user {
    constructor(name, age) {
        this.age = age
        this.name = name
    }

    //metodo

    #speak() {
        return "hello"
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n; 

    }
}

const bebeloper = new user("Juan", 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 29);
