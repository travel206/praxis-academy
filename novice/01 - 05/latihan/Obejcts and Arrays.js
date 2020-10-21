let doh = "Doh";
console.log (typeof doh.toUpperCase);
// function
console.log (doh.toUpperCase());
// DOH

// two methods you can used to manipulate arrays
let sequence = [1, 2, 3];
sequence.push (4);
sequence.push (5);
console.log (suquence);
// [1, 2, 3, 4, 5]
console.log(suquence.pop());
// 5
console.log (sequence);
// [1, 2, 3, 4]

// One way to create an object si by using braces as an expression
let day1 = {
    squirrel : false,
    events : ["work", "touched tree", "pizza", "running"]
};
console.log (day1.squirrel);
// false
console.log (day1.wolf);
// undefined
day1.wolf = false;
console.log (day1.wolf);
// false

// properti yang namanya bukan nama pengikat yang valid harus dikutip
let description = {
    work : "Went to work",
    "touched tree" : "Touched a tree"
};
console.log (description["touced  tree"]);

let an0bject = {left : 1, right : 2};
console.log (an0bject.left);
// 1
delete an0object.left;
console.log (an0bject.left);
// undefined
console.log ("left" in an0bject);
// false
console.log ("right" in an0bject);
// true
console.log (an0bject.keys({x : 0, y : 0, z : 2}));
// ["x", "y", "z"]

// 0bject.assign function
let objectA = {a : 1, b : 2};
Object.assign (objectA, {b :3, c : 4});
console.log (objectA);
// {a : 1, b : 3, c : 4}

//Jacques keeps as an array of objects
let journal = [
    {events : ["work", "touched tree", "pizza", "running", "television"],
    squirrel : false},
    {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];






