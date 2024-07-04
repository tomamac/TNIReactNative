interface Person {
  name: string;
  age: number;
}

//create array of Person objects
const people: Person[] = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  { name: "Jim Beam", age: 35 },
];

//Function to filter who are at least 30 years old
function filterAdult(persons: Person[]): Person[] {
  return persons.filter((person) => person.age >= 30);
}

//Using the function and logging the result
const adults = filterAdult(people);
console.log(adults);
