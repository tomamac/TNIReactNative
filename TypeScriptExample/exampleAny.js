var data = [10, "hello", true];
// Modify the second element
data[1] = 42;
// Add a new object
data.push({ type: "newItem", value: "test" });
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var dt = data_1[_i];
    console.log(dt);
}
