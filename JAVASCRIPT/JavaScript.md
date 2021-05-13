# 实现进入全屏&退出全屏
```
toggleFullScreen:function(){
    if(!this.isFullScreen){
        let el = document.documentElement;
        (el.requestFullscreen && el.requestFullscreen()) ||
        (el.mozRequestFullScreen && el.mozRequestFullScreen()) ||
        (el.webkitRequestFullscreen && el.webkitRequestFullscreen()) || (el.msRequestFullscreen && el.msRequestFullscreen());
        this.isFullScreen = 1;
    }else{
        document.exitFullscreen ? document.exitFullscreen() :
        document.mozCancelFullScreen ? document.mozCancelFullScreen() :
        document.webkitExitFullscreen ? document.webkitExitFullscreen() : '';
        this.isFullScreen = 0;
    }
}
```

# 重新加载
全屏下使用会退出全屏
```
document.location.reload()
```

# 清浮动之clearfix
```
.clearfix:after{
    content: "";
    display: block;
    clear: both;
}
```

# XMLHttpRequest对象
