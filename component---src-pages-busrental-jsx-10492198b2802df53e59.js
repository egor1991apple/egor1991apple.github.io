(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4rcW":function(e,a,t){"use strict";t.r(a);t("91GP");var l=t("q1tI"),r=t.n(l),n=t("7vrA"),c=t("3Z9Z"),o=t("JI6e"),i=t("L12J"),s=t("vrFN"),m=t("U5uR"),d=t("6xyR"),u=t("cWnB"),p=t("NIcq");t("5/r+");function E(e){e.id;var a=e.img,t=void 0===a?null:a,l=e.transport,n=void 0===l?null:l,c=e.sizeTransport,o=void 0===c?null:c,i=e.typeTransport,s=void 0===i?0:i,m=e.description,E=void 0===m?null:m,b=e.rates,v=void 0===b?[]:b,f=e.callback,N=void 0===f?function(){}:f;return r.a.createElement(d.a,{className:"d-flex flex-row flex-wrap overflow-hidden mb-3 align-items-center"},r.a.createElement("div",{className:" col-sm-4 py-3 "},r.a.createElement("div",{className:"card-img-container "},t&&r.a.createElement("img",{src:t,className:"img-fluid"})),r.a.createElement(d.a.Subtitle,{className:"text-muted justify-content-center w-100"},r.a.createElement(p.j,{className:"mr-1"}),o)),r.a.createElement(d.a.Body,{className:" py-3 d-flex flex-column col-sm-8 "},r.a.createElement(d.a.Title,{className:"d-flex align-items-center mb-0"},n),r.a.createElement("div",{className:"text-muted"},0==s?"микроавтобус":"автобус"),r.a.createElement("div",{className:"py-2 mt-2 border-top display-inline"},E),v.length>0?r.a.createElement("table",{className:"table-price"},r.a.createElement("thead",null,r.a.createElement("tr",null,v.map((function(e){var a=e.title,t=void 0===a?null:a,l=e.id,n=void 0===l?null:l;return r.a.createElement("th",{key:n+"_rate_th"},t)})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,v.map((function(e){var a=e.price,t=void 0===a?null:a,l=e.id,n=void 0===l?null:l,c=e.currency,o=void 0===c?null:c;return r.a.createElement("td",{key:n+"_rate_td"},t," ",o)}))))):null,r.a.createElement("div",{className:"ml-auto pt-3 mt-auto"},r.a.createElement(u.a,{size:"sm",onClick:N},"Бронировать"))))}var b=t("php9");t("k4jR");function v(e){var a=e.id,t=void 0===a?null:a,n=e.title,c=void 0===n?null:n,o=e.price,i=void 0===o?null:o,s=e.currency,m=void 0===s?null:s,d=e.checked,u=void 0!==d&&d,p=e.callback,E=void 0===p?function(){}:p,v=Object(l.useRef)(null);return Object(l.useEffect)((function(){v.current.checked=1==u||"true"==u}),[u]),r.a.createElement("tr",{onClick:function(){return E(t)}},r.a.createElement("td",{className:"border-right"},r.a.createElement(b.a,{ref:v})),r.a.createElement("td",{className:"border-right"},c),r.a.createElement("td",{className:"text-right"},i," ",m))}var f=t("fhwx"),N=t.n(f),h=t("zM5D"),g=function(e){var a=e.children,t=e.disabled,n=e.callback,c=Object(l.useContext)(m.a),o=c.SHOW_BUSRENTAL_RATE_DIALOG,i=void 0!==o&&o,s=c.onShowBusRentalRateDialog,d=void 0===s?function(){}:s;return i&&r.a.createElement(h.a,{size:"md",id:"PaySystemDialog",show:i,onHide:d},r.a.createElement(h.a.Header,null,r.a.createElement("div",{className:"text-4"},"Укажите тариф"),r.a.createElement(u.a,{Button:!0,onClick:d,className:"btn-clear btn-close-dialog"},r.a.createElement(p.b,{size:"21px"}))),r.a.createElement(h.a.Body,null,a),r.a.createElement(h.a.Footer,null,r.a.createElement(u.a,{disabled:t,size:"sm",onClick:function(){return n&&n()}},"Ok")))},x=t("uuXO"),y=t("Qu+8");a.default=function(e){var a=e.location,t=Object(y.a)(992),d=Object(l.useContext)(m.a),u=d.BUS_RENTAL,p=void 0===u?{}:u,b=d.BASKET_RENTAL,f=void 0===b?null:b,h=d.onShowBusRentalRateDialog,k=void 0===h?function(){}:h,j=d.onCheckedBusRentalRates,O=void 0===j?function(){}:j,w=d.onBasketRentalCommit,C=void 0===w?function(){}:w,R=d.onAddBasketRental,I=void 0===R?function(){}:R,_=p.description,B=void 0===_?"":_,G=p.offers,P=void 0===G?[]:G;return r.a.createElement(i.a,Object.assign({pageInfo:{pageName:"offers"}},a),r.a.createElement(s.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),r.a.createElement(n.a,{className:"my-5"},r.a.createElement(c.a,{className:"bg-white border-radius shadow-sm rounded mx-0"},t?null:r.a.createElement(o.a,{lg:"12",className:"pt-3 border-bottom bg-light-3"},r.a.createElement("h3",{className:"text-center mb-3"},"Поиск автобусных билетов"),r.a.createElement(x.a,{type:"hor"})),r.a.createElement(o.a,{lg:"3",className:"py-3 border-right"},"филтр"),r.a.createElement(o.a,{md:"12",lg:"9",className:"py-3 mx-auto"},P.length>0?P.map((function(e){return r.a.createElement(E,Object.assign({key:e.id+"_rental_card"},e,{callback:function(){k(),I(e)}}))})):null),r.a.createElement(o.a,{xs:"12",className:"p-3 border bg-light-2"},N()(B)))),f?r.a.createElement(g,{callback:C},r.a.createElement("table",{className:"table-tarif"},f.rates.map((function(e){return r.a.createElement(v,Object.assign({key:e.id+"_rental"},e,{callback:O}))})))):null)}},"5/r+":function(e,a,t){},"6xyR":function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),n=t("TSYQ"),c=t.n(n),o=t("q1tI"),i=t.n(o),s=t("vUet"),m=t("YdCC"),d=t("U1MP"),u=t("Wzyw"),p=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(s.b)(t,"card-img");return i.a.createElement(d,Object(l.a)({ref:a,className:c()(o?p+"-"+o:p,n)},u))}));p.displayName="CardImg",p.defaultProps={variant:null};var E=p,b=Object(d.a)("h5"),v=Object(d.a)("h6"),f=Object(m.a)("card-body"),N=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.bg,d=e.text,p=e.border,E=e.body,b=e.children,v=e.as,N=void 0===v?"div":v,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(s.b)(t,"card"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return i.a.createElement(u.a.Provider,{value:x},i.a.createElement(N,Object(l.a)({ref:a},h,{className:c()(n,g,m&&"bg-"+m,d&&"text-"+d,p&&"border-"+p)}),E?i.a.createElement(f,null,b):b))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=E,N.Title=Object(m.a)("card-title",{Component:b}),N.Subtitle=Object(m.a)("card-subtitle",{Component:v}),N.Body=f,N.Link=Object(m.a)("card-link",{Component:"a"}),N.Text=Object(m.a)("card-text",{Component:"p"}),N.Header=Object(m.a)("card-header"),N.Footer=Object(m.a)("card-footer"),N.ImgOverlay=Object(m.a)("card-img-overlay");a.a=N},FNhl:function(e){e.exports=JSON.parse('{"ru":{"title":"Автобусные билеты","departure":{"label":"Откуда","placeholder":"Откуда","required":"true","text":"loream ipsulm"},"arrival":{"label":"Куда","placeholder":"Куда","required":"true","text":"loream ipsulm"},"date_departure":{"label":"Дата отправления","placeholder":"Туда","required":"true","text":"loream ipsulm"},"date_arrival":{"label":"Дата отправления","placeholder":"Обратно","required":"true","text":"loream ipsulm"},"seats":{"label":"Мест","placeholder":"Пассажиров","required":"true","text":"loream ipsulm"},"adults":{"title":"Взрослых","subtitle":"12 и старше"},"children":{"title":"Взрослых","subtitle":"до 12 лет"},"benefic":{"title":"Льготный","subtitle":"старше 62 и инвалиды."},"submit":"Искать"}}')},k4jR:function(e,a,t){},uuXO:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),n=t("QojX"),c=t("JI6e"),o=t("cWnB"),i=t("FNhl"),s=t("NIcq"),m=t("Wbzz");function d(e,a){var t=e.language,d=void 0===t?"ru":t,u=e.type;return"hor"!=(void 0===u?null:u)?r.a.createElement(l.Fragment,null,r.a.createElement(n.a,{id:"bookingBus",className:"d-block"},r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{as:c.a,lg:"6",xs:"12",controlId:"departure",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.l,null))),r.a.createElement(n.a.Group,{as:c.a,controlId:"arrival",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.l,null)))),r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{as:c.a,controlId:"date_departure",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.date_departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.c,null))),r.a.createElement(n.a.Group,{as:c.a,controlId:"date_arrival",className:"position-relative"},r.a.createElement(n.a.Control,{disabled:!0,type:"text",placeholder:i.ru.date_arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.c,null)))),r.a.createElement(n.a.Group,{controlId:"seats",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:i[d].seats.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.j,null))),r.a.createElement(m.Link,{to:"/offers",className:"text-white"},r.a.createElement(o.a,{variant:"danger",type:"submit",className:"btn-block"},i[d].submit)))):r.a.createElement(l.Fragment,null,r.a.createElement(n.a,{id:"bookingBus",className:"d-block",ref:a},r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{controlId:"departure",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.l,null))),r.a.createElement(n.a.Group,{controlId:"arrival",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.l,null))),r.a.createElement(n.a.Group,{controlId:"date_departure",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.date_departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.c,null))),r.a.createElement(n.a.Group,{controlId:"date_arrival",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{disabled:!0,type:"text",placeholder:i.ru.date_arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.c,null))),r.a.createElement(n.a.Group,{controlId:"seats",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:i[d].seats.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.j,null))),r.a.createElement(n.a.Group,{className:"position-relative col-sm-6 col-lg"},r.a.createElement(m.Link,{to:"/offers",className:"text-white"},r.a.createElement(o.a,{variant:"danger",type:"submit",className:"btn-block"},i[d].submit))))))}a.a=r.a.forwardRef(d)}}]);
//# sourceMappingURL=component---src-pages-busrental-jsx-10492198b2802df53e59.js.map