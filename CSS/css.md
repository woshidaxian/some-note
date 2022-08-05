# 清浮动之clearfix
```
.clearfix:after{
    content: "";
    display: block;
    clear: both;
}
```

# CSS选择器优先级
!important -> 行内样式，style属性 -> id选择器 -> class选择器 -> 标签选择器 -> 通配符* -> 浏览器自定义和继承# CSS选择器优先级


# 文字太多省略号显示
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