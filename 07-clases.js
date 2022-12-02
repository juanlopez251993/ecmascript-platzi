
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

// this 

class user {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name()}`;
    }
}
