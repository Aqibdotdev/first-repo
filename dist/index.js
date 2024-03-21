"use strict";
//Run (node --watch ./dist/index.js) on one terminal and simultaniously run (tsc --watch) in a 2nd terminal to run the file like mondemon
let age = 30;
// let firstName: string = "Mario !!";
let isFictional;
let ages = [1, 2, 3];
let name1 = ["a", 3, "w", true];
let user = {
    firstName: "mario",
    age: 30,
    id: 2,
};
user.firstName = "afadas";
const person = { name2: "abc", id: 3 };
person.name2 = "3";
const name2 = person.name2;
//function
function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(2, 3));
const subtractTwoNumbers = (a, b) => {
    return a + b;
};
const mulTwoNum = (a, b) => a * b;
function addAllNum(item) {
    const total = item.reduce((a, c) => (a = c), 0);
    // return total;
    // console.log(total);
}
console.log(addAllNum([2, 3, 4, 5, 7]));
// console.log(total);
const formatGreeting = (name, greeting) => `${name}, ${greeting}`;
console.log(formatGreeting("mario", "Hi"));
let aaa = 2;
//Tuples
const arr = [2, "2", 3];
arr[0] = 3;
console.log(arr);
function useCor() {
    const lat = 100;
    const long = 200;
    return [lat, long];
}
const [lat, long] = useCor();
console.log(lat, long);
const authorOne = { name: "mario", avatar: "/img/mario.png" };
const newPost = {
    titile: "first post",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne,
};
console.log(newPost);
const creatPost = (post) => console.log(`Created Post: ${post.titile} by ${post.author.name}`);
console.log(creatPost(newPost));
const posts = [];
posts.push(newPost);
console.log(posts);
// Union type
let someId;
someId = 1;
someId = "a";
// let anotherId: Id;
// anotherId = "afaasdad";
// anotherId = 5;
// type Gaurd
function swapIdType(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(typeof idOne, typeof idTwo);
function logDetails(value) {
    if (value.type === "user")
        console.log(value.email, value.username);
}
