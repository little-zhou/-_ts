// 使用class关键字来定义一个类
/**
 *  对象中主要包含了两个部分:
 *      属性
 *      方法
 */
class Person{
  /**
   * 直接定义的属性是实例属性,需要通过对象的实例去访问
   *    const per = new Person();
   *    per.name
   * 
   * 使用static关键字定义的属性是静态属性(类属性),可以直接通过类来访问
   *  Person.age
   * 
   * readonly开头的属性表示一个只读属性无法修改
   */

  // 定义实例属性
  // readonly name: string = '孙悟空';
  name = '孙悟空';
  // 在属性前面加上static关键字可以定义类属性(静态属性)
  // static readonly age: number = 18;
  age = 18;

  // 定义方法
  /**
   * 如果方法以static开头就是类方法/静态方法,通过类名直接调用
   */
  static sayHello() {
    console.log('Hello 大家好!')
  }
}

const per = new Person();
// // 实例属性
// console.log(per.name, per.age)

// 类属性(静态属性)
// console.log(Person.age);

// console.log(per.name);
// per.name = 'tom';
// console.log(per.name);

// Person.age = 88;
// console.log(Person.age)

Person.sayHello();
