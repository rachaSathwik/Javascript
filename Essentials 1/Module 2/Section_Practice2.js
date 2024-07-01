//1
let ticket = {
    from : 'Vijayawada',
    to : 'Hyderabad',
    price: 270
}
console.log(`Price from ${ticket.from} station to ${ticket.to} station is ${ticket.price}`);

//2
let person = {};
person.name = 'Sathwik Sai Abhinav';
person.surname = 'Racha';
console.log(`My name is ${person.name} ${person.surname}`);

//3
let library = [
    {
        title:'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        pages: 460
    },
    {
        title: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        pages: 254
    },
    {
        title: 'Understanding ECMAScript 6',
        author:'Nicholas C. Zakas',
        pages: 352
    },
];

console.log(`Book 1 is ${library[0].title} written by ${library[0].author} of ${library[0].pages} pages.`);
console.log(`Book 2 is ${library[1].title} written by ${library[1].author} of ${library[1].pages} pages.`);
console.log(`Book 3 is ${library[2].title} written by ${library[2].author} of ${library[2].pages} pages.`);

library.push({
    title: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
    pages: 254
});
console.log(library.length);
console.log(`Books are ${library[0].title}, ${library[1].title}, ${library[2].title}, ${library[3].title}`);

//4
let books = library.slice(-2);
console.log(books);

//5
library.shift();
console.log(library.length);
console.log(`${library[0].title}`);
console.log(`${library[1].title}`);
console.log(`${library[2].title}`);

//6
let num = library[0].pages+library[1].pages+library[2].pages;
console.log(num);