class Snake{
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;

  constructor(){
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇X轴的坐标
  get X(){
    return this.head.offsetLeft;
  }

  // 获取蛇Y轴的坐标
  get Y(){
    return this.head.offsetTop;
  }

  // 设置蛇头的X轴坐标
  set X(value: number){

    // 如果新值和旧值相同,直接返回不需要修改
    if (this.X === value){
      return;
    }

    // X的值的合法范围0-290之间
    if (value < 0 || value > 290){
      // 蛇撞墙了
      throw new Error('蛇撞墙了!');
    }

    // 修改X时,是在修改水平坐标,蛇在左右移动,蛇在向左移动时,不能向右掉头,反之亦然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      // console.log('水平方向发生掉头!')
      // 如果发生了掉头,让蛇向反方向继续移动
      if(value > this.X){
        // 如果新值value大于旧值X,则说明蛇在向右走,此时发生掉头,应该使蛇继续向左走
        value = this.X - 10;
      }else{
        // 向左走
        value = this.X + 10;
      }
    }

    // 移动身体
    this.moveBody();

    this.head.style.left = value + 'px';

    // 检查有没有撞到自己
    this.checkHeadBody();
  }

  // 设置蛇头的Y轴坐标
  set Y(value: number){

    // 如果新值和旧值相同,直接返回不需要修改
    if (this.Y === value){
      return;
    }

    // Y的值的合法范围0-290之间
    if (value < 0 || value > 290){
      // 蛇撞墙了
      throw new Error('蛇撞墙了!');
    }

    // 修改Y时,是在修改垂直坐标,蛇在上下移动,蛇在向上移动时,不能向下掉头,反之亦然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      // console.log('竖直方向发生掉头!')
      // 如果发生了掉头,让蛇向反方向继续移动
      if(value > this.Y){
        value = this.Y - 10;
      }else{
        value = this.Y + 10;
      }
    }

    // 移动身体
    this.moveBody();

    this.head.style.top = value + 'px';

    // 检查有没有撞到自己
    this.checkHeadBody();
  }

  // 蛇身体增加的方法
  addBody(){
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  // 添加蛇移动身体的方法
  moveBody(){
    /**
     *  将后边的身体设置为前边身体的位置
     *    举例子:
     *        第4节 = 第3节的位置
     *        第3节 = 第2节的位置
     *        第2节 = 蛇头的位置
     */
    // 遍历所有的身体
    for(let i = this.bodies.length-1;i>0;i--){
      // 获取前边身体的位置
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      // 将这个值设置到当前身体
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }

  }

  checkHeadBody(){
    // 获取所有的身体,检查其是否和蛇头的坐标发生重叠
    for(let i=1;i<this.bodies.length;i++){
      let bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        // 蛇头撞到身体了
        throw new Error('蛇头撞到自己身体了!');
      }
    }
  }
}

export default Snake;