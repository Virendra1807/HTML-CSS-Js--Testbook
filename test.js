// <<<<<<< HEAD
// console.log("Helllo World");
// console.log("Helllo World");
// console.log("Changes this Js code from GitHub and Pull it to local syatem");
// >>>>>>> ade9cae2b3d30d1d83b984dffd34dd9f1c54b8b3

// automatically Addded this file while pulling JS code from GitHub

// var car = {
//     'name': 'Hyundai Creta',
//     'milege': 19,
//     'price': 1800000,
//     'wheels': 4,
//     'Number': 3129
// }

// car.milege = '17kmpl';
// console.log(car);
// Object.seal(car);
// car.milege = '20kmpl';
// // car.number = 3129;
// console.log(car);

// Array.of  & Array.from
// const arr1 = Array.of('hLLO');
// console.log(arr1);

// // const obj1 = ;
// const arr2 = Array.from('DJSHD');
// console.log(arr2);

// Using flat() method
// const arr = [1,2,3,[1,2,[3,4,5,[6,7,8,9]]]];
// console.log(arr.flat()); // It will flat only one array present  inside array
// console.log(arr.flat(2)); // It will flat two arrays present inside array
// console.log(arr.flat(Infinity)); // It will flat all arrays present inside array

// Using at() we can access arrray in reverse order by giving -ve index
// const arr2 = [10,20,30,40,50,60,70,80];
// console.log(arr2.at(0));






// Binary numbers 
// Obj freez and seal diff
// Multi-dime array -- Methods of array
// Execution Context
// SetInterval 
// Event-Loop   
// diff betn methods and functioon
// Distructuring Arr Obj
// BOM DOM
// get attribute and set Attribute
// apendChild
// CreateElement 
// removeElement
// // FormEvent and EventObj 
// Event bubling And Event capturing
// event simulation
// localStorage
// CallBack hell
// Promises 
// optional Chaining
// OOps 
// 



//  ... 128 64 32 16 8 4 2 1                          
// 4 -> 100
// 64 -> 1000000
// 12 -> 1100


// const nm = '  Viren  ';
// for(i in nm){
//     console.log(i);
// }

// const ag = ' suji ';
// console.log(nm.trimEnd());
// console.log(ag.trim());

// const time = "9";
// console.log(time.padStart(5, '0'));

// Swap key and values of object
// function swapKeysValues(obj) {
//     const swappedObj = {};

//     for (const key in obj) {
//       console.log(key +" : " + obj[key]);

//       swappedObj[obj[key]] = key;
//     }

//     return swappedObj;
//   }

//   const originalObject = {
//     name: "John",
//     age: 30,
//     city: "New York",
//   };

//   console.log(originalObject.hasOwnProperty('name'));

//   const swappedObject = swapKeysValues(originalObject);
//   console.log(swappedObject);

// const swapObj = {};
// for( key in originalObject){
//     swapObj[originalObject[key]] = key;
// }

// console.log(swapObj);


// const arr = [10,20,30];
// arr[100] = 199;
// console.log(arr.length);
// console.log(arr);

// const user = {
//     fname: 'viren',
//     age: 23
// };

// const custo = {
//     lname: "mali"
// };

// console.log(Object.keys(custo).length);

// // Merge two Objects
// const newObj = Object.assign({}, user, custo);
// const newObj2 = { ...user, ...custo, 2: 'tWO' };
// console.log(newObj2);

// //Creating a property
// user.city = 'Mumbai';
// console.log(user);

// // Updating Property
// user.fname = "Viraj"
// console.log(user.fname);

// //Reading Property
// console.log(user.age + user['city']);

// //Deleting Property
// delete user.age;
// delete user['fname']
// console.log(user);

// user.greeting = ()=>{
//     return 'Hello from obj';
// }

// console.log(user.greeting());

//React syntax 
// const navBar = (cc)=>{
//     console.log(cc);
// }
// navBar(Com ="Viren");

// String Manipulation

// let str = new String("H,e,l,l,o");
// console.log();
// console.log(str);

// console.log(str.charAt(str.length - 1));
// console.log(str[str.length - 1]);
// console.log(str.valueOf());

// console.log(str2.join());

// console.log(str.at(-4));

// let str3  = Symbol('Hello');

// let str2  = str.slice(0, 3);
// console.log(str);

// let str4 = Symbol('Hello');

// console.log(typeof str4);

// let num = new Number(20565572);
// console.log(num.toFixed(1));
// console.log(num.toLocaleString('en-US'));
// console.log(num.toPrecision(5));

// let bigInt = 456841458556895896464678n;
// console.log(typeof bigInt);

let obj = {
    nm: 'Viren',
    age: 23
}

let obj2 = Object.assign(obj, {color : 'pink'});

// console.log(Object.keys(obj2));

// console.log(Object.values(obj2));

console.log(Object.entries(obj2));
console.log(Object.keys(obj2).length);



