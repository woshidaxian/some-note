# 标签a
target属性  
_blank	在新窗口中打开被链接文档。
_self	默认。在相同的框架中打开被链接文档。
_parent	在父框架集中打开被链接文档。
_top	在整个窗口中打开被链接文档。
framename	在指定的框架中打开被链接文档。  

创建锚-用于目录跳转
```html
<a href="#tips">tips</a>
<a name="tips">一些提示......</a>
```
或使用ID与链接实现
```html
<h1 id="c1">第四章</h1>
<a href="#c1">跳转至第四章</a>
<a href="index.html#c1">...</a>
```

# 图像标签 img area map
图像映射
```html
<img src="#" usemap="#planetmap" alt=""/>
<!-- 不同浏览器会选择id或name -->
<map name="planetmap" id="planetmap">  
  <area shape="circle" coords="180,139,14" href="#" target="_blank" alt=""/>
  <area shape="circle" coords="180,139,14" href="#" target="_blank" alt=""/>
  <area shape="circle" coords="180,139,14" href="#" target="_blank" alt=""/>
</map>
```

# 列表
无需列表 ul>li

有序列表 ol>li  

# 块元素 行元素
块：div，p，h1-h6,ul,ol,...
行：span,a,img,b,i,...  

# 头部元素head
title: 定义文档标题 => 定义浏览器工具栏中的标题，页面被添加到收藏夹时显示的标题，搜索引擎结果中的页面标题  
base: 为页面上的所有链接规定默认地址或默认目标（target）  
link: 连接外部资源，常用于连接样式表  
meta: 元数据，用于页面的描述，关键词，文档的作者，最后修改时间，...
script: js
style: 内联样式

# HTML5语意元素
article => 定义文章  
aside => 定义页面内容以外的内容，侧边栏
details => 定义用户能够查看或隐藏的额外细节
figcaption
figure
footer
header
main
mark
nav
section
summary
time