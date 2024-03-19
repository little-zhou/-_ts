// 定义一个表示计分牌的类
class ScorePanel{
  score = 0;
  level = 1;

  // 分数和等级所在的元素,在构造函数中进行初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 设置一个变量来限制等级
  maxLevel: number;
  // 设置一个变量表示多少分升级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 设置加分的方法
  addScore(){
    // 使分数自加
    this.score++;
    this.scoreEle.innerHTML = this.score + '';

    // 每十分添加一级但是不能超过十级
    if(this.score % this.upScore === 0){
      this.levelUp();
    }
  }


  // 设置加等级的方法
  levelUp(){
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = ++this.level + ''; 
    }
  }

}

// 测试代码
// const scorePanel = new ScorePanel();
// for(let i=0;i<19;i++){
//   scorePanel.addScore();
// }

export default ScorePanel;
