(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"4Bm3":function(e,a,t){"use strict";var l=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var d=l(t("bx4M"));t("g9YV");var n=l(t("wCAj"));t("14J3");var r=l(t("BMrR"));t("jCWc");var s=l(t("kPKH"));t("5Dmo");var u=l(t("3S7+"));t("Pwec");var i=l(t("CtXQ")),o=t("Y2fQ"),f=l(t("q1tI")),c=l(t("ZhIB")),m=t("M0Ur"),g=l(t("A3DA")),y=l(t("HMwb")),h=l(t("WD6q")),E=[{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.table.rank",defaultMessage:"Rank"}),dataIndex:"index",key:"index"},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.table.search-keyword",defaultMessage:"Search keyword"}),dataIndex:"keyword",key:"keyword",render:function(e){return f.default.createElement("a",{href:"/"},e)}},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.table.users",defaultMessage:"Users"}),dataIndex:"count",key:"count",sorter:function(e,a){return e.count-a.count},className:h.default.alignRight},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.table.weekly-range",defaultMessage:"Weekly Range"}),dataIndex:"range",key:"range",sorter:function(e,a){return e.range-a.range},render:function(e,a){return f.default.createElement(y.default,{flag:1===a.status?"down":"up"},f.default.createElement("span",{style:{marginRight:4}},e,"%"))}}],p=function(e){var a=e.loading,t=e.visitData2,l=e.searchData,y=e.dropdownGroup;return f.default.createElement(d.default,{loading:a,bordered:!1,title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.online-top-search",defaultMessage:"Online Top Search"}),extra:y,style:{height:"100%"}},f.default.createElement(r.default,{gutter:68,type:"flex"},f.default.createElement(s.default,{sm:12,xs:24,style:{marginBottom:24}},f.default.createElement(g.default,{subTitle:f.default.createElement("span",null,f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.search-users",defaultMessage:"search users"}),f.default.createElement(u.default,{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.introduce",defaultMessage:"introduce"})},f.default.createElement(i.default,{style:{marginLeft:8},type:"info-circle-o"}))),gap:8,total:(0,c.default)(12321).format("0,0"),status:"up",subTotal:17.1}),f.default.createElement(m.MiniArea,{line:!0,height:45,data:t})),f.default.createElement(s.default,{sm:12,xs:24,style:{marginBottom:24}},f.default.createElement(g.default,{subTitle:f.default.createElement("span",null,f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.per-capita-search",defaultMessage:"Per Capita Search"}),f.default.createElement(u.default,{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.introduce",defaultMessage:"introduce"})},f.default.createElement(i.default,{style:{marginLeft:8},type:"info-circle-o"}))),total:2.7,status:"down",subTotal:26.2,gap:8}),f.default.createElement(m.MiniArea,{line:!0,height:45,data:t}))),f.default.createElement(n.default,{rowKey:function(e){return e.index},size:"small",columns:E,dataSource:l,pagination:{style:{marginBottom:0},pageSize:5}}))},M=p;a.default=M}}]);