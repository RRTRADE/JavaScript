
// Object destructuring : Assigning value of object property to a variable with the same name as the property
const course={
    courseName:"JavaScript",
    price:999,
    courseInstructor:"Divyansh"
}

console.log(course.courseInstructor); //Normal way to access the value of courseInstructor

// course.courseInstructor 
const{courseInstructor}=course 
console.log(courseInstructor); //Divyansh

const{courseInstructor:instructor}=course
console.log(instructor); //Divyansh

const {courseName,price:abc}=course
console.log(courseName,abc); //JavaScript 999

