import{b as a,a as e}from"./index.d3633a74.js";import{k as s,n,p as t,z as d,B as o,N as l,O as r,P as v}from"./vendor.18b3a30d.js";const u=l();r("data-v-ad037df8");const i={class:"not-found"},c={class:"x-mian"},f=d("div",null,"你所寻找的页面不在服务区~",-1);v();var p=s({expose:[],setup(s){const l=a(),r=ref(5);let v;return e({title:"404 not found"}),onMounted((()=>{v=setInterval((()=>{r.value=r.value-1,r.value<=0&&l.replace("/")}),1e3)})),onUnmounted((()=>{clearInterval(v)})),u(((a,e)=>(n(),t("div",i,[d("div",c,[f,d("div",null,o(r.value)+"秒后返回主页",1)])]))))}});p.__scopeId="data-v-ad037df8";export default p;
