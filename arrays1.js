//slice()
// let arr = ["riya","raj","trupti","punam","sapna"];
// console.log(arr.slice(1,3));

//  console.log(arr.slice(2,4));
//  console.log(arr.slice(1));

//concat

// let arr=[1,2];
// let arr1=[3,4];
// console.log(arr.concat(arr1));

// let arr=[1,2];
// console.log(arr.concat([3, 4]));
// console.log(arr.concat([3,4]));
// console.log(arr.concat([3,4],[5,6]));
// console.log(arr.concat([3,4],5,6));

// indexof()

// let arr=["riya","raj","trupti"];
// console.log(arr.indexOf("raj","trupti"));

// let arr=["riya","raj","trupti","punam","raj"];
// console.log(arr.indexOf("raj"));
// console.log(arr.lastIndexOf("raj"));

// // includes()
// let arr=["riya","raj","trupti","punam","sapna"];
// console.log(arr.includes("raj"));
// console.log(arr.includes("sheetal"));


// doubt
// let arr=[NaN];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));

// Find ()

// let arr=[
//     {name:"riya",age:20},
//     {name:"raj",age:30},
//     {name:"trupti",age:40},
//     {name:"punam",age:50},
//     {name:"sapna",age:60}
// ];
// let user=arr.find(element=>element.age===40);
// console.log(user);
// console.log(user.name);
// let result =arr.find(function(element){
//     return element.age===40;
// });
// console.log(result);

// findindex

// let arr=[
//         {name:"riya",age:20},
//         {name:"raj",age:30},
//         {name:"trupti",age:40},
//         {name:"punam",age:50},
//         {name:"sapna",age:60}
//     ];

// let index = arr.findIndex(element => element.age ===40);
// console.log(index);    

// let index = arr.findIndex(element=> element.name==="raj");
// console.log(index);

// reverse ()

// let arr = ["riya","raj","trupti","punam","sapna"];
// console.log(arr.reverse());

// let arr = ["riya","raj","trupti","punam","sapna"];
// console.log(arr.join());
// console.log(arr.join(" "));
// console.log(arr.join(", "));
// console.log(arr.join("-"));

// let str="tahira";
// console.log(str.split(""));
// console.log(str.split("").reverse());

// try same example using for loop 
let str = "tahira"; //arihat
console.log(str.split("").reverse().join());
