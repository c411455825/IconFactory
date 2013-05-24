(function(){
    function A(){
        var t = this;
        /*t.sourcePaths1 = [
            "tool_16_16.png",
            "tool_20_20.png",
            "clear_16_16.png",
            "clear_20_20.png",
            "draw_16_16.png",
            "draw_20_20.png",
            "drawarea_16_16.png",
            "drawarea_20_20.png",
            "drawline_16_16.png",
            "drawline_20_20.png",
            "drawpoint_16_16.png",
            "drawpoint_20_20.png",
            "geolocate_16_16.png",
            "geolocate_20_20.png",
            "measureArea_16_16.png",
            "measureArea_20_20.png",
            "measureDistance_16_16.png",
            "measureDistance_20_20.png",
            "mesure_16_16.png",
            "mesure_20_20.png",
            "resizemap.png",
            "zoomin_14_14.png",
            "zoomout_14_14.png"
        ];*/
		t.sourcePaths = [
            "zoom-minus.png",
			"zoom-plus.png"
        ];
        t.canvas = null;
        t.cxt = null;
        t.colorStrList = [
            {
                "color":"454545",                  //要修改的颜色
                "theme":"base",					   //文件夹名称
                "hover":1                          //是否是hover状态的图片，这种图片会自动在图片名前加上"h_"
            },
            {
                "color":"888888",
                "theme":"base"
            },
            {
                "color":"ef8c08",
                "theme":"ui-lightness",
                "hover":1
            },
            {
                "color":"ef8c08",
                "theme":"ui-lightness"
            },
            {
                "color":"ffffff",
                "theme":"ui-darkness",
                "hover":1
            },
            {
                "color":"cccccc",
                "theme":"ui-darkness"
            },
            {
                "color":"454545",
                "theme":"smoothness",
                "hover":1
            },
            {
                "color":"888888",
                "theme":"smoothness"
            },
            {
                "color":"056b93",
                "theme":"start",
                "hover":1
            },
            {
                "color":"e0fdff",
                "theme":"start"
            },
            {
                "color":"217bc0",
                "theme":"redmond",
                "hover":1
            },
            {
                "color":"6da8d5",
                "theme":"redmond"
            },
            {
                "color":"bd7b00",
                "theme":"sunny",
                "hover":1
            },
            {
                "color":"3d3d3d",
                "theme":"sunny"
            },
            {
                "color":"3383bb",
                "theme":"overcast",
                "hover":1
            },
            {
                "color":"70b2e1",
                "theme":"overcast"
            },
            {
                "color":"ffffff",
                "theme":"le-frog",
                "hover":1
            },
            {
                "color":"ffffff",
                "theme":"le-frog"
            },
            {
                "color":"ffffff",
                "theme":"flick",
                "hover":1
            },
            {
                "color":"666666",
                "theme":"flick"
            },
            {
                "color":"ffffff",
                "theme":"pepper-grinder",
                "hover":1
            },
            {
                "color":"b83400",
                "theme":"pepper-grinder"
            },
            {
                "color":"734d99",
                "theme":"eggplant",
                "hover":1
            },
            {
                "color":"8d78a5",
                "theme":"eggplant"
            },
            {
                "color":"ffffff",
                "theme":"dark-hive",
                "hover":1
            },
            {
                "color":"cccccc",
                "theme":"dark-hive"
            },
            {
                "color":"2694e8",
                "theme":"cupertino",
                "hover":1
            },
            {
                "color":"3d80b3",
                "theme":"cupertino"
            },
            {
                "color":"ffffff",
                "theme":"south-street",
                "hover":1
            },
            {
                "color":"eeeeee",
                "theme":"south-street"
            },
            {
                "color":"cc0000",
                "theme":"blitzer",
                "hover":1
            },
            {
                "color":"cc0000",
                "theme":"blitzer"
            },
            {
                "color":"f08000",
                "theme":"humanity",
                "hover":1
            },
            {
                "color":"f08000",
                "theme":"humanity"
            },
            {
                "color":"454545",
                "theme":"hot-sneaks",
                "hover":1
            },
            {
                "color":"ffffff",
                "theme":"hot-sneaks"
            },
            {
                "color":"ffffff",
                "theme":"excite-bike",
                "hover":1
            },
            {
                "color":"fcdd4a",
                "theme":"excite-bike"
            },
            {
                "color":"c98000",
                "theme":"vader",
                "hover":1
            },
            {
                "color":"666666",
                "theme":"vader"
            },
            {
                "color":"ffffff",
                "theme":"dot-luv",
                "hover":1
            },
            {
                "color":"9ccdfc",
                "theme":"dot-luv"
            },
            {
                "color":"add978",
                "theme":"mint-choc",
                "hover":1
            },
            {
                "color":"9bcc60",
                "theme":"mint-choc"
            },
            {
                "color":"ffffff",
                "theme":"black-tie",
                "hover":1
            },
            {
                "color":"ededed",
                "theme":"black-tie"
            },
            {
                "color":"b8ec79",
                "theme":"trontastic",
                "hover":1
            },
            {
                "color":"b8ec79",
                "theme":"trontastic"
            },
            {
                "color":"f2ec64",
                "theme":"swanky-purse",
                "hover":1
            },
            {
                "color":"e8e2b5",
                "theme":"swanky-purse"
            }
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
                var c = t.colorList[j];
                task.push({
                    "source":t.sourcePaths[i],
                    "color":c.color.concat([]),
                    "theme":c.theme,
                    "hover":c.hover
                });
            }
        }

        var i=-1;
        function loop(){
            i++;
            if(i<task.length)t.modifyIcon(task[i],loop);
        }
        loop();
    };
    B.modifyIcon = function(task,cb){
        var t = this;
        t.readIcon("source/"+task.source,function(task,cb){
            return function(img){
                t.canvas.width = img.swidth;
                t.canvas.height = img.sheight;
                t.cxt.drawImage(img, 0, 0);
                var imgData=t.cxt.getImageData(0,0,img.swidth,img.sheight);
                for (var i=0;i<imgData.data.length;i+=4)
                {
                    var r = imgData.data[i];
                    var g = imgData.data[i+1];
                    var b = imgData.data[i+2];
                    var a = imgData.data[i+3];
                    var c = task.color;
                    if(r==0&&g==0&&b==0&&a!=0){
                        imgData.data[i] = c[0];
                        imgData.data[i+1] = c[1];
                        imgData.data[i+2] = c[2];
                    }
                    else if(r==0&&g==0&&b==0&&a==0){

                    }
                    else{
                        debugger;
                    }
                }
                t.cxt.putImageData(imgData,0,0);
                var dataURL = t.canvas.toDataURL("image/png");
                var base64Url = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
                //var path = "demo\\uithemes\\"+task.theme+"\\images\\custom";
                var path = "img\\"+task.theme;
                var name = (task.hover?"h_":"")+task.source;
                $.ajax({
                    "data":{
                        "dataUrl":base64Url,
                        "path":path,
                        "name":name
                    },
                    "dataType":"json",
                    "success":cb||function(){},
                    "type":"POST",
                    "url":"icon.jsp"
                });
            }
        }(task,cb));
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
            var cObj = t.colorStrList[i];
            var cStr = cObj.color;
            var rStr = cStr.slice(0,2);
            var gStr = cStr.slice(2,4);
            var bStr = cStr.slice(4,6);
            var theme = cObj.theme;
            var hover = cObj.hover;

            t.colorList.push({
                "color":[
                    trans(rStr),
                    trans(gStr),
                    trans(bStr)
                ],
                "theme":theme,
                "hover":hover
            })
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