(function(){
    function A(){
        var t = this;
        t.sourcePaths = [
            "source/tool.png"
        ];
        t.canvas = null;
        t.cxt = null;
        t.colorStrList = [
            "3d80b3"
        ];
        t.colorList = [];
        t.init();
    }
    var B = A.prototype;
    B.init = function(){
        var t = this;

        t.initCanvas();
        t.setColorList();
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
    };
    B.run = function(){
        var t = this,task = [];
        for(var i=0;i< t.sourcePaths.length;i++){
            for(var j=0;j< t.colorList.length;j++){
                task.push([
                    t.sourcePaths[i],
                    t.colorList[j]
                ]);
            }
        }

        var i=-1;
        function loop(){
            i++;
            t.modifyIcon(task[i][0],task[i][1],loop)
        }
        loop();
    };
    B.modifyIcon = function(path,color,cb){
        var t = this;
        t.readIcon(path,function(cb){
            return function(img){
                t.cxt.drawImage(img, 0, 0);
                var imgData=t.cxt.getImageData(0,0,img.swidth,img.sheight);
                for (var i=0;i<imgData.data.length;i+=4)
                {
                    var r = imgData.data[i];
                    var g = imgData.data[i+1];
                    var b = imgData.data[i+2];
                    var a = imgData.data[i+3];

                    if(r==0&&g==0&&b==0&&a==255){
                        imgData.data[i] = color[0];
                        imgData.data[i+1] = color[1];
                        imgData.data[i+2] = color[2];
                    }
                }
                t.cxt.putImageData(imgData,0,0);
                var dataURL = t.canvas.toDataURL("image/png");
                var base64Url = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

                $.ajax({
                    "data":{"dataUrl":base64Url},
                    "dataType":"json",
                    "success":cb||function(){},
                    "type":"POST",
                    "url":"icon.jsp"
                });
            }
        }(cb));
    };
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
                img.swidth = img1.width();
                img.sheight = img1.height();
                img1.remove();
                if(cb)cb(img);
            }
        }(img,cb)
        img.src = path;
    };
    B.setColorList = function(){
        var t = this;
        t.colorList = [];
        for(var i=0;i< t.colorStrList.length;i++){
            var cStr = t.colorStrList[i];
            var rStr = cStr.slice(0,2);
            var gStr = cStr.slice(2,4);
            var bStr = cStr.slice(4,6);

            t.colorList.push([
                trans(rStr),
                trans(gStr),
                trans(bStr)
            ])
        }

        function trans(str){
            var n1 = parseInt(str,16);
            var n2 = n1.toString(10);
            n2 = parseInt(n2);
            return n2;
        }
    };
    window.IconFactory = A;
})();