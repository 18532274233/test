var __vite_style__=document.createElement("style");__vite_style__.innerHTML=".happy-header-wrapper[data-v-e7338c34]{display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;height:60px;color:#6a6a6a;margin:0 auto}.title[data-v-e7338c34]:hover{color:#000}.title[data-v-e7338c34]{font-weight:600;font-size:18px;cursor:pointer}.brief[data-v-e7338c34]{font-size:14px}.tools-user[data-v-e7338c34]{font-size:14px}.tools-container[data-v-e7338c34]{display:flex;justify-content:center;align-items:center}.site-status[data-v-767f7aee]{display:flex;align-items:center;flex-wrap:wrap}.footer-container[data-v-767f7aee]{display:flex;align-items:flex-start;justify-content:space-between;background:#f5f5f5;line-height:1.5;font-size:14px;color:#999;padding:10px 5%}@media screen and (min-width:1200px){.footer-container[data-v-767f7aee]{padding:10px 15%}}.footer-info[data-v-767f7aee]{padding:5px}.daily-read[data-v-767f7aee]{padding:0 2px;color:#6a6a6a}.icp-link[data-v-767f7aee]{color:#999}a[data-v-767f7aee]{color:#6a6a6a;display:inline-block}.friend-link a[data-v-767f7aee]{padding:0 2px}.site-link span[data-v-767f7aee]{width:60px}.site-link[data-v-767f7aee]{display:flex}sub[data-v-767f7aee]{font-size:12px}.my-shake[data-v-767f7aee]{animation:my-face-767f7aee 1.5s infinite ease;display:inline-block;margin:0 1px}@keyframes my-face-767f7aee{0%{-webkit-transform:translate(0,0) rotate(0) scale(1)}10%{-webkit-transform:translate(-1px,-2px) rotate(-1deg) scale(1.1)}20%{-webkit-transform:translate(-3px,0) rotate(1deg) scale(1.2)}30%{-webkit-transform:translate(0,2px) rotate(0) scale(1.3)}40%{-webkit-transform:translate(1px,-1px) rotate(1deg) scale(1.4)}50%{-webkit-transform:translate(-1px,2px) rotate(-1deg) scale(1.5)}60%{-webkit-transform:translate(-3px,1px) rotate(0) scale(1.4)}70%{-webkit-transform:translate(2px,1px) rotate(-1deg) scale(1.3)}80%{-webkit-transform:translate(-1px,-1px) rotate(1deg) scale(1.2)}90%{-webkit-transform:translate(2px,2px) rotate(0) scale(1.1)}100%{-webkit-transform:translate(0,0) rotate(-1deg) scale(1)}}.main-container{min-height:calc(100vh - 80px)}.sticky-container{padding:0 5%;background:rgba(255,255,255)}.default-layout-container{padding:0 5%}@media screen and (min-width:1200px){.default-layout-container,.sticky-container{padding:0 15%}}.main-container{min-height:calc(100vh - 80px)}",document.head.appendChild(__vite_style__),System.register(["./index-legacy.a0626c58.js","./vendor-legacy.73e5f43f.js"],(function(e){"use strict";var a,t,n,r,i,s,o,l,c,d,f,u,p,v,m,h;return{setters:[function(e){a=e.b,t=e.u},function(e){n=e.k,r=e.x,i=e.n,s=e.p,o=e.z,l=e.B,c=e.u,d=e.N,f=e.O,u=e.A,p=e.P,v=e.S,m=e.G,h=e.F}],execute:function(){var x=d();f("data-v-e7338c34");var y={class:"happy-header-container"},g={class:"happy-header-wrapper"},k={class:"title-container"},b={class:"brief"},w={class:"tools-container"},_={key:0,class:"tools-user user-center"},F={key:1,class:"tools-user user-action-btn"},z=u("登录/注册");p();var M=n({expose:[],props:{title:{type:String,required:!0},brief:{type:String}},setup:function(e){var n=e,d=a(),f=function(){d.push("/")},u=t();computed((function(){var e,a;return!(null==(e=u.User)||null==(a=e.Roles)||!a.find((function(e){return"Author"==e.Title})))}));var p=computed((function(){var e;return null!=(e=u.User.Id)?e:0})),v=computed((function(){var e;return null!=(e=u.User.Avatar)?e:""})),m=n.title,h=n.brief;return x((function(e,a){var t=r("Avatar"),n=r("router-link");return i(),s("header",y,[o("div",g,[o("div",k,[o("div",{class:"title",onClick:f},l(c(m)),1),o("div",b,l(c(h)),1)]),o("div",w,[c(p)>0?(i(),s("span",_,[o(n,{to:"/users/"+c(p)},{default:x((function(){return[o(t,{src:c(v),size:"40px"},null,8,["src"])]})),_:1},8,["to"])])):(i(),s("span",F,[o(n,{to:"/signin"},{default:x((function(){return[z]})),_:1})]))])])])}))}});M.__scopeId="data-v-e7338c34";var j=d();f("data-v-767f7aee");var I={class:"footer-container"},A={class:"footer-info content-limit-three"},S=o("a",{href:"//www.beian.miit.gov.cn/",target:"_blank",class:"icp-link",rel:"nofollow"},"粤ICP备20013375号-1",-1),T=o("div",null,"本网站不保证网站内容更新完全跟得上时代潮流，请自行求证。",-1),U={class:"site-status"},C=u(" 本网站已坚持用 "),O=o("span",{class:"my-shake"},"❤️",-1),D=u("发 "),G=o("span",{class:"my-shake"},"⚡",-1),P=o("img",{src:"https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Funliar%2Fhappy-upptime%2Fmaster%2Fapi%2Fhappysooner-com%2Fuptime.json"},null,-1),q=o("div",null,"本网站的作者头发还剩下挺多的。",-1),B={class:"footer-info"},E={class:"site-link"},H=u("关于本站"),L=u("随机阅读"),N=o("span",null,[o("a",{href:"https://github.com/unliar/vue3-ts-happysooner-web"},"本站源码")],-1),R=o("span",null,[o("a",{href:"https://t.me/happy_naive"},"TG频道")],-1),Y=v('<div class="friend-link" data-v-767f7aee> 友情链接: <a href="//www.tuccuay.com/" target="_blank" data-v-767f7aee>Tuccuay</a><a href="//orx.me/" target="_blank" data-v-767f7aee>Orvice</a><a href="//www.oylz.site" target="_blank" data-v-767f7aee>Oylz</a><a href="//nuomi1.github.io" target="_blank" data-v-767f7aee>nuomi1</a></div>',1);p();var $=n({expose:[],setup:function(e){var a,t=ref("2021"),n=reactive({day:0,hour:0,min:0,sec:0});return onMounted((function(){var e=(new Date).getFullYear();t.value=""+e,a=setInterval((function(){var e=Date.now(),a=Math.floor((e-15671808e5)/1e3),t=Math.floor(a/60/60/24),r=Math.floor(a/60/60)%24,i=Math.floor(a/60)%60,s=Math.floor(a%60);n.day=t,n.hour=r,n.min=i,n.sec=s}))})),onUnmounted((function(){clearInterval(a)})),j((function(e,a){var c=r("router-link");return i(),s("footer",I,[o("div",A,[o("div",null,[u(" © 2019 - "+l(t.value)+" 远浅 ",1),S]),T,o("div",U,[C,O,D,G,u(" 运行了 "+l(n.day)+"天"+l(n.hour)+"小时 "+l(n.min)+"分"+l(n.sec)+"秒。 ",1),P]),q]),o("div",B,[o("div",E,[o("span",null,[o(c,{to:"/about"},{default:j((function(){return[H]})),_:1})]),o("span",null,[o(c,{to:"/daily-articles"},{default:j((function(){return[L]})),_:1})]),N,R]),Y])])}))}});$.__scopeId="data-v-767f7aee";var J={class:"main-container"},K={class:"sticky-container"},Q={class:"default-layout-container"};e("_",n({expose:[],setup:function(e){return function(e,a){return i(),s(h,null,[o("div",J,[o("div",K,[o(M,{title:"远浅",brief:"理解他人，内省自己。"})]),o("div",Q,[m(e.$slots,"default")])]),o($)],64)}}}))}}}));