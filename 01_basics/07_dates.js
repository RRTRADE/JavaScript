let myDate=new Date();
// console.log(typeof myDate);//object
// console.log(myDate);
// console.log(myDate.toString());//toString() method is used to convert the date object into a string representation of the date and time.
// console.log(myDate.toDateString());//toDateString() method is used to convert the date object into a string representation of the date portion only.
// console.log(myDate.toLocaleDateString());//toLocaleDateString() method is used to convert the date object into a string representation of the date portion based on the local conventions of the user's locale.

let myDate1=new Date('2024-06-01');
// console.log(typeof myDate1);
// console.log(myDate1.toDateString());

// let mynewDate='2024-06-01';
// console.log(typeof mynewDate);//string
// // console.log(mynewDate.toDateString());//TypeError: mynewDate.toDateString is not a function

// console.log(typeof mynewDate);//string

let myDate2=new Date(2024,5,1,12,30,45,0);//Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
// console.log(typeof myDate2);
// console.log(myDate2.toDateString());
 
let myTimeStamp=Date.now();
// console.log(typeof myTimeStamp);//number
// console.log(myTimeStamp);//1622505600000 milliseconds since January 1, 1970, 00:00:00 UTC
// console.log(myDate2.getTime());//1622505600000 milliseconds since January 1, 1970, 00:00:00 UTC

// console.log(myTimeStamp/1000);//1622505600 seconds since January 1, 1970, 00:00:00 UTC
// console.log((myTimeStamp/1000));//1622505600 seconds since January 1, 1970, 00:00:00 UTC
// console.log((myDate2.getTime())/1000);//1622505600 seconds since January 1, 1970, 00:00:00 UTC

console.log(Date.now()/1000);//will give decimal value of seconds since January 1, 1970, 00:00:00 UTC
console.log(Math.floor(Date.now()/1000));//will give integer value of seconds since January 1, 1970, 00:00:00 UTC

let myDate3=new Date()
console.log(myDate3.setFullYear);//function setFullYear(year: number, month?: number, date?: number): number

console.log(myDate3.toLocaleDateString('default', {
     weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    }));


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date