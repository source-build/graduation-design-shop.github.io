import{_ as M}from"./index.20240610204818.js";import{_ as P}from"./index.20240610204819.js";import{d as w,o as z,u as D,a as r,b as f,c as v,e as a,f as l,g as t,h as _,w as h,n as E,F as y,i as C,j as R,t as S,p as F,m as N,_ as O}from"./index.202406102048.js";import{A as x}from"./index.20240610204821.js";import{I as U}from"./good.202406102048.js";import"./index.20240610204822.js";const j=n=>(F("data-v-fc865779"),n=n(),N(),n),q={class:"container"},Y={class:"main"},$={class:"right-content scroller-y"},H={class:"list"},J=["onClick"],K={class:"list-item-info"},Q={class:"list-item-title"},W={class:"list-item-price"},X={class:"price"},Z={class:"price-current"},ee=j(()=>t("span",{class:"price-current-symbol"},"¥",-1)),te={class:"price-current-integer"},se={name:"Category"},oe=w({...se,setup(n){z(()=>{k()});const I=D(),d=r(0),p=r([]);function b(){var s;(s=u.value)==null||s.refresh()}function k(){x.goodsCategoryAll().then(s=>{var o,i;(o=s.data)!=null&&o.length&&(p.value=s.data.map(c=>({...c,text:c.name})),(i=u.value)==null||i.loadData())})}const u=r(null),m=r([]),g=f({pageCurrent:1,pageSize:10}),L=f({loadingText:"努力加载中...",emptyText:"暂无商品",emptyImage:U});function T(){const s={categoryId:E(p.value)[d.value].id,page:g.pageCurrent,pageSize:g.pageSize};return x.goodsList(s)}function V(s){I.push({path:"/good/detail",query:{id:s}})}return(s,o)=>{const i=v("van-sidebar-item"),c=v("van-sidebar"),A=v("van-image"),B=P,G=M;return a(),l("div",q,[t("div",Y,[_(c,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),class:"sidebar",onChange:b},{default:h(()=>[(a(!0),l(y,null,C(p.value,e=>(a(),R(i,{key:e.id,title:e.name},null,8,["title"]))),128))]),_:1},8,["modelValue"]),t("div",$,[_(B,{ref_key:"listRef",ref:u,dataSource:m.value,"onUpdate:dataSource":o[1]||(o[1]=e=>m.value=e),mode:"infinite",api:T,pagination:g,meta:L},{default:h(()=>[t("div",H,[(a(!0),l(y,null,C(m.value,e=>(a(),l("div",{key:e.id,class:"list-col"},[t("div",{class:"list-item",onClick:ae=>V(e.id)},[_(A,{class:"list-item-photo",src:e.pic,alt:e.name},null,8,["src","alt"]),t("div",K,[t("div",Q,S(e.name),1),t("div",W,[t("div",X,[t("div",Z,[ee,t("span",te,S(e.minPrice),1)])])])])],8,J)]))),128))])]),_:1},8,["dataSource","pagination","meta"])])]),_(G)])}}});const de=O(oe,[["__scopeId","data-v-fc865779"]]);export{de as default};
