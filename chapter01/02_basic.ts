let a: number;

a = 11;
a = 3;
// a = 'hello'; // Type 'string' is not assignable to type 'number'.

let b: string;
b = 'hello';
// b = 123;

// 如果变量的声明和赋值是同时进行的,TS可以自动对变量进行类型校验
let c = true;
c = false;
// c = 17;  //wrong

// JS中的函数是不考虑参数的类型跟个数的
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum (1, 2)) // 2
// // console.log(sum (1, '2')); //  12
// // console.log(sum(1, 2, 3))

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum (1, 2)) // 2
// console.log(sum (1, '2')); // 直接报错