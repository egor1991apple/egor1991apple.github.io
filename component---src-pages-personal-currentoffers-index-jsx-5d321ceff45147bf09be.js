(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2MfL":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),l=a.n(n),r=a("X13+"),c=a("NIcq");function s(e){var t=e.points,a=void 0===t?[]:t;return l.a.createElement("ul",{className:"list-points"},a.map((function(e,t){var n=e.city,s=e.durationTime,m=e.address,i=e.time,d=e.date;return l.a.createElement("li",{className:"list-points--item",key:t+"_"+n},0===t?l.a.createElement("div",{className:"points-icon"},l.a.createElement(c.j,null)):"",t===a.length-1?l.a.createElement("div",{className:"points-icon"},l.a.createElement(r.d,null)):"",t!==a.length-1&&0!==t&&l.a.createElement("div",{className:"points-icon"},l.a.createElement(r.c,null)),l.a.createElement("div",{className:"text-5"},i," ",l.a.createElement("sup",{className:" px-1 rounded bg-primary text-white "}," ",d," ")),l.a.createElement("div",{className:"text-3 text-primary"},n),l.a.createElement("small",{className:"d-inline-block "},m||""),0!=s?l.a.createElement("span",{className:"durtionTime text-muted"},l.a.createElement(r.b,null)," В пути: ",s):"")})))}},"6VMH":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("dRSK");var n=a("q1tI"),l=a.n(n),r=a("U5uR");function c(e){var t=e.selected,a=void 0===t?[]:t,c=e.disabled,s=void 0===c?[]:c,m=e.booking,i=void 0===m?[]:m,d=e.callback,u=void 0===d?null:d,o=Object(n.useContext)(r.a).BUS,E=void 0===o?[]:o;return l.a.createElement("table",{className:"bus"},l.a.createElement("tbody",null,E.map((function(e,t){return l.a.createElement("tr",{key:t},e.map((function(e,t){var n;return 0==e?l.a.createElement("td",((n={key:"bus-td--empty"}).key=t+"_td",n)):l.a.createElement("td",{key:t+"_td",onClick:function(){return!a.find((function(t){return t==e}))&&!s.find((function(t){return t==e}))&&u&&u(e)},className:"bus-td \n\t\t\t\t\t\t\t\t\t"+(i.find((function(t){return t==e}))?"bus-td--active":"")+"\n\t\t\t\t\t\t\t\t\t"+(s&&s.find((function(t){return t==e}))?"bus-td--disabled":"")+" \n\t\t\t\t\t\t\t\t\t"+(a&&a.find((function(t){return t==e}))?"bus-td--selected":"")},e)})))}))))}},"6xyR":function(e,t,a){"use strict";var n=a("wx14"),l=a("zLVn"),r=a("TSYQ"),c=a.n(r),s=a("q1tI"),m=a.n(s),i=a("vUet"),d=a("YdCC"),u=a("U1MP"),o=a("Wzyw"),E=m.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.variant,d=e.as,u=void 0===d?"img":d,o=Object(l.a)(e,["bsPrefix","className","variant","as"]),E=Object(i.b)(a,"card-img");return m.a.createElement(u,Object(n.a)({ref:t,className:c()(s?E+"-"+s:E,r)},o))}));E.displayName="CardImg",E.defaultProps={variant:null};var v=E,f=Object(u.a)("h5"),b=Object(u.a)("h6"),p=Object(d.a)("card-body"),N=m.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,d=e.bg,u=e.text,E=e.border,v=e.body,f=e.children,b=e.as,N=void 0===b?"div":b,x=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(i.b)(a,"card"),y=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return m.a.createElement(o.a.Provider,{value:y},m.a.createElement(N,Object(n.a)({ref:t},x,{className:c()(r,g,d&&"bg-"+d,u&&"text-"+u,E&&"border-"+E)}),v?m.a.createElement(p,null,f):f))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=v,N.Title=Object(d.a)("card-title",{Component:f}),N.Subtitle=Object(d.a)("card-subtitle",{Component:b}),N.Body=p,N.Link=Object(d.a)("card-link",{Component:"a"}),N.Text=Object(d.a)("card-text",{Component:"p"}),N.Header=Object(d.a)("card-header"),N.Footer=Object(d.a)("card-footer"),N.ImgOverlay=Object(d.a)("card-img-overlay");t.a=N},"8ex6":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l=a.n(n),r=a("U5uR");function c(){var e=Object(n.useContext)(r.a).USER_INFO,t=void 0===e?null:e;return t&&l.a.createElement("div",{className:"mx-auto"},l.a.createElement("img",{src:t.photo,alt:"user"}))}},Ar4B:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l=a.n(n),r=a("cWnB");function c(){return l.a.createElement("div",null,l.a.createElement(r.a,{className:"btn-clear rounded overflow-hidden",style:{height:"auto"}},l.a.createElement("img",{src:"map.png",alt:"map",className:"img-fluid"})))}},Mg5v:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),l=a.n(n),r=a("NIcq"),c=a("vYJ8");function s(e){var t=e.title,a=e.children,s=Object(n.useState)(!1),m=s[0],i=s[1],d=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(m){setTimeout((function(){var e=d.current.getBoundingClientRect().top+window.pageYOffset-50;"undefined"!=typeof window&&window.scrollTo({top:e,behavior:"smooth"})}),300)}}),[m]),l.a.createElement(n.Fragment,null,l.a.createElement("a",{className:"d-flex justify-content-end nav-link cursor py-1 px-1 align-items-center",onClick:function(e){e.preventDefault(),i(!m)}},l.a.createElement("span",null,t),l.a.createElement(r.d,{size:"21",style:{transition:"transform .3s",transform:"rotate("+(m?"180deg":"0deg")+")"}})),l.a.createElement(c.a,{in:m},l.a.createElement("div",{id:"children"},l.a.createElement("div",{className:"d-flex flex-column border-top-dashed"},l.a.createElement("div",{ref:d,className:"container-fluid"},a)))))}},im4t:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("7vrA"),c=a("3Z9Z"),s=a("JI6e"),m=a("L12J"),i=a("zIDy"),d=a("8ex6"),u=a("U5uR"),o=(a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("dRSK"),a("tUrg"),a("6xyR")),E=a("cWnB"),v=a("X13+");function f(e){var t=e.city,a=void 0===t?"":t,n=e.address,r=void 0===n?"":n,c=e.time,s=void 0===c?"":c,m=e.date,i=void 0===m?"":m;return l.a.createElement("div",{className:"d-flex flex-column line-height-14"},l.a.createElement("span",{className:"text-5"},s," ",l.a.createElement("sup",{className:" px-1 rounded bg-primary text-white "}," ",i," ")),l.a.createElement("span",{className:"text-4 mt-1 text-primary"},a),l.a.createElement("small",null,r.length>75?l.a.createElement("span",null,r.slice(0,75),"..."):r))}function b(e){var t=e.duration,a=e.route,r=void 0===a?[]:a;return l.a.createElement(n.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(f,r[0])),l.a.createElement(s.a,{sm:"auto",className:"p-0 "},l.a.createElement("small",{className:"text-muted "},t," ",l.a.createElement(v.a,{size:"24"}))),l.a.createElement(s.a,null,l.a.createElement(f,r[r.length-1])))}var p=a("Mg5v"),N=a("2MfL"),x=(a("Ar4B"),a("j0dn")),g=a("6VMH"),y=function(e){var t=e.route,a=void 0===t?[]:t,n=e.placements;return l.a.createElement("div",{className:"border-top-dashed"},l.a.createElement(p.a,{title:"Детальная информация"},l.a.createElement("div",{className:"py-3"},l.a.createElement(c.a,null,l.a.createElement(s.a,{lg:"6",className:"border-right"},l.a.createElement("div",{className:"d-flex mb-4"},l.a.createElement("div",{className:"text-6"},"Маршрут")),l.a.createElement(N.a,{points:a}),l.a.createElement(E.a,{variant:"info",className:"btn-block",size:"sm"}," ","Cмотреть на карте...")),l.a.createElement(s.a,{lg:"6"},l.a.createElement("div",{className:"d-flex mb-4"},l.a.createElement("div",{className:"text-6"},"Места")),l.a.createElement("div",null,l.a.createElement(g.a,Object.assign({},n)),l.a.createElement("table",{className:"bus-info "},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"bus-td"}),l.a.createElement("td",null,"Свободные")),l.a.createElement("tr",null,l.a.createElement("td",{className:"bus-td bus-td--selected"}),l.a.createElement("td",null,"Забронированные")),l.a.createElement("tr",null,l.a.createElement("td",{className:"bus-td bus-td--disabled"}),l.a.createElement("td",null,"Не доступные"))))))),l.a.createElement("hr",null),l.a.createElement(c.a,null,l.a.createElement(s.a,{lg:"12"},l.a.createElement("div",{className:"d-flex mb-3"},l.a.createElement("div",{className:"text-6"},"Услуги")),l.a.createElement("div",{className:"d-flex flex-wrap"},l.a.createElement(x.a,null)))))))},h=a("Wbzz");function O(e){var t=e.id,a=void 0===t?null:t,n=e.totalCost,r=void 0===n?null:n,m=e.currency,i=void 0===m?null:m,d=(e.link,e.status),u=void 0===d?1:d,f=e.ticket_id,p=void 0===f?null:f,N=e.place,x=void 0===N?null:N,g=e.all_status,O=void 0===g?[]:g,k=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["id","totalCost","currency","link","status","ticket_id","place","all_status"]);return l.a.createElement(o.a,{className:"bg-light-1 mx-auto my-4"},O.length>0&&O.map((function(e){var t=e.id,a=void 0===t?null:t,n=e.title,r=void 0===n?"":n,c=e.variant,s=void 0===c?"":c;return parseInt(a)===u&&l.a.createElement("div",{key:r,className:"bg-"+s+" px-2 py-1 status-pay shadow-sm rounded"}," №",p," / ",r)})),l.a.createElement(E.a,{variant:"danger",className:"delete-button p-0 rounded-circle"},l.a.createElement(v.e,{className:"cursor text-white m-auto",size:"18"})),l.a.createElement(o.a.Body,{className:"p-0 "},l.a.createElement(c.a,{noGutters:!0},l.a.createElement(s.a,{className:"flex-grow-1 d-flex flex-column"},l.a.createElement(c.a,{className:"pt-4  pb-3 mt-1 mx-0"},l.a.createElement(b,k)),l.a.createElement(y,Object.assign({},k,{id:a}))),l.a.createElement(s.a,{sm:"2",className:"border-left-dashed    px-3 py-1 d-flex  flex-column   line-height-14 ticket-styled "}," ",l.a.createElement("div",{className:"sticky-top pb-1 ",style:{top:"1rem"}},l.a.createElement("div",{className:"border-bottom pb-1"},l.a.createElement("small",null,"Места:"),l.a.createElement("div",null,x)),l.a.createElement("div",{className:" py-1"},l.a.createElement("small",null,"Цена:"),l.a.createElement("div",{className:"text-5 text-danger"},r," ",i)),0==u&&l.a.createElement(E.a,{as:h.Link,variant:O.find((function(e){var t=e.id;return parseInt(t)==u})).variant,size:"sm",className:"btn-block btn-sm text-white"},"Билеты"))))))}function k(e){var t=e.city,a=void 0===t?"":t,n=e.address,r=void 0===n?"":n,c=e.time,s=void 0===c?"":c,m=e.date,i=void 0===m?"":m;return l.a.createElement("div",{className:"d-flex flex-column line-height-14"},l.a.createElement("span",{className:"text-5"},s," ",l.a.createElement("sup",{className:" px-1 rounded bg-primary text-white "}," ",i," ")),l.a.createElement("span",{className:"text-4 mt-1 text-primary"},a),l.a.createElement("small",null,r.length>75?l.a.createElement("span",null,r.slice(0,75),"..."):r))}function j(e){var t=e.duration,a=e.route,r=void 0===a?[]:a;return l.a.createElement(n.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(k,r[0])),l.a.createElement(s.a,{sm:"auto",className:"p-0 "},l.a.createElement("small",{className:"text-muted "},t," ",l.a.createElement(v.a,{size:"24"}))),l.a.createElement(s.a,null,l.a.createElement(k,r[r.length-1])))}var w=function(e){var t=e.route,a=void 0===t?[]:t,n=e.placements;return l.a.createElement("div",{className:"border-top-dashed"},l.a.createElement(p.a,{title:"Детальная информация"},l.a.createElement("div",{className:"py-3"},l.a.createElement(c.a,null,l.a.createElement(s.a,{lg:"6",className:"border-right"},l.a.createElement("div",{className:"d-flex mb-4"},l.a.createElement("div",{className:"text-6"},"Маршрут")),l.a.createElement(N.a,{points:a}),l.a.createElement(E.a,{variant:"info",className:"btn-block",size:"sm"}," ","Cмотреть на карте...")),l.a.createElement(s.a,{lg:"6"},l.a.createElement("div",{className:"d-flex mb-4"},l.a.createElement("div",{className:"text-6"},"Места")),l.a.createElement("div",null,l.a.createElement(g.a,Object.assign({},n)),l.a.createElement("table",{className:"bus-info "},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"bus-td"}),l.a.createElement("td",null,"Свободные")),l.a.createElement("tr",null,l.a.createElement("td",{className:"bus-td bus-td--selected"}),l.a.createElement("td",null,"Забронированные")),l.a.createElement("tr",null,l.a.createElement("td",{className:"bus-td bus-td--disabled"}),l.a.createElement("td",null,"Не доступные"))))))),l.a.createElement("hr",null),l.a.createElement(c.a,null,l.a.createElement(s.a,{lg:"12"},l.a.createElement("div",{className:"d-flex mb-3"},l.a.createElement("div",{className:"text-6"},"Услуги")),l.a.createElement("div",{className:"d-flex flex-wrap"},l.a.createElement(x.a,null)))))))};function C(e){var t=e.FROM,a=void 0===t?{}:t,n=e.BACK,r=void 0===n?{}:n,m=e.all_status,i=void 0===m?[]:m,d=e.placeFrom,u=void 0===d?[]:d,f=e.placeBack,b=void 0===f?[]:f,p=e.totalCost,N=void 0===p?null:p,x=e.status,g=void 0===x?"1":x;return l.a.createElement(o.a,{className:"bg-light-1 mx-auto my-4"},i.length>0&&i.map((function(e){var t=e.id,n=void 0===t?null:t,c=e.title,s=void 0===c?"":c,m=e.variant,i=void 0===m?"":m;return parseInt(n)===g&&l.a.createElement("div",{key:s,className:"bg-"+i+" px-2 py-1 status-pay shadow-sm rounded"}," №",a[0].ticket_id,".",r[0].ticket_id," / ",s)})),l.a.createElement(E.a,{variant:"danger",className:"delete-button p-0 rounded-circle"},l.a.createElement(v.e,{className:"cursor text-white m-auto",size:"18"})),l.a.createElement(o.a.Body,{className:"p-0 "},l.a.createElement(c.a,{noGutters:!0},l.a.createElement(s.a,{className:"flex-grow-1 d-flex flex-column"},l.a.createElement(c.a,{className:"pt-4  pb-3 mt-1 mx-0"},l.a.createElement(j,a[0].offers)),l.a.createElement(w,Object.assign({},a[0].offers,{id:a[0].id})),l.a.createElement(c.a,{className:"pt-4  pb-3  mx-0 border-top-dashed"},l.a.createElement(j,r[0].offers)),l.a.createElement(w,Object.assign({},r[0].offers,{id:r[0].id}))),l.a.createElement(s.a,{sm:"2",className:"border-left-dashed    px-3 py-1 d-flex  flex-column   line-height-14 ticket-styled "}," ",l.a.createElement("div",{className:"sticky-top pb-1 ",style:{top:"1rem"}},l.a.createElement("div",{className:"border-bottom pb-1"},l.a.createElement("small",null,"Места туда:"),l.a.createElement("div",null,u)),l.a.createElement("div",{className:"border-bottom pb-1"},l.a.createElement("small",null,"Места обратно:"),l.a.createElement("div",null,b)),l.a.createElement("div",{className:" py-1"},l.a.createElement("small",null,"Цена:"),l.a.createElement("div",{className:"text-5 text-danger"},N," ",a[0].offers.currency)),0==g&&l.a.createElement(E.a,{as:h.Link,variant:i.find((function(e){var t=e.id;return parseInt(t)==g})).variant,size:"sm",className:"btn-block btn-sm text-white"},"Билеты"))))))}var R=function(e){var t=0;return Object.keys(e).forEach((function(a){e[a].forEach((function(e){var a=e.offers;t+=parseInt(a.cost)}))})),t};function _(e){var t=e.index,a=Object(n.useContext)(u.a).ALL_STATUS,r=void 0===a?[]:a,c=function(e){var t=Object(n.useContext)(u.a).CURRENT_OFFERS,a=void 0===t?[]:t;try{var l=a[e][0],r=a[e][1];return{FROM:l.length?l:[],BACK:r.length?r:[]}}catch(c){return[]}}(t),s=c.FROM,m=void 0===s?[]:s,i=c.BACK,d=void 0===i?[]:i;R(c);try{return m.length>0&&d.length>0?l.a.createElement(C,{FROM:m,BACK:d,key:"current_offer_"+t,all_status:r,placeFrom:""+m.map((function(e){return e.place})),placeBack:""+d.map((function(e){return e.place})),totalCost:R(c),status:m[0].status}):m.length>0&&0==d.length?l.a.createElement(O,Object.assign({},m[0].offers,m[0],{key:"current_offer_"+t,all_status:r,place:""+m.map((function(e){return e.place})),totalCost:R(c)})):0==m.length&&d.length>0?l.a.createElement(O,Object.assign({},d[0].offers,d[0],{key:"current_offer_"+t,all_status:r,place:""+d.map((function(e){return e.place})),totalCost:R(c)})):l.a.createElement("div",null,"Текущих поездок нету")}catch(o){return l.a.createElement("div",null,"Произошла ошибка")}}function I(){var e=Object(n.useContext)(u.a),t=e.CURRENT_OFFERS,a=void 0===t?[]:t;e.ALL_STATUS;return l.a.createElement(l.a.Fragment,null,a.length>0&&a.map((function(e,t){return l.a.createElement(_,{key:"personal_offer_"+t,index:t})})))}t.default=function(){return l.a.createElement(m.a,{pageInfo:{pageName:"personal"}},l.a.createElement(r.a,{className:"my-5 "},l.a.createElement(c.a,{className:"bg-white border-radius shadow rounded mx-0"},l.a.createElement(s.a,{lg:"3",className:"border-right px-0"},l.a.createElement("div",{className:"sticky-top d-flex flex-column py-3"},l.a.createElement(d.a,null),l.a.createElement(i.a,null))),l.a.createElement(s.a,{className:"p-4"},l.a.createElement("h3",null,"Список текущих поездок"),l.a.createElement("hr",null),l.a.createElement(I,null)))))}},j0dn:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("dRSK");var n=a("q1tI"),l=a.n(n),r=a("U5uR"),c=a("ma3e"),s=a("tjd4"),m=a("IdFE");function i(e){var t=e.includeServises,a=void 0===t?[]:t,i=Object(n.useContext)(r.a).ROUTE_SERVISES,d=void 0===i?[]:i;Object(n.useMemo)((function(){return d.filter((function(e){var t=e.id;return a.find((function(e){return e==t}))}))}),[a]);return l.a.createElement(n.Fragment,null,d.map((function(e,t){var a=e.id,n=e.title;e.icon,e.text;return l.a.createElement("div",{key:n,className:" text-center border p-2  mr-2 rounded d-flex flex-column align-items-center mt-2"},1==a&&l.a.createElement(c.k,{size:"18"}),2==a&&l.a.createElement(c.b,{size:"18"}),3==a&&l.a.createElement(c.a,{size:"18"}),4==a&&l.a.createElement(c.i,{size:"18"}),5==a&&l.a.createElement(s.a,{size:"18"}),6==a&&l.a.createElement(m.a,{size:"18"}),7==a&&l.a.createElement(c.e,{size:"18"}),l.a.createElement("small",{className:"d-inline-block text-truncate text-uppercase",style:{width:"45px"}},n))})))}},zIDy:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),r=a("U5uR"),c=(a("tUrg"),a("sjrs")),s=a("Wbzz");function m(e){var t=e.data,a=void 0===t?[]:t;return l.a.createElement(c.a,{variant:"flush",className:"mt-4"},a.length>0&&a.map((function(e,t){var a=e.id,n=void 0===a?null:a,r=e.link,m=void 0===r?null:r,i=e.title,d=void 0===i?null:i;e.subtitle,e.children;return l.a.createElement(c.a.Item,{as:s.Link,to:m,action:!0,key:n,className:"text-4",activeClassName:"active"},d)})))}function i(){var e=Object(n.useContext)(r.a).PERSONAL_NAV,t=void 0===e?[]:e;return l.a.createElement(m,{data:t})}}}]);
//# sourceMappingURL=component---src-pages-personal-currentoffers-index-jsx-5d321ceff45147bf09be.js.map