import{_ as u}from"./index.20240610204819.js";import{A as g}from"./index.20240610204832.js";import{I as v}from"./good.202406102048.js";import{d as f,a as S,b as _,e as i,f as n,h,w as L,g as t,F as x,i as y,t as s,S as C,_ as I}from"./index.202406102048.js";import"./index.20240610204822.js";const b={class:"container"},z={class:"list"},A={class:"list-item-hd"},E={class:"list-item-title"},k={class:"list-item-txt"},B=f({__name:"scoreLog",setup(M){const a=S([]),o=_({pageCurrent:1,pageSize:20}),d=_({emptyText:"暂无交易记录",emptyImage:v});function l(){const r={page:o.pageCurrent,pageSize:o.pageSize};return g.scoreLogs(r)}return(r,c)=>{const p=u;return i(),n("div",b,[h(p,{dataSource:a.value,"onUpdate:dataSource":c[0]||(c[0]=e=>a.value=e),mode:"infinite",api:l,pagination:o,meta:d,immediate:""},{default:L(()=>[t("div",z,[(i(!0),n(x,null,y(a.value,(e,m)=>(i(),n("div",{key:m,class:"list-item van-hairline--bottom"},[t("div",A,[t("div",E,s(e.typeStr),1),t("div",k,s(e.dateAdd),1)]),t("div",{class:C(["list-item-bd",e.behavior?"c-red":"c-green"])},[t("span",null,s(e.behavior?"":"+"),1),t("span",null,s(e.score),1)],2)]))),128))])]),_:1},8,["dataSource","pagination","meta"])])}}});const N=I(B,[["__scopeId","data-v-cd5f2d94"]]);export{N as default};
