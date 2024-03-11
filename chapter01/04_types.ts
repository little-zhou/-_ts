// object 表示一个对象(js里面日期、函数、数组等都是对象,所以这么表示意义不是很大)
let a: object;
a = {};
a = function(){};

// 我们要限制的其实是对象里面的属性(下面定义了一个b对象,指定它里面必须有name属性,它的值是str)
// let b: {name: string, age?: number}; //属性后面加?表示该属性可有可无
let b: {name: string};
// b = {}; // wrong: 缺少name属性
// b = {name: 'Dany', age: 15} // wrong: 多了age属性

// 如果我们要指定对象中必须包含某些属性,其他属性不定
// [propName: string]: any 表示有任意类型的属性
let c: {name: string, [propName: string]: any};
c = {name: 'Dany', age: 15, hobby: 'sleep'}

/**
 * 设置函数的类型结构
 *    语法: (形参: 类型, 形参: 类型 ...) => 返回值
 */
let d: (a: number, b: number)=>number;
// d = function (n1, n2) {
//   return n1 + n2;
// }

/**
 *  数组的类型声明:
 *      类型[]
 *      Array<类型>
 */
// string[]表示字符串数组
let e: string[];
// let f: Array<string>;
e = ['a', 'b', 'c'];


/**
 *  元组是固定长度的数组
 *    语法: [类型, 类型, 类型]
 */
let h: [string, string];
h = ['hello', 'abc']


/**
 *  enum枚举
 */

enum Gender{
  Male,
  Female
}

let i: {name: string, gender: Gender}
i = {
  name: 'Dany',
  gender: Gender.Male
}
console.log(i.gender === Gender.Male);


// & 表示且
let j: { name: string } & { age: number };
j = {name: 'Dany', age: 18}


// 类型的别名
// let k: 1 | 2 | 3 | 4 | 5;
// let l: 1 | 2 | 3 | 4 | 5;
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 1;
k = 5;
// k = 6; // wrong
