import{_ as v}from"./index.20240610204819.js";import{A as h}from"./index.20240610204821.js";import{g as f}from"./reputation.2024061020482.js";import{_ as y,c as d,e as a,f as i,h as c,w as k,g as e,F as S,i as V,t as n,k as x}from"./index.202406102048.js";import"./index.20240610204822.js";import"./index.20240610204826.js";import"./format.202406102048.js";import"./is.202406102048.js";const F={data(){return{list:[],pagination:{pageCurrent:1,pageSize:20},listMeta:{emptyText:"暂无评价"}}},methods:{getDataList(){const s={goodsId:this.$route.query.goodsId,page:this.pagination.pageCurrent,pageSize:this.pagination.pageSize};return h.goodsReputation(s)},listAfterFetch(s){return f((s==null?void 0:s.result)??[])}}};const C={class:"container"},z={class:"list"},A={class:"list-item-header van-hairline--bottom"},D={class:"list-item-avatar"},I={class:"list-item-inner"},L={class:"list-item-name"},N={class:"list-item-star"},U={class:"list-item-date"},b={class:"list-item-content"},B={class:"list-item-remark"},M={key:0,class:"list-item-prop"};function w(s,r,O,P,o,l){const _=d("van-image"),p=d("van-rate"),m=v;return a(),i("div",C,[c(m,{dataSource:o.list,"onUpdate:dataSource":r[0]||(r[0]=t=>o.list=t),mode:"infinite",api:l.getDataList,afterFetch:l.listAfterFetch,pagination:o.pagination,meta:o.listMeta,immediate:""},{default:k(()=>[e("div",z,[(a(!0),i(S,null,V(o.list,(t,u)=>(a(),i("div",{key:u,class:"list-item"},[e("div",A,[e("div",D,[c(_,{src:t.avatarUrl,alt:""},null,8,["src"])]),e("div",I,[e("div",L,n(t.nickName),1),e("div",N,[c(p,{modelValue:t.rate,"onUpdate:modelValue":g=>t.rate=g,size:14,color:"#f44","void-icon":"star","void-color":"#eee",readonly:""},null,8,["modelValue","onUpdate:modelValue"])])]),e("div",U,n(t.date),1)]),e("div",b,[e("div",B,n(t.remark),1),t.property?(a(),i("div",M,n(t.property),1)):x("",!0)])]))),128))])]),_:1},8,["dataSource","api","afterFetch","pagination","meta"])])}const K=y(F,[["render",w],["__scopeId","data-v-d9f41a6b"]]);export{K as default};
