//declare and access an array
let numbers: number[] = [10, 20, 30, 40, 50];
console.log(numbers[2]); //30

//Using loop with an array
let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
  console.log(name);
}

//Adding and removing data from an array(push,pop)
let fruits: string[] = ["Apple", "Banana"];
console.log(fruits); //Apple, Banana

fruits.push("Orange");
console.log(fruits); //Apple, Banana, Orange

fruits.pop();
console.log(fruits); //Apple, Banana
