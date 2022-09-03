import"core-js/modules/es.promise.js";import"core-js/modules/es.object.to-string.js";function asyncGeneratorStep(e,n,t,r,a,i,o){try{var u=e[i](o),s=u.value}catch(d){return void t(d)}u.done?n(s):Promise.resolve(s).then(r,a)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){asyncGeneratorStep(i,r,a,o,u,"next",e)}function u(e){asyncGeneratorStep(i,r,a,o,u,"throw",e)}o(void 0)}))}}var __vite_style__=document.createElement("style");__vite_style__.innerHTML=".signin-container[data-v-7f7d81da]{display:flex;align-items:center;justify-content:center;padding:50px 15px}.signin-container div[data-v-7f7d81da]{padding:15px 0;margin:0 auto;width:100%}.title[data-v-7f7d81da]{font-size:24px;padding:15px 0;font-weight:500;color:#262626}.summary[data-v-7f7d81da]{font-size:12px;color:#6a6a6a}.signin-title[data-v-7f7d81da]{text-align:center}.signin-info[data-v-7f7d81da]{font-size:12px}div button[data-v-7f7d81da],div input[data-v-7f7d81da]{outline:0;display:flex;justify-content:center;align-items:center;padding:10px;width:100%;border-radius:5px;border:1px solid #999;font-size:14px;box-sizing:border-box}.signin-info span[data-v-7f7d81da]{font-weight:bolder}.signin-main[data-v-7f7d81da]{max-width:750px;overflow:hidden}.btn-login-register[data-v-7f7d81da]{background-color:#f5f5f5;opacity:.5}.btn-login-register[data-v-7f7d81da]:hover{opacity:1}",document.head.appendChild(__vite_style__),System.register(["./vendor-legacy.73e5f43f.js","./index-legacy.a0626c58.js"],(function(e){"use strict";var n,t,r,a,i,o,u,s,d,l,c,v,f,p,m,g,y,x,b,h,_,k;return{setters:[function(e){n=e.k,t=e.x,r=e.n,a=e.p,i=e.z,o=e.W,u=e.X,s=e.y,d=e.u,l=e.F,c=e.A,v=e.B,f=e.N,p=e.O,m=e.P},function(e){g=e.c,y=e.u,x=e.b,b=e.e,h=e.f,_=e.S,k=e.g}],execute:function(){var w=function(e){return e.match(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/)?"":"参数必须为字母开头的5-16位数字和字母组合"},j=f();p("data-v-7f7d81da");var R={class:"signin-container"},z={class:"signin-main"},C={class:"signin-title"},G=i("div",null,"嘿;-) 好巧在这里遇到您.",-1),T=c(" 这里是远浅自建用来叨叨的网站, 要是您懒得注册可以直接点这里去逛逛。 "),U=i("div",{class:"signin-info"}," 直接输入登录名称开始探险叭~我们很智能哒~会自动帮你切换登录/注册 ",-1),A={class:"signin-form"},E={class:"form-account"},N={key:0},S={class:"summary"},I=c(" 注册一下不会有任何损失,甚至会变得更加 "),P=i("del",null,"沙雕",-1),V=c(" 快乐。 ");m();e("default",n({expose:[],setup:function(e){var n=g(),f=y(),p=x(),m=ref(""),M=ref(""),Z=ref(""),B=ref(!1),D=computed((function(){return f.User.Id}));watch(m,(function(e){e.trim()&&b({type:"loginName",value:e.trim()}).then((function(e){1000005===e.Result?B.value=!1:B.value=!0}))}));var F=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=w(m.value.trim()))){e.next=4;break}return n.error(t),e.abrupt("return");case 4:return e.next=6,h({type:"loginName",value:m.value.trim(),password:Z.value.trim()});case 6:if(!(null!=(r=e.sent)&&r.ErrorCode||null==r)&&r.Result){e.next=10;break}return n.error(r.ErrorCode+" "+r.ErrorMsg),e.abrupt("return");case 10:a=r.Result.Token,i=r.Result.TokenAvailableDays,_(a,i),f.GetAuthedUserInfo(),n.success("欢迎 "+(null==r?void 0:r.Result.UserInfo.Nickname)+" 前来观光",{onClose:function(){p.back()}});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=w(m.value.trim()))){e.next=4;break}return n.error(t),e.abrupt("return");case 4:return e.next=6,k({type:"loginName",value:m.value.trim(),password:Z.value.trim(),nickname:M.value.trim()});case 6:e.sent.ErrorCode||n.success("注册成功,即将自动登录~ "+m.value,{onClose:function(){F()}});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return j((function(e,n){var f=t("router-link");return r(),a("div",R,[i("div",z,[i("div",C,[G,i("div",null,[i(f,{to:"/"},{default:j((function(){return[T]})),_:1})])]),U,i("div",A,[i("div",E,[o(i("input",{type:"text",name:"account",id:"account","onUpdate:modelValue":n[1]||(n[1]=function(e){return m.value=e}),placeholder:"账户登录名称,字母开头的5-16位数字和字母组合"},null,512),[[u,m.value,void 0,{trim:!0}]])]),B.value?(r(),a("div",N,[o(i("input",{type:"text",name:"nickname",id:"nickname","onUpdate:modelValue":n[2]||(n[2]=function(e){return M.value=e}),placeholder:"用户昵称"},null,512),[[u,M.value,void 0,{trim:!0}]])])):s("",!0),i("div",null,[o(i("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":n[3]||(n[3]=function(e){return Z.value=e}),placeholder:"登录密码"},null,512),[[u,Z.value,void 0,{trim:!0}]])]),i("div",null,[B.value?(r(),a("button",{key:0,type:"button",class:"btn-login-register",onClick:H}," 立即注册 ")):(r(),a("button",{key:1,type:"button",class:"btn-login-register",onClick:F}," 立即登录 "))])]),i("div",S,[I,P,V,d(D)?(r(),a(l,{key:0},[c("很少有人让我心动 但你是第"+v(d(D))+"个。",1)],64)):s("",!0)])])])}))}})).__scopeId="data-v-7f7d81da"}}}));