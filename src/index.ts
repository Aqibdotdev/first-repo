//Run (node --watch ./dist/index.js) on one terminal and simultaniously run (tsc --watch) in a 2nd terminal to run the file like mondemon

let age = 30;

// let firstName: string = "Mario !!";
let isFictional: boolean;

let ages: number[] = [1, 2, 3];
let name1 = ["a", 3, "w", true];

let user: { firstName: string; age: number; id: number } = {
  firstName: "mario",
  age: 30,
  id: 2,
};

user.firstName = "afadas";

const person = { name2: "abc", id: 3 };

person.name2 = "3";

const name2 = person.name2;

//function

function addTwoNumbers(a: number, b: number): any {
  return a + b;
}
console.log(addTwoNumbers(2, 3));
const subtractTwoNumbers = (a: number, b: number) => {
  return a + b;
};
const mulTwoNum = (a: number, b: number): number => a * b;

function addAllNum(item: number[]) {
  const total = item.reduce((a, c) => (a = c), 0);
  // return total;
  // console.log(total);
}
console.log(addAllNum([2, 3, 4, 5, 7]));
// console.log(total);

const formatGreeting = (name: string, greeting: string): string =>
  `${name}, ${greeting}`;
console.log(formatGreeting("mario", "Hi"));

let aaa = 2;

//Tuples

const arr: [number, string, number] = [2, "2", 3];

arr[0] = 3;
console.log(arr);

function useCor(): [number, number] {
  const lat = 100;
  const long = 200;
  return [lat, long];
}

const [lat, long] = useCor();

console.log(lat, long);
//interfances

interface Author {
  name: string;
  avatar: string;
}
const authorOne: Author = { name: "mario", avatar: "/img/mario.png" };

interface Post {
  titile: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
  titile: "first post",
  tags: ["gaming", "tech"],
  create_at: new Date(),
  author: authorOne,
};
console.log(newPost);
const creatPost = (post: Post): void =>
  console.log(`Created Post: ${post.titile} by ${post.author.name}`);

console.log(creatPost(newPost));

const posts: Post[] = [];
posts.push(newPost);
console.log(posts);

// Type Aliases
// type Rgb = [number, number, number];
// function getRandomcolour(): Rgb {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
// }

type User0 = {
  name: string;
  store: number;
};
// Union type
let someId: number | string;

someId = 1;
someId = "a";

type Id = number | string;

// let anotherId: Id;

// anotherId = "afaasdad";
// anotherId = 5;

// type Gaurd

function swapIdType(id: Id) {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const idOne = swapIdType(1);
const idTwo = swapIdType("2");

console.log(typeof idOne, typeof idTwo);

// tagged interface
interface User {
  type: "user";
  username: string;
  email: string;
  id: Id;
}
interface Person {
  type: "person";
  firstname: string;
  age: number;
  id: Id;
}
function logDetails(value: User | Person): void {
  if (value.type === "user") console.log(value.email, value.username);
}
