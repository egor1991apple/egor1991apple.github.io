(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4xu4":function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var l=t("q1tI"),r=t.n(l);function n(e){var a=e.children;return r.a.createElement("p",{className:"lead mb-4 text-center"},a)}},"6xyR":function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),n=t("TSYQ"),c=t.n(n),o=t("q1tI"),i=t.n(o),s=t("vUet"),m=t("YdCC"),u=t("U1MP"),d=t("Wzyw"),p=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.variant,m=e.as,u=void 0===m?"img":m,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(s.b)(t,"card-img");return i.a.createElement(u,Object(l.a)({ref:a,className:c()(o?p+"-"+o:p,n)},d))}));p.displayName="CardImg",p.defaultProps={variant:null};var E=p,v=Object(u.a)("h5"),b=Object(u.a)("h6"),f=Object(m.a)("card-body"),N=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.bg,u=e.text,p=e.border,E=e.body,v=e.children,b=e.as,N=void 0===b?"div":b,x=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(s.b)(t,"card"),y=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return i.a.createElement(d.a.Provider,{value:y},i.a.createElement(N,Object(l.a)({ref:a},x,{className:c()(n,h,m&&"bg-"+m,u&&"text-"+u,p&&"border-"+p)}),E?i.a.createElement(f,null,v):v))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=E,N.Title=Object(m.a)("card-title",{Component:v}),N.Subtitle=Object(m.a)("card-subtitle",{Component:b}),N.Body=f,N.Link=Object(m.a)("card-link",{Component:"a"}),N.Text=Object(m.a)("card-text",{Component:"p"}),N.Header=Object(m.a)("card-header"),N.Footer=Object(m.a)("card-footer"),N.ImgOverlay=Object(m.a)("card-img-overlay");a.a=N},Dtc0:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),n=t("L12J"),c=t("vrFN"),o=t("uuXO");var i=function(e){var a,t,n=e.children,c=Object(l.useRef)(null);a=Object(l.useState)(0),t=a[0],a[1];return r.a.createElement("div",null,r.a.cloneElement(n,{ref:c}))},s=t("7vrA");function m(){return r.a.createElement("section",{className:"bg-form py-5"},r.a.createElement(s.a,{className:"py-5 zIndex"},r.a.createElement(i,null,r.a.createElement(o.a,{type:"hor"}))))}var u=t("X4Au"),d=t("3Z9Z"),p=t("JI6e"),E=t("uzDm"),v=t("4xu4"),b=t("U5uR");function f(){var e=Object(l.useContext)(b.a).ROUTES.data,a=void 0===e?[]:e;return a.length&&r.a.createElement(s.a,{as:"section",className:"py-5"},r.a.createElement(E.a,null,"Лучшие предложения"),r.a.createElement(v.a,null,"Nulla minim laboris occaecat cillum aliqua dolore ipsum."),r.a.createElement(d.a,null,a.map((function(e,a){return r.a.createElement(p.a,{md:"6",lg:"4",key:a+"_bestOffers",className:"mb-4"},r.a.createElement(u.a,e))}))))}function N(e){var a=e.title,t=void 0===a?null:a,l=e.subtitle,n=void 0===l?null:l,c=e.icon,o=void 0===c?null:c;return r.a.createElement("div",{className:"featured-box text-center "},o&&r.a.createElement("img",{src:o,alt:"title",className:"pb-2"}),t&&r.a.createElement("h4",null," ",t),n&&r.a.createElement("p",null,n," "))}function x(){var e=Object(l.useContext)(b.a).MAIN_WHY_WE_ARE,a=void 0===e?[]:e;return a.length&&r.a.createElement("div",{className:"bg-white"},r.a.createElement(s.a,{as:"section",className:"py-5"},r.a.createElement(d.a,{className:"justify-content-center"},a.map((function(e,a){return r.a.createElement(p.a,{md:"4",key:a+"_card_we_are",className:"col-lg"},r.a.createElement(N,e))})))))}var h=t("wx14"),y=t("zLVn"),g=t("TSYQ"),j=t.n(g),O=t("JCAc"),C=t("vUet"),I=t("ILyh"),w=r.a.createContext(null);var k=r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"button":t,c=e.children,o=e.eventKey,i=e.onClick,s=Object(y.a)(e,["as","children","eventKey","onClick"]),m=function(e,a){var t=Object(l.useContext)(w),r=Object(l.useContext)(I.a);return function(l){r(e===t?null:e,l),a&&a(l)}}(o,i);return"button"===n&&(s.type="button"),r.a.createElement(n,Object(h.a)({ref:a,onClick:m},s),c)})),_=t("vYJ8"),q=r.a.forwardRef((function(e,a){var t=e.children,n=e.eventKey,c=Object(y.a)(e,["children","eventKey"]),o=Object(l.useContext)(w);return r.a.createElement(_.a,Object(h.a)({ref:a,in:o===n},c),r.a.createElement("div",null,r.a.Children.only(t)))}));q.displayName="AccordionCollapse";var R=q,S=r.a.forwardRef((function(e,a){var t=Object(O.a)(e,{activeKey:"onSelect"}),l=t.as,n=void 0===l?"div":l,c=t.activeKey,o=t.bsPrefix,i=t.children,s=t.className,m=t.onSelect,u=Object(y.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return o=Object(C.b)(o,"accordion"),r.a.createElement(w.Provider,{value:c},r.a.createElement(I.a.Provider,{value:m},r.a.createElement(n,Object(h.a)({ref:a},u,{className:j()(s,o)}),i)))}));S.Toggle=k,S.Collapse=R;var A=S,P=t("6xyR");function G(e){var a=e.data,t=void 0===a?[]:a,l=function(e){return function(a){var t=document.querySelectorAll("#questionAccardion a");t.forEach((function(a,t){return t!=e&&a.classList.remove("active")})),t[e].classList.toggle("active")}};return t.length&&r.a.createElement(A,{id:"questionAccardion"},t.map((function(e,a){var t=e.title,n=void 0===t?null:t,c=e.text,o=void 0===c?null:c;return r.a.createElement(P.a,{key:a+"_question",className:"rounded"},r.a.createElement(P.a.Header,null,r.a.createElement(A.Toggle,{as:"h5",eventKey:a,className:"mb-0",onClick:l(a)},r.a.createElement("a",{className:"collapsed"},n))),r.a.createElement(A.Collapse,{eventKey:a},r.a.createElement(P.a.Body,null,o||"")))})))}function T(e){var a=e.children;return r.a.createElement("div",{className:"bg-light shadow-md rounded py-5 my-4 container px-4"},a)}function z(){var e=Object(l.useContext)(b.a).MAIN_QUESTION_ANSWER,a=void 0===e?[]:e;return a.length&&r.a.createElement(s.a,{as:"section"},r.a.createElement(T,null,r.a.createElement(E.a,null,"Вопрос ответ"),r.a.createElement(v.a,null,"lorAd nostrud proident quis consequat velit adipisicing eiusmod elit excepteur."),r.a.createElement(G,{data:a})))}t("91GP");var K=t("YdCC"),L=Object(K.a)("card-deck"),B=(t("tUrg"),t("Wbzz")),J=t("NIcq");function U(e){var a=e.title,t=void 0===a?null:a,l=e.date,n=void 0===l?null:l,c=e.text,o=void 0===c?null:c,i=e.img,s=void 0===i?null:i,m=(e.see,e.link),u=void 0===m?null:m;e.index;return r.a.createElement(P.a,{as:B.Link,to:u},s&&r.a.createElement(P.a.Img,{src:s}),r.a.createElement(P.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between mb-2"},n&&r.a.createElement(P.a.Subtitle,{className:"color-secondary"}," ",r.a.createElement(J.b,null)," ",n)),t&&r.a.createElement(P.a.Title,null," ",t),r.a.createElement("hr",null),o&&r.a.createElement(P.a.Text,null,o)))}function W(){var e=Object(l.useContext)(b.a).MAIN_NEWS,a=void 0===e?[]:e;return a.length&&r.a.createElement(s.a,{as:"section",className:"py-5"},r.a.createElement(E.a,null,"Новости и акции"),r.a.createElement(v.a,null,"Mollit deserunt esse labore do consequat."),r.a.createElement(L,null,a.map((function(e,a){return r.a.createElement(U,Object.assign({key:a+"_news"},e,{index:a}))}))))}a.default=function(){return r.a.createElement(n.a,{pageInfo:{pageName:"index"}},r.a.createElement(c.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),r.a.createElement(m,null),r.a.createElement(f,null),r.a.createElement(x,null),r.a.createElement(W,null),r.a.createElement(z,null))}},FNhl:function(e){e.exports=JSON.parse('{"ru":{"title":"Автобусные билеты","departure":{"label":"Откуда","placeholder":"Откуда","required":"true","text":"loream ipsulm"},"arrival":{"label":"Куда","placeholder":"Куда","required":"true","text":"loream ipsulm"},"date_departure":{"label":"Дата отправления","placeholder":"Туда","required":"true","text":"loream ipsulm"},"date_arrival":{"label":"Дата отправления","placeholder":"Обратно","required":"true","text":"loream ipsulm"},"seats":{"label":"Мест","placeholder":"Пассажиров","required":"true","text":"loream ipsulm"},"adults":{"title":"Взрослых","subtitle":"12 и старше"},"children":{"title":"Взрослых","subtitle":"до 12 лет"},"benefic":{"title":"Льготный","subtitle":"старше 62 и инвалиды."},"submit":"Искать"}}')},X4Au:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("tUrg");var l=t("q1tI"),r=t.n(l),n=t("6xyR"),c=t("Wbzz"),o=t("X13+");function i(e){var a=e.title,t=void 0===a?[]:a,l=(e.date,e.cost),i=void 0===l?null:l,s=e.currency,m=void 0===s?null:s,u=e.link,d=void 0===u?null:u,p=e.route,E=void 0===p?"":p,v=e.img,b=void 0===v?"":v;return r.a.createElement(n.a,{as:c.Link,to:d,className:"d-flex flex-row flex-wrap overflow-hidden"},r.a.createElement("div",{className:"card-img-container"},b&&r.a.createElement("img",{src:b,className:"img-cover"})),r.a.createElement(n.a.Body,{className:" py-3 d-flex flex-column"},r.a.createElement(n.a.Text,{className:"text-muted d-flex align-items-center"},E," ",r.a.createElement("div",{className:"border bg-primary text-white rounded-circle ml-auto d-flex display-onHover",style:{width:"25px",height:"25px"}},r.a.createElement(o.a,{className:"m-auto",style:{transform:"translate(0px,0px)"}}))),r.a.createElement(n.a.Title,{className:"d-flex align-items-center mb-1 mt-auto"},t.length?t[0]:""," ",r.a.createElement(o.a,{className:"mx-2"}),t.length?t[1]:""," "),r.a.createElement(n.a.Subtitle,{className:"text-muted"},"от ",i||"",m||"")))}},uuXO:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),n=t("QojX"),c=t("JI6e"),o=t("cWnB"),i=t("FNhl"),s=t("NIcq");function m(e,a){var t=e.language,m=void 0===t?"ru":t,u=e.type;return"hor"!=(void 0===u?null:u)?r.a.createElement(l.Fragment,null,r.a.createElement(n.a,{id:"bookingBus",className:"d-block"},r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{as:c.a,controlId:"departure",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.j,null))),r.a.createElement(n.a.Group,{as:c.a,controlId:"arrival",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.j,null)))),r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{as:c.a,controlId:"date_departure",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.date_departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.b,null))),r.a.createElement(n.a.Group,{as:c.a,controlId:"date_arrival",className:"position-relative"},r.a.createElement(n.a.Control,{disabled:!0,type:"text",placeholder:i.ru.date_arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.b,null)))),r.a.createElement(n.a.Group,{controlId:"seats",className:"position-relative"},r.a.createElement(n.a.Control,{type:"text",placeholder:i[m].seats.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.h,null))),r.a.createElement(o.a,{variant:"primary",type:"submit",className:"btn-block"},i[m].submit))):r.a.createElement(l.Fragment,null,r.a.createElement(n.a,{id:"bookingBus",className:"d-block",ref:a},r.a.createElement(n.a.Row,null,r.a.createElement(n.a.Group,{controlId:"departure",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.j,null))),r.a.createElement(n.a.Group,{controlId:"arrival",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.j,null))),r.a.createElement(n.a.Group,{controlId:"date_departure",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:i.ru.date_departure.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.b,null))),r.a.createElement(n.a.Group,{controlId:"date_arrival",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{disabled:!0,type:"text",placeholder:i.ru.date_arrival.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.b,null))),r.a.createElement(n.a.Group,{controlId:"seats",className:"position-relative col-sm-6 col-lg"},r.a.createElement(n.a.Control,{type:"text",placeholder:i[m].seats.placeholder}),r.a.createElement("span",{className:"icon-inside"},r.a.createElement(s.h,null))),r.a.createElement(n.a.Group,{className:"position-relative col-sm-6 col-lg"},r.a.createElement(o.a,{variant:"primary",type:"submit",className:"btn-block"},i[m].submit)))))}a.a=r.a.forwardRef(m)},uzDm:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var l=t("q1tI"),r=t.n(l);function n(e){var a=e.children;return r.a.createElement("h2",{className:"text-6 text-center mb-3"},a)}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-75755e6446148202d45b.js.map