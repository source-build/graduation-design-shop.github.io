function i(r){const n="收货后结算",e=" · ";if(r.length){if(r.includes("1")||r.includes("0")&&r.includes("2"))return`${n}${e}支持退款退货`;if(r.includes("0"))return`${n}${e}支持退款`;if(r.includes("2"))return`${n}${e}支持退货`}else return`${n}${e}不支持售后退换服务`;return""}function u(r,n){const e=[];return r.forEach(o=>{(n[o.id]||[]).forEach(s=>{e.push({...s,orderInfo:o})})}),e}export{i as g,u as o};
