(this.webpackJsonpcoingecko=this.webpackJsonpcoingecko||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(25),s=n.n(a),i=(n(34),n(5)),u=(n(35),n(19)),o=n(3),j=n(13),l=n.n(j),d=n(17),b=function(e){var t=parseFloat(e.toFixed(Math.max(2,(e.toString().split(".")[1]||[]).length))).toLocaleString("en");return 1===t.split(".").length&&(t+=".00"),t},p=["btc","eth","ltc","bch","bnb","eos","xrp","xlm","link","dot","yfi","usd","aed","ars","aud","bdt","bhd","bmd","brl","cad","chf","clp","cny","czk","dkk","eur","gbp","hkd","huf","idr","ils","inr","jpy","krw","kwd","lkr","mmk","mxn","myr","ngn","nok","nzd","php","pkr","pln","rub","sar","sek","sgd","thb","try","twd","uah","vef","vnd","zar","xdr","xag","xau","bits","sats"],h=n(12),O=n(58),f=n(21),x=n(2);function v(e){var t=e.loading,n=e.data,r=e.setData,a=e.favourites,s=e.setFavourites,u=e.currency,o=Object(c.useState)(1),j=Object(i.a)(o,2),l=j[0],d=j[1],p=function(e){r(Object(h.a)(n).sort(function(e){return function(t,n){return t[e]>n[e]?-l:t[e]<n[e]?l:0}}(e))),d((function(e){return-e}))},v=function(e){var t,n;return-1===a.findIndex((function(t){return t===e}))?(t=function(){return s([].concat(Object(h.a)(a),[e]))},n="Add"):(t=function(){return s(function(e,t){var n=e.indexOf(t);return n>-1&&e.splice(n,1),e}(Object(h.a)(a),e))},n="Remove"),Object(x.jsx)("button",{type:"button",onClick:t,children:n})};return t?Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{className:"spinner"})}):0===n.length?Object(x.jsx)("div",{className:"favourites",children:"No favourites!"}):Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{className:"table-header",children:[Object(x.jsx)("th",{onClick:function(){return p("market_cap_rank")},children:"#"}),Object(x.jsx)("th",{onClick:function(){return p("name")},children:"Name"}),Object(x.jsx)("th",{onClick:function(){return p("symbol")},children:"Symbol"}),Object(x.jsxs)("th",{onClick:function(){return p("current_price")},children:["Price (",u.toUpperCase(),")"]}),Object(x.jsxs)("th",{onClick:function(){return p("total_volume")},children:["Volume (",u.toUpperCase(),")"]}),Object(x.jsx)("th",{children:"Sparkline (USD)"}),Object(x.jsx)("th",{children:"Favourite"})]})}),Object(x.jsx)("tbody",{children:n.map((function(e){return Object(x.jsxs)("tr",{className:"table-row",children:[Object(x.jsx)("td",{children:e.market_cap_rank}),Object(x.jsx)("td",{children:e.name}),Object(x.jsx)("td",{children:e.symbol}),Object(x.jsx)("td",{children:b(e.current_price)}),Object(x.jsx)("td",{children:e.total_volume.toLocaleString("en-US")}),Object(x.jsx)("td",{className:"sparkline",children:Object(x.jsx)(f.Sparklines,{data:e.sparkline_in_7d.price,children:Object(x.jsx)(f.SparklinesLine,{color:e.price_change_percentage_7d_in_currency>0?"#7ab52b":"red"})})}),Object(x.jsx)("td",{children:v(e.id)})]},e.id)}))})]})}function m(e){var t=e.favourites,n=e.setFavourites,r=Object(c.useState)(!1),a=Object(i.a)(r,2),s=a[0],u=a[1],o=Object(c.useState)([]),j=Object(i.a)(o,2),b=j[0],h=j[1],O=Object(c.useState)("usd"),f=Object(i.a)(O,2),m=f[0],k=f[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var n,c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(!0),n=[],e.t0=l.a.keys(t);case 3:if((e.t1=e.t0()).done){e.next=14;break}return c=e.t1.value,e.next=7,fetch("https://api.coingecko.com/api/v3/coins/".concat(t[c],"?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true"));case 7:return r=e.sent,e.next=10,r.json();case 10:a=e.sent,n.push({id:a.id,name:a.name,symbol:a.symbol,market_cap_rank:a.market_cap_rank,current_price:a.market_data.current_price[m],total_volume:a.market_data.total_volume[m],sparkline_in_7d:a.market_data.sparkline_7d,price_change_percentage_7d_in_currency:a.market_data.price_change_percentage_7d}),e.next=3;break;case 14:h(n),u(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,m]),Object(x.jsxs)("div",{className:"main",children:[Object(x.jsxs)("select",{name:"currency",onChange:function(e){return k(e.target.value)},children:[Object(x.jsx)("option",{value:"usd",children:"USD"}),p.map((function(e){return"usd"!==e?Object(x.jsx)("option",{value:e,children:e.toUpperCase()}):null}))]}),Object(x.jsx)(v,{loading:s,data:b,setData:h,favourites:t,setFavourites:n,currency:m})]})}function k(e){var t=e.favourites,n=e.setFavourites,r=Object(c.useState)(!1),a=Object(i.a)(r,2),s=a[0],u=a[1],o=Object(c.useState)(1),j=Object(i.a)(o,2),b=j[0],h=j[1],O=Object(c.useState)([]),f=Object(i.a)(O,2),m=f[0],k=f[1],_=Object(c.useState)("usd"),g=Object(i.a)(_,2),y=g[0],S=g[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(y,"&per_page=20&page=").concat(b,"&sparkline=true&price_change_percentage=7d"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,k(n),u(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b,y]);return Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)("button",{type:"button",onClick:function(e){b>1&&h((function(e){return e-1}))},children:"Prev"}),Object(x.jsx)("button",{type:"button",onClick:function(){return h((function(e){return e+1}))},children:"Next"}),Object(x.jsxs)("select",{name:"currency",onChange:function(e){return S(e.target.value)},children:[Object(x.jsx)("option",{value:"usd",children:"USD"}),p.map((function(e){return"usd"!==e?Object(x.jsx)("option",{value:e,children:e.toUpperCase()}):null}))]}),Object(x.jsx)(v,{loading:s,data:m,setData:k,favourites:t,setFavourites:n,currency:y})]})}var _=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.b,{to:"/",children:Object(x.jsx)("button",{type:"button",children:"Home"})}),Object(x.jsx)(u.b,{to:"/favourites",children:Object(x.jsx)("button",{type:"button",children:"Favourites"})}),Object(x.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(x.jsx)(k,{favourites:n,setFavourites:r})}}),Object(x.jsx)(o.a,{path:"/favourites",render:function(){return Object(x.jsx)(m,{favourites:n,setFavourites:r})}})]})})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.299ada45.chunk.js.map