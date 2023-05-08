## 清浮动之clearfix
```
.clearfix:after{
    content: "";
    display: block;
    clear: both;
}
```

## CSS选择器优先级
!important -> 行内样式，style属性 -> id选择器 -> class选择器 -> 标签选择器 -> 通配符* -> 浏览器自定义和继承# CSS选择器优先级


## 文字太多省略号显示
overflow: hidden
white-space: nowrap
text-overflow: ellipsis

```css
.el-card-txt{
  overflow: hidden; /*隐藏溢出的文本  */
  text-overflow: ellipsis;
  word-break: break-all;/*自动换行*/
  -webkit-line-clamp:3; /*显示的行数*/
  -moz-box-orient: vertical; /*从上到下自动排列子元素*/
  -webkit-box-orient: vertical; 
  display: -webkit-box ;
}
```


## flex-box
- 主轴：flex-box盒内元素排列方向所在的轴，即根据flex-direction确定
  - **justify-content** 主轴上元素排列方式 
    - center 居中
    - space-between 除了头尾的两个元素外，间距相同
    - space-around 相当于元素左右两边有等大的margin
    - flex-start[default] 主轴开始的方向开始排列 main-start -> main-end
    - flex-end 主轴结束的位置开始排列 main-end -> main-start
    - space-evenly 所有元素间距相同

- 交叉轴：垂直于主轴
  - **align-items** 交叉轴排列方式
    - flex-start 交叉轴开始的位置开始排列 cross-start => cross-end
    - flex-end 交叉轴结束的位置开始排列 cross-end => cross-start
    - center 居中排列
    - stretch[default] 与父级同高
    - baseline 基线对齐，主要是让文字在同一水平线上
  - **align-content** 交叉轴上行间排列方式，即需要弹性容器内有多行（flex-wrap: wrap|wrap-reverse）
    - normal 有没有这个属性都一样
    - flex-start[default] main-start -> main-end
    - flex-end main-end => main-start
    - center 居中
    - space-between 除头行和尾行外，各行之间间距相等
    - space-around 等间距，等同于相同的margin值
    - space-evenly 等间距
  - **align-self** 单独设置一个元素在交叉轴上的排列方式
    - flex-start
    - flex-end
    - center
    - baseline
    - stretch
- **flex-direction** 确定主轴排列方式  
  - row[default] 横向
  - row-reverse 横向-逆向
  - column 纵向
  - column-reverse 纵向-逆向
- **flex-wrap** 控制换行 
  - wrap 换行
  - nowrap[default] 不换行
  - wrap-reverse 换行-逆向
- **gap** 设置元素间距，不包括元素与边界的间距
  - 10px
  - 10px 20px
- **order** 改变元素排序
- **flex-basis** 【意义不大】在不伸缩的情况下子容器的原始尺寸。主轴为横向时代表宽度，主轴为纵向时代表高度
- **flex-grow** 子元素按比例分配剩余空间
- **flex-shrink** 超出父元素的子元素按比例减去
- **flex** flex-grow, flex-shrink, flex-basis 的简写