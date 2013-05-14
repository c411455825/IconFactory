(function(){
    function A(){
        var t = this;
        t.sourcePaths = [
            "source/tool.png"
        ];
        t.canvas = null;
        t.cxt = null;
        t.init();
    }
    var B = A.prototype;
    B.init = function(){
        var t = this;

        t.initCanvas();
    };
    B.initCanvas = function(){
        var t=this,c;
        t.canvas = c = document.createElement("canvas");
        if(c.getContext){
            t.cxt = c.getContext("2d");
        }
        else{
            alert("抱歉！该应用不支持您的浏览器。推荐使用chrome浏览器！");
        }
    }
    B.modifyIcon = function(){
        var t = this;
        for(var i=0;i< t.sourcePaths.length;i++){
            t.readIcon(t.sourcePaths[i],function(img){
                t.cxt.drawImage(img, 0, 0);
                var imgData=t.cxt.getImageData(0,0,img.swidth,img.sheight);
                // 反转颜色
                for (var i=0;i<imgData.data.length;i+=4)
                {
                    imgData.data[i]=255-imgData.data[i];
                    imgData.data[i+1]=255-imgData.data[i+1];
                    imgData.data[i+2]=255-imgData.data[i+2];
                    imgData.data[i+3]=255;
                }
                t.cxt.putImageData(imgData,0,0);
            });
        }
    }
    B.readIcon = function(path,cb){
        var img = new Image();
        img.onload = function(img,cb){
            return function(){
                var img1 = $(img).clone();
                img1.css({
                    "left":"-10000px",
                    "top":"-10000px"
                });
                $("body").append(img1);
                img.swidth = img1.css("width");
                img.sheight = img1.css("height");
                img1.remove();
                if(cb)cb(img);
            }
        }(img,cb)
        img.src = path;
    };

    window.IconFactory = A;
})();