//导演类（单例模式），控制游戏的逻辑
import { DataStore } from '../js/base/DataStore';

export class Director {

  // 单例模式创建
  static getInstance() {
    // Director实例是否存在，如果不存在就通过new进行创建，如果存在就直接返回
    if(!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  constructor() {
    // console.log('构造器初始化');
    this.dataStore = DataStore.getInstance(); //在该类中创建DataStore，用于保存数据仓库实例
  }

  run() {
    const backgroundSprite = this.dataStore.get('background'); //获取的是背景画布的实例；
    backgroundSprite.draw();
  }
}