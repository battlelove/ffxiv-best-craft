import{y as G,ap as K,am as L,r as f,k as I,w as O,at as S,B as U,O as W,C as g,M as P,u as r,P as M,a7 as i,K as x,aa as k,a1 as c,an as B,ax as j}from"./_plugin-vue_export-helper-BFa5o2E7.js";import{k as q}from"./main-CuW7cZ7r.js";import{u as H}from"./cost-uQq2hgH9.js";import"./web-source-CLWFJSWP.js";import"./gearsets--erWGMI9.js";const J={key:0,class:"market-advice"},Q={class:"advice-content"},y=G({__name:"MarketAdvice",props:{itemId:{},recipeId:{}},setup(t){const e=t,{$t:n}=K(),z=q(),h=H(),D=L(),p=f(!0),_=f(!0),d=f(!1),v=f(0),b=f(0),C=I(()=>v.value*.95-b.value),F=I(()=>C.value>0?"success":"warning"),$=I(()=>C.value>0?n("advice-craft"):n("advice-buy"));function w(s){return Math.floor(s).toLocaleString()}function A(){D.push({path:"/profit"})}async function E(){_.value=!0,d.value=!1,p.value=!0;try{const a=await(await z.getDataSource()).recipesIngredients(e.recipeId),l=[e.itemId,...a.map(o=>o.ingredient_id)];await h.fetchPrices(l);const m=h.getItemPriceInfo(e.itemId);v.value=m?.effectivePrice||0;let u=0;for(const o of a){const R=h.getPrice(o.ingredient_id);u+=R*o.amount}b.value=u,v.value===0&&u===0&&(d.value=!0)}catch(s){console.error(s),d.value=!0}finally{_.value=!1}}return O(()=>e.recipeId,()=>{E()},{immediate:!0}),(s,a)=>{const l=S("el-alert"),m=S("el-divider"),u=S("el-button");return p.value?(g(),U("div",J,[_.value?(g(),P(l,{key:0,title:r(n)("checking-prices"),type:"info","show-icon":"",closable:!1},null,8,["title"])):d.value?(g(),P(l,{key:1,title:r(n)("price-check-failed"),type:"warning","show-icon":"",onClose:a[0]||(a[0]=o=>p.value=!1)},null,8,["title"])):(g(),P(l,{key:2,title:$.value,type:F.value,"show-icon":"",closable:!0,onClose:a[1]||(a[1]=o=>p.value=!1)},{default:M(()=>[i("div",Q,[i("span",null,[k(c(r(n)("market-price"))+": ",1),i("b",null,c(w(v.value)),1)]),x(m,{direction:"vertical"}),i("span",null,[k(c(r(n)("crafting-cost"))+": ",1),i("b",null,c(w(b.value)),1)]),x(m,{direction:"vertical"}),i("span",null,[k(c(r(n)("profit"))+": ",1),i("b",null,c(w(C.value)),1)]),x(u,{link:"",type:"primary",size:"small",onClick:A,style:{"margin-left":"10px"}},{default:M(()=>[k(c(r(n)("details"))+" > ",1)]),_:1})])]),_:1},8,["title","type"]))])):W("",!0)}}});function N(t){const e=t.options||t;e.fluent=e.fluent||{},e.fluent["zh-CN"]=new B(`checking-prices = 正在查询市场价格...
price-check-failed = 无法获取市场数据
advice-buy = 建议直接购买 (购买更便宜)
advice-craft = 建议制作 (制作更便宜)
market-price = 市场价
crafting-cost = 成本
profit = 预计利润
details = 详情`)}function T(t){const e=t.options||t;e.fluent=e.fluent||{},e.fluent["zh-TW"]=new B(`checking-prices = 正在查詢市場價格...
price-check-failed = 無法獲取市場數據
advice-buy = 建議直接購買 (購買更便宜)
advice-craft = 建議製作 (製作更便宜)
market-price = 市場價
crafting-cost = 成本
profit = 預計利潤
details = 詳情`)}function V(t){const e=t.options||t;e.fluent=e.fluent||{},e.fluent["en-US"]=new B(`checking-prices = Checking market prices...
price-check-failed = Failed to fetch market data
advice-buy = Suggest Buying (Cheaper to Buy)
advice-craft = Suggest Crafting (Cheaper to Craft)
market-price = Market Price
crafting-cost = Cost
profit = Est. Profit
details = Details`)}typeof N=="function"&&N(y);typeof T=="function"&&T(y);typeof V=="function"&&V(y);const ne=j(y,[["__scopeId","data-v-00995bc2"]]);export{ne as default};
//# sourceMappingURL=MarketAdvice-BoZ6QWg9.js.map
