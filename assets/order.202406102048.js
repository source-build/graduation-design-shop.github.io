import{X as p,Y as n,Z as g,v as c}from"./index.202406102048.js";import{A as l}from"./index.20240610204824.js";import{s as m}from"./function-call.202406102048.js";const G=p({id:"order",state:()=>({tradeGoods:n.get("tradeGoods",{})}),getters:{getTradeGoods:e=>e.tradeGoods},actions:{async setTradeGoods(e={}){const{origin:t="buy",list:d=[],goOrder:u=!0}=e;let s=[];t==="cart"?d.forEach(o=>{var i;s.push({goodsId:o.goodsId,name:o.name,number:o.number,pic:o.pic,price:o.price,logisticsId:o.logisticsId,propertyList:(i=o.sku)!=null&&i.length?o.sku.map(r=>({id:r.optionId,name:r.optionName,childId:r.optionValueId,childName:r.optionValueName,propIds:`${r.optionId}:${r.optionValueId}`})):[]})}):s=d;const a={origin:t,list:s};this.tradeGoods=a,n.set("tradeGoods",a),u&&g.push("/order/submit")},async deleteOrder(e={}){const{orderId:t}=e;await m({title:"确定删除订单？",message:"删除订单后无法恢复，无法处理您的售后问题，请慎重考虑。",cancelButtonText:"在考虑下",confirmButtonText:"删除"}),c({forbidClick:!0,message:"加载中...",duration:0}),await l.orderDelete({orderId:t})},async closeOrder(e={}){const{orderId:t}=e;await m({title:"确定取消订单？",message:"订单还未付款,确定要取消吗？",cancelButtonText:"在考虑下",confirmButtonText:"取消订单"}),c({forbidClick:!0,message:"加载中...",duration:0}),await l.orderClose({orderId:t})}}});export{G as u};
