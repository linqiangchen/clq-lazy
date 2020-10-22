## react 图片懒加载
 1. 使用 LazyImg 标签替换需要懒加载的标签
 2. 在 LazyImg上 添加src属性值为图片的路径

 ## 属性
  1. src：图片加载地址（必选）
  2. unSK：是否启用骨架屏，默认为false加载骨架屏
  3. className：类名，骨架屏样式
## 方法
  1. loadEnd：图片加载完成回调函数，接收到图片对象
  2. appear：图片加载完成再次进入视图回调函数，接收到图片对象
  3. hide：图片加载完成完全不可见时回调函数，接收到图片对象
### 示例
     <LazyImg src="https://yanxuan-item.nosdn.127.net/b4892bff6e5ade75b4583da328da20e7.png"></LazyImg>
