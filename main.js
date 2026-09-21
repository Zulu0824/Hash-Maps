import { HashMap } from "./hashMaps.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.entries());

console.log("The value is " + test.get("apple"));
console.log("The value is " + test.get("kite"));

console.log(test.has("dog"));
console.log(test.has("frog"));
console.log(test.has("orange"));

console.log(test.remove("grape") + " key removed");
console.log(test.remove("tiger"));

console.log(test.length());

// console.log(test.clear());

console.log(test.keys());

console.log(test.values());
