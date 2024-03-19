// 定义食物类Food
class Food{
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;

  constructor(){
    // !表示这个元素一定不为空,获取页面中的food元素并将其赋值给element
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物X轴坐标的方法
  get X(){
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y(){
    return this.element.offsetTop;
  }

  // 在蛇吃掉食物后,食物需要刷新位置
  change(){
    // 生成随机位置
    // 食物的位置最小0，最大290

    const left = Math.round(Math.random() * 29) * 10;
    const top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }

}

// 测试代码
// const food = new Food();
// console.log(food.X, food.Y);

// food.change();
// console.log(food.X, food.Y);

export default Food;