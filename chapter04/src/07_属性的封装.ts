(function(){
  class Person{
    // TS可以在属性前添加属性的修饰符
    /**
     *  public 修饰的属性可以在任意位置访问(修改-包括子类) 默认值
     *  private 私有属性,私有属性只能在类内部进行访问(修改-不包括子类)
     *    - 通过在类中添加方法使得私有属性可以被外部访问
     *  
     *  protected 只可以在本类以及子类中访问(修改)到
     * 
     */
    private _name: string;
    private _age: number;

    constructor(name: string, age: number){
      this._name = name;
      this._age = age;
    }

    /**
     * getter方法用来读取属性
     * setter方法用来设置属性
     *    - 它们被称为属性的存取器
     */

    // 定义方法,用来获取name属性
    // getName(){
    //   return this._name;
    // }

    // // 定义方法,用来设置name属性
    // setName(name: string){
    //   this._name = name;
    // }

    // TS中设置getter方法的方式
    get name(){
      console.log('get name()执行了!!!');
      return this._name;
    }

    // TS中设置setter方法的方式
    set name(value: string){
      this._name = value;
    }

    get age(){
      console.log('-----------get age');
      return this._age;
    }

    set age(value: number){
      if (value >= 0){
        this._age = value;
      }
    }
  }

  const person = new Person('孙悟空', 18);

  // console.log(person);

  /**
   *  现在属性是在对象中设置的,属性可以任意的被修改
   *    属性可以任意被修改将会导致对象中的数据变得非常不安全
   */

  // person._name = '猪八戒';
  // person._age = -88;

  // console.log(person.getName());

  // person.setName('hahah');
  // console.log(person.getName());

  // console.log(person.age);
  // person.age = -108;
  // console.log(person.age);

  console.log(person.name);

  class A{
    protected num: number;

    constructor(num: number) {
      this.num = num;
    }
  }

  class B extends A{
    test(){
      console.log(this.num);
    }
  }

  // class C{
  //   name: string;
  //   age: number;

  //   constructor(name: string, age: number){
  //     this.name = name;
  //     this.age = age;
  //   }
  // }

  // 上面的简写
  class C{
    
    // 可以直接将属性定义在构造函数中
    constructor(public name: string, public age: number){}

  }

  const c = new C('xxx', 111);
  console.log(c);

})();