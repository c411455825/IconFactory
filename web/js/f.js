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
//            {
//                "path":"zoom-minus.png",
//                "prefix":"d_h"
//            },
//            {
//                "path":"zoom-plus.png",
//                "prefix":"d_h"
//            },
            {
                "path":"measurecir.png",
                "prefix":"t"
            }
        ];
//        t.titleImgColorList = [
//            {
//                "theme":"base",
//                "background":"222222",
//                "icon":"trans"
//            }
//        ];
        t.canvas = null;
        t.cxt = null;
        t.colorStrList = [
            {
                "c_000000":"454545",                  //要修改的颜色
                "theme":"base",					   //文件夹名称
                "prefix":"h"                          //是否是hover状态的图片，这种图片会自动在图片名前加上"h_"
            },
            {
                "c_000000":"888888",
                "theme":"base"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"222222",
                "theme":"base",
                "prefix":"t"
            },
            {
                "c_000000":"ef8c08",
                "theme":"ui-lightness",
                "prefix":"h"
            },
            {
                "c_000000":"ef8c08",
                "theme":"ui-lightness"
            },
            {
                "c_000000":"trans",
                "theme":"ui-lightness",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"ui-darkness",
                "prefix":"h"
            },
            {
                "c_000000":"cccccc",
                "theme":"ui-darkness"
            },
            {
                "c_000000":"trans",
                "theme":"ui-darkness",
                "prefix":"t"
            },
            {
                "c_000000":"454545",
                "theme":"smoothness",
                "prefix":"h"
            },
            {
                "c_000000":"888888",
                "theme":"smoothness"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"222222",
                "theme":"smoothness",
                "prefix":"t"
            },
            {
                "c_000000":"056b93",
                "theme":"start",
                "prefix":"h"
            },
            {
                "c_000000":"e0fdff",
                "theme":"start"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"d8e7f3",
                "theme":"start",
                "prefix":"t"
            },
            {
                "c_000000":"217bc0",
                "theme":"redmond",
                "prefix":"h"
            },
            {
                "c_000000":"6da8d5",
                "theme":"redmond"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"d8e7f3",
                "theme":"redmond",
                "prefix":"t"
            },
            {
                "c_000000":"bd7b00",
                "theme":"sunny",
                "prefix":"h"
            },
            {
                "c_000000":"3d3d3d",
                "theme":"sunny"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"fadc7a",
                "theme":"sunny",
                "prefix":"t"
            },
            {
                "c_000000":"3383bb",
                "theme":"overcast",
                "prefix":"h"
            },
            {
                "c_000000":"70b2e1",
                "theme":"overcast"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"999999",
                "theme":"overcast",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"le-frog",
                "prefix":"h"
            },
            {
                "c_000000":"ffffff",
                "theme":"le-frog"
            },
            {
                "c_000000":"trans",
                "theme":"le-frog",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"flick",
                "prefix":"h"
            },
            {
                "c_000000":"666666",
                "theme":"flick"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"0073ea",
                "theme":"flick",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"pepper-grinder",
                "prefix":"h"
            },
            {
                "c_000000":"b83400",
                "theme":"pepper-grinder"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"b83400",
                "theme":"pepper-grinder",
                "prefix":"t"
            },
            {
                "c_000000":"734d99",
                "theme":"eggplant",
                "prefix":"h"
            },
            {
                "c_000000":"8d78a5",
                "theme":"eggplant"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"a8a3ae",
                "theme":"eggplant",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"dark-hive",
                "prefix":"h"
            },
            {
                "c_000000":"cccccc",
                "theme":"dark-hive"
            },
            {
                "c_000000":"trans",
                "theme":"dark-hive",
                "prefix":"t"
            },
            {
                "c_000000":"2694e8",
                "theme":"cupertino",
                "prefix":"h"
            },
            {
                "c_000000":"3d80b3",
                "theme":"cupertino"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"72a7cf",
                "theme":"cupertino",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"south-street",
                "prefix":"h"
            },
            {
                "c_000000":"eeeeee",
                "theme":"south-street"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"847e71",
                "theme":"south-street",
                "prefix":"t"
            },
            {
                "c_000000":"cc0000",
                "theme":"blitzer",
                "prefix":"h"
            },
            {
                "c_000000":"cc0000",
                "theme":"blitzer"
            },
            {
                "c_000000":"trans",
                "theme":"blitzer",
                "prefix":"t"
            },
            {
                "c_000000":"f08000",
                "theme":"humanity",
                "prefix":"h"
            },
            {
                "c_000000":"f08000",
                "theme":"humanity"
            },
            {
                "c_000000":"trans",
                "theme":"humanity",
                "prefix":"t"
            },
            {
                "c_000000":"454545",
                "theme":"hot-sneaks",
                "prefix":"h"
            },
            {
                "c_000000":"ffffff",
                "theme":"hot-sneaks"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"e1e463",
                "theme":"hot-sneaks",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"excite-bike",
                "prefix":"h"
            },
            {
                "c_000000":"fcdd4a",
                "theme":"excite-bike"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"5fa5e3",
                "theme":"excite-bike",
                "prefix":"t"
            },
            {
                "c_000000":"c98000",
                "theme":"vader",
                "prefix":"h"
            },
            {
                "c_000000":"666666",
                "theme":"vader"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"cccccc",
                "theme":"vader",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"dot-luv",
                "prefix":"h"
            },
            {
                "c_000000":"9ccdfc",
                "theme":"dot-luv"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"98d2fb",
                "theme":"dot-luv",
                "prefix":"t"
            },
            {
                "c_000000":"add978",
                "theme":"mint-choc",
                "prefix":"h"
            },
            {
                "c_000000":"9bcc60",
                "theme":"mint-choc"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"e3ddc9",
                "theme":"mint-choc",
                "prefix":"t"
            },
            {
                "c_000000":"ffffff",
                "theme":"black-tie",
                "prefix":"h"
            },
            {
                "c_000000":"ededed",
                "theme":"black-tie"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"bbbbbb",
                "theme":"black-tie",
                "prefix":"t"
            },
            {
                "c_000000":"b8ec79",
                "theme":"trontastic",
                "prefix":"h"
            },
            {
                "c_000000":"b8ec79",
                "theme":"trontastic"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"1f1f1f",
                "theme":"trontastic",
                "prefix":"t"
            },
            {
                "c_000000":"f2ec64",
                "theme":"swanky-purse",
                "prefix":"h"
            },
            {
                "c_000000":"e8e2b5",
                "theme":"swanky-purse"
            },
            {
                "c_000000":"trans",
                "c_ffffff":"e9cd86",
                "theme":"swanky-purse",
                "prefix":"t"
            },
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
                var sourcePath = t.sourcePaths[i];
                if(!c.prefix) c.prefix = "d";
                if(sourcePath.prefix){
                     if(c.prefix&&sourcePath.prefix.indexOf(c.prefix)>=0){
                         task.push({
                             "source":t.sourcePaths[i].path,
                             "color":c.color.concat([]),
                             "theme":c.theme,
                             "prefix":c.prefix
                         });
                     }
                }
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
                    if(task.prefix=="t")debugger;
                    var r = imgData.data[i];
                    var g = imgData.data[i+1];
                    var b = imgData.data[i+2];
                    var a = imgData.data[i+3];
                    var cArr = task.color;
                    for(var j=0;j<cArr.length;j++){
                        var c = cArr[j];
                        var cSource = c.source;
                        var cDest = c.dest;
                        if(r==cSource[0]&&g==cSource[1]&&b==cSource[2]&&a!=0){
                            imgData.data[i] = cDest[0];
                            imgData.data[i+1] = cDest[1];
                            imgData.data[i+2] = cDest[2];
                            if(cDest[3]==0){
                                imgData.data[i+3] = 0;
                            }
                            else{
                                imgData.data[i+3] = 255;
                            }
                        }
                    }
//                    if(r==0&&g==0&&b==0&&a!=0){
//                        imgData.data[i] = c[0];
//                        imgData.data[i+1] = c[1];
//                        imgData.data[i+2] = c[2];
//                    }
//                    else if(r==0&&g==0&&b==0&&a==0){
//
//                    }
//                    else{
//                        debugger;
//                    }
                }
                t.cxt.putImageData(imgData,0,0);
                var dataURL = t.canvas.toDataURL("image/png");
                var base64Url = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
                //var path = "demo\\uithemes\\"+task.theme+"\\images\\custom";
                var path = "img\\"+task.theme;
                var name = ((task.prefix&&task.prefix!="d")?task.prefix+"_":"")+task.source;
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
            var colorArr = [];
            var colorResultObj = {};
            for(var key in cObj){
                if(key.indexOf("_")>=0){
                    var tp = key.split("_");
                    var sourceColorStr = tp[1];
                    var sourceRgb = strToRgb(sourceColorStr);
                    var destColorStr = cObj[key];
                    var destRgb = strToRgb(destColorStr);
                    colorArr.push({
                        "source":sourceRgb,
                        "dest":destRgb
                    });
                }
                else{
                    colorResultObj[key] = cObj[key];
                }
            }
            colorResultObj.color = colorArr;
            t.colorList.push(colorResultObj);
//            var cStr = cObj.color;
//            var rStr = cStr.slice(0,2);
//            var gStr = cStr.slice(2,4);
//            var bStr = cStr.slice(4,6);
//            var theme = cObj.theme;
//            var hover = cObj.hover;

//            t.colorList.push({
//                "color":[
//                    trans(rStr),
//                    trans(gStr),
//                    trans(bStr)
//                ],
//                "theme":theme,
//                "hover":hover
//            })
        }

        function strToRgb(str){
            if(str=="trans"){
                var rStr = "00";
                var gStr = "00";
                var bStr = "00";
                var aStr = "00";
            }
            else{
                var rStr = str.slice(0,2);
                var gStr = str.slice(2,4);
                var bStr = str.slice(4,6);
                var aStr = "-1";
            }


            return [
                trans(rStr),
                trans(gStr),
                trans(bStr),
                trans(aStr)
            ];
        }

        function trans(str){
            if(str=="-1"){
                var n2 = -1;
            }
            else{
                var n1 = parseInt(str,16);
                var n2 = n1.toString(10);
                n2 = parseInt(n2);
            }

            return n2;
        }
    };
    window.IconFactory = A;
})();