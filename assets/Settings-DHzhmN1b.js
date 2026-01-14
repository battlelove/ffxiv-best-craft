import"./web-source-BjHx1D90.js";import{E as O}from"./el-scrollbar-DziuDoNW.js";import{a as K,E as f}from"./el-form-item-DosOS00K.js";/* empty css               */import{E as D,a as w,b as E}from"./el-select-C3FM3e4y.js";import{c as H,d as G,u as Z,l as ee,k as C,i as le,E as A,b,m as ae,a as ne}from"./main-CMaPI1jB.js";import{E as te,a as B}from"./el-radio-button-DQzCojAr.js";import{E as _}from"./el-text-r-LM_fL4.js";import{y as W,M as c,C as g,u as e,P as a,K as n,aa as o,a7 as u,aB as se,ar as oe,as as ie,r as y,O as S,B as V,J as x,a8 as U,n as ue,a1 as d,ao as z,ay as de}from"./_plugin-vue_export-helper-BaoA9pDx.js";import{o as T}from"./Utils-C7zRsiCb.js";import{E as M}from"./e1-CXV299hz.js";import{E as $}from"./index-BYwhDiw0.js";import"./_initCloneObject-DYbxVe_E.js";import"./_baseSlice-F8doVSIJ.js";import"./index-Cp9QasH9.js";import"./strings-Dbr7JXQ9.js";import"./gearsets-BWyoh5q-.js";import"./use-form-item-Cs4Vop_O.js";import"./_baseIteratee-DuUp-aiC.js";const re="/ffxiv-best-craft/assets/coffee-5tP2pl7z.png",fe=W({__name:"SupportUs",setup(r){return(i,p)=>(g(),c(e(H),{column:1,border:!0},{default:a(()=>[n(e(G),{label:"支持软件开发维护"},{default:a(()=>[p[2]||(p[2]=o(" 欢迎至项目 Github 仓库贡献 ",-1)),n(e(D),{effect:"plain",round:""},{default:a(()=>[...p[0]||(p[0]=[o("PR",-1)])]),_:1}),p[3]||(p[3]=o(" 或 ",-1)),n(e(D),{effect:"plain",round:""},{default:a(()=>[...p[1]||(p[1]=[o("Star",-1)])]),_:1})]),_:1}),n(e(G),{label:"支持 YYYY.GAMES 服务器运行"},{default:a(()=>[...p[4]||(p[4]=[u("a",{href:"https://afdian.com/@ffxivtk",target:"_blank"},[u("img",{src:re,alt:"Buy Me a Coffee",style:{"vertical-align":"middle"}})],-1)])]),_:1})]),_:1}))}}),pe={style:{float:"left"}},ge={class:"data-source-option-note"},me={style:{float:"left"}},k=W({__name:"Settings",emits:["setTitle"],setup(r,{emit:i}){const p=i;se(()=>p("setTitle","settings"));const{$t:s}=oe(),m=Z(),L=ie().store;y("BestCraft");const R=y(""),Q=y("");var N=y(!1),I=async()=>{};const h=y(!1),Y=y(!1);function J(){const v=C.get(m.dataSource),l=m.dataSourceLang;v&&v.length>0&&v.find(t=>t==l)==null&&(m.dataSourceLang=v[0])}return(v,l)=>(g(),c(e(O),null,{default:a(()=>[n(e(K),{class:"setting-page","label-width":"120px"},{default:a(()=>[n(e(f),{label:e(s)("language")},{default:a(()=>[n(e(w),{modelValue:e(m).language,"onUpdate:modelValue":l[0]||(l[0]=t=>e(m).language=t)},{default:a(()=>[n(e(E),{label:e(s)("system-lang"),value:"system"},null,8,["label"]),(g(!0),V(x,null,U(e(ee),([t,X])=>(g(),c(e(E),{label:X,value:t},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(e(f),{label:e(s)("theme")},{default:a(()=>[n(e(te),{modelValue:e(L),"onUpdate:modelValue":l[1]||(l[1]=t=>ue(L)?L.value=t:null)},{default:a(()=>[n(e(B),{value:"light"},{default:a(()=>[o(d(e(s)("light")),1)]),_:1}),n(e(B),{value:"dark"},{default:a(()=>[o(d(e(s)("dark")),1)]),_:1}),n(e(B),{value:"auto"},{default:a(()=>[o(d(e(s)("auto")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(e(f),{label:e(s)("data-source")},{default:a(()=>[n(e(w),{modelValue:e(m).dataSource,"onUpdate:modelValue":l[2]||(l[2]=t=>e(m).dataSource=t),onChange:J},{default:a(()=>[(g(!0),V(x,null,U(e(C),t=>(g(),c(e(E),{label:e(s)(`ds-${t[0].replace(".","")}`),value:t[0]},{default:a(()=>[u("span",pe,d(e(s)(`ds-${t[0].replace(".","")}`)),1),u("span",ge,d(e(s)(`ds-${t[0].replace(".","")}-desc`)),1)]),_:2},1032,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1},8,["label"]),(e(C).get(e(m).dataSource)?.length??0)>1?(g(),c(e(f),{key:0},{default:a(()=>[n(e(w),{modelValue:e(m).dataSourceLang,"onUpdate:modelValue":l[3]||(l[3]=t=>e(m).dataSourceLang=t)},{default:a(()=>[(g(!0),V(x,null,U(e(C).get(e(m).dataSource),t=>(g(),c(e(E),{label:e(s)(`dslang-${t}`),value:t},{default:a(()=>[u("span",me,d(e(s)(`dslang-${t}`)),1)]),_:2},1032,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1})):S("",!0),e(le)?(g(),c(e(f),{key:1,label:e(s)("switch-lines")},{default:a(()=>[n(e($),{onClick:l[4]||(l[4]=t=>Y.value=!0)},{default:a(()=>[o(d(e(s)("detail")),1)]),_:1}),n(e(A),{modelValue:Y.value,"onUpdate:modelValue":l[5]||(l[5]=t=>Y.value=t),title:e(s)("switch-lines")},{default:a(()=>[l[18]||(l[18]=u("p",null," BestCraft 是开源软件，可以在多个不同的服务器上部署，以下是目前已知的部署了本软件的网站： ",-1)),u("p",null,[n(e(b),{href:"https://tnze.yyyy.games/",type:"primary"},{default:a(()=>[...l[12]||(l[12]=[o(" YYYY.GAMES ",-1)])]),_:1}),n(e(_),{size:"small",type:"info"},{default:a(()=>[...l[13]||(l[13]=[o(" 由 ",-1),u("span",null,"瑤瑤瑤影@神意之地",-1),o(" 运营 ",-1)])]),_:1})]),u("p",null,[n(e(b),{href:"https://bestcraft.nbb.fan/",type:"primary"},{default:a(()=>[...l[14]||(l[14]=[o(" NBB.FAN ",-1)])]),_:1}),n(e(_),{size:"small",type:"info"},{default:a(()=>[...l[15]||(l[15]=[o(" 由 ",-1),u("span",null,"N.B.B",-1),o(" 运营 ",-1)])]),_:1})]),u("p",null,[n(e(b),{href:"https://ffxiv-best-craft.pages.dev/",type:"primary"},{default:a(()=>[...l[16]||(l[16]=[o(" Cloudflare Pages ",-1)])]),_:1}),n(e(_),{size:"small",type:"info"},{default:a(()=>[...l[17]||(l[17]=[o(" 由 ",-1),u("span",null,"Tnze",-1),o(" 随意地设置在 Cloudflare 上，不适合国内访问 ",-1)])]),_:1})])]),_:1},8,["modelValue","title"])]),_:1},8,["label"])):S("",!0),e(ae)?(g(),V(x,{key:2},[n(e(f),{label:e(s)("version-number")},{default:a(()=>[o(d(R.value),1)]),_:1},8,["label"]),n(e(f),{label:e(s)("tauri")},{default:a(()=>[o(d(Q.value),1)]),_:1},8,["label"]),n(e(f),null,{default:a(()=>[n(e($),{type:"primary",onClick:e(I),loading:e(N)},{default:a(()=>[o(d(e(N)?e(s)("checking-update"):e(s)("check-update")),1)]),_:1},8,["onClick","loading"])]),_:1})],64)):S("",!0),n(e(f),{label:e(s)("developer")},{default:a(()=>[o(d(e(M).c()?e(M).t3:"Tnze"),1)]),_:1},8,["label"]),n(e(f),{label:e(s)("feedback")},{default:a(()=>[n(e(b),{onClick:l[6]||(l[6]=t=>e(T)("https://pd.qq.com/s/al6b5xo69"))},{default:a(()=>[...l[19]||(l[19]=[o(" QQ频道 ",-1)])]),_:1}),n(e(b),{onClick:l[7]||(l[7]=t=>e(T)("https://qm.qq.com/q/YMujBifn6G"))},{default:a(()=>[...l[20]||(l[20]=[o(" QQ群聊 ",-1)])]),_:1})]),_:1},8,["label"]),n(e(f),{label:e(s)("source")},{default:a(()=>[n(e(b),{onClick:l[8]||(l[8]=t=>e(T)("https://gitee.com/Tnze/ffxiv-best-craft"))},{default:a(()=>[...l[21]||(l[21]=[o(" Gitee ",-1)])]),_:1}),n(e(b),{onClick:l[9]||(l[9]=t=>e(T)("https://github.com/Tnze/ffxiv-best-craft"))},{default:a(()=>[...l[22]||(l[22]=[o(" Github ",-1)])]),_:1})]),_:1},8,["label"]),n(e(f),{label:e(s)("license")},{default:a(()=>[n(e($),{onClick:l[10]||(l[10]=t=>h.value=!0)},{default:a(()=>[...l[23]||(l[23]=[o("AGPL",-1)])]),_:1}),n(e(A),{class:"licenses-dialog",modelValue:h.value,"onUpdate:modelValue":l[11]||(l[11]=t=>h.value=t),title:e(s)("license"),width:"50%"},{default:a(()=>[u("p",null,d(e(s)("licenses-notices-1")),1),u("p",null,d(e(s)("licenses-notices-2")),1),u("p",null,d(e(s)("licenses-notices-3")),1)]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(ne)?(g(),c(e(f),{key:3,label:e(s)("donate")},{default:a(()=>[n(fe)]),_:1},8,["label"])):S("",!0)]),_:1})]),_:1}))}});function F(r){const i=r.options||r;i.fluent=i.fluent||{},i.fluent["zh-CN"]=new z(`# language =
theme = 主题
light = 亮
dark = 暗
auto = 自动

data-source = 数据源
ds-local = 本地
# ds-yyyygames = 
ds-xivapi = Xivapi
ds-local-desc = 国服数据
ds-yyyygames-desc = 混合
ds-xivapi-desc = 国际服数据
switch-lines = 切换线路
dslang-zh-CN = 简体中文
dslang-zh-TW = 繁体中文
dslang-en = 英语
dslang-ja = 日语
dslang-de = 德语
dslang-fr = 法语
system-lang = 跟随系统
version-number = 版本号
tauri = Tauri
developer = 作者
feedback = 反馈 / 聊天
license = 许可
source = 源代码
donate = 捐赠
detail = 详情

check-update = 检查更新
checking-update = 正在检查更新`)}function j(r){const i=r.options||r;i.fluent=i.fluent||{},i.fluent["zh-TW"]=new z(`# language =
theme = 主題
light = 亮
dark = 暗
auto = 自動

data-source = 資料來源
ds-local = 本地
# ds-yyyygames = 
ds-xivapi = Xivapi
ds-local-desc = 國服資料
ds-yyyygames-desc = 混合
ds-xivapi-desc = 國際服資料
switch-lines = 切換線路
dslang-zh-CN = 簡體中文
dslang-zh-TW = 繁體中文
dslang-en = 英語
dslang-ja = 日語
dslang-de = 德語
dslang-fr = 法語
system-lang = 跟隨系統
version-number = 版本號
tauri = Tauri
developer = 作者
feedback = 反饋 / 聊天
license = 許可
source = 原始碼
donate = 捐贈
detail = 詳情

check-update = 檢查更新
checking-update = 正在檢查更新`)}function q(r){const i=r.options||r;i.fluent=i.fluent||{},i.fluent["en-US"]=new z(`language = Language
theme = Theme
light = Light
dark = Dark
auto = Auto
data-source = Data Source
ds-local = Local
ds-yyyygames = YYYY.GAMES
ds-xivapi = Xivapi
ds-local-desc = Chinese
ds-yyyygames-desc = Mixed
ds-xivapi-desc = Latest
switch-lines = Switch Lines
dslang-zh-CN = Simplified Chinese
dslang-zh-TW = Traditional Chinese
dslang-en = English
dslang-ja = Japanese
dslang-de = German
dslang-fr = French
system-lang = System
version-number = Version
tauri = Tauri
developer = Author
feedback = Feedback
license = License
source = Source
donate = Donate
detail = Detail

check-update = Check Update
checking-update = Checking Update`)}function P(r){const i=r.options||r;i.fluent=i.fluent||{},i.fluent["ja-JP"]=new z(`# language =
data-source = データソース
ds-local = ローカル
# ds-xivapi =
# ds-cafe =
switch-lines = サーバの切り替え
dslang-zh-CN = 簡体字中国語
dslang-zh-TW = 繁体字中国語
dslang-en = 英語
dslang-ja = 日本語
dslang-de = ドイツ語
dslang-fr = フランス語
version-number = バージョン
tauri = Tauri
developer = 作者
feedback = フィードバック
license = ライセンス
source = ソースコード
donate = 寄付する
detail = 詳細

check-update = 更新のチェック
checking-update = 更新をチェックしています`)}typeof F=="function"&&F(k);typeof j=="function"&&j(k);typeof q=="function"&&q(k);typeof P=="function"&&P(k);const $e=de(k,[["__scopeId","data-v-25049750"]]);export{$e as default};
//# sourceMappingURL=Settings-DHzhmN1b.js.map
