## 用css实现宽高不确定的正方形？
padding-bottom: 100%

## 盒模型？
内容盒+内边距+边框+外边距
box-sizing改变盒模型的行为，content-box（默认值），border-box 内容框、内边距和边框的尺寸，不包括外边距

## 元素水平垂直居中方案？
1. flex布局
2. 绝对定位+margin:auto
3. 绝对定位+transform
4. table布局，vertical-align: middle;text-align: center;
5. grid网格布局align-items:center;justify-content: center;
6. 单行文本，line-height配置text-align

## absolute按照什么定位
用于将元素相对于其最近的已定位（指定了 position: relative;、position: absolute;、position: fixed; 或 position: sticky;）祖先元素进行定位。如果没有已定位的祖先元素，元素会相对于最初的包含块进行定位，通常是 <html> 元素

## px、em、rem、vh、vw
px：表示像素，所谓像素就是呈现在我们显示器上的一个个小点，每个像素点都是大小等同的
em：是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（1em = 16px）
rem：相对单位，相对的只是HTML根元素font-size的值
vh：100vh = 窗口高度
vw：100vw = 窗口宽度

## z-index是如何改变层级关系的？z-index为0的那一层是什么？
z-index 是 CSS 属性，用于控制元素的堆叠顺序和层级关系。z-index 值越高的元素会被放置在堆叠顺序中的上方。通常情况下，较大的 z-index 值会覆盖较小的 z-index 值，使元素显示在顶部。
默认情况下，所有元素的 z-index 值都是 0，这意味着它们在堆叠顺序中处于相同的层级。如果没有明确设置 z-index 属性，元素的层级关系将按照它们在 HTML 结构中的出现顺序来确定。后出现的元素将覆盖先出现的元素。
需要注意的是，z-index 属性只对已定位（position: relative;、position: absolute; 或 position: fixed;）的元素起作用。非定位的元素默认处于普通文档流中，它们的 z-index 值不会影响堆叠顺序。

## 选择器的权重？
!important -> 行内样式，style属性 -> id选择器 -> class选择器 -> 标签选择器 -> 通配符* -> 浏览器自定义和继承# CSS选择器优先级

## flex布局？
主轴：沿着flex元素放置的方向延伸的轴
交叉轴：垂直于flex元素放置方向的轴

## 怎么实现轮播图？

## calc可以计算乘除吗？
包括加法、减法、乘法和除法

## 常用伪元素
before、after

## flex: 1包含哪三种属性？
1. flex-grow：这是第一个子属性，用于定义弹性项相对于其他弹性项增长的比例。默认值是0，表示不增长。如果所有弹性项的flex-grow都为1，它们将等分可用空间；如果一个弹性项的flex-grow为2，而其他为1，那么前者将占用多余空间的两倍。

2. flex-shrink：这是第二个子属性，用于定义弹性项相对于其他弹性项收缩的比例。默认值是1，表示等比例收缩。如果一个弹性项的flex-shrink为2，而其他为1，那么前者将相对于其他项多收缩一倍。

3. flex-basis：这是第三个子属性，用于定义弹性项在分配多余空间之前的基础尺寸。默认值是auto，表示由内容决定。你可以设置固定的尺寸（如像素或百分比），或者使用auto让它根据内容自动调整。


