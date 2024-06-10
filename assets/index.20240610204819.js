import{_ as D}from"./index.20240610204822.js";import{b as S,o as w,a4 as L,a5 as C,n as M,d as _,q as $,_ as k,e as E,j as R,w as v,a6 as y}from"./index.202406102048.js";function A(e={},a,r){const{immediate:u=!1,fieldNames:l={itemsField:"items",totalRowField:"total"},meta:f={},other:d}=e,o=S({loading:!0,hasData:!1,loadingMore:!1,noMore:!1,error:!1,immediate:u,meta:f,...d});function m(){r&&(r.pageCurrent=1),o.loading=!0,a.value=[],n()}function c(){o.error=!1,n()}function g(){o.noMore||(r&&(r.pageCurrent+=1),n())}function n(){if(!e.api)return;const s=!r||(r==null?void 0:r.pageCurrent)===1;return e.api().then(t=>{var h,F;let i=((h=t.data)==null?void 0:h[l.itemsField])??[];const p=((F=t.data)==null?void 0:F[l.totalRowField])??0;e.afterFetch&&(i=e.afterFetch(t.data)),s?(a.value=i,C(()=>{o.loading=!1,o.hasData=!!M(a).length})):(a.value=M(a).concat(i),C(()=>{o.loadingMore=!1,o.noMore=M(a).length>=p}))}).catch(t=>{console.error(t),s?o.loading=!1:o.loadingMore=!1,o.error=!0})}return w(()=>{o.immediate&&n()}),{...L(o),refresh:m,onError:c,loadMore:g,loadData:n}}const b=_({name:"ProList",components:{AppList:D},inheritAttrs:!1,props:{dataSource:{type:Array,required:!0,default:()=>[]},pagination:{type:Object,default:()=>({pageCurrent:1,pageSize:20})},fieldNames:{type:Object,default:()=>({itemsField:"result",totalRowField:"totalRow"})},mode:String,immediate:Boolean},emits:["update:dataSource"],setup(e,{attrs:a,emit:r,expose:u}){const l=$({get(){return e.dataSource},set(p){r("update:dataSource",p)}}),{loading:f,hasData:d,loadingMore:o,noMore:m,error:c,meta:g,refresh:n,onError:s,loadMore:t,loadData:i}=A({...a,...e},l,e.pagination);return u({refresh:n,onError:s,loadMore:t,loadData:i}),{loading:f,hasData:d,loadingMore:o,noMore:m,error:c,meta:g,loadMore:t,onError:s}}});function j(e,a,r,u,l,f){const d=D;return E(),R(d,{loading:e.loading,"onUpdate:loading":a[0]||(a[0]=o=>e.loading=o),loadingMore:e.loadingMore,"onUpdate:loadingMore":a[1]||(a[1]=o=>e.loadingMore=o),mode:e.mode,error:e.error,hasData:e.hasData,noMore:e.noMore,meta:e.meta,onLoadMore:e.loadMore,onClickError:e.onError},{default:v(()=>[y(e.$slots,"default")]),_:3},8,["loading","loadingMore","mode","error","hasData","noMore","meta","onLoadMore","onClickError"])}const N=k(b,[["render",j]]);export{N as _};