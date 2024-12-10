

let arr = [1,2,3,4,5];

let a = arr.map((num)=> num * num)
console.log(a)

let b = arr.filter((num)=> num%2===0)
console.log(b)

let c = arr.reduce((acc, num)=> acc + num , 0)
console.log(c)


