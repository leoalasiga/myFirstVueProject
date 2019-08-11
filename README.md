# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 制作首页App组件
1. 利用mint-ui的header组件制作了header区域
2. 制作了底部的tabbar区域,使用了mui的tabbar
    + 在制作购物车的饿小图标的时候,操作会多一点
    + 先把扩展图标的css样式,拷贝到项目中
    + 拷贝扩展字体库tff文件添加到项目中
    + 为购物车小图标添加样式  mui-icon mui-icon-extra mui-icon-extra-cart

3. 要在中间区域放置一个router-view区域展示路由

## 改造tabbar为route-link
## 设置路由高亮

## 点击tabbar中的路由连接,展示对应的路由组件

## 制作首页轮播图数据

## 加载首页轮播图数据
1. 获取数据,使用vue-resource的this.$http.get获取数据
2. 获取到的数据要保存到data上
3. 使用v-for循环渲染每个item项

## 改造九宫格区域

## 改造tabbar切换,route-view的切换效果,利用transition进行动画切换
