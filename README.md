# vue-manage-system #
给公司员工学习vue的用法和自定义组件以及路由数据请求等的模型

基于Vue.js 2.x系列 + Element UI 的模型。
[线上地址]等我改天放上去


## 前言 ##
在公司用了Vue + Element组件库做了个舆情模型，为了方便大家的学习 总结成这个模型方案。

基于vue.js,使用vue-cli@3.2.3脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离sass样式，方便管理scss
（已经升级到 vue-cli@3.2.3，请更新依赖）
assets里的icon为阿里的iconfont里的自定义文字图标
jqeury已经集成进来index首页的动画就是注意如果要单独引用常规js 必须要把方法export出来 参考todo.js

## 以下功能重点看 ##
- [x] login.vue
- [x] http.vue
- [x] index.vue
- [x] http.vue
- [x] home.vue
- [x] flex.vue
- [x] parent.vue
- [x] vc.vue


## 安装步骤 ##

	git clone https://github.com/kacim/vueForDemo.git      // 把模板下载到本地
	cd vue-manage-system    // 进入模板目录
	npm install         // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

## 本地开发 ##
        // 咱就不用run dev了 run serve的时候ip重复会自动帮我们替换新的 
	// 开启服务器，浏览器访问 http://localhost:8080
	npm run serve

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build
	//如果他们要求你去掉浏览器里的#开启history模式就可以了 但是可能会遇到404问题 可以看我的印象笔记

## 组件使用说明与演示 ##

### vue-schart ###
vue.js封装sChart.js的图表组件。访问地址：[vue-schart](https://github.com/linxin/vue-schart)
<p><a href="https://www.npmjs.com/package/vue-schart"><img src="https://img.shields.io/npm/dm/vue-schart.svg" alt="Downloads"></a></p>

```html
<template>
    <div>
        <schart  class="wrapper"
				:canvasId="canvasId"
				:type="type"
				:data="data"
				:options="options"
		></schart>
    </div>
</template>
	
<script>
    import Schart from 'vue-schart';        // 导入Schart组件
    export default {
        data: function(){
            return {
                canvasId: 'myCanvas',       // canvas的id
                type: 'bar',                // 图表类型
                data: [
                    {name: '2014', value: 1342},
                    {name: '2015', value: 2123},
                    {name: '2016', value: 1654},
                    {name: '2017', value: 1795},
                ],
                options: {                  // 图表可选参数
                    title: 'Total sales of stores in recent years'
                }
            }
        },
        components: {
            Schart
        }
    }
</script>
<style>
.wrapper{
	width: 7rem;
	height: 5rem;
}
</style>
```


