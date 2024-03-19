import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏的控制器,控制其他的游戏所有类
export default class GameControl{
  // 定义属性
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 积分牌
  scorePanel: ScorePanel;
  // 创建一个属性用来储存蛇的移动方向(也就是按键的方向)
  direction: string = '';
  // 创建一个属性用来标记游戏是否结束
  isLive = true  ;

  constructor(){
    // 在构造函数中初始化 蛇、食物、控制器
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);

    this.init();
  }

  // 游戏的初始化方法，调用后游戏即开始
  init(){
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))

    // 调用run方法使蛇移动
    this.run();
  }

  /**
   * ArrowUp 
   * ArrowDown
   * ArrowLeft
   * ArrowRight
   */

  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent){
    // console.log(event.key)
    // 检查值是否合法

    // 修改direction属性
    this.direction = event.key;
  }

  // 创建一个控制蛇移动的方法
  run(){
    /**
     * 根据方向(this.direction)来使蛇的位置改变
     *  向上 top 减少
     *  向下 top 增加 
     *  向左 left 减少
     *  向右 left 增加
     * 
     *  ArrowUp 
     *  ArrowDown
     *  ArrowLeft
     *  ArrowRight
     */

    // 获取蛇当前的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键的方向来修改X值和Y值
    switch(this.direction){
      case 'ArrowUp':
        Y -= 10;
        break;
      case 'ArrowDown':
        Y += 10;
        break;
      case 'ArrowLeft':
        X -= 10;
        break;
      case 'ArrowRight':
        X += 10;
        break;
    }

    // 检查蛇是否吃到食物
    this.checkEat(X, Y);

    // 修改蛇的X,Y位置
    try{
      this.snake.X = X;
      this.snake.Y = Y;
    }catch(e){
      alert(e + ' Game Over!');
      this.isLive = false;
    }
    // 开启定时调用
    this.isLive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
  }

  // 定义一个方法,用来检查蛇是否吃到食物
  checkEat(X: number, Y: number){
    if(this.food.X === X && this.food.Y === Y){
      // 食物的位置要进行重置
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇要增加一节
      this.snake.addBody();
    }
  }

}