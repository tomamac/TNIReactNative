//declare and access an array
var numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]); //30
//Using loop with an array
var names = ["Alice", "Bob", "Charlie"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
//Adding and removing data from an array(push,pop)
var fruits = ["Apple", "Banana"];
console.log(fruits); //Apple, Banana
fruits.push("Orange");
console.log(fruits); //Apple, Banana, Orange
fruits.pop();
console.log(fruits); //Apple, Banana
