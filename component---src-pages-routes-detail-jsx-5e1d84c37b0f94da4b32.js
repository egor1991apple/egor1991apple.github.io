(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+XIH":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return C}));var r=t("q1tI"),l=t.n(r),n=t("L12J"),c=t("7vrA"),s=t("3Z9Z"),i=(t("91GP"),t("JI6e")),m=t("6xyR"),o=t("j0dn"),u=t("X13+");function d(e){e.id;var a=e.img,t=e.title,r=(e.cost,e.currency,e.shortDescription),n=r.servises,c=r.text;return l.a.createElement(m.a,{className:"row no-gutters overflow-hidden flex-row shadow-none-hover border-0"},l.a.createElement("div",{className:"card-img-container col-4"},a&&l.a.createElement("img",{src:a,className:"img-cover"})),l.a.createElement(m.a.Body,{className:"col-8 p-4"},l.a.createElement(m.a.Title,null,t[0]," ",l.a.createElement(u.a,null)," ",t[1]),l.a.createElement(m.a.Text,null," ",c),l.a.createElement("div",{className:"d-flex flex-wrap"},l.a.createElement(o.a,{includeServises:n}))))}var E=t("KD6P"),b=t("+YzT"),p=t("MBJH"),v=t("NIcq"),f=t("U5uR");function N(){var e=Object(r.useContext)(f.a).ROUTE_DETAIL.timetable,a=void 0===e?[]:e;return console.log(a),l.a.createElement(p.a,{striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Пн"),l.a.createElement("th",null,"Вт"),l.a.createElement("th",null,"Ср"),l.a.createElement("th",null,"Чт"),l.a.createElement("th",null,"Пт"),l.a.createElement("th",null,"Сб"),l.a.createElement("th",null,"Вс"))),l.a.createElement("tbody",null,a.map((function(e,a){var t=e.duration,r=e.from,n=e.to,c=e.days,s=void 0===c?[]:c;return l.a.createElement("tr",{key:a+"_row"},l.a.createElement("td",{className:"text-center"},l.a.createElement("small",null,t)," ",l.a.createElement("br",null),r," - ",n),s.map((function(e,t){return l.a.createElement("td",{key:a+"_day_"+t},1==e?l.a.createElement(v.c,null):"-")})))}))))}function h(e){var a=e.data,t=void 0===a?[]:a;return l.a.createElement(E.a.Container,{defaultActiveKey:"0"},l.a.createElement(s.a,null,l.a.createElement(i.a,{sm:"auto",className:"border-right"},l.a.createElement(b.a,{className:"flex-column"},t.map((function(e,a){var t=e.title;return l.a.createElement(b.a.Item,{key:a+"_navTab"},l.a.createElement(b.a.Link,{eventKey:a,className:"left-tab--link"},t))})),l.a.createElement(b.a.Item,null,l.a.createElement(b.a.Link,{eventKey:t.length,className:"left-tab--link"},"Расписание")))),l.a.createElement(i.a,null,l.a.createElement(E.a.Content,null,t.map((function(e,a){var t=e.text;return l.a.createElement(E.a.Pane,{key:a+"_tabContent",eventKey:a},t)})),l.a.createElement(E.a.Pane,{key:"timeTable",eventKey:t.length},l.a.createElement(N,null))))))}function x(){var e=Object(r.useContext)(f.a),a=e.ROUTE_DETAIL,t=void 0===a?{}:a,n=e.ROUTE_DETAIL.description,c=void 0===n?[]:n,s=e.ROUTE_SERVISES;return console.log(Object(r.useContext)(f.a)),l.a.createElement(i.a,{lg:"8",className:"border-right py-3"},l.a.createElement(d,Object.assign({},t,{ROUTE_SERVISES:s})),l.a.createElement("hr",null),l.a.createElement(h,{data:c}))}var y=t("cWnB");function g(){return l.a.createElement("div",null,l.a.createElement(y.a,{className:"btn-clear rounded overflow-hidden",style:{height:"auto"}},l.a.createElement("img",{src:"map.png",alt:"map",className:"img-fluid"})))}var O=t("2MfL"),j=t("QojX"),w=t("1rzk"),I=t("Wbzz");function k(e,a){var t=e.language,n=void 0===t?"ru":t;e.type;return l.a.createElement(r.Fragment,null,l.a.createElement(j.a,{id:"bookingBus",className:"d-block"},l.a.createElement(j.a.Row,null,l.a.createElement(j.a.Group,{as:i.a,controlId:"date_departure",className:"position-relative"},l.a.createElement(j.a.Control,{type:"text",placeholder:w.ru.date_departure.placeholder,value:"21.02.2020"}),l.a.createElement("span",{className:"icon-inside"},l.a.createElement(v.b,null))),l.a.createElement(j.a.Group,{as:i.a,controlId:"date_arrival",className:"position-relative"},l.a.createElement(j.a.Control,{disabled:!0,type:"text",placeholder:w.ru.date_arrival.placeholder}),l.a.createElement("span",{className:"icon-inside"},l.a.createElement(v.b,null)))),l.a.createElement(j.a.Group,{controlId:"seats",className:"position-relative"},l.a.createElement(j.a.Control,{type:"text",placeholder:w[n].seats.placeholder,value:"1 взр"}),l.a.createElement("span",{className:"icon-inside"},l.a.createElement(v.h,null))),l.a.createElement(I.Link,{to:"/offers",className:"text-white"},l.a.createElement(y.a,{variant:"primary",type:"submit",className:"btn-block"},w[n].submit))))}var T=l.a.forwardRef(k);function R(){var e=Object(r.useContext)(f.a).ROUTE_DETAIL.points,a=void 0===e?[]:e;return l.a.createElement(i.a,{lg:"4",className:"py-3"},l.a.createElement(T,null),l.a.createElement("hr",null),l.a.createElement(m.a,{className:"shadow-none-hover border-0"},l.a.createElement(g,{points:a}),l.a.createElement(O.a,{points:a})))}function C(){return l.a.createElement(n.a,{pageInfo:{pageName:"routes"}},l.a.createElement(c.a,{className:"my-5 "},l.a.createElement(s.a,{className:"bg-white  border-radius border rounded mx-0"},l.a.createElement(x,null),l.a.createElement(R,null))))}},"1rzk":function(e){e.exports=JSON.parse('{"ru":{"title":"Автобусные билеты","departure":{"label":"Откуда","placeholder":"Откуда","required":"true","text":"loream ipsulm"},"arrival":{"label":"Куда","placeholder":"Куда","required":"true","text":"loream ipsulm"},"date_departure":{"label":"Дата отправления","placeholder":"Туда","required":"true","text":"loream ipsulm"},"date_arrival":{"label":"Дата отправления","placeholder":"Обратно","required":"true","text":"loream ipsulm"},"seats":{"label":"Мест","placeholder":"Пассажиров","required":"true","text":"loream ipsulm"},"adults":{"title":"Взрослых","subtitle":"12 и старше"},"children":{"title":"Взрослых","subtitle":"до 12 лет"},"benefic":{"title":"Льготный","subtitle":"старше 62 и инвалиды."},"submit":"Найти билет"}}')},"2MfL":function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t("q1tI"),l=t.n(r),n=t("X13+"),c=t("NIcq");function s(e){var a=e.points,t=void 0===a?[]:a;return l.a.createElement("ul",{className:"list-points"},t.map((function(e,a){var r=e.city,s=e.durationTime,i=e.address,m=e.time,o=e.date;return l.a.createElement("li",{className:"list-points--item",key:a+"_"+r},0===a?l.a.createElement("div",{className:"points-icon"},l.a.createElement(c.j,null)):"",a===t.length-1?l.a.createElement("div",{className:"points-icon"},l.a.createElement(n.d,null)):"",a!==t.length-1&&0!==a&&l.a.createElement("div",{className:"points-icon"},l.a.createElement(n.c,null)),l.a.createElement("div",{className:"text-5"},m," ",l.a.createElement("sup",{className:" px-1 rounded bg-primary text-white "}," ",o," ")),l.a.createElement("div",{className:"text-3 text-primary"},r),l.a.createElement("small",{className:"d-inline-block "},i||""),0!=s?l.a.createElement("span",{className:"durtionTime text-muted"},l.a.createElement(n.b,null)," В пути: ",s):"")})))}},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),l=t("zLVn"),n=t("TSYQ"),c=t.n(n),s=t("q1tI"),i=t.n(s),m=t("vUet"),o=t("YdCC"),u=t("U1MP"),d=t("Wzyw"),E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.variant,o=e.as,u=void 0===o?"img":o,d=Object(l.a)(e,["bsPrefix","className","variant","as"]),E=Object(m.b)(t,"card-img");return i.a.createElement(u,Object(r.a)({ref:a,className:c()(s?E+"-"+s:E,n)},d))}));E.displayName="CardImg",E.defaultProps={variant:null};var b=E,p=Object(u.a)("h5"),v=Object(u.a)("h6"),f=Object(o.a)("card-body"),N=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.bg,u=e.text,E=e.border,b=e.body,p=e.children,v=e.as,N=void 0===v?"div":v,h=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(m.b)(t,"card"),y=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return i.a.createElement(d.a.Provider,{value:y},i.a.createElement(N,Object(r.a)({ref:a},h,{className:c()(n,x,o&&"bg-"+o,u&&"text-"+u,E&&"border-"+E)}),b?i.a.createElement(f,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=b,N.Title=Object(o.a)("card-title",{Component:p}),N.Subtitle=Object(o.a)("card-subtitle",{Component:v}),N.Body=f,N.Link=Object(o.a)("card-link",{Component:"a"}),N.Text=Object(o.a)("card-text",{Component:"p"}),N.Header=Object(o.a)("card-header"),N.Footer=Object(o.a)("card-footer"),N.ImgOverlay=Object(o.a)("card-img-overlay");a.a=N},MBJH:function(e,a,t){"use strict";var r=t("wx14"),l=t("zLVn"),n=t("TSYQ"),c=t.n(n),s=t("q1tI"),i=t.n(s),m=t("vUet"),o=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.striped,o=e.bordered,u=e.borderless,d=e.hover,E=e.size,b=e.variant,p=e.responsive,v=Object(l.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=Object(m.b)(t,"table"),N=c()(n,f,b&&f+"-"+b,E&&f+"-"+E,s&&f+"-striped",o&&f+"-bordered",u&&f+"-borderless",d&&f+"-hover"),h=i.a.createElement("table",Object(r.a)({},v,{className:N,ref:a}));if(p){var x=f+"-responsive";return"string"==typeof p&&(x=x+"-"+p),i.a.createElement("div",{className:x},h)}return h}));a.a=o},j0dn:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("dRSK");var r=t("q1tI"),l=t.n(r),n=t("U5uR"),c=t("ma3e"),s=t("tjd4"),i=t("IdFE");function m(e){var a=e.includeServises,t=void 0===a?[]:a,m=Object(r.useContext)(n.a).ROUTE_SERVISES,o=void 0===m?[]:m;Object(r.useMemo)((function(){return o.filter((function(e){var a=e.id;return t.find((function(e){return e==a}))}))}),[t]);return l.a.createElement(r.Fragment,null,o.map((function(e,a){var t=e.id,r=e.title;e.icon,e.text;return l.a.createElement("div",{key:r,className:" text-center border p-2  mr-2 rounded d-flex flex-column align-items-center mt-2"},1==t&&l.a.createElement(c.k,{size:"18"}),2==t&&l.a.createElement(c.b,{size:"18"}),3==t&&l.a.createElement(c.a,{size:"18"}),4==t&&l.a.createElement(c.i,{size:"18"}),5==t&&l.a.createElement(s.a,{size:"18"}),6==t&&l.a.createElement(i.a,{size:"18"}),7==t&&l.a.createElement(c.e,{size:"18"}),l.a.createElement("small",{className:"d-inline-block text-truncate text-uppercase",style:{width:"45px"}},r))})))}}}]);
//# sourceMappingURL=component---src-pages-routes-detail-jsx-5e1d84c37b0f94da4b32.js.map