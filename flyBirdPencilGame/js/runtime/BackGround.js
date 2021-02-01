import { Sprite } from '../base/Sprite';
// import {DataStore} from "../base/DataStore";

export class BackGround extends Sprite {
  // constructor(ctx, image) {
  //   super(ctx, image, 
  //       0, 0,
  //       image.width, image.height,
  //       0, 0,
  //       375, 667
  //     );
  // }

  // 无参数，创建给类时，无需传入，ctx在基类中需要获取
  constructor() {
    // const image = DataStore.getInstance().res.get('background');
    const image = Sprite.getImage('background'); //将获取图片的方法封装在基类中，避免代码重复
    super(image,
        0, 0,
        image.width, image.height,
        0, 0,
        375, 667
    )
  }
}