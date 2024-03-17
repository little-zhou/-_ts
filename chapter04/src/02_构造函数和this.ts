class Dog {
  // name = '旺财';
  // age = 18;
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // 在实例方法中,this就表示当前的实例
    // 在构造函数中当前对象就是当前新建的那个对象
    console.log('构造函数执行了!');
    this.name = name;
    this.age = age;
  }

  static bark(){
    // alert('汪汪汪!');

    // 在方法中可以通过this表示当前调用的对象
    console.log(this);
  }
}

// const dog = new Dog('dog', 12);
// const dog2 = new Dog('dog2', 22);

// dog.bark();
// dog2.bark();

Dog.bark();
