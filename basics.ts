// Primitives: number, strings, boolean
// More complex: arrays, objects
// Funtion types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

//More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//type alias
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[]; //an array of objects

// Type Inference
let course = "React - The Complete Guide";

// course = 1234;  Inferred as string from above

//Union Types
let courses: string | number = "React - The Complete Guide";

courses = 1234;

// Function and types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

updatedArray[0].split("");
