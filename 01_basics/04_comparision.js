// console.log(1 == 1); // true
// console.log(1 == '1'); // true
// console.log(1 === '1'); // false

// console.log(0 == false); // true
// console.log(0 === false); // false

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false

// console.log([] == false); // true
// console.log([] === false); // false

// console.log({} == false); // false
// console.log({} === false); // false

// console.log([] == ![]); // true
// console.log([] === ![]); // false   

// console.log([] == []); // false
// console.log({} == {}); // false 

console.log(undefined == 0); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

//=== strict equality operator checks for both value and type equality, while == performs type coercion before comparison. It's generally recommended to use === to avoid unexpected results due to type coercion.
// == is the equality operator that checks for value equality after performing type coercion if necessary. It allows for comparisons between different types, which can lead to unexpected results. For example, 1 == '1' evaluates to true because the string '1' is coerced to the number 1 before the comparison.
// === is the strict equality operator that checks for both value and type equality. It does not perform type coercion, so the values must be of the same type to be considered equal. For example, 1 === '1' evaluates to false because they are of different types (number and string).
