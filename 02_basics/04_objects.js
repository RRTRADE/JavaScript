const tinderUser=new Object()//Singlton object
const tinderUser1={} //Non-Singleton object

// console.log(tinderUser);
// console.log(tinderUser1);


tinderUser.id="123"
tinderUser.name='Dummy'
tinderUser.isloggedIn=false

// console.log(tinderUser);


const regularUser={
    email:"abc@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Divyansh",
            lastname: "Rajiv Ranjan"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const target={ 1:"a", 2:"b"}
const source={ 2:"c", 5:"n"}
const mergeTarget=Object.assign(target,source)
console.log(mergeTarget);   //{ '1': 'a', '2': 'c', '5': 'n' }
console.log(target);        //{ '1': 'a', '2': 'c', '5': 'n' }

console.log(target===mergeTarget)//true


//club multipl objects into one
const middle={ 5:"d", 6:"h"}
const final=Object.assign({},source,target,middle); //all club into final
console.log(final); //{ '1': 'a', '2': 'c', '5': 'd', '6': 'h' }

//Spread objects.
const final1={...source,...final,...target}
console.log(final1);//{ '1': 'a', '2': 'c', '5': 'd', '6': 'h' }



