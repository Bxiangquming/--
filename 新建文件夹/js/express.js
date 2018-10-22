var express=require("express");
var app=express();
var Course = (function () {
    function Course(id, Name, images,task, person) {
        this.id = id;
        this.Name = Name;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
const coursearr=[
    new Course(1,"2016混合应用开发","http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",2,91),
    new Course(2,"2017-12-软件测试...","http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",1,104),
    new Course(3,"2017级Web开发","http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",4,399),
    new Course(4,"2016级测试方向","http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",3,52),
    new Course(5,"H5","http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",5,91),
    new Course(6,"2017级3,4班软件...","http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",3,102),
    new Course(7,"2018级信息素养实践","http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",0,12),
    new Course(8,"2018级计算机导论","http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",1,396),
    new Course(9,"2018-2019第一学期...","http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",5,400),
    new Course(10,"2017级数据结构","http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",4,401),
    new Course(11,"软件学院18级新生训...","http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",0,78),
    new Course(12,"2017级coding暑期...","http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",13,92),
]
var Video = (function () {
    function Video(id, Name, images,jianjie,task, person) {
        this.id = id;
        this.Name = Name;
        this.images = images;
        this.jianjie=jianjie;
        this.task = task;
        this.person = person;
    }
    return Video
}());
const videoarr=[
    new Video(1,"Github开源之旅课程第一...","http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评 ",14,3736),
    new Video(2,"CSS3基础","http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190","CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。",12,2317),
    new Video(3,"HTML5基础","http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190"," HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。",12,1312),
    new Video(4,"Selenium  IDE  WEB自动化测...","http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190","上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基",13,3794),
    new Video(5,"扩展的ICONIX软件过程实践","http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190","ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的",12,2269),
    new Video(6,"Selenium IDE WEB自动化测...","http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190","上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基",3,102),
    new Video(7,"网页制作与开发","http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190","本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快",11,3131),
    new Video(8,"产品&交互设计那些事","http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190","本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一",42,1572),
    new Video(9,"VR AR产品设计的思考视频课程","http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190"," “2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也",5,1084),
    new Video(10,"ProcessOn界面原型绘制","http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190","ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。本次课程主要介绍",2,4234),
    new Video(11,"ProcessOn绘制流程图","http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190"," 绘制流程图是在产品设计过程中需求调研阶段非常重要的手段。流程图可以让流程图可以提供一",4,3053),
    new Video(12,"项目管理平台Readmine","http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190","本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用户使用，和其他同类型平台进",8,44423),
]
var Card = (function () {
    function Course(id,touxiang, Name, image,biaoti,jianjie,date,read,pinglun) {
        this.id = id;
        this.Name = Name;
        this.image = image;
        this.touxiang=touxiang;
        this.biaoti=biaoti;
        this.jianjie=jianjie;
        this.date=date;
        this.read=read;
        this.pinglun=pinglun;
    }
    return Course;
}());
const cardarr=[
    new Card(1,"http://usercontent.edu2act.cn/media/userheader/18-04-28/MHsG2fvR989uTfkLRZxDCY.jpeg?imageView2/1/w/256/h/256",
    "2-马增来","http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/ySftMWD6MCnGSFbdqZia4U.png","链栈的表示及基本操作的实现",
    "写了一点链栈的基本操作，第一次发文，如发现错误之处请大家及时指正。// 补充：链栈的基本操作 #include <stdio.h> #include <stdlib.h> typedef int ElemType;",
    "2018-10-21 17:26",13,0),
    new Card(1,"http://usercontent.edu2act.cn/media/userheader/18-04-28/MHsG2fvR989uTfkLRZxDCY.jpeg?imageView2/1/w/256/h/256",
    "2-马增来","http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/ySftMWD6MCnGSFbdqZia4U.png","链栈的表示及基本操作的实现",
    "写了一点链栈的基本操作，第一次发文，如发现错误之处请大家及时指正。// 补充：链栈的基本操作 #include <stdio.h> #include <stdlib.h> typedef int ElemType;",
    "2018-10-21 17:26",13,0)
];
app.get("/api",(req,res)=>{
    res.json(coursearr);
})
app.get("/api/course",(req,res)=>{
    res.json(coursearr);
})
app.get("/api/course/:id",(req,res)=>{
    res.json(coursearr.find(function(ele){
        if(ele.id == req.params.id)
        return ele;
    }));
})
app.get("/api/video",(req,res)=>{
    res.json(videoarr);
})
app.get("/api/video/:id",(req,res)=>{
    res.json(videoarr.find(function(ele){
        if(ele.id=req.params.id)
        return ele;
    }));
})
app.get("/api/shequ",(req,res)=>{
    res.json(cardarr);
})
app.listen(8080);