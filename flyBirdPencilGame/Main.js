//初始化整个游戏的精灵，作为游戏开始的入口
import { ResourceLoader } from './js/base/ResourceLoader';
import { Director } from './js/Director';
import { BackGround } from './js/runtime/BackGround';
import { DataStore } from './js/base/DataStore';


export class Main {
  constructor() {
    this.canvas = wx.createCanvas();
    // console.log('this.canvas:', this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance(); //获取到数据仓库实例。
    const loader = ResourceLoader.create(); //调用ResourceLoader中的静态方法，在静态方法中创建了实例；
    loader.onLoaded(map => this.onResourceFirstLoaded(map)); // 调用ResourceLoader实例中的onLoaded方法，通过回调函数形式拿到键值对集合。
  }

  // 保证了只有在图片资源加载完成之后才执行该方法。
  // 一些需要在图片加载完成之后的处理可以放在这里处理。
  onResourceFirstLoaded(map) {
    // let background = new BackGround(this.ctx, map.get('background'));
    // background.draw();

    this.dataStore.ctx = this.ctx; // 把ctx, map这些值放在data的原型链上，不被销毁
    this.dataStore.res = map;
    this.init();
  }

  // 初始化
  init() {
    // dataStore中有了background对应的背景BackGround实例
    // this.dataStore.put('background', new BackGround(this.ctx, this.dataStore.res.get('background'))) // this.dataStore.res.get('background')此时是image图片实例
    // this.dataStore.put('background', new BackGround()) // 创建BackGround类实例，可以再简化如下
    this.dataStore.put('background', BackGround); // 传入一个类即可，不过typeof是function类型，需要put方法中进行new的处理
    Director.getInstance().run();
  }


}

//getContext() 方法返回一个用于在画布上绘图的环境。该对象实现了一个画布所使用的大多数方法。