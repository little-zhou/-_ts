// 定义一个立即执行函数 避免ts全局重名问题
(function(){
    // class Dog{
    //   name: string;
    //   age: number;

    //   constructor(name: string, age: number){
    //     this.name = name;
    //     this.age = age;
    //   }

    //   sayHello(){
    //     console.log('汪汪汪!');
    //   }
    // }

    // class Cat{
    //   name: string;
    //   age: number;

    //   constructor(name: string, age: number){
    //     this.name = name;
    //     this.age = age;
    //   }

    //   sayHello(){
    //     console.log('喵喵喵!')
    //   }
    // }

    // const dog = new Dog('旺财', 5);
    // const cat = new Cat('mimi', 0.5);
    // console.log(dog);
    // console.log(cat);
    // dog.sayHello();
    // cat.sayHello();

    abstract class Animal{
      name: string;
      age: number;

      constructor(name: string, age: number){
        this.name = name;
        this.age = age;
      }

      sayHello(): void{};
    }
    
    /**
     *  Dog extends Animal
     *  此时,Animal被称为父类,Dog为子类
     *  使用继承后,子类将会拥有父类的所有方法和属性
     *  通过继承可以将多个类中共有的代码写在一个父类中
     *    这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
     *    如果希望在子类中添加一些父类没有的属性或者方法直接添加就行
     *  如果在子类中添加了和父类相同的方法,则子类方法会覆盖掉父类中的方法
     *    这种子类覆盖掉父类方法的形式,我们称为重写
     * 
     */
    class Dog extends Animal{
      sayHello(){
        console.log('汪汪汪!');
      }
    }

    class Cat extends Animal{
      sayHello(){
        console.log('喵喵喵!');
      }
    }

    const dog = new Dog('旺财', 3);
    dog.sayHello();

    const cat = new Cat('mimi', 0.5);
    cat.sayHello();

})();