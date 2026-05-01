import{y as J,aq as M,r as m,k as L,w as j,aJ as O,M as r,C as s,P as f,a7 as N,F as W,K as h,O as x,u as e,aK as $,aa as P,a1 as Q,an as S,ay as A}from"./_plugin-vue_export-helper-RInzzBDv.js";import{I as G,ah as H}from"./web-source-B17TrjFf.js";import{u as X,E as Y}from"./main-BPUOyb6d.js";import{a as Z,E as d}from"./el-table-column-K6Radf6A.js";import"./el-checkbox-B5BjtVxm.js";import"./el-scrollbar-BBvjWo1h.js";/* empty css               */import{E as ee}from"./el-pagination-DS5yzCp9.js";import"./el-select-CRzuLPg5.js";import{a as te,E as ae}from"./el-input-number-Bq7FaJxb.js";import{E as le}from"./index-CrBJZj3t.js";import{E as ne}from"./index-Brpo8SuP.js";const oe={class:"search-bar"},ie={class:"pagination-container"},re=10,w=J({__name:"ItemSelector",props:{modelValue:{type:Boolean},initialQuery:{},title:{},mode:{},allowQuantity:{type:Boolean},customSearch:{type:Function}},emits:["update:modelValue","select"],setup(a,{emit:l}){const{$t:u}=M(),U=X(),i=a,V=l,v=m(!1),c=m(""),y=m(!1),g=m([]),k=m(0),p=m(1),E=m(1),F=L(()=>i.mode==="item"&&i.allowQuantity);j(()=>i.modelValue,t=>{v.value=t,t&&(i.initialQuery&&i.initialQuery!==c.value?(c.value=i.initialQuery,b()):g.value.length||b())}),j(v,t=>{V("update:modelValue",t)});let I=null;j(c,()=>{I&&clearTimeout(I),y.value=!0,I=setTimeout(()=>{b()},500)});async function b(){p.value=1,await C()}async function K(t){p.value=t,await C()}async function C(){y.value=!0;try{if(i.customSearch){const t=await i.customSearch(p.value,c.value);g.value=t.results;const o=t.totalPages||1;k.value=o*10}else{const o=await(await U.getDataSource()).recipeTable(p.value,c.value);g.value=o.results.map(n=>({...n,name:n.item_name}));const _=o.totalPages||1;k.value=_*10}}catch(t){le.error(u("search-error")+": "+String(t))}finally{y.value=!1}}function R(t){i.mode==="item"?V("select",{id:t.id,name:t.name,recipeId:0,amount:Math.max(1,Number(E.value)||1)}):V("select",{id:t.item_id,name:t.name,recipeId:t.id}),v.value=!1}function q(){}return(t,o)=>{const _=O("tnze-loading");return s(),r(e(Y),{modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=n=>v.value=n),title:a.title||e(u)("select-recipe"),width:"800px","append-to-body":"",onClosed:q},{default:f(()=>[N("div",oe,[h(e(te),{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=n=>c.value=n),placeholder:e(u)("search-item-placeholder"),onKeyup:$(b,["enter"]),clearable:""},null,8,["modelValue","placeholder"]),F.value?(s(),r(e(ae),{key:0,modelValue:E.value,"onUpdate:modelValue":o[1]||(o[1]=n=>E.value=n),min:1,step:1,precision:0,controls:!1,class:"quantity-input"},null,8,["modelValue"])):x("",!0),h(e(ne),{type:"primary",onClick:b,loading:y.value},{default:f(()=>[P(Q(e(u)("search")),1)]),_:1},8,["loading"])]),W((s(),r(e(Z),{data:g.value,style:{width:"100%","margin-top":"20px"},height:"400",onRowClick:R,stripe:"","highlight-current-row":""},{default:f(()=>[h(e(d),{prop:"icon",width:"60"},{default:f(n=>[h(e(G),null,{default:f(()=>[h(e(H))]),_:1})]),_:1}),h(e(d),{prop:"name",label:e(u)("item-name")},null,8,["label"]),a.mode!=="item"?(s(),r(e(d),{key:0,prop:"item_id",label:"ID",width:"100"})):(s(),r(e(d),{key:1,prop:"id",label:"ID",width:"100"})),a.mode!=="item"?(s(),r(e(d),{key:2,prop:"job",label:e(u)("job"),width:"100"},{default:f(n=>[P(Q(n.row.job_code||n.row.job_name||"-"),1)]),_:1},8,["label"])):x("",!0),a.mode!=="item"?(s(),r(e(d),{key:3,prop:"rlv",label:e(u)("level"),width:"80"},null,8,["label"])):(s(),r(e(d),{key:4,prop:"level",label:e(u)("level"),width:"80"},null,8,["label"]))]),_:1},8,["data"])),[[_,y.value]]),N("div",ie,[g.value.length>0?(s(),r(e(ee),{key:0,layout:"prev, pager, next",total:k.value,"page-size":re,"current-page":p.value,"onUpdate:currentPage":o[2]||(o[2]=n=>p.value=n),onCurrentChange:K},null,8,["total","current-page"])):x("",!0)])]),_:1},8,["modelValue","title"])}}});function T(a){const l=a.options||a;l.fluent=l.fluent||{},l.fluent["zh-CN"]=new S(`select-recipe = 选择配方
search-item-placeholder = 搜索物品名称...
search = 搜索
item-name = 物品名称
job = 职业
level = 等级
search-error = 搜索失败`)}function D(a){const l=a.options||a;l.fluent=l.fluent||{},l.fluent["zh-TW"]=new S(`select-recipe = 選擇配方
search-item-placeholder = 搜尋物品名稱...
search = 搜尋
item-name = 物品名稱
job = 職業
level = 等級
search-error = 搜尋失敗`)}function z(a){const l=a.options||a;l.fluent=l.fluent||{},l.fluent["en-US"]=new S(`select-recipe = Select Recipe
search-item-placeholder = Search item name...
search = Search
item-name = Item Name
job = Job
level = Level
search-error = Search failed`)}function B(a){const l=a.options||a;l.fluent=l.fluent||{},l.fluent["ja-JP"]=new S(`select-recipe = レシピを選択
search-item-placeholder = アイテム名を検索...
search = 検索
item-name = アイテム名
job = クラス
level = レベル
search-error = 検索失敗`)}typeof T=="function"&&T(w);typeof D=="function"&&D(w);typeof z=="function"&&z(w);typeof B=="function"&&B(w);const we=A(w,[["__scopeId","data-v-12ace3c0"]]);export{we as I};
//# sourceMappingURL=ItemSelector-YhBBWfz-.js.map
