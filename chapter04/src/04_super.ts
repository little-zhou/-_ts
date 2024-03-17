(function(){
  class Animal{
    name: string;

    constructor(name: string){
      this.name = name;
    }

    sayHello() {
      console.log('动物在叫!');
    }
  }

  class Dog extends Animal{

    constructor(public name: string, public age: number){
      super(name);
      this.age = age;
    }
    
    sayHello(): void {
      // super表示当前类的父类
      super.sayHello();
    }
  }

  const dog = new Dog('旺财', 16);
  dog.sayHello();
})();