1、将需要变换颜色的黑色图片放在source文件夹中。
2、将这些图片的路径写入js/f.js中的t.sourcePaths属性中。
3、将需要改变的颜色写入js/f.js中的t.colorStrList属性中。
4、将代码拷贝到tomcat下发布出来。
5、运行i.html,会在根目录下生成一个img文件夹。
6、原理：canvas读取源图片，将其中的黑色像素变为其他颜色，生成base64的字符串，发给icon.jsp生成图片
7、里边很多参数写死了，需要自己修改。