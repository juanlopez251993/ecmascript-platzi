// enhanced object literals


function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId,
    }
}

console.log(newUser('Juan', 29, 'Co', 1));