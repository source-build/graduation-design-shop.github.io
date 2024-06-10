import{p as ce,d as ve}from"./format.202406102048.js";import{d as j,q as N,n as t,c as k,e as c,j as E,w as T,f as v,h as m,g as e,t as d,l as M,k as w,i as F,F as z,S as he,s as V,p as Y,m as Z,_ as q,o as ee,a as $,v as ke,x as ne,E as ge,u as fe,W as ye}from"./index.202406102048.js";import{_ as be}from"./index.20240610204820.js";import{g as $e}from"./afterSale.202406102048.js";import{A as le}from"./index.20240610204821.js";import{A as ie}from"./index.20240610204823.js";import{A as ae}from"./index.20240610204827.js";import{g as Se}from"./reputation.2024061020482.js";import{u as Ce}from"./order.202406102048.js";import{u as Ie}from"./usePage.202406102048.js";import{s as Le}from"./function-call.202406102048.js";import"./is.202406102048.js";import"./index.20240610204826.js";import"./index.20240610204824.js";const de=i=>(Y("data-v-17b3cfee"),i=i(),Z(),i),we={key:0,class:"sku-header van-hairline--bottom"},Pe={class:"sku-header-good-info"},xe={class:"sku-header-good-name van-multi-ellipsis--l2"},Ne={class:"sku-header-good-info-bd"},Te={class:"sku-header-good-price"},De=de(()=>e("span",{class:"sku-header-good-price-symbol"},"¥",-1)),Ve={class:"sku-header-good-price-integer"},Ae={class:"sku-header-item"},Ee={class:"sku-header-good-stock-num"},Ge={key:0,class:"sku-header-item"},Re={class:"sku-body"},Oe={class:"sku-group-hd"},Ue={key:0,class:"sku-group-list"},Be=["onClick"],Me={class:"sku-group-list-item-name"},Fe={class:"sku-num"},ze=de(()=>e("div",{class:"sku-num-title"},"购买数量",-1)),He={class:"sku-actions"},je={name:"Sku"},qe=j({...je,props:{show:{type:Boolean,default:!1},sku:{type:Object,default:()=>({})},initialSku:{type:Object,default:()=>({})}},emits:["update:show","confirm"],setup(i,{expose:A,emit:S}){const o=i,D=S,I={display:"flex","flex-direction":"column","align-items":"stretch","max-height":"80%","min-height":"50%","overflow-y":"visible","font-size":"14px"},s=N(()=>!!o.sku.skuList.length),h=N(()=>{if(t(s)){const{skuList:a}=o.sku;let l="";return Object.keys(o.initialSku.selectedProps).forEach(r=>{l+=`${r}:${o.initialSku.selectedProps[r]},`}),a.find(r=>r.propertyChildIds===l)}}),b=N(()=>{if(t(s)){const{propList:a}=o.sku,{selectedPropList:l}=o.initialSku;return t(h)?`已选 ${l.reduce((r,f)=>`${r} ${f.childName}`,"")}`:`请选择 ${a.reduce((r,f)=>`${r}${l.some(L=>L.id===f.id)?"":f.name}`,"")}`}else return""}),p=N(()=>{var a,l,r;if(t(s)){if(t(h))return{price:(a=t(h))==null?void 0:a.price,maxPrice:(l=t(h))==null?void 0:l.price,stock:(r=t(h))==null?void 0:r.stores};{const{skuList:f}=o.sku;return{price:f[0].price,maxPrice:f[f.length-1].price,stock:o.sku.stock}}}else return{price:o.sku.price,maxPrice:o.sku.price,stock:o.sku.stock}});function g(a,l){const r=o.sku.propList[a],f=r.childsCurGoods[l];o.initialSku.selectedProps[r.id]=o.initialSku.selectedProps[r.id]===f.id?0:f.id;const L=[];o.sku.propList.forEach(x=>{x.childsCurGoods.forEach(y=>{o.initialSku.selectedProps[x.id]===y.id&&L.push({id:x.id,name:x.name,childId:y.id,childName:y.name,propIds:`${x.id}:${y.id}`})})}),o.initialSku.selectedPropList=L}function P(){if(o.initialSku.selectedNum>t(p).stock){V({message:"库存不足",duration:1500});return}if(t(s)&&!t(h)){V({message:"请选择商品规格",duration:1500});return}const a={goodsId:o.sku.goodInfo.id,selectedSkuComb:t(p)};D("confirm",a)}function C(){_(!1)}function G(){_(!0)}function _(a){D("update:show",a)}return A({open:G,close:C,updateShow:_}),(a,l)=>{const r=k("van-image"),f=k("van-stepper"),L=k("van-button"),x=k("van-popup");return c(),E(x,{show:i.show,round:"",closeable:"",position:"bottom",style:I,"onUpdate:show":_},{default:T(()=>[i.sku.goodInfo?(c(),v("div",we,[m(r,{class:"sku-header-pic",src:i.sku.goodInfo.pic,fit:"cover"},null,8,["src"]),e("div",Pe,[e("div",xe,d(i.sku.goodInfo.name),1),e("div",Ne,[e("div",Te,[De,e("span",Ve,d(t(ce)(p.value.price,p.value.maxPrice)),1)]),e("div",Ae,[M(" 剩余 "),e("span",Ee,d(p.value.stock),1),M(" "+d(i.sku.goodInfo.unit||"件"),1)]),b.value?(c(),v("div",Ge,d(b.value),1)):w("",!0)])])])):w("",!0),e("div",Re,[(c(!0),v(z,null,F(i.sku.propList,(y,W)=>(c(),v("div",{key:y.id,class:"sku-group van-hairline--bottom"},[e("div",Oe,d(y.name),1),y.childsCurGoods&&y.childsCurGoods.length?(c(),v("div",Ue,[(c(!0),v(z,null,F(y.childsCurGoods,(R,J)=>(c(),v("div",{key:R.id,class:he(["sku-group-list-item",i.initialSku.selectedProps[y.id]===R.id?"active":""]),onClick:K=>g(W,J)},[e("span",Me,d(R.name),1)],10,Be))),128))])):w("",!0)]))),128)),e("div",Fe,[ze,m(f,{modelValue:i.initialSku.selectedNum,"onUpdate:modelValue":l[0]||(l[0]=y=>i.initialSku.selectedNum=y),class:"sku-num-stepper"},null,8,["modelValue"])])]),e("div",He,[m(L,{type:"primary",round:"",block:"",onClick:P},{default:T(()=>[M("确定")]),_:1})])]),_:1},8,["show"])}}});const We=q(qe,[["__scopeId","data-v-17b3cfee"]]),re=i=>(Y("data-v-5d4c85e1"),i=i(),Z(),i),Je={class:"coupons"},Ke=re(()=>e("div",{class:"coupons-header van-hairline--bottom"},"优惠券",-1)),Qe={class:"coupons-body"},Xe={class:"coupon-list"},Ye={class:"coupon-list-item-hd"},Ze={class:"coupon-list-item-money"},et=re(()=>e("span",{class:"fz12"},"¥",-1)),tt={class:"coupon-list-item-moneyHreshold"},st={class:"coupon-list-item-bd"},ot={class:"coupon-list-item-name"},nt={key:0,class:"coupon-list-item-dateEndDays"},it={key:1,class:"coupon-list-item-dateEndDays"},at=["onClick"],ct=j({__name:"Coupons",props:{title:{type:String}},setup(i,{expose:A}){ee(()=>{D()});const S=$(!1),o=$([]);function D(){ae.discountsCoupons({type:"NO_PWD"}).then(p=>{p.data&&(o.value=p.data)})}function I(p){const g=t(o)[p];ke({forbidClick:!0,message:"加载中...",duration:0});const P={id:g.id};ae.discountsFetch(P).then(()=>{ne(),V({message:"恭喜,抢到了~",duration:2e3})}).catch(C=>{console.error(C),ne(),Number(C.code)===700?V({message:"很遗憾,没抢到~",duration:2e3}):V({message:C.msg,duration:2e3})})}function s(){b(!1)}function h(){b(!0)}function b(p){S.value=p}return A({open:h,close:s,toggle:b}),(p,g)=>{const P=k("van-cell"),C=k("van-button"),G=k("van-popup");return c(),v("div",Je,[o.value.length?(c(),E(P,{key:0,class:"mb10",title:i.title,"is-link":"",onClick:h},null,8,["title"])):w("",!0),m(G,{show:S.value,"onUpdate:show":g[0]||(g[0]=_=>S.value=_),round:"",closeable:"",position:"bottom"},{default:T(()=>[Ke,e("div",Qe,[e("div",Xe,[(c(!0),v(z,null,F(o.value,(_,a)=>(c(),v("div",{key:_.id,class:"coupon-list-item"},[e("div",Ye,[e("div",Ze,[et,M(d(_.moneyMin),1)]),e("div",tt,"满"+d(_.moneyHreshold)+"元可用",1)]),e("div",st,[e("div",ot,d(_.moneyMin)+"元券",1),_.dateEndType===0?(c(),v("div",nt," 领取后 "+d(_.dateEnd.slice(0,10))+" 到期 ",1)):w("",!0),_.dateEndType===1?(c(),v("div",it," 领取后 "+d(_.dateEndDays)+" 天后到期 ",1)):w("",!0)]),e("div",{class:"coupon-list-item-btn",onClick:l=>I(a)},"立即领取",8,at)]))),128))])]),e("div",{class:"coupons-footer",onClick:s},[m(C,{type:"primary",round:"",block:"",onClick:s},{default:T(()=>[M("完成")]),_:1})])]),_:1},8,["show"])])}}});const lt=q(ct,[["__scopeId","data-v-5d4c85e1"]]),dt={class:"reputation"},rt={class:"reputation-inner-hd"},ut={class:"reputation-inner-name"},pt={class:"reputation-inner-stars"},_t={class:"reputation-inner-ft"},mt={class:"reputation-inner-prop"},vt=j({__name:"Reputations",props:{goodsId:{type:[String,Number]}},setup(i){const A=i;ee(()=>{D()});const S=$([]),o=$(0);function D(){le.goodsReputation({goodsId:A.goodsId,page:1,pageSize:1}).then(I=>{var b,p;const s=((b=I.data)==null?void 0:b.result)??[],h=((p=I.data)==null?void 0:p.totalRow)??0;s.length&&(o.value=h,S.value=Se(s))})}return(I,s)=>{const h=k("van-cell"),b=k("van-image"),p=k("van-rate");return c(),v("div",dt,[S.value.length?(c(),E(h,{key:0,to:"/good/reputation?goodsId="+i.goodsId,class:"mb10",title:"评价("+o.value+")",value:"全部评价","is-link":""},null,8,["to","title"])):(c(),E(h,{key:1,class:"mb10",title:"商品评价",value:"暂无评价"})),(c(!0),v(z,null,F(S.value,(g,P)=>(c(),v("div",{key:P,class:"reputation-inner"},[e("div",rt,[m(b,{class:"reputation-inner-media",src:g.avatarUrl},null,8,["src"]),e("div",ut,d(g.nickName),1),e("div",pt,[m(p,{modelValue:g.rate,"onUpdate:modelValue":C=>g.rate=C,size:14,color:"#f44","void-icon":"star","void-color":"#eee",readonly:""},null,8,["modelValue","onUpdate:modelValue"])])]),e("div",_t,[e("div",null,d(g.remark),1),e("div",mt,d(g.property),1)])]))),128))])}}});const ht=q(vt,[["__scopeId","data-v-109322da"]]),H=i=>(Y("data-v-a9912a9d"),i=i(),Z(),i),kt={class:"container"},gt={class:"section"},ft={class:"price"},yt={class:"price-hd"},bt={class:"price-current"},$t=H(()=>e("span",{class:"price-current-symbol"},"¥",-1)),St={class:"price-current-integer"},Ct={key:0,class:"price-origin"},It=H(()=>e("span",{class:"price-origin-label"},"价格",-1)),Lt=H(()=>e("span",{class:"price-origin-symbol"},"¥",-1)),wt={class:"price-origin-integer"},Pt={class:"desc"},xt={class:"desc-hd"},Nt={class:"desc-title van-multi-ellipsis--l2"},Tt={key:0,class:"desc-brief"},Dt={class:"stock van-hairline--top"},Vt={class:"stock-item"},At={class:"stock-item"},Et={class:"cell-bar"},Gt=H(()=>e("div",{class:"cell-bar-title"},"服务",-1)),Rt={class:"cell-bar-text"},Ot={class:"cell-bar"},Ut={class:"cell-bar-title"},Bt={class:"cell-bar-text"},Mt=["innerHTML"],Ft=H(()=>e("div",{class:"action-bar-perch"},null,-1)),zt={name:"GoodDetail"},Ht=j({...zt,setup(i){ee(()=>{C(),t(D)&&te()});const A=ge(),S=fe(),o=Ce(),{hasLogin:D}=Ie(),I=$([]),s=$({}),h=$({}),b=$(""),p=N(()=>t(r)?t(a).skuList[0].price:t(s).minPrice),g=N(()=>t(r)?t(a).skuList[t(a).skuList.length-1].price:""),P=N(()=>t(s).logisticsId?`运费 ${t(h).isFree?"包邮":"不包邮"}`:"无需配送");function C(){le.goodsDetail({id:A.query.id}).then(n=>{var u,O,U;if(I.value=n.data.pics,s.value=n.data.basicInfo,h.value=((u=n.data)==null?void 0:u.logistics)??{},b.value=n.data.content,t(s).status===1){V(t(s).statusStr);return}if(t(s).stores===0){Le({title:"提示",message:"该商品已售罄,去看看其他商品吧！",showCancelButton:!1}).then(()=>{S.replace({path:"/home"})}).catch(()=>{});return}document.title=t(s).name,y(n.data.basicInfo,((O=n.data)==null?void 0:O.properties)??[],((U=n.data)==null?void 0:U.skuList)??[]),J()})}const G=$("goBuy"),_=$(!1),a=$({goodsId:0,price:0,stock:0,goodInfo:{},propList:[],skuList:[]}),l=$({selectedNum:1,selectedProps:{},selectedPropList:[]}),r=N(()=>!!t(a).skuList.length),f=N(()=>t(r)?t(l).selectedPropList.length?t(l).selectedPropList.reduce((n,u)=>`${n} ${u.childName}`,""):t(a).propList.reduce((n,u)=>`${n} ${u.name}`,""):"");function L(n){G.value=n,_.value=!0}const x=ye(n=>{_.value=!1,t(G)==="addCart"?ue():o.setTradeGoods({origin:"buy",list:[{goodsId:t(a).goodsId,name:t(a).goodInfo.name,number:t(l).selectedNum,pic:t(a).goodInfo.pic,price:n.selectedSkuComb.price,logisticsId:t(s).logisticsId,propertyList:t(l).selectedPropList}]})},1500);function y(n,u,O){a.value={goodsId:n.id,stock:n.stores,price:n.minPrice,goodInfo:{id:n.id,pic:n.pic,name:n.name,unit:n.unit},propList:u,skuList:O.sort((U,Q)=>U.price-Q.price)}}function W(){V("未开放：客服")}const R=$("");function J(){R.value=$e(t(s).afterSale)}const K=$(void 0);function te(){ie.shoppingCartInfo().then(n=>{var u;K.value=(u=n.data)==null?void 0:u.number})}function ue(){const n={goodsId:t(a).goodsId,number:t(l).selectedNum};t(l).selectedPropList.length&&(n.sku=JSON.stringify(t(l).selectedPropList.map(u=>({optionId:u.id,optionValueId:u.childId})))),ie.shoppingCartAdd(n).then(()=>{V("已成功加入购物车"),te()}).catch(u=>{console.error(u)})}return(n,u)=>{const O=k("van-image"),U=k("van-swipe-item"),Q=k("van-swipe"),se=k("van-cell"),pe=be,X=k("van-action-bar-icon"),oe=k("van-action-bar-button"),_e=k("van-action-bar"),me=We;return c(),v("div",kt,[m(Q,{autoplay:3e3,class:"swiper"},{default:T(()=>[(c(!0),v(z,null,F(I.value,B=>(c(),E(U,{key:B.id,class:"swiper-item"},{default:T(()=>[m(O,{class:"swiper-item-img",fit:"contain",src:B.pic,alt:""},null,8,["src"])]),_:2},1024))),128))]),_:1}),e("div",gt,[e("div",ft,[e("div",yt,[e("div",bt,[$t,e("span",St,d(t(ce)(p.value,g.value)),1)]),s.value.originalPrice>0?(c(),v("div",Ct,[It,Lt,e("span",wt,d(t(ve)(s.value.originalPrice)),1)])):w("",!0)])]),e("div",Pt,[e("div",xt,[e("div",Nt,d(s.value.name),1),s.value.characteristic?(c(),v("div",Tt,d(s.value.characteristic),1)):w("",!0)])])]),e("div",Dt,[e("div",Vt,d(P.value),1),e("div",At,"剩余 "+d(s.value.stores),1)]),m(lt,{title:"领券"}),m(se,null,{title:T(()=>[e("div",Et,[Gt,e("div",Rt,d(R.value),1)])]),_:1}),r.value?(c(),E(se,{key:0,border:!1,"is-link":"",onClick:L},{title:T(()=>[e("div",Ot,[e("div",Ut,d(l.value.selectedPropList.length?"已选":"选择"),1),e("div",Bt,d(f.value),1)])]),_:1})):w("",!0),s.value.id?(c(),E(ht,{key:1,class:"mt10","goods-id":s.value.id},null,8,["goods-id"])):w("",!0),m(pe,{title:"商品详情",class:"mt10"}),e("div",{class:"goods-content",innerHTML:b.value},null,8,Mt),Ft,m(_e,null,{default:T(()=>[m(X,{icon:"thumb-circle-o",text:"首页",to:"/home",replace:""}),m(X,{icon:"chat-o",text:"客服",onClick:W}),m(X,{icon:"cart-o",text:"购物车",to:"/cart",badge:K.value,replace:""},null,8,["badge"]),m(oe,{type:"warning",text:"加入购物车",onClick:u[0]||(u[0]=B=>L("addCart"))}),m(oe,{type:"danger",text:"立即购买",onClick:L})]),_:1}),m(me,{show:_.value,"onUpdate:show":u[1]||(u[1]=B=>_.value=B),sku:a.value,"initial-sku":l.value,onConfirm:t(x)},null,8,["show","sku","initial-sku","onConfirm"])])}}});const is=q(Ht,[["__scopeId","data-v-a9912a9d"]]);export{is as default};
