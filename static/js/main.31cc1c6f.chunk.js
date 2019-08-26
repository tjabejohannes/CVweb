(window.webpackJsonpCVweb=window.webpackJsonpCVweb||[]).push([[0],{48:function(e,n,t){e.exports=t(62)},62:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(38),o=t.n(r),c=t(8),l=t(4),s=t(9),p=t(10),m=t(11),d=t(5),u=t(26),h=t(21),g=t(6);function b(){var e=Object(d.a)(["\n    width: 98%;\n"]);return b=function(){return e},e}function f(){var e=Object(d.a)(["\n    width: 98%;\n    &:hover{\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n"]);return f=function(){return e},e}function v(){var e=Object(d.a)(["\n    background: #f0f0f0;\n    text-align: center;\n    border-radius: 2px;\n    margin: 10px;\n    width: 48%;\n    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\n    z-index: 0;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    @media (max-width: 1200px) {\n        width: 98%;\n    }\n"]);return v=function(){return e},e}var j=g.a.div(v()),w=Object(g.a)(j)(f()),x=Object(g.a)(j)(b()),E=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(i)))).state={},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return"large"===this.props.size?"noHover"===this.props.type?i.a.createElement(x,null,i.a.createElement("div",{className:this.props.type},this.props.children)):i.a.createElement(w,null,i.a.createElement("div",{className:this.props.type},this.props.children)):i.a.createElement(j,null,i.a.createElement("div",{className:this.props.type},this.props.children))}}]),n}(a.Component);function k(){var e=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width:100%;\n    \n\n\n    .information{\n        display: flex;\n        justify-content:center;\n        flex-direction: column;\n        width:70%;\n    }\n\n    .profileImageContainer{\n        width:20%;\n    }\n    .profileImageContainer img{\n        margin:10%;\n        width:70%;\n        height:auto;\n        border-radius: 50%;\n    }\n"]);return k=function(){return e},e}var y=g.a.div(k()),O=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(y,null,i.a.createElement("div",{className:"information"},i.a.createElement("h2",null,this.props.name)),i.a.createElement("div",{className:"profileImageContainer"},i.a.createElement("img",{alt:"profile",src:this.props.img})))}}]),n}(a.Component),C=t(72),N=t(57),T=t(71);function S(){var e=Object(d.a)(["\n    display: flex;\n    width: 100%;\n    align-items: stretch;\n    max-height: 250px;\n\n    .information{\n        background-image: linear-gradient(to bottom, #eaeaea,rgba(255,0,0,0));\n        padding: 10px;\n        width: 30%;\n    }\n\n    .information h1{\n        font-size:20px;\n        font-weight: bold;\n    }\n\n    .description{\n        font-size:10px;\n        color: #959595;\n    }\n\n    .details{\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        width:70%;\n        text-align: left;\n        padding-top:5%;\n        padding-bottom:5%;\n    }\n\n    .detail {\n        padding-left:2%;\n        &:hover{\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);\n            background-color: rgba(0, 0, 0, 0.1);\n        }\n        color: #000;\n        margin-top: 2%;\n        width:44%;\n        margin-right:2%;\n    }\n    .badges{\n        height: 80%;\n        margin:1%;\n    }\n    .badges h1{\n        font-size: 15px;\n        color: #959595;\n    }\n    .badge{\n        margin-block-end:2%;\n    }\n"]);return S=function(){return e},e}var J=g.a.div(S()),z=Object(T.a)({root:{background:"#fff",color:"#000"}})(C.a),A=Object(T.a)({root:{background:"#fff",padding:"5%",width:"30px",height:"30px"}})(N.a),P=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(J,null,i.a.createElement("div",{className:"information"},i.a.createElement("h1",null,this.props.title),i.a.createElement("div",{className:"description"},this.props.description)),i.a.createElement("div",{className:"details"},this.props.details.map(function(e,n){return i.a.createElement("div",{className:"badge",key:n},i.a.createElement(z,{label:e.name,avatar:i.a.createElement(A,{alt:e.name,src:"https://icongr.am/devicon/"+e.icon+".svg?size=300"})}))})))}}]),n}(a.Component);function I(){var e=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width:100%;\n"]);return I=function(){return e},e}var M=g.a.div(I()),B=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(i)))).state={name:"Tjabe Johannes van Lessen",birthday:"05.12.96",detailedCards:[{title:"Technology",details:[{name:"Android",icon:"android-plain"},{name:"NodeJS",icon:"nodejs-plain"},{name:"HTML",icon:"html5-plain"},{name:"Git",icon:"git-plain"},{name:"CSS",icon:"css3-plain"},{name:"Electron",icon:"electron-original"},{name:"Mysql",icon:"mysql-plain"}],description:"Comfortable development technologies"},{title:"Languages",details:[{name:"Java",icon:"java-plain"},{name:"JavaScript",icon:"javascript-plain"},{name:"Python",icon:"python-plain"}],description:"Comfortable development languages"},{title:"Software",details:[{name:"Photoshop",icon:"photoshop-line"},{name:"Visualstudio",icon:"visualstudio-plain"},{name:"Gitlab",icon:"gitlab-plain"},{name:"React",icon:"react-original"},{name:"CSS",icon:"css3-plain"},{name:"Electron",icon:"electron-original"},{name:"Mysql",icon:"mysql-plain"}],description:"Software used weekly"}]},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(M,null,i.a.createElement(E,{size:"large",type:"noHover"},i.a.createElement(O,{name:this.state.name,tlf:this.state.tlf,profileImage:"http://localhost:3000/ProfileBackgroundArt.png",img:"https://scontent-arn2-1.cdninstagram.com/vp/f2675ce4947d4a7d0133287212f84a9f/5DEFA134/t51.2885-19/s320x320/32430479_371055023406210_3021052246222700544_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com"})),this.state.detailedCards.map(function(e,n){return i.a.createElement(E,{key:n},i.a.createElement(P,{title:e.title,description:e.description,details:e.details}))}))}}]),n}(a.Component),V=t(22),H=t(42),L=t.n(H);function _(){var e=Object(d.a)(["\n    \n    width:100%;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n\n    .information{\n        width:80%;\n        display: flex;\n        flex-direction: column;\n    }\n    .title{\n        margin-bottom: 5px;\n        background-image: linear-gradient(to right, #eaeaea , #f0f0f0);\n        border-radius:2px;\n    }\n    .title h1{\n        font-size: 20px;\n        margin-block-start:10px;\n        margin-left: 15px;\n        font-weight: bold;\n    }\n\n    .description{\n        color: #000;\n    }\n\n    .description h1{\n        font-size: 15px;\n        color: #959595;\n        \n    }\n\n    .projectInfoContainer{\n        display: flex;\n        justify-content: space-between;\n        margin-left: 15px;\n        padding:10px;\n    }\n\n    .badges{\n        height: 80%;\n        margin:1%;\n    }\n    .badges h1{\n        font-size: 15px;\n        color: #959595;\n    }\n    .badge{\n        margin-block-end:2%;\n    }\n\n    .technology{\n        max-width: 60%;\n        min-width: 20%;\n        margin-left: 5%;\n        margin-right: 5%;\n    }\n\n    .contributors{\n        margin-left: 15px;\n        padding:10px;\n    }\n\n    .imageContainer{\n        height:100%;\n        margin-right: 3%;\n    }\n    .crop {\n        overflow: hidden;\n        width: 200px;\n        height: 200px;\n        border-radius: 3%;\n        vertical-align: middle;\n    }\n    .crop img {\n        object-fit: cover;\n        object-position: 50% 50%;\n        width: 200px;\n        height: 200px;\n    }\n    @media (max-width: 768px) {\n        flex-direction: column;\n        .imageContainer{\n            margin-right: 0%;\n            margin-bottom: 3%;\n        }\n        .information{\n            width: 100%;\n        }\n    }\n"]);return _=function(){return e},e}var q=g.a.div(_()),D=Object(T.a)({root:{background:"#fff",color:"#000"}})(C.a),G=Object(T.a)({root:{background:"#fff",padding:"5%",width:"30px",height:"30px"}})(N.a),U=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(p.a)(n).call(this))).handleClick=e.handleClick.bind(Object(V.a)(e)),e}return Object(m.a)(n,e),Object(l.a)(n,[{key:"handleClick",value:function(){window.location.replace(this.props.link)}},{key:"render",value:function(){return i.a.createElement(q,{onClick:this.handleClick},i.a.createElement("div",{className:"information"},i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,this.props.name)),i.a.createElement("div",{className:"projectInfoContainer"},i.a.createElement("div",{className:"description"},i.a.createElement("h1",null,"Description:"),i.a.createElement("p",null,this.props.description)),i.a.createElement("div",{className:"badges technology"},i.a.createElement("h1",null,"Technology:"),this.props.stack.map(function(e,n){return i.a.createElement("div",{className:"badge",key:n},i.a.createElement(D,{label:e.name,avatar:i.a.createElement(G,{alt:e.name,src:"https://icongr.am/devicon/"+e.icon+".svg?size=300"})}))}))),i.a.createElement("div",{className:"badges contributors"},i.a.createElement("h1",null,"Contributors:"),this.props.contributor.map(function(e,n){return i.a.createElement("div",{className:"badge",key:n},i.a.createElement(C.a,{icon:i.a.createElement(L.a,null),label:e}))}))),i.a.createElement("div",{className:"imageContainer"},i.a.createElement("div",{className:"crop"},console.log("/CVweb"),i.a.createElement("img",{src:"/CVweb"+this.props.image,alt:"preview"}))))}}]),n}(a.Component);function W(){var e=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    width:100%;\n"]);return W=function(){return e},e}var R=g.a.div(W()),F=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(i)))).state={projects:[{name:"ClipPost",link:"https://github.com/tjabejohannes/ClipPost",description:"ClipPost is a simple desktop clipboard application. It was developed to fight the inefficiency i experienced at a summer job.",stack:[{name:"Electron",icon:"electron-original"},{name:"Javascript",icon:"javascript-plain"}],image:"/img/clippost.png",contributor:["Tjabe Johannes van Lessen","Tor Skuggevik"]},{name:"P5",link:"http://tjabejv.nvg.org/",description:"P5js is JavaScript's answer to the Processing graphical library. Both are OpenSource.",stack:[{name:"Javascript",icon:"javascript-plain"},{name:"P5js",icon:"javascript-plain"}],image:"/img/P5js.png",contributor:["Tjabe Johannes van Lessen"]},{name:"BotB",link:"https://github.com/battleofthebases/game",description:"TDT4240: Software Architecture Project. The task was to create a Android Game, with focus on good architecture. More info about our project on the project page. *click*",stack:[{name:"Java",icon:"java-plain"},{name:"Android",icon:"android-plain"},{name:"NodeJS",icon:"nodejs-plain"},{name:"AWS",icon:"amazonwebservices-plain-wordmark"}],image:"/img/BotB.jpg",contributor:["Christian Nyvoll","Edvard Bakken","H\xe5vard Aasmo","Tor Skuggevik","Tjabe Johannes van Lessen"]},{name:"Experts in Teamwork",link:"https://github.com/OlavH96/EIT",description:"TDT4856 IT-styring av moderne lastebiler (The Norwegian title). Experts in Teamwork (EiT) is a master\u2019s degree course in which students develop their interdisciplinary teamwork skills. The course is compulsory for all students in master\u2019s programmes and programmes of professional study at NTNU (NTNU's explanation of the course). More info about our project on the project page. *click*",stack:[{name:"P5js",icon:"java-plain"},{name:"NodeJS",icon:"nodejs-plain"}],image:"/img/EIT.png",contributor:["Anders Ulfsnes","Espen Marinius Hansen","Olav Reppe Husby","Michael Skibeli Mullins","Tjabe Johannes van Lessen","Torstein Molland"]}]},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(R,null,this.state.projects.map(function(e,n){return i.a.createElement(E,{key:n,size:"large"},i.a.createElement(U,{name:e.name,link:e.link,description:e.description,stack:e.stack,image:e.image,contributor:e.contributor}))}))}}]),n}(a.Component);function $(){var e=Object(d.a)(["\n    margin-top: 70px;\n"]);return $=function(){return e},e}var K=g.a.div($()),Q=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(K,null,i.a.createElement("nav",{className:"navbar navbar-expand fixed-top navbar-light bg-light"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{to:"/CVweb/",className:"nav-link"},"About Me")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{to:"/CVweb/projects",className:"nav-link"},"Projects")))),i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/CVweb/",component:B}),i.a.createElement(h.a,{path:"/CVweb/projects",component:F}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Q,null),document.getElementById("App")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.31cc1c6f.chunk.js.map