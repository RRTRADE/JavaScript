const myArr1=[1,2,3,4,5]
const myArr2=[100,200]

// myArr1.push(myArr2)

// console.log(myArr1);
// console.log(myArr2);

// NewArr=myArr1.concat(myArr2)
// console.log(NewArr);

// const all_new_element=[...myArr1,...myArr2]//Spread the all elements of all arrays
// console.log(all_new_element);

// const A1=[1,2,[3,4,5,[6,4],9],25]
// const A_New=A1.flat(1)//default 1 depth -[ 1, 2, 3, 4, 5, [ 6, 4 ], 9, 25 ]
// const A_New=A1.flat(Infinity)

// console.log(A1);
// console.log(A_New);

console.log(Array.isArray("Rajiv"));
console.log(Array.from("Rajiv"));  //Creates an array from an iterable object. [ 'R', 'a', 'j', 'i', 'v' ]

console.log(Array.from({Name: "Ranjan"})); // will return []
console.log(Array.from({Name: "Ranjan", Address:"Raipur"}.Address)); // will return [ 'R', 'a', 'i', 'p', 'u', 'r' ]

let Score1=100
let Score2=200

const ScoreArr=Array.of(Score1,Score2)
console.log(ScoreArr); //[ 100, 200 ]