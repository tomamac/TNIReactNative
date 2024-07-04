let data: any = [10, "hello", true];

// Modify the second element
data[1] = 42;

// Add a new object
data.push({ type: "newItem", value: "test" });

for(let dt of data){
    console.log(dt);
}