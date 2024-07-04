//create array of Person objects
var people = [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
    { name: "Jim Beam", age: 35 },
];
//Function to filter who are at least 30 years old
function filterAdult(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
//Using the function and logging the result
var adults = filterAdult(people);
console.log(adults);
