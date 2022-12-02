const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Juan Perez');           
        }
        else {
            reject('Jhon Bazuko');
        }

    })
}


anotherFunction()
    .then(response => console.log(response)) 
    .catch(err => console.log(err)); 