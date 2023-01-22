(this["webpackJsonpreact-crypto-tracker"]=this["webpackJsonpreact-crypto-tracker"]||[]).push([[0],{29:function(e,t,c){},49:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(23),s=c.n(r),o=(c(29),c(5)),i=c(11),l=c.n(i),u=c(2),j=(c(49),c(50),c(24)),b="https://api.coingecko.com/api/v3/coins",d="".concat(b,"/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"),O="".concat(b,"/{coinId}/market_chart?vs_currency=usd&days=1&interval=hourly"),h={label:void 0,backgroundColor:"white",color:"white",borderColor:"white",fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,0.8)",highlightFill:"rgba(220,220,220,0.75)",highlightStroke:"rgba(220,220,220,1)",data:null},p=Object.freeze({scales:{yAxes:{grid:{drawBorder:!0,color:"#FFFFFF"},ticks:{beginAtZero:!0,color:"white",fontSize:12}},xAxes:{grid:{drawBorder:!0,color:"#FFFFFF"},ticks:{beginAtZero:!0,color:"white",fontSize:12}}}}),m=c(1);var f=function(e){var t=e.name,c=e.id,n=O.replace("{coinId}",c),r=Object(a.useState)([]),s=Object(o.a)(r,2),i=s[0],b=s[1],d=Object(a.useState)([]),f=Object(o.a)(d,2),g=f[0],v=f[1],x=Object(a.useCallback)((function(){l.a.get(n).then((function(e){for(var t=e.data.prices,c=[],a=[],n=0;n<t.length;n++){var r=h,s=new Date(t[n][0]),o="".concat(s.getHours(),":").concat(s.getSeconds());a.push(o),r.id=t[n][1],r.label=o,r.data=t,c.push(r)}b((function(e){return[].concat(Object(u.a)(e),a)})),v((function(e){return[].concat(Object(u.a)(e),c)}))})).catch((function(e){console.error(e)}))}),[n]);return Object(a.useEffect)((function(){x()}),[]),Object(m.jsx)(j.a,{datasetIdKey:t,data:{labels:i,datasets:g},options:p})},g=function(e){var t=e.name,c=e.id,n=e.image,r=e.symbol,s=e.price,i=e.volume,l=e.priceChange,j=e.marketCap,b=e.last_updated,d=Object(a.useState)(!1),O=Object(o.a)(d,2),h=O[0],p=O[1],g=Object(a.useState)([]),v=Object(o.a)(g,2),x=v[0],k=v[1],C=Object(a.useState)([]),y=Object(o.a)(C,2),N=y[0],S=y[1],F=Object(a.useCallback)((function(e){return e.price<0?Object(m.jsxs)("p",{className:"coin-percent red",children:[l.toFixed(2),"%"]}):Object(m.jsxs)("p",{className:"coin-percent green",children:[l.toFixed(2),"%"]})}),[l]),_=Object(a.useCallback)((function(e){var t=e.target.id;p(!0);var c=document.getElementById("".concat(t,"-chart"));null===c||void 0===c||c.classList.add("hover")}),[]),w=Object(a.useCallback)((function(e){var t=e.target.id;p(!1);var c=document.getElementById("".concat(t,"-chart"));null===c||void 0===c||c.classList.remove("hover")}),[]),E=Object(a.useCallback)((function(e,t){k((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))})),S((function(e){return[].concat(Object(u.a)(e),[t])}))}),[]),I=Object(a.useCallback)((function(){return h?Object(m.jsx)(f,{name:t,id:c,last_updated:b,setChartDataForCoin:E,chartData:x,labels:N}):null}),[x,c,h,N,b,t,E]);return Object(m.jsx)("div",{className:"coin-container",children:Object(m.jsxs)("div",{className:"coin-row",children:[Object(m.jsxs)("div",{className:"coin",children:[Object(m.jsxs)("div",{className:"coin-info ".concat(t),id:"".concat(t,"-chart"),onMouseEnter:_,onMouseLeave:w,children:[Object(m.jsx)("img",{src:n,alt:"crypto",id:t,className:"coin-hover-effect"}),Object(m.jsx)("div",{className:"chart-container",children:Object(m.jsx)(I,{})})]}),Object(m.jsx)("h1",{children:t}),Object(m.jsx)("p",{className:"coin-symbol",children:r})]}),Object(m.jsxs)("div",{className:"coin-data",children:[Object(m.jsxs)("p",{className:"coin-price",children:["$",s]}),Object(m.jsxs)("p",{className:"coin-volume",children:["$",i.toLocaleString()]}),Object(m.jsx)(F,{price:s}),Object(m.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",j.toLocaleString()]})]})]})})};var v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),O=b[0],h=b[1],p=Object(a.useState)(null),f=Object(o.a)(p,2),v=f[0],x=f[1],k=Object(a.useCallback)((function(){l.a.get(d).then((function(e){n(e.data)})).catch((function(e){console.error("Error on request ".concat(d,": ").concat(e)),h(!0)}))}),[n]);Object(a.useEffect)((function(){k();var e=setInterval((function(){k()}),6e4);return x(e),function(){return clearInterval(v)}}),[k]);var C=Object(a.useCallback)((function(e){u(e.target.value)}),[u]),y=Object(a.useCallback)((function(){return c.filter((function(e){return e.name.toLowerCase().includes(i.toLocaleLowerCase())}))}),[c,i]),N=Object(a.useCallback)((function(){return y().map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,image:e.image,symbol:e.symbol,marketCap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume,last_updated:e.last_updated},e.id)}))}),[y]),S=Object(a.useCallback)((function(){return O?Object(m.jsx)("h1",{children:"There was an error fetching data, please try refreshing the page."}):null}),[O]);return Object(m.jsxs)("div",{className:"coin-app",children:[Object(m.jsxs)("div",{className:"coin-search",children:[Object(m.jsxs)("h1",{className:"coin-text",children:[Object(m.jsx)("i",{className:"fab fa-dyalog"}),"\xa0DECENTRALIZED"]}),Object(m.jsx)("form",{children:Object(m.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:C})})]}),Object(m.jsx)(S,{}),Object(m.jsx)(N,{})]})};var x=function(){return Object(m.jsx)(v,{})};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.010f7ee3.chunk.js.map