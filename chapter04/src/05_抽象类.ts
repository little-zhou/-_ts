(function(){
  /**
   * 抽象类是专门用来被继承的类,不能用来创建对象
   */
  abstract class Animal{
    constructor(public name: string){
      this.name = name;
    }

    // 定义一个抽象方法
    // 抽象方法使用abstract开头,没有方法体
    // 抽象方法只能定义在抽象类中,子类必须对抽象方法进行重写
    abstract sayHello(): void;

    sayWhat(){
      console.log('抽象类中的非抽象方法.')
    }
  }

  class Dog extends Animal{
    constructor(public name: string, public age: number){
      super(name);
      this.age = age;
    }

    sayHello(): void {
      console.log('狗狗再叫!')
    }
  }

  // const a = new Animal(); //wrong

  const dog = new Dog('旺财', 16);
  dog.sayHello();
})();