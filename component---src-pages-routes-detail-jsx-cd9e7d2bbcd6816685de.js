(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+XIH":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return R}));var r=t("q1tI"),n=t.n(r),l=t("L12J"),c=t("7vrA"),m=t("3Z9Z"),i=(t("91GP"),t("JI6e")),s=t("6xyR"),o=t("j0dn"),u=t("X13+");function d(e){e.id;var a=e.img,t=void 0===a?null:a,r=e.title,l=void 0===r?[]:r,c=(e.cost,e.currency,e.shortDescription),m=void 0===c?{}:c;return n.a.createElement(s.a,{className:"row no-gutters overflow-hidden flex-row shadow-none-hover border-0"},n.a.createElement("div",{className:"card-img-container col-12 col-lg-4"},t&&n.a.createElement("img",{src:t,className:"img-cover"})),n.a.createElement(s.a.Body,{className:"col-lg-8 p-lg-4 px-0"},n.a.createElement(s.a.Title,null,l[0]," ",n.a.createElement(u.a,null)," ",l[1]),n.a.createElement(s.a.Text,null," ",m.text),n.a.createElement("div",{className:"d-flex flex-wrap"},n.a.createElement(o.a,{includeServises:m.servises}))))}var E=t("KD6P"),b=t("+YzT"),v=t("MBJH"),p=t("NIcq"),f=t("U5uR");function N(){var e=Object(r.useContext)(f.a).ROUTE_DETAIL,a=(void 0===e?{}:e).timetable,t=void 0===a?[]:a;return n.a.createElement(v.a,{striped:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"Пн"),n.a.createElement("th",null,"Вт"),n.a.createElement("th",null,"Ср"),n.a.createElement("th",null,"Чт"),n.a.createElement("th",null,"Пт"),n.a.createElement("th",null,"Сб"),n.a.createElement("th",null,"Вс"))),n.a.createElement("tbody",null,t.map((function(e,a){var t=e.duration,r=e.from,l=e.to,c=e.days,m=void 0===c?[]:c;return n.a.createElement("tr",{key:a+"_row"},n.a.createElement("td",{className:"text-center"},n.a.createElement("small",null,t)," ",n.a.createElement("br",null),r," - ",l),m.map((function(e,t){return n.a.createElement("td",{key:a+"_day_"+t},1==e?n.a.createElement(p.c,null):"-")})))}))))}function x(e){var a=e.data,t=void 0===a?[]:a,r=e.classes,l=void 0===r?{}:r,c=(l.tabContentContainer,l.tabContentItem,l.navTabContainer),s=void 0===c?"":c,o=l.navTabItem,u=void 0===o?"":o;return n.a.createElement(E.a.Container,{defaultActiveKey:"0"},n.a.createElement(m.a,null,n.a.createElement(i.a,{sm:"auto",className:"border-right"},n.a.createElement(b.a,{className:"flex-column "+s},t.map((function(e,a){var t=e.title;return n.a.createElement(b.a.Item,{key:a+"_navTab",className:""+u},n.a.createElement(b.a.Link,{eventKey:a,className:"left-tab--link"},t))})),n.a.createElement(b.a.Item,null,n.a.createElement(b.a.Link,{eventKey:t.length,className:"left-tab--link"},"Расписание")))),n.a.createElement(i.a,null,n.a.createElement(E.a.Content,{className:"flex-column "+s},t.map((function(e,a){var t=e.text;return n.a.createElement(E.a.Pane,{key:a+"_tabContent",eventKey:a,className:"flex-column "+u},t)})),n.a.createElement(E.a.Pane,{key:"timeTable",eventKey:t.length},n.a.createElement(N,null))))))}function g(){var e=Object(r.useContext)(f.a),a=e.ROUTE_DETAIL,t=void 0===a?{}:a,l=e.ROUTE_SERVISES,c=void 0===l?{}:l;return n.a.createElement(i.a,{lg:"8",className:"border-right py-3"},n.a.createElement(d,Object.assign({},t,{ROUTE_SERVISES:c})),n.a.createElement("hr",null),n.a.createElement(x,{data:t.description,classes:{tabContentContainer:"",tabContentItem:"",navTabContainer:"mt-3 mt-md-0",navTabItem:""}}))}var h=t("cWnB");function y(){return n.a.createElement("div",null,n.a.createElement(h.a,{className:"btn-clear rounded overflow-hidden mb-3",style:{height:"auto",maxHeight:300}},n.a.createElement("img",{src:"/img/map.png",alt:"map",className:"img-fluid "})))}var O=t("2MfL"),j=t("QojX"),C=t("1rzk"),w=t("Wbzz");function I(e,a){var t=e.language,l=void 0===t?"ru":t;e.type;return n.a.createElement(r.Fragment,null,n.a.createElement(j.a,{id:"bookingBus",className:"d-block"},n.a.createElement(j.a.Row,null,n.a.createElement(i.a,{sm:"6"},n.a.createElement(j.a.Group,{controlId:"date_departure",className:"position-relative"},n.a.createElement(j.a.Control,{type:"text",placeholder:C.ru.date_departure.placeholder,value:"21.02.2020"}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(p.b,null)))),n.a.createElement(i.a,{sm:"6"},n.a.createElement(j.a.Group,{controlId:"date_arrival",className:"position-relative"},n.a.createElement(j.a.Control,{disabled:!0,type:"text",placeholder:C.ru.date_arrival.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(p.b,null)))),n.a.createElement(i.a,{lg:"12"},n.a.createElement(j.a.Group,{controlId:"seats",className:"position-relative"},n.a.createElement(j.a.Control,{type:"text",placeholder:C[l].seats.placeholder,value:"1 взр"}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(p.i,null)))),n.a.createElement(i.a,{lg:"12"},n.a.createElement(w.Link,{to:"/offers",className:"text-white"},n.a.createElement(h.a,{variant:"primary",type:"submit",className:"btn-block"},C[l].submit))))))}var k=n.a.forwardRef(I);function T(){var e=Object(r.useContext)(f.a).ROUTE_DETAIL,a=(void 0===e?{}:e).points,t=void 0===a?[]:a,l=Object(r.useRef)(null),c=function(){l.current.classList.toggle("active")};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mobileContolShowDrawer"},n.a.createElement(h.a,{onClick:c},"Поиск билетов")),n.a.createElement(i.a,{lg:"4",className:"py-3"},n.a.createElement("div",{ref:l,className:"mobileFormDrawer"},n.a.createElement("div",{className:"mobileFormDrawerContainer  "},n.a.createElement(p.a,{className:"cursor ml-auto mb-3 d-lg-none",onClick:c,size:"24px"}),n.a.createElement(k,null))),n.a.createElement("hr",null),n.a.createElement(m.a,null,n.a.createElement(i.a,{md:"6",lg:"12"},n.a.createElement(y,{points:t})),n.a.createElement(i.a,{md:"6",lg:"12"},n.a.createElement(O.a,{points:t})))))}t("yCH+");function R(){return n.a.createElement(l.a,{pageInfo:{pageName:"routes"}},n.a.createElement(c.a,{className:"my-5 "},n.a.createElement(m.a,{className:"bg-white border-radius shadow-sm rounded mx-0"},n.a.createElement(g,null),n.a.createElement(T,null))))}},"+gQd":function(e,a,t){},"1rzk":function(e){e.exports=JSON.parse('{"ru":{"title":"Автобусные билеты","departure":{"label":"Откуда","placeholder":"Откуда","required":"true","text":"loream ipsulm"},"arrival":{"label":"Куда","placeholder":"Куда","required":"true","text":"loream ipsulm"},"date_departure":{"label":"Дата отправления","placeholder":"Туда","required":"true","text":"loream ipsulm"},"date_arrival":{"label":"Дата отправления","placeholder":"Обратно","required":"true","text":"loream ipsulm"},"seats":{"label":"Мест","placeholder":"Пассажиров","required":"true","text":"loream ipsulm"},"adults":{"title":"Взрослых","subtitle":"12 и старше"},"children":{"title":"Взрослых","subtitle":"до 12 лет"},"benefic":{"title":"Льготный","subtitle":"старше 62 и инвалиды."},"submit":"Найти билет"}}')},"2MfL":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r=t("q1tI"),n=t.n(r),l=t("X13+"),c=t("NIcq");t("+gQd");function m(e){var a=e.points,t=void 0===a?[]:a;return n.a.createElement("ul",{className:"list-points"},t.map((function(e,a){var r=e.city,m=e.durationTime,i=e.address,s=e.time,o=e.date;return n.a.createElement("li",{className:"list-points--item",key:a+"_"+r},0===a?n.a.createElement("div",{className:"points-icon"},n.a.createElement(c.k,null)):"",a===t.length-1?n.a.createElement("div",{className:"points-icon"},n.a.createElement(l.d,null)):"",a!==t.length-1&&0!==a&&n.a.createElement("div",{className:"points-icon"},n.a.createElement(l.c,null)),n.a.createElement("div",{className:"text-5"},s," ",n.a.createElement("sup",{className:" px-1 rounded bg-primary text-white "}," ",o," ")),n.a.createElement("div",{className:"text-3 text-primary"},r),n.a.createElement("small",{className:"d-inline-block "},i||""),0!=m?n.a.createElement("span",{className:"durtionTime text-muted"},n.a.createElement(l.b,null)," В пути: ",m):"")})))}},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),m=t("q1tI"),i=t.n(m),s=t("vUet"),o=t("YdCC"),u=t("U1MP"),d=t("Wzyw"),E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,m=e.variant,o=e.as,u=void 0===o?"img":o,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),E=Object(s.b)(t,"card-img");return i.a.createElement(u,Object(r.a)({ref:a,className:c()(m?E+"-"+m:E,l)},d))}));E.displayName="CardImg",E.defaultProps={variant:null};var b=E,v=Object(u.a)("h5"),p=Object(u.a)("h6"),f=Object(o.a)("card-body"),N=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.bg,u=e.text,E=e.border,b=e.body,v=e.children,p=e.as,N=void 0===p?"div":p,x=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(s.b)(t,"card"),h=Object(m.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return i.a.createElement(d.a.Provider,{value:h},i.a.createElement(N,Object(r.a)({ref:a},x,{className:c()(l,g,o&&"bg-"+o,u&&"text-"+u,E&&"border-"+E)}),b?i.a.createElement(f,null,v):v))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=b,N.Title=Object(o.a)("card-title",{Component:v}),N.Subtitle=Object(o.a)("card-subtitle",{Component:p}),N.Body=f,N.Link=Object(o.a)("card-link",{Component:"a"}),N.Text=Object(o.a)("card-text",{Component:"p"}),N.Header=Object(o.a)("card-header"),N.Footer=Object(o.a)("card-footer"),N.ImgOverlay=Object(o.a)("card-img-overlay");a.a=N},MBJH:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),m=t("q1tI"),i=t.n(m),s=t("vUet"),o=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,m=e.striped,o=e.bordered,u=e.borderless,d=e.hover,E=e.size,b=e.variant,v=e.responsive,p=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=Object(s.b)(t,"table"),N=c()(l,f,b&&f+"-"+b,E&&f+"-"+E,m&&f+"-striped",o&&f+"-bordered",u&&f+"-borderless",d&&f+"-hover"),x=i.a.createElement("table",Object(r.a)({},p,{className:N,ref:a}));if(v){var g=f+"-responsive";return"string"==typeof v&&(g=g+"-"+v),i.a.createElement("div",{className:g},x)}return x}));a.a=o},j0dn:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("dRSK");var r=t("q1tI"),n=t.n(r),l=t("U5uR"),c=t("ma3e"),m=t("tjd4"),i=t("IdFE");function s(e){var a=e.includeServises,t=void 0===a?[]:a,s=Object(r.useContext)(l.a).ROUTE_SERVISES,o=void 0===s?[]:s;Object(r.useMemo)((function(){return o.filter((function(e){var a=e.id;return t.find((function(e){return e==a}))}))}),[t]);return n.a.createElement(r.Fragment,null,o.map((function(e,a){var t=e.id,r=e.title;e.icon,e.text;return n.a.createElement("div",{key:r,className:" text-center border p-2  mr-2 rounded d-flex flex-column align-items-center mt-2"},1==t&&n.a.createElement(c.l,{size:"18"}),2==t&&n.a.createElement(c.b,{size:"18"}),3==t&&n.a.createElement(c.a,{size:"18"}),4==t&&n.a.createElement(c.j,{size:"18"}),5==t&&n.a.createElement(m.a,{size:"18"}),6==t&&n.a.createElement(i.a,{size:"18"}),7==t&&n.a.createElement(c.e,{size:"18"}),n.a.createElement("small",{className:"d-inline-block text-truncate text-uppercase",style:{width:"45px"}},r))})))}},"yCH+":function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-routes-detail-jsx-cd9e7d2bbcd6816685de.js.map