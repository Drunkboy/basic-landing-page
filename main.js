console.log("Hello World");

let a = [1, 2, 3, "rrr", null, true];
let c = [1, 2, 3];
myName = "Son";

//let c = a.slice(-1);

console.log("a :>> ", a);
console.log("c :>> ", c);
console.log("c :>> ", !c.includes("2"));

let key = `my-name-- ${myName}`;

let myObj = {
  no: 1233,
  moo: 3,
  bann: "AA",
  name: myName,
  a,
};

console.log(myObj);

console.log(myObj.name);
