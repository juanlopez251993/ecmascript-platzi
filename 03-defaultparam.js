function newUser(name,age,country) {
    var name = name || 'Juan';
    var age = age || 34;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newUser();
newUser('Ernesto', 20, "Alemania");


// nueva forma

function newAdmin(name = 'Juan', age = 29, country= 'CO') {
    console.log(name, age, country);
}

newAdmin(); 
newAdmin('Carlos', 45, 'FR');
