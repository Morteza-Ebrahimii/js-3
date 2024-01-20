// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

const printPersons = (persons) => {

  for (const person of persons) {

    const names = document.createElement("p");
    names.innerText = person.name + " _" + person.age;
    document.body.append(names);
  }
};
printPersons(persons);
