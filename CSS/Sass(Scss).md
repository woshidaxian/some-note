Sass基于Ruby开发，Mac环境下自带，Windows下需要安装Ruby环境并添加到PATH环境变量中
因网络原因更换gem的源
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

# 编译出的格式
compressed--压缩
占用空间最少，删除一切不必要的空格
compact--紧凑
紧凑的风格比嵌套或展开占用的空间较少。每个CSS规则只占用一行，在该行定义每个属性。嵌套规则放置在属性旁边没有换行
expanded--展开

nested--嵌套

# 变量用法  父选择器标识符 & 
!global可将块内变量提升为全局变量
```scss
$p1color: orange;
a {
  color: #fff;
  &:hover{
    color: red;
  }
  &:active{
    color: blue;
  }
}
span{
  color: $p1color;
  $width: 100px;
  height: $width;
}
```
# 属性嵌套
```scss
.c{
  font: {
    weight: bold;
    family: '楷体';
    size: 20px;
  }
}
```

# 静默注释
// 不会出现在编译后的css文件中
/* 会出现在编译后的css文件中 */

# 混合器@mixin
方面在不同地方共享样式
```scss
@mixin d {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 50px;
}
.g{
  @include d;
}
```

# 混合器传参 @mixin($a){color:$a}
```scss
@mixin dd($a,$b,$c){
  color: $a;
  &:hover{
    color: $b;
  }
  &:visited{
    color: $c;
  }
}
.gg{
  @include dd('#fff','#eee','#aaa')
}
.ggg{
  @include dd('orange','blue','red')
}
```
# 选择器继承CSS  @extend
```scss
span{
  color: $p1color;
  $width: 100px;
  height: $width;
}
.span1{
  font-size: 20px;
  @extend span;
}
```
# 占位符选择器%
```scss
%span{
  font-size: 20px;
  font-weight: bold;
}
.e{
  @extend %span;
}
```
编译后结果：
```scss
.e { font-size: 20px; font-weight: bold; }
```
# 支持运算 + - * / % == !=
注意除法并非都可执行
100px/10px   false
(100px/10px)  true
$width/2    true
5px + 8px/2px   true

# @for 循环  through[1,10]   to[1,10)
```scss
@for $i from 1 through 10 {
  .item-#{$i}{
    font-size: #{$i+10}px;
  }
}
```
# @each $var in <list>
单参数
```scss
@each $a in activ, hover, visited {
  .#{$a}-icon {
    background-image: url('./../#{$a}.png');
  }
}
```
多参数
```scss
@each $header,$size in (h1:1em,h2:2em,h3:3em) {
  #{$header} {
    font-size: $size;
  }
}
```
# @while循环
```scss
$aa: 8;  
@while $aa > 0{
  @if $aa % 2 == 0 {
    .item-#{$aa} {
      width: 2em * $aa;
    }
  }@else{
    .item-#{$aa} {
      height: 3em * $aa;
    }
  }
  $aa: $aa - 1;
}
```
# 函数指令 @function
```scss
@function fun($n){
  @return $n * 100px
}
```