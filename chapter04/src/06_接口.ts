(function(){

  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number,
    // [propName: string]: any
  }

  // type myType{} // wrong 不能重复声明

  /**
   * 接口用来定义一个类结构,用来定义一个类中应该包含哪些属性和方法
   *  同时接口也可以当成类型声明去使用
   */

  interface myInterFace{
    name: string,
    age: number
  }

  enum Gender{
    Male,
    Female
  }

  // 接口可以重复声明,相当于把几个接口合并
  interface myInterFace{
    gender: Gender,
    // age: string // wrong
  }

  // const obj: myInterFace = {
  //   name: 'sss',
  //   age: 111,
  //   gender: Gender.Male
  // };

  /**
   * 接口可以在定义类的时候去限制类的结构
   *  接口只定义对象的结构不考虑实际值
   *    接口中的方法都是抽象方法(抽象类中既可以有抽象方法也可以有非抽象方法)
   */
  interface myInter{
    name: string;

    sayHello(): void;
  }

  /**
   * 定义类时,可以使类去实现一个接口
   */
  class MyClass implements myInter{

    constructor(public name: string){
      this.name = name;
    }

    sayHello(): void {
      console.log('sdfasd');
    }
  }

})();