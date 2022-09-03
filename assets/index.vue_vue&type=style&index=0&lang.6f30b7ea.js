import{b as a,u as e}from"./index.d3633a74.js";import{k as t,x as s,n,p as r,z as o,B as l,u as i,N as c,O as u,A as d,P as p,S as v,G as f,F as h}from"./vendor.18b3a30d.js";const m=c();u("data-v-e7338c34");const y={class:"happy-header-container"},b={class:"happy-header-wrapper"},k={class:"title-container"},g={class:"brief"},w={class:"tools-container"},_={key:0,class:"tools-user user-center"},F={key:1,class:"tools-user user-action-btn"},x=d("登录/注册");p();var I=t({expose:[],props:{title:{type:String,required:!0},brief:{type:String}},setup(t){const c=t,u=a(),d=()=>{u.push("/")},p=e();computed((()=>{var a,e;return!!(null==(e=null==(a=p.User)?void 0:a.Roles)?void 0:e.find((a=>"Author"==a.Title)))}));const v=computed((()=>{var a;return null!=(a=p.User.Id)?a:0})),f=computed((()=>{var a;return null!=(a=p.User.Avatar)?a:""})),h=c.title,I=c.brief;return m(((a,e)=>{const t=s("Avatar"),c=s("router-link");return n(),r("header",y,[o("div",b,[o("div",k,[o("div",{class:"title",onClick:d},l(i(h)),1),o("div",g,l(i(I)),1)]),o("div",w,[i(v)>0?(n(),r("span",_,[o(c,{to:`/users/${i(v)}`},{default:m((()=>[o(t,{src:i(f),size:"40px"},null,8,["src"])])),_:1},8,["to"])])):(n(),r("span",F,[o(c,{to:"/signin"},{default:m((()=>[x])),_:1})]))])])])}))}});I.__scopeId="data-v-e7338c34";const M=c();u("data-v-767f7aee");const A={class:"footer-container"},z={class:"footer-info content-limit-three"},U=o("a",{href:"//www.beian.miit.gov.cn/",target:"_blank",class:"icp-link",rel:"nofollow"},"粤ICP备20013375号-1",-1),j=o("div",null,"本网站不保证网站内容更新完全跟得上时代潮流，请自行求证。",-1),O={class:"site-status"},S=d(" 本网站已坚持用 "),T=o("span",{class:"my-shake"},"❤️",-1),$=d("发 "),C=o("span",{class:"my-shake"},"⚡",-1),D=o("img",{src:"https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Funliar%2Fhappy-upptime%2Fmaster%2Fapi%2Fhappysooner-com%2Fuptime.json"},null,-1),G=o("div",null,"本网站的作者头发还剩下挺多的。",-1),P={class:"footer-info"},q={class:"site-link"},B=d("关于本站"),N=d("随机阅读"),R=o("span",null,[o("a",{href:"https://github.com/unliar/vue3-ts-happysooner-web"},"本站源码")],-1),Y=o("span",null,[o("a",{href:"https://t.me/happy_naive"},"TG频道")],-1),E=v('<div class="friend-link" data-v-767f7aee> 友情链接: <a href="//www.tuccuay.com/" target="_blank" data-v-767f7aee>Tuccuay</a><a href="//orx.me/" target="_blank" data-v-767f7aee>Orvice</a><a href="//www.oylz.site" target="_blank" data-v-767f7aee>Oylz</a><a href="//nuomi1.github.io" target="_blank" data-v-767f7aee>nuomi1</a></div>',1);p();var H=t({expose:[],setup(a){const e=ref("2021"),t=reactive({day:0,hour:0,min:0,sec:0});let i;return onMounted((()=>{const a=(new Date).getFullYear();e.value=`${a}`,i=setInterval((()=>{const a=Date.now(),e=Math.floor((a-15671808e5)/1e3),s=Math.floor(e/60/60/24),n=Math.floor(e/60/60)%24,r=Math.floor(e/60)%60,o=Math.floor(e%60);t.day=s,t.hour=n,t.min=r,t.sec=o}))})),onUnmounted((()=>{clearInterval(i)})),M(((a,i)=>{const c=s("router-link");return n(),r("footer",A,[o("div",z,[o("div",null,[d(" © 2019 - "+l(e.value)+" 远浅 ",1),U]),j,o("div",O,[S,T,$,C,d(" 运行了 "+l(t.day)+"天"+l(t.hour)+"小时 "+l(t.min)+"分"+l(t.sec)+"秒。 ",1),D]),G]),o("div",P,[o("div",q,[o("span",null,[o(c,{to:"/about"},{default:M((()=>[B])),_:1})]),o("span",null,[o(c,{to:"/daily-articles"},{default:M((()=>[N])),_:1})]),R,Y]),E])])}))}});H.__scopeId="data-v-767f7aee";const J={class:"main-container"},K={class:"sticky-container"},L={class:"default-layout-container"};var Q=t({expose:[],setup:a=>(a,e)=>(n(),r(h,null,[o("div",J,[o("div",K,[o(I,{title:"远浅",brief:"理解他人，内省自己。"})]),o("div",L,[f(a.$slots,"default")])]),o(H)],64))});export{Q as _};
