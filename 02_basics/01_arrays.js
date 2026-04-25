// console.log("Arrays in JavaScript");
//array

const myArr=[1,2,3,4,5];

// console.log(myArr[3]); //4
// console.log(myArr)

const MyHeros=['Superman','Batman','Spiderman','Ironman','Thor'];

// console.log(MyHeros); //Superman
// console.log(MyHeros[2]); //Spiderman

const myArr2=new Array(1,2,3,4,5);

// console.log(myArr2); //[1, 2, 3, 4, 5]
// console.log(myArr2[2]); //3  

//Array methods.
// myArr.push(9)
// myArr.push(8)
// myArr.pop()
// console.log(myArr)
// console.log(myArr)

// myArr.unshift(9) //Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(myArr);
// myArr.shift()       //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr);
/*
(method) Array<number>.includes(searchElement: number, fromIndex?: number | undefined): boolean
Determines whether an array includes a certain element, returning true or false as appropriate.

@param searchElement — The element to search for.

@param fromIndex — The position in this array at which to begin searching for searchElement.
*/
// console.log(myArr.includes(5)); //true
// console.log(myArr.includes(2,3)); //false

// console.log(myArr.indexOf(3));//2

// const newArr=myArr.join()

// console.log(typeof myArr);//object
// console.log(typeof newArr);//string

// console.log(newArr);//1,2,3,4,5
// console.log(myArr); //[ 1, 2, 3, 4, 5 ]


// //slice, splice
// console.log("A ",myArr)
// const myn1=myArr.slice(1,3) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.

// console.log(myn1);
// console.log("B ",myArr)

// const myn2=myArr.splice(1,3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// console.log(myn2);
// console.log("C ",myArr)
