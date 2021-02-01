//资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
import { Resources } from './Resources';

export class ResourceLoader {
  constructor() {
    this.map = new Map(Resources); //创建图片名字和路径的键值对集合
    for (let [key, value] of this.map) {
      const image = wx.createImage(); // 创建image实例
      image.src = value; //给image添加图片路径src属性
      this.map.set(key, image); //键值对集合此时为：图片的名字和对应图片实例（已含有src属性）
    }
  }

  // 图片加载完之后执行回调函数
  onLoaded(callback) {
    let loadedCount = 0;
    for(let value of this.map.values()) {
      value.onload = () => {
        loadedCount++; //每张图片加载完成都进行一次计数
        if(loadedCount >= this.map.size) {
          callback(this.map); // 图片加载完之后执行回调函数
        }
      }
    }
  }

  static create() {
    return new ResourceLoader();
  }
}