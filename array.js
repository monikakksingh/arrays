// let arr=["riya","monika","anajali"];
// console.log(arr);
// arr.splice(1,2);
// console.log(arr)
// arr.splice(1,2,"amit");
// console.log(arr)

// let arr1=[1,2,3,4,5]
// arr1.splice(0,2,6,7,8);
// console.log(arr1)

// let arr =["riya","raj","tripti","monika","sonam"];
// console.log(arr.slice(1,3));
// console.log(arr.slice(2,4));

// function expression

// let sayhello= function (){
//     return "Hello World"
// }
// console.log(sayhello());

// arrow function

// let sayHello = () => {  //store a function in a variable
//     return "Hello World";  //explicit return 
// }

// let sayHello = () => "Hello World";  //implicit return

// function sayMyName(){
// }
// console.log("Hello puran" ); 

// let result = sayHello(()=>{
//     console.log("Hello World");
// })

// function sayHello(func){ //receive a function as an parameter
//     func();
//     return ()=>{  //return a funciton from a function
//         console.log("Hello World");
//     }
// }
// sayHello(sayMyName);  //pass a function as an argument

// functions are called first class citizen, first class object

// IIFE  - immediately invoked functions expression - self invoking function

// let sayHello=()=>{
//     return "Hello World"; //explicit return
// }

// (function (name){
//     console.log("Hello", name);
// }("puran"));

// (function(value){
//     return value*3;
// }(5));

// before ESS release,
// we can't use the arrow function, so we use
// IIFE to create a function and call it immediately.

// var sayHello = function (){
//     return "Hello World";
// }
// sayHello()

// let user ={
//     name:'Alka',
//     age:20,
//     'email id': "moika.com",
// }
// console.log(user)
// console.log(user.name)

// console.log(user["email id"]);


// let fruit="apple";
// let bag ={};

// bag[fruit]=5;
// console.log(bag);

// let fruit='apple';
// let bag={
//     [fruit+'computer']:5,
// };
// console.log(bag);
// console.log(bag.applecomputer);

// function makeuser(name,age){
//     return {
//         name,  //name:name,
//         age,   //age:age,
//     };
// }
// let user = makeuser("Alka",20);
// console.log(user)


// function userdetails(name,age){
//     return {
//         name,
//         age:age || 18,
//     }
// }
// let user1=userdetails("alka",20);
// console.log(user1);

// let user1=userdetails("alka");
// console.log(user1);

// let obj={
//     1:"one",
// }
// console.log(obj);
// console.log(obj["1"]);
// console.log(obj[1]);


// let user1={a:1, b:2};
// let user2={c:3, d:4};

// let output = Object.assign(user1,user2);
// console.log(output);

// console.log(user1);

// let user={
//     name:"sapna",
// };
// console.log(user);

// let arr =["preeti","monika"];
// arr.push("sailinika","gagaytri");
// arr.unshift("sheetal","renuka")
// arr.pop();
// console.log(arr);

// let arr =["shika"];
// let arr1=arr;
// console.log(arr===arr1);
// arr1.push("sheetal");
// console.log(arr);

// timer functions
// setTimeout(), setInterval(), clearTimeout(), clearInterval()

// code excutes after a time interval
// console.log('start');
// console.log('start 2');

// function greet(){
//     // alert('hello');
//     console.log('Hello');
//     alert('notifcation received');

// }
// // greet()
// setTimeout(function,time,param1,param2)
// time=milisconds
// 1 sec = 1000 ms
// setTimeout(greet,5000);

// clearTimeout - to stop the timer

// let time = setTimeout(greet,5000);

// setTimeout(()=>{
//     console.log("I am callback function")
// },5000)

// let id = setTimeout(greet,5000);

// clearTimeout(id);

// setInterval
// function printhello(){
//     console.log("Hello");
// }
// let setInterval(printhello, 1000);


// let arr=[]
// arr[99]="Monika";
// console.log(arr);

// arr[0]="riya";
// console.log(arr);

// arr[2]='raj';
// console.log(arr);


// console.log(arr.length);

// let arr=["riya","raj","triputi","punam","sapna"];
// for (let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// let arr1=[1,2,3,4,5];
// for(let index=3; index<arr1.length;index++){
//     console.log(arr1[index]);
// }

// let arr=[1,2,3,4,5];
// for(let index=arr.length-1; index>=0; index-- ){
//     console.log(arr[index]);
// }

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for (let i=0; i<arr.length; i++){
//     if (i%2==0){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
// }




