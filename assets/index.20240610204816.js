import{_ as z}from"./index.20240610204831.js";import{d as F,u as $,G as j,a as _,ae as d,af as q,n as o,q as D,c as k,e as a,f as l,g as s,F as p,i as m,S as y,t as E,j as G,w as v,O as M,h as C,l as O,p as P,m as R,_ as U}from"./index.202406102048.js";import{u as H}from"./usePage.202406102048.js";const h=i=>(P("data-v-b7b1c719"),i=i(),R(),i),J={class:"container"},K=h(()=>s("div",{class:"h2"},"选择主题",-1)),Q={class:"mode-list"},W=["onClick"],X=["src","alt"],Y={class:"mode-item-title"},Z=h(()=>s("div",{class:"h2"},"选择配色",-1)),ee={class:"color-list"},se=h(()=>s("div",{class:"tips"},[s("div",{class:"tips-h2"},"tips："),s("div",null,"1. 商品详情页面可查看最佳效果。")],-1)),te=F({__name:"index",setup(i){const x=$(),b=j(),{theme:f}=H(),S=_([{value:"light",label:"浅色",pic:d("images/theme/light.svg")},{value:"dark",label:"深色",pic:d("images/theme/dark.svg")},{value:"system",label:"系统",pic:d("images/theme/system.svg")}]);function B(e){b.updateTheme({mode:e})}const r=_(q.map(e=>({...e,colorList:[e.colors.primary,e.colors.vice,"#fff"]}))),c=_(-1);c.value=o(r).findIndex(e=>e.value===o(f).colors.primary);const I=D(()=>o(r)[o(c)]||{});function T(e){c.value=e;const{colors:g}=o(r)[o(c)];b.updateTheme({colors:g})}function L(){x.back()}return(e,g)=>{const w=k("van-cell"),A=k("van-button"),N=z;return a(),l("div",J,[K,s("div",Q,[(a(!0),l(p,null,m(S.value,(t,n)=>(a(),l("div",{key:n,class:y(["mode-item",o(f).mode===t.value?"active":""]),onClick:u=>B(t.value)},[s("img",{class:"mode-item-pic",src:t.pic,alt:t.label},null,8,X),s("span",Y,E(t.label),1)],10,W))),128))]),Z,s("div",ee,[(a(!0),l(p,null,m(r.value,(t,n)=>(a(),G(w,{key:n,title:t.label,onClick:u=>T(n)},{label:v(()=>[s("div",{class:y(["color",c.value===n?"active":""])},[(a(!0),l(p,null,m(t.colorList,(u,V)=>(a(),l("div",{key:V,class:"color-item",style:M({background:u})},null,4))),128))],2)]),_:2},1032,["title","onClick"]))),128)),se]),C(N,null,{default:v(()=>[C(A,{class:"submit-bar-button",block:"",type:"primary",round:"",color:I.value.value,onClick:L},{default:v(()=>[O(" 返回 ")]),_:1},8,["color"])]),_:1})])}}});const ce=U(te,[["__scopeId","data-v-b7b1c719"]]);export{ce as default};
