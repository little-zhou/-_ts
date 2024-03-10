// 可以使用字面量进行类型声明

let a: 10; //这种形式相当于当常量使用
a = 10;
// a = 11; // wrong

let b: "male" | "female";
b = "male";
b = "female";
// b = "taijain"; // wrong

// 只能是bool或者str类型的数据
let c: boolean | string; 
c = false;
c = 'hello';

// any表示可以是任意类型的数据,相当于关闭了ts的类型检测,不建议使用
// let d; 声明变量不指定类型,TS解析器会自动判断数据类型是any(隐式any)
let d: any; 
d = 10;
d = true;
d = 'hello';

// unknown 表示未知类型
let e: unknown;
e = 10;
e = true;
e = 'hello';

let s: string;

// d的类型是 any, 它可以赋值给任意变量
// s = d; // 不会报错,把s给污染了

e = 'hello';
// wrong: 不能将类型“unknown”分配给类型“string”
// unknown 实际上是一个类型安全的any
// unknown 类型的变量,不能直接赋值给其它变量
// s = e; // wrong: unknown变量不能赋值给其他任意类型的变量

// 如果非要赋值,需要先进行类型检查,就不会报错了
if (typeof e === 'string'){
  s = e;
}

// 类型断言(比如我们知道e就是字符串,这时候就可以通过断言让解释器不报错.)
/**
 * 语法:
 *    变量 as 类型
 *    <类型>变量
 */
s = e as string; // 断言告诉解释器变量的实际类型
s = <string>e;

// void 用来表示空,以函数为例,表示没有返回值的函数
function fn(): void{
  // return true; // wrong
  
  // return;
  return undefined;
}

// never 表示永远不会有返回值
function fn2(): never{
  // return; // wrong
  throw new Error('报错了!');
}



export {};