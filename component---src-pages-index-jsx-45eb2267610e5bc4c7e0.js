(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4xu4":function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var l=t("q1tI"),r=t.n(l);function n(e){var a=e.children;return r.a.createElement("p",{className:"lead mb-4 text-center"},a)}},"6xyR":function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),n=t("TSYQ"),c=t.n(n),o=t("q1tI"),s=t.n(o),i=t("vUet"),m=t("YdCC"),u=t("U1MP"),d=t("Wzyw"),p=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.variant,m=e.as,u=void 0===m?"img":m,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(i.b)(t,"card-img");return s.a.createElement(u,Object(l.a)({ref:a,className:c()(o?p+"-"+o:p,n)},d))}));p.displayName="CardImg",p.defaultProps={variant:null};var E=p,b=Object(u.a)("h5"),v=Object(u.a)("h6"),f=Object(m.a)("card-body"),N=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.bg,u=e.text,p=e.border,E=e.body,b=e.children,v=e.as,N=void 0===v?"div":v,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.b)(t,"card"),y=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return s.a.createElement(d.a.Provider,{value:y},s.a.createElement(N,Object(l.a)({ref:a},h,{className:c()(n,x,m&&"bg-"+m,u&&"text-"+u,p&&"border-"+p)}),E?s.a.createElement(f,null,b):b))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=E,N.Title=Object(m.a)("card-title",{Component:b}),N.Subtitle=Object(m.a)("card-subtitle",{Component:v}),N.Body=f,N.Link=Object(m.a)("card-link",{Component:"a"}),N.Text=Object(m.a)("card-text",{Component:"p"}),N.Header=Object(m.a)("card-header"),N.Footer=Object(m.a)("card-footer"),N.ImgOverlay=Object(m.a)("card-img-overlay");a.a=N},Dtc0:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),n=t("L12J"),c=t("vrFN"),o=t("uuXO");var s=function(e){var a,t,n=e.children,c=Object(l.useRef)(null);a=Object(l.useState)(0),t=a[0],a[1];return r.a.createElement("div",null,r.a.cloneElement(n,{ref:c}))},i=t("7vrA");function m(){return r.a.createElement("section",{className:"bg-form py-5"},r.a.createElement(i.a,{className:"py-5 zIndex"},r.a.createElement(s,null,r.a.createElement(o.a,{type:"hor"}))))}t("tUrg");var u=t("6xyR"),d=t("Wbzz");function p(e){var a=e.title,t=void 0===a?null:a,l=e.subtitle,n=void 0===l?null:l,c=e.img,o=void 0===c?null:c,s=(e.see,e.link),i=void 0===s?null:s;return r.a.createElement(u.a,{as:d.Link,to:i},o&&r.a.createElement(u.a.Img,{src:o}),r.a.createElement(u.a.Body,null,t&&r.a.createElement(u.a.Title,{className:"mb-1"}," ",t),r.a.createElement(u.a.Subtitle,{className:"color-secondary text-2"}," ",n)))}var E=t("3Z9Z"),b=t("JI6e"),v=t("uzDm"),f=t("4xu4"),N=t("U5uR");function h(){var e=Object(l.useContext)(N.a).SERVISES,a=void 0===e?[]:e;return a.length&&r.a.createElement(i.a,{as:"section",className:"py-5"},r.a.createElement(v.a,null,"Пассажирские перевозки"),r.a.createElement(f.a,null,"Минск | Беларусь | Россия | Украина | Литва | Польша | Европа"),r.a.createElement(E.a,null,a.map((function(e,a){return r.a.createElement(b.a,{md:"6",lg:"4",key:a+"_servises",className:"mb-4"},r.a.createElement(p,e))}))))}function x(e){var a=e.title,t=void 0===a?null:a,l=e.subtitle,n=void 0===l?null:l,c=e.icon,o=void 0===c?null:c;return r.a.createElement("div",{className:"featured-box text-center "},o&&r.a.createElement("img",{src:o,alt:"title",className:"pb-2"}),t&&r.a.createElement("h4",null," ",t),n&&r.a.createElement("p",null,n," "))}function y(){var e=Object(l.useContext)(N.a).MAIN_WHY_WE_ARE,a=void 0===e?[]:e;return a.length&&r.a.createElement("div",{className:"bg-white"},r.a.createElement(i.a,{as:"section",className:"py-5"},r.a.createElement(E.a,{className:"justify-content-center"},a.map((function(e,a){return r.a.createElement(b.a,{md:"4",key:a+"_card_we_are",className:"col-lg"},r.a.createElement(x,e))})))))}var j=t("wx14"),g=t("zLVn"),O=t("TSYQ"),C=t.n(O),I=t("JCAc"),w=t("vUet"),k=t("ILyh"),_=r.a.createContext(null);var R=r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"button":t,c=e.children,o=e.eventKey,s=e.onClick,i=Object(g.a)(e,["as","children","eventKey","onClick"]),m=function(e,a){var t=Object(l.useContext)(_),r=Object(l.useContext)(k.a);return function(l){r(e===t?null:e,l),a&&a(l)}}(o,s);return"button"===n&&(i.type="button"),r.a.createElement(n,Object(j.a)({ref:a,onClick:m},i),c)})),P=t("vYJ8"),S=r.a.forwardRef((function(e,a){var t=e.children,n=e.eventKey,c=Object(g.a)(e,["children","eventKey"]),o=Object(l.useContext)(_);return r.a.createElement(P.a,Object(j.a)({ref:a,in:o===n},c),r.a.createElement("div",null,r.a.Children.only(t)))}));S.displayName="AccordionCollapse";var q=S,G=r.a.forwardRef((function(e,a){var t=Object(I.a)(e,{activeKey:"onSelect"}),l=t.as,n=void 0===l?"div":l,c=t.activeKey,o=t.bsPrefix,s=t.children,i=t.className,m=t.onSelect,u=Object(g.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return o=Object(w.b)(o,"accordion"),r.a.createElement(_.Provider,{value:c},r.a.createElement(k.a.Provider,{value:m},r.a.createElement(n,Object(j.a)({ref:a},u,{className:C()(i,o)}),s)))}));G.Toggle=R,G.Collapse=q;t("91GP");var z=t("YdCC"),L=Object(z.a)("card-deck"),J=t("NIcq");function T(e){var a=e.title,t=void 0===a?null:a,l=e.date,n=void 0===l?null:l,c=e.text,o=void 0===c?null:c,s=e.img,i=void 0===s?null:s,m=(e.see,e.link),p=void 0===m?null:m;e.index;return r.a.createElement(u.a,{as:d.Link,to:p},i&&r.a.createElement(u.a.Img,{src:i}),r.a.createElement(u.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between mb-2"},n&&r.a.createElement(u.a.Subtitle,{className:"color-secondary"}," ",r.a.createElement(J.b,null)," ",n)),t&&r.a.createElement(u.a.Title,null," ",t),r.a.createElement("hr",null),o&&r.a.createElement(u.a.Text,null,o)))}function B(){var e=Object(l.useContext)(N.a).MAIN_NEWS,a=void 0===e?[]:e;return a.length&&r.a.createElement(i.a,{as:"section",className:"py-5"},r.a.createElement(v.a,null,"Новости и акции"),r.a.createElement(f.a,null,"Mollit deserunt esse labore do consequat."),r.a.createElement(L,null,a.map((function(e,a){return r.a.createElement(T,Object.assign({key:a+"_news"},e,{index:a}))}))))}a.default=function(){return r.a.createElement(n.a,{pageInfo:{pageName:"index"}},r.a.createElement(c.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(y,null),r.a.createElement(B,null))}},FNhl:function(e){e.exports=JSON.parse('{"ru":{"title":"Автобусные билеты","departure":{"label":"Откуда","placeholder":"Откуда","required":"true","text":"loream ipsulm"},"arrival":{"label":"Куда","placeholder":"Куда","required":"true","text":"loream ipsulm"},"date_departure":{"label":"Дата отправления","placeholder":"Туда","required":"true","text":"loream ipsulm"},"date_arrival":{"label":"Дата отправления","placeholder":"Обратно","required":"true","text":"loream ipsulm"},"seats":{"label":"Мест","placeholder":"Пассажиров","required":"true","text":"loream ipsulm"},"adults":{"title":"Взрослых","subtitle":"12 и старше"},"children":{"title":"Взрослых","subtitle":"до 12 лет"},"benefic":{"title":"Льготный","subtitle":"старше 62 и инвалиды."},"submit":"Искать"}}')},uuXO:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),n=t("QojX"),c=t("JI6e"),o=t("cWnB"),s=t("FNhl"),i=t("NIcq"),m=t("Wbzz");function u(e,a){var t=e.language,u=void 0===t?"ru":t,d=e.type;return"hor"!=(void 0===d?null:d)?r.a.createElement(l.Fragment,null,r.a.createElement(n.a,{id:"bookingBus",className:"d-block"},r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{as:c.a,controlId:"departure",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:s.ru.departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.j,null))),r.a.createElement(n.a.Group,{as:c.a,controlId:"arrival",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:s.ru.arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.j,null)))),r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{as:c.a,controlId:"date_departure",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:s.ru.date_departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.b,null))),r.a.createElement(n.a.Group,{as:c.a,controlId:"date_arrival",className:"position-relative"},r.a.createElement(n.a.Control,{disabled:!0,type:"text",placeholder:s.ru.date_arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.b,null)))),r.a.createElement(n.a.Group,{controlId:"seats",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:s[u].seats.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.h,null))),r.a.createElement(m.Link,{to:"/offers",className:"text-white"},r.a.createElement(o.a,{variant:"primary",type:"submit",className:"btn-block"},s[u].submit)))):r.a.createElement(l.Fragment,null,r.a.createElement(n.a,{id:"bookingBus",className:"d-block",ref:a},r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{controlId:"departure",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:s.ru.departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.j,null))),r.a.createElement(n.a.Group,{controlId:"arrival",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:s.ru.arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.j,null))),r.a.createElement(n.a.Group,{controlId:"date_departure",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:s.ru.date_departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.b,null))),r.a.createElement(n.a.Group,{controlId:"date_arrival",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{disabled:!0,type:"text",placeholder:s.ru.date_arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.b,null))),r.a.createElement(n.a.Group,{controlId:"seats",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:s[u].seats.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(i.h,null))),r.a.createElement(n.a.Group,{className:"position-relative col-sm-6 col-lg"},r.a.createElement(m.Link,{to:"/offers",className:"text-white"},r.a.createElement(o.a,{variant:"primary",type:"submit",className:"btn-block"},s[u].submit))))))}a.a=r.a.forwardRef(u)},uzDm:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var l=t("q1tI"),r=t.n(l);function n(e){var a=e.children;return r.a.createElement("h2",{className:"text-6 text-center mb-3"},a)}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-45eb2267610e5bc4c7e0.js.map