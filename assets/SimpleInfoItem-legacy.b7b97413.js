var __vite_style__=document.createElement("style");__vite_style__.innerHTML=".item-container[data-v-15c332d0]{padding:20px 0;border-bottom:1px solid #ededed}.item-summary[data-v-15c332d0]{font-size:14px;margin:10px 0;color:#444}.item-dot[data-v-15c332d0]{padding:0 5px}.item-info[data-v-15c332d0]{display:flex;color:#757575;font-size:12px;justify-content:space-between}",document.head.appendChild(__vite_style__),System.register(["./time-legacy.6cd5ad23.js","./vendor-legacy.73e5f43f.js"],(function(t){"use strict";var e,n,i,o,a,s,r,c,d,l,u,f;return{setters:[function(t){e=t.F},function(t){n=t.k,i=t.x,o=t.n,a=t.p,s=t.z,r=t.B,c=t.A,d=t.u,l=t.N,u=t.O,f=t.P}],execute:function(){var m=l();u("data-v-15c332d0");var p={class:"item-container"},_={class:"article-title content-limit-one"},v={class:"item-summary content-limit-two"},y={class:"item-info"},x={class:"article-info-base"},g=s("span",{class:"item-dot"},"·",-1),b={class:"article-info-time"};f();t("_",n({expose:[],props:{info:{type:Object,required:!0}},setup:function(t){var n=e(t.info.CreatedAt);return m((function(e,l){var u=i("router-link");return o(),a("div",p,[s(u,{to:"/post/"+t.info.Id},{default:m((function(){return[s("h2",_,r(t.info.Title),1),s("div",v,r(t.info.Summary),1)]})),_:1},8,["to"]),s("div",y,[s("span",x,[s("span",null,r(t.info.Category.CN),1),g,s("span",null,[s(u,{to:"/users/"+t.info.AuthorInfo.UID},{default:m((function(){return[c(r(t.info.AuthorInfo.Nickname),1)]})),_:1},8,["to"])])]),s("span",b,r(d(n)),1)])])}))}})).__scopeId="data-v-15c332d0"}}}));
