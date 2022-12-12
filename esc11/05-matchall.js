const regex = /\b(Apple)+\b/g;


const fruit = 'Apple, Oranges, Kiwi, Pear, Mango';

for (const match of fruit.matchAll(regex)) {
    console.log(match)
}