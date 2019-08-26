(window.webpackJsonpcvweb=window.webpackJsonpcvweb||[]).push([[0],{47:function(n,e,a){n.exports=a(61)},61:function(n,e,a){"use strict";a.r(e);var t=a(0),i=a.n(t),r=a(37),o=a.n(r),c=a(8),l=a(4),s=a(9),p=a(10),m=a(11),d=a(5),u=a(26),h=a(21),g=a(6);function b(){var n=Object(d.a)(["\n    width: 98%;\n"]);return b=function(){return n},n}function f(){var n=Object(d.a)(["\n    width: 98%;\n    &:hover{\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n"]);return f=function(){return n},n}function v(){var n=Object(d.a)(["\n    background: #f0f0f0;\n    text-align: center;\n    border-radius: 2px;\n    margin: 10px;\n    width: 48%;\n    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\n    z-index: 0;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    @media (max-width: 1200px) {\n        width: 98%;\n    }\n"]);return v=function(){return n},n}var j=g.a.div(v()),w=Object(g.a)(j)(f()),x=Object(g.a)(j)(b()),E=function(n){function e(){var n,a;Object(c.a)(this,e);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(i)))).state={},a}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return"large"===this.props.size?"noHover"===this.props.type?i.a.createElement(x,null,i.a.createElement("div",{className:this.props.type},this.props.children)):i.a.createElement(w,null,i.a.createElement("div",{className:this.props.type},this.props.children)):i.a.createElement(j,null,i.a.createElement("div",{className:this.props.type},this.props.children))}}]),e}(t.Component);function k(){var n=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width:100%;\n    \n\n\n    .information{\n        display: flex;\n        justify-content:center;\n        flex-direction: column;\n        width:70%;\n    }\n\n    .profileImageContainer{\n        width:20%;\n    }\n    .profileImageContainer img{\n        margin:10%;\n        width:70%;\n        height:auto;\n        border-radius: 50%;\n    }\n"]);return k=function(){return n},n}var y=g.a.div(k()),O=function(n){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(y,null,i.a.createElement("div",{className:"information"},i.a.createElement("h2",null,this.props.name)),i.a.createElement("div",{className:"profileImageContainer"},i.a.createElement("img",{alt:"profile",src:this.props.img})))}}]),e}(t.Component),N=a(71),C=a(56);function T(){var n=Object(d.a)(["\n    display: flex;\n    width: 100%;\n    align-items: stretch;\n    max-height: 250px;\n\n    .information{\n        background-image: linear-gradient(to right, #f0f0f0 , #eaeaea);\n        padding: 10px;\n        width: 30%;\n    }\n\n    .information h1{\n        font-size:20px;\n        font-weight: bold;\n    }\n\n    .description{\n        font-size:10px;\n        color: #959595;\n    }\n\n    .details{\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        width:70%;\n        text-align: left;\n        padding-top:5%;\n        padding-bottom:5%;\n    }\n\n    .detail {\n        padding-left:2%;\n        &:hover{\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);\n            background-color: rgba(0, 0, 0, 0.1);\n        }\n        color: #000;\n        margin-top: 2%;\n        width:44%;\n        margin-right:2%;\n    }\n    .badges{\n        height: 80%;\n        margin:1%;\n    }\n    .badges h1{\n        font-size: 15px;\n        color: #959595;\n    }\n    .badge{\n        margin-block-end:2%;\n    }\n\n    .chipsTweaks{\n        background-color:  #fff;\n        color: #000;\n    }\n    .avatarTweaks{\n        background-color:  #fff;\n        padding: 7%;\n    }\n"]);return T=function(){return n},n}var J=g.a.div(T()),S=function(n){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(J,null,i.a.createElement("div",{className:"information"},i.a.createElement("h1",null,this.props.title),i.a.createElement("div",{className:"description"},this.props.description)),i.a.createElement("div",{className:"details"},this.props.details.map(function(n,e){return i.a.createElement("div",{className:"badge",key:e},i.a.createElement(N.a,{label:n.name,color:"secondary",avatar:i.a.createElement(C.a,{alt:n.name,src:"https://icongr.am/devicon/"+n.icon+".svg?size=300",className:"avatarTweaks"}),className:"chipsTweaks"}))})))}}]),e}(t.Component);function A(){var n=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width:100%;\n"]);return A=function(){return n},n}var z=g.a.div(A()),P=function(n){function e(){var n,a;Object(c.a)(this,e);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(i)))).state={name:"Tjabe Johannes van Lessen",birthday:"05.12.96",detailedCards:[{title:"Technology",details:[{name:"Android",icon:"android-plain"},{name:"NodeJS",icon:"nodejs-plain"},{name:"HTML",icon:"html5-plain"},{name:"Git",icon:"git-plain"},{name:"CSS",icon:"css3-plain"},{name:"Electron",icon:"electron-original"},{name:"Mysql",icon:"mysql-plain"}],description:"Comfortable development technologies"},{title:"Languages",details:[{name:"Java",icon:"java-plain"},{name:"JavaScript",icon:"javascript-plain"},{name:"Python",icon:"python-plain"}],description:"Comfortable development languages"},{title:"Software",details:[{name:"Photoshop",icon:"photoshop-line"},{name:"Visualstudio",icon:"visualstudio-plain"},{name:"Gitlab",icon:"gitlab-plain"},{name:"React",icon:"react-original"},{name:"CSS",icon:"css3-plain"},{name:"Electron",icon:"electron-original"},{name:"Mysql",icon:"mysql-plain"}],description:"Software used weekly"}]},a}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(z,null,i.a.createElement(E,{size:"large",type:"noHover"},i.a.createElement(O,{name:this.state.name,tlf:this.state.tlf,profileImage:"http://localhost:3000/ProfileBackgroundArt.png",img:"https://scontent-arn2-1.cdninstagram.com/vp/f2675ce4947d4a7d0133287212f84a9f/5DEFA134/t51.2885-19/s320x320/32430479_371055023406210_3021052246222700544_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com"})),this.state.detailedCards.map(function(n,e){return i.a.createElement(E,{key:e},i.a.createElement(S,{title:n.title,description:n.description,details:n.details}))}))}}]),e}(t.Component),B=a(22),I=a(41),M=a.n(I);function H(){var n=Object(d.a)(["\n    \n    width:100%;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n\n    .information{\n        width:80%;\n        display: flex;\n        flex-direction: column;\n    }\n    .title{\n        margin-bottom: 5px;\n        background-image: linear-gradient(to right, #eaeaea , #f0f0f0);\n        border-radius:2px;\n    }\n    .title h1{\n        font-size: 20px;\n        margin-block-start:10px;\n        margin-left: 15px;\n        font-weight: bold;\n    }\n\n    .description{\n        color: #000;\n    }\n\n    .description h1{\n        font-size: 15px;\n        color: #959595;\n        \n    }\n\n    .projectInfoContainer{\n        display: flex;\n        justify-content: space-between;\n        margin-left: 15px;\n        padding:10px;\n    }\n\n    .badges{\n        height: 80%;\n        margin:1%;\n    }\n    .badges h1{\n        font-size: 15px;\n        color: #959595;\n    }\n    .badge{\n        margin-block-end:2%;\n    }\n\n    .chipsTweaks{\n        background-color:  #fff;\n        color: #000;\n    }\n    .avatarTweaks{\n        background-color:  #fff;\n        padding: 5%;\n    }\n\n    .technology{\n        max-width: 60%;\n        min-width: 20%;\n    }\n\n    .contributors{\n        margin-left: 15px;\n        padding:10px;\n    }\n\n    .imageContainer{\n        height:100%;\n        margin-right: 3%;\n    }\n    .crop {\n        overflow: hidden;\n        width: 200px;\n        height: 200px;\n        border-radius: 3%;\n        vertical-align: middle;\n    }\n    .crop img {\n        object-fit: cover;\n        object-position: 50% 50%;\n        width: 200px;\n        height: 200px;\n    }\n    @media (max-width: 768px) {\n        flex-direction: column;\n        .imageContainer{\n            margin-right: 0%;\n            margin-bottom: 3%;\n        }\n        .information{\n            width: 100%;\n        }\n    }\n"]);return H=function(){return n},n}var L=g.a.div(H()),_=function(n){function e(){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(p.a)(e).call(this))).handleClick=n.handleClick.bind(Object(B.a)(n)),n}return Object(m.a)(e,n),Object(l.a)(e,[{key:"handleClick",value:function(){window.location.replace(this.props.link)}},{key:"render",value:function(){return i.a.createElement(L,{onClick:this.handleClick},i.a.createElement("div",{className:"information"},i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,this.props.name)),i.a.createElement("div",{className:"projectInfoContainer"},i.a.createElement("div",{className:"description"},i.a.createElement("h1",null,"Description:"),i.a.createElement("p",null,this.props.description)),i.a.createElement("div",{className:"badges technology"},i.a.createElement("h1",null,"Technology:"),this.props.stack.map(function(n,e){return i.a.createElement("div",{className:"badge",key:e},i.a.createElement(N.a,{label:n.name,color:"secondary",avatar:i.a.createElement(C.a,{alt:n.name,src:"https://icongr.am/devicon/"+n.icon+".svg?size=300",className:"avatarTweaks"}),className:"chipsTweaks"}))}))),i.a.createElement("div",{className:"badges contributors"},i.a.createElement("h1",null,"Contributors:"),this.props.contributor.map(function(n,e){return i.a.createElement("div",{className:"badge",key:e},i.a.createElement(N.a,{icon:i.a.createElement(M.a,null),label:n}))}))),i.a.createElement("div",{className:"imageContainer"},i.a.createElement("div",{className:"crop"},i.a.createElement("img",{src:this.props.image,alt:"preview"}))))}}]),e}(t.Component);function q(){var n=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width:100%;\n"]);return q=function(){return n},n}var D=g.a.div(q()),G=function(n){function e(){var n,a;Object(c.a)(this,e);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(i)))).state={projects:[{name:"ClipPost",link:"https://github.com/tjabejohannes/ClipPost",description:"ClipPost is a application that makes using the clipboard on your computer as efficient as possible.",stack:[{name:"Electron",icon:"electron-original"},{name:"Javascript",icon:"javascript-plain"}],image:"https://raw.githubusercontent.com/tjabejohannes/velectron/master/front/Example%23.png",contributor:["Tjabe Johannes van Lessen","Tor Skuggevik"]},{name:"P5",link:"http://tjabejv.nvg.org/",description:"P5js is JavaScript's answer to the Processing graphical library. Both are OpenSource.",stack:[{name:"Javascript",icon:"javascript-plain"},{name:"P5js",icon:"javascript-plain"}],image:"/img/P5js.png",contributor:["Tjabe Johannes van Lessen"]},{name:"BotB",link:"https://github.com/battleofthebases/game",description:"TDT4240: Software Architecture Project. The task was to create a Android Game, with focus on good architecture.",stack:[{name:"Java",icon:"java-plain"},{name:"Android",icon:"android-plain"},{name:"NodeJS",icon:"nodejs-plain"},{name:"AWS",icon:"amazonwebservices-plain-wordmark"}],image:"/img/BotB.jpg",contributor:["Christian Nyvoll","Edvard Bakken","H\xe5vard Aasmo","Tor Skuggevik","Tjabe Johannes van Lessen"]},{name:"Experter i team",link:"https://github.com/OlavH96/EIT",description:"TDT4856: Eksperter i team.",stack:[{name:"Java",icon:"java-plain"},{name:"Android",icon:"android-plain"},{name:"NodeJS",icon:"nodejs-plain"}],image:"/img/EIT.png",contributor:["Anders Ulfsnes","Espen Marinius Hansen","Olav Reppe Husby","Michael Skibeli Mullins","Tjabe Johannes van Lessen","Torstein Molland"]}]},a}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(D,null,this.state.projects.map(function(n,e){return i.a.createElement(E,{key:e,size:"large"},i.a.createElement(_,{name:n.name,link:n.link,description:n.description,stack:n.stack,image:n.image,contributor:n.contributor}))}))}}]),e}(t.Component);function W(){var n=Object(d.a)(["\n    margin-top: 70px;\n"]);return W=function(){return n},n}var R=g.a.div(W()),F=function(n){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(R,null,i.a.createElement("nav",{className:"navbar navbar-expand fixed-top navbar-light bg-light"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{to:"/",className:"nav-link"},"About Me")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{to:"/projects",className:"nav-link"},"Projects")))),i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/",component:P}),i.a.createElement(h.a,{path:"/projects",component:G}))))}}]),e}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(F,null),document.getElementById("App")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.e33d0cb0.chunk.js.map