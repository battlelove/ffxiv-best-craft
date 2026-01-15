const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RecipeMap-B4AJ7Dh2.js","assets/ItemMap-DVgOOU4h.js"])))=>i.map(i=>d[i]);
import{y as ae,aq as se,r as R,L as oe,w as le,B as k,C as v,a7 as r,a1 as u,u as t,J as O,a8 as ie,D as pe,K as c,P as g,M as re,ac as he,an as C,ay as ce,k as ye,aa as B,O as _e,al as D}from"./_plugin-vue_export-helper-Dh6l7_xc.js";import{a9 as ge,aa as ve,ab as we,ac as Ie,ad as be,ae as ke,I as Ce,a5 as Ee,a6 as Ve}from"./web-source-Dn0kdXsh.js";import{p as me,u as J}from"./main-g_UiPUnz.js";import{E as x,a as K}from"./el-table-column-DltQ35vS.js";import"./el-checkbox-CxYVbeFT.js";import"./el-scrollbar-BqSFb0Z4.js";/* empty css               */import{E as q}from"./el-input-number-DaFLHc7c.js";import{E as Se}from"./el-progress-CXzf29W_.js";import{I as xe}from"./ItemSelector-BESUd-YU.js";import{E as T}from"./index-DG9Upwcv.js";import{E as Q}from"./index-BrkBegHp.js";import"./gearsets-DViDxif-.js";import"./merge-CtbZhPCX.js";import"./_baseIteratee-BCDgjS2P.js";import"./_initCloneObject-Dc3DrJWN.js";import"./raf-AOJ-0H7R.js";import"./use-form-item-B2nZmehC.js";import"./_baseSlice-F8doVSIJ.js";import"./el-pagination-DQmreVrx.js";import"./el-select-CgzZgCX1.js";import"./strings-Dl68AhWY.js";import"./index-BOaqDftn.js";const ze={class:"crystal-input-container"},$e={class:"crystal-grid"},Ne={class:"grid-header"},Re={class:"grid-header"},Le={class:"grid-header"},Ae={class:"element-name"},Me={class:"crystal-cell"},Pe={class:"crystal-cell"},Ue={class:"crystal-cell"},L=ae({__name:"CrystalInput",setup(s){const{$t:e}=se(),m=me(),z=[{name:"fire",color:"#ff4d4f",icon:ge,ids:[2,8,14]},{name:"ice",color:"#40a9ff",icon:ve,ids:[3,9,15]},{name:"wind",color:"#73d13d",icon:we,ids:[4,10,16]},{name:"earth",color:"#d4b106",icon:Ie,ids:[5,11,17]},{name:"lightning",color:"#f7ba2a",icon:be,ids:[6,12,18]},{name:"water",color:"#1890ff",icon:ke,ids:[7,13,19]}],y=R({});function E(){z.forEach(V=>{V.ids.forEach(h=>{y.value[h]=m.items.get(h)||0})})}oe(()=>{E()}),le(()=>m.items,()=>{E()},{deep:!0});function I(V,h){h==null&&(h=0),m.setItem(V,h)}return(V,h)=>(v(),k("div",ze,[r("h3",null,u(t(e)("crystals")),1),r("div",$e,[h[0]||(h[0]=r("div",{class:"grid-header"},null,-1)),r("div",Ne,u(t(e)("shard")),1),r("div",Re,u(t(e)("crystal")),1),r("div",Le,u(t(e)("cluster")),1),(v(),k(O,null,ie(z,(d,W)=>(v(),k(O,{key:d.name},[r("div",{class:"element-label",style:pe({color:d.color})},[c(t(Ce),null,{default:g(()=>[(v(),re(he(d.icon)))]),_:2},1024),r("span",Ae,u(t(e)(d.name)),1)],4),r("div",Me,[c(t(q),{modelValue:y.value[d.ids[0]],"onUpdate:modelValue":f=>y.value[d.ids[0]]=f,min:0,"controls-position":"right",size:"small",onChange:f=>I(d.ids[0],f)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),r("div",Pe,[c(t(q),{modelValue:y.value[d.ids[1]],"onUpdate:modelValue":f=>y.value[d.ids[1]]=f,min:0,"controls-position":"right",size:"small",onChange:f=>I(d.ids[1],f)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),r("div",Ue,[c(t(q),{modelValue:y.value[d.ids[2]],"onUpdate:modelValue":f=>y.value[d.ids[2]]=f,min:0,"controls-position":"right",size:"small",onChange:f=>I(d.ids[2],f)},null,8,["modelValue","onUpdate:modelValue","onChange"])])],64))),64))])]))}});function G(s){const e=s.options||s;e.fluent=e.fluent||{},e.fluent["zh-CN"]=new C(`crystals = 水晶
shard = 碎晶
crystal = 水晶
cluster = 晶簇
fire = 火
ice = 冰
wind = 风
earth = 土
lightning = 雷
water = 水`)}function H(s){const e=s.options||s;e.fluent=e.fluent||{},e.fluent["zh-TW"]=new C(`crystals = 水晶
shard = 碎晶
crystal = 水晶
cluster = 晶簇
fire = 火
ice = 冰
wind = 風
earth = 土
lightning = 雷
water = 水`)}function X(s){const e=s.options||s;e.fluent=e.fluent||{},e.fluent["en-US"]=new C(`crystals = Crystals
shard = Shard
crystal = Crystal
cluster = Cluster
fire = Fire
ice = Ice
wind = Wind
earth = Earth
lightning = Lightning
water = Water`)}function Y(s){const e=s.options||s;e.fluent=e.fluent||{},e.fluent["ja-JP"]=new C(`crystals = クリスタル
shard = シャード
crystal = クリスタル
cluster = クラスター
fire = 火
ice = 氷
wind = 風
earth = 土
lightning = 雷
water = 水`)}typeof G=="function"&&G(L);typeof H=="function"&&H(L);typeof X=="function"&&X(L);typeof Y=="function"&&Y(L);const De=ce(L,[["__scopeId","data-v-d8663d88"]]),Te={class:"inventory-page"},qe={class:"section-card"},Fe={class:"search-bar"},Be={class:"section-card"},Oe={class:"header-row"},We={class:"section-card solver-section"},je={class:"header-row"},Je={class:"hint-text"},Ke={key:0,class:"success-text"},Qe={key:1,class:"missing-list"},A=ae({__name:"Inventory",setup(s){const{$t:e}=se(),m=me();J();const z=R(!1),y=R(!1),E=R([]),I=R(new Map);async function V(){const o=m.itemList;if(!o)return;const{getLocalItemName:i}=await D(async()=>{const{getLocalItemName:n}=await import("./ItemMap-DVgOOU4h.js");return{getLocalItemName:n}},[]);for(const n of o){if(I.value.has(n.id))continue;const l=i(n.id);if(l){I.value.set(n.id,l);continue}}}oe(()=>{V()}),le(()=>m.itemList,()=>{V()},{deep:!0});const h=ye(()=>{const o=m.itemList;return!o||!Array.isArray(o)?[]:o.filter(i=>!(Number(i.id)>=2&&Number(i.id)<=19)).map(i=>({...i,name:I.value.get(i.id)||`Item #${i.id}`}))});async function d(o,i){const n=J(),l=(async()=>{if(o>1)return[];const{searchLocalItemsFuzzy:a}=await D(async()=>{const{searchLocalItemsFuzzy:p}=await import("./ItemMap-DVgOOU4h.js");return{searchLocalItemsFuzzy:p}},[]);return a(i).map(p=>({id:p.id,name:p.name,level:1,can_be_hq:!1,is_recipe:!1,is_local:!0}))})(),M=(async()=>{try{const a=`https://cafemaker.wakingsands.com/search?string=${encodeURIComponent(i)}&indexes=Item&limit=20&page=${o}`,p=await(await fetch(a,{mode:"cors"})).json();return p.Results?p.Results.map(j=>({id:j.ID,name:j.Name,level:1,can_be_hq:!1,is_recipe:!1})):[]}catch(a){return console.warn("CafeMaker search failed",a),[]}})(),F=(async()=>{try{return(await(await n.getDataSource()).recipeTable(o,i)).results.map(p=>({id:p.item_id,name:p.item_name,level:p.rlv,can_be_hq:p.can_hq,is_recipe:!0,original_recipe:p}))}catch(a){return console.warn("DataSource search failed",a),[]}})(),[P,_,$]=await Promise.all([l,M,F]),S=new Map;_.forEach(a=>S.set(a.id,a)),$.forEach(a=>S.set(a.id,a)),P.forEach(a=>S.set(a.id,a));const N=Array.from(S.values()),{getLocalItemName:U}=await D(async()=>{const{getLocalItemName:a}=await import("./ItemMap-DVgOOU4h.js");return{getLocalItemName:a}},[]);for(const a of N){const b=U(a.id);b&&(a.name=b)}let w=o;return(_.length>=20||$.length>=20||P.length>=50)&&(w=o+1),{results:N,totalPages:w}}function W(o){m.addItem(o.id,1),I.value.set(o.id,o.name)}function f(o,i){m.setItem(o,i)}function de(o){m.removeItem(o)}function ue(){m.clear()}async function fe(){if(m.itemList.length===0){Q.warning(e("inventory-empty"));return}y.value=!0,E.value=[];try{const o=m.itemList.map(l=>l.id);let i=0;const n=new Map;for(const[l,M]of m.items.entries()){if(i++,l>=2&&l<=19)continue;const{findRecipesUsingItem:F}=await D(async()=>{const{findRecipesUsingItem:_}=await import("./RecipeMap-B4AJ7Dh2.js");return{findRecipesUsingItem:_}},__vite__mapDeps([0,1])),P=F(l);for(const _ of P){if(n.has(_.resultItemId))continue;let $=0,S=0,N=999;const U=[];for(const w of _.ingredients){const a=m.items.get(w.id)||0,b=Math.floor(a/w.amount);b<N&&(N=b),a>=w.amount?S++:U.push({id:w.id,name:w.name,amount:w.amount-a}),$++}n.set(_.resultItemId,{id:_.resultItemId,name:_.name,completeness:$>0?S/$:0,maxCraftable:N,missing:U})}}E.value=Array.from(n.values()).filter(l=>l.completeness>.1).sort((l,M)=>M.completeness-l.completeness)}catch(o){console.error(o),Q.error(e("solver-error")+": "+String(o))}finally{y.value=!1}}return(o,i)=>(v(),k("div",Te,[r("h2",null,u(t(e)("inventory-management")),1),r("div",qe,[r("div",Fe,[c(t(T),{onClick:i[0]||(i[0]=n=>z.value=!0),icon:t(Ee),type:"primary"},{default:g(()=>[B(u(t(e)("add-item")),1)]),_:1},8,["icon"])])]),c(De),r("div",Be,[r("div",Oe,[r("h3",null,u(t(e)("my-inventory")),1),c(t(T),{type:"danger",link:"",onClick:ue},{default:g(()=>[B(u(t(e)("clear-all")),1)]),_:1})]),c(t(K),{data:h.value,style:{width:"100%"},"max-height":"400"},{default:g(()=>[c(t(x),{prop:"name",label:t(e)("item-name")},null,8,["label"]),c(t(x),{label:t(e)("quantity"),width:"200"},{default:g(n=>[c(t(q),{modelValue:n.row.amount,"onUpdate:modelValue":l=>n.row.amount=l,min:1,size:"small",onChange:l=>f(n.row.id,l)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"]),c(t(x),{width:"100",align:"right"},{default:g(n=>[c(t(T),{type:"danger",icon:t(Ve),circle:"",size:"small",onClick:l=>de(n.row.id)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data"])]),r("div",We,[r("div",je,[r("h3",null,u(t(e)("crafting-solver")),1),c(t(T),{type:"success",onClick:fe,loading:y.value},{default:g(()=>[B(u(t(e)("analyze-recipes")),1)]),_:1},8,["loading"])]),r("p",Je,u(t(e)("solver-hint")),1),E.value.length>0?(v(),re(t(K),{key:0,data:E.value,style:{width:"100%"}},{default:g(()=>[c(t(x),{prop:"name",label:t(e)("recipe-name")},null,8,["label"]),c(t(x),{label:t(e)("completeness"),width:"180",sortable:"","sort-method":(n,l)=>n.completeness-l.completeness},{default:g(n=>[c(t(Se),{percentage:Math.round(n.row.completeness*100),status:n.row.completeness===1?"success":"warning"},null,8,["percentage","status"])]),_:1},8,["label","sort-method"]),c(t(x),{label:t(e)("max-craftable"),width:"120",align:"center",prop:"maxCraftable"},null,8,["label"]),c(t(x),{label:t(e)("missing-materials")},{default:g(n=>[n.row.missing.length===0?(v(),k("div",Ke,u(t(e)("ready-to-craft")),1)):(v(),k("div",Qe,[(v(!0),k(O,null,ie(n.row.missing,l=>(v(),k("span",{key:l.id,class:"missing-item"},u(l.name)+" x"+u(l.amount),1))),128))]))]),_:1},8,["label"])]),_:1},8,["data"])):_e("",!0)]),c(xe,{modelValue:z.value,"onUpdate:modelValue":i[1]||(i[1]=n=>z.value=n),title:t(e)("select-item"),mode:"item","custom-search":d,onSelect:W},null,8,["modelValue","title"])]))}});function Z(s){const e=s.options||s;e.fluent=e.fluent||{},e.fluent["zh-CN"]=new C(`inventory-management = 背包管理
add-item = 添加物品
select-item = 选择物品
search-item-placeholder = 搜索物品以添加...
my-inventory = 我的素材
clear-all = 清空
item-name = 物品名称
quantity = 数量
crafting-solver = 制作求解器 (Solver)
analyze-recipes = 分析可制作配方
solver-hint = 提示：使用本地數據分析所有素材。
recipe-name = 配方名称
completeness = 完整度
max-craftable = 可制作数量
missing-materials = 缺少的素材
ready-to-craft = 素材齐备！
inventory-empty = 背包是空的，请先添加素材。
solver-error = 分析失败`)}function ee(s){const e=s.options||s;e.fluent=e.fluent||{},e.fluent["zh-TW"]=new C(`inventory-management = 背包管理
add-item = 新增物品
select-item = 選擇物品
search-item-placeholder = 搜尋物品以新增...
my-inventory = 我的素材
clear-all = 清空
item-name = 物品名稱
quantity = 數量
crafting-solver = 製作求解器 (Solver)
analyze-recipes = 分析可製作配方
solver-hint = 提示：使用本地數據分析所有素材。
recipe-name = 配方名稱
completeness = 完整度
max-craftable = 可製作數量
missing-materials = 缺少素材
ready-to-craft = 素材齊全！
inventory-empty = 背包是空的，請先新增素材。
solver-error = 分析失敗`)}function te(s){const e=s.options||s;e.fluent=e.fluent||{},e.fluent["en-US"]=new C(`inventory-management = Inventory Management
add-item = Add Item
select-item = Select Item
search-item-placeholder = Search items to add...
my-inventory = My Inventory
clear-all = Clear All
item-name = Item Name
quantity = Quantity
crafting-solver = Crafting Solver
analyze-recipes = Analyze Recipes
solver-hint = Note: Analyzing all items using local data.
recipe-name = Recipe Name
completeness = Completeness
max-craftable = Max Craftable
missing-materials = Missing Materials
ready-to-craft = Ready to Craft!
inventory-empty = Inventory is empty.
solver-error = Analysis Failed`)}function ne(s){const e=s.options||s;e.fluent=e.fluent||{},e.fluent["ja-JP"]=new C(`inventory-management = 所持品管理
add-item = アイテム追加
select-item = アイテムを選択
search-item-placeholder = アイテムを検索して追加...
my-inventory = 所持素材
clear-all = クリア
item-name = アイテム名
quantity = 数量
crafting-solver = 製作ソルバー
analyze-recipes = レシピを分析
solver-hint = ヒント：ローカルデータを使用してすべてのアイテムを分析します。
recipe-name = レシピ名
completeness = 完成度
max-craftable = 製作可能数
missing-materials = 不足素材
ready-to-craft = 製作可能！
inventory-empty = 所持品が空です。
solver-error = 分析失敗`)}typeof Z=="function"&&Z(A);typeof ee=="function"&&ee(A);typeof te=="function"&&te(A);typeof ne=="function"&&ne(A);const gt=ce(A,[["__scopeId","data-v-f3f49279"]]);export{gt as default};
//# sourceMappingURL=Inventory-DG59l4YE.js.map
