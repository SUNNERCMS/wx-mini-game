// 变量缓存器，方便我们在不同的类中访问和修改变量
// 在这里创建了一个集合，用于存放数据，并给这个数据类，设计了添加数据、查询数据，销毁数据的方法。
export class DataStore {
  
  // 单例模型的创建
  static getInstance() {
    if(!DataStore.instance) {
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }

  constructor() {
    this.map = new Map(); //给实例增加map属性
  }

  // 往map集合中添加数据，返回this，即返回当前实例，可构成链式调用
  put(key, value) {
    // 调用给方法，如果传入的是类，需要将其实例化
    if(typeof value === 'function') {
      value = new value();
    }
    this.map.set(key, value);
    return this;
  }

  // 查询数据
  get(key) {
    return this.map.get(key);
  }

  // 销毁数据
  destory() {
    for(let value of this.map.values()) {
      value = null
    }
    // clear方法清除所有成员，没有返回值。
    this.map.clear();
  }
}