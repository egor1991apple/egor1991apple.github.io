(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6xyR":function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),n=t("TSYQ"),c=t.n(n),m=t("q1tI"),s=t.n(m),i=t("vUet"),o=t("YdCC"),u=t("U1MP"),d=t("Wzyw"),E=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.variant,o=e.as,u=void 0===o?"img":o,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),E=Object(i.b)(t,"card-img");return s.a.createElement(u,Object(l.a)({ref:a,className:c()(m?E+"-"+m:E,n)},d))}));E.displayName="CardImg",E.defaultProps={variant:null};var p=E,b=Object(u.a)("h5"),f=Object(u.a)("h6"),x=Object(o.a)("card-body"),N=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.bg,u=e.text,E=e.border,p=e.body,b=e.children,f=e.as,N=void 0===f?"div":f,g=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(i.b)(t,"card"),h=Object(m.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return s.a.createElement(d.a.Provider,{value:h},s.a.createElement(N,Object(l.a)({ref:a},g,{className:c()(n,v,o&&"bg-"+o,u&&"text-"+u,E&&"border-"+E)}),p?s.a.createElement(x,null,b):b))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=p,N.Title=Object(o.a)("card-title",{Component:b}),N.Subtitle=Object(o.a)("card-subtitle",{Component:f}),N.Body=x,N.Link=Object(o.a)("card-link",{Component:"a"}),N.Text=Object(o.a)("card-text",{Component:"p"}),N.Header=Object(o.a)("card-header"),N.Footer=Object(o.a)("card-footer"),N.ImgOverlay=Object(o.a)("card-img-overlay");a.a=N},"V/m9":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var l=t("q1tI"),r=t.n(l),n=t("L12J"),c=t("7vrA"),m=t("3Z9Z"),s=t("JI6e"),i=t("6xyR"),o=(t("dRSK"),t("U5uR")),u=t("NIcq"),d=t("X13+");function E(e){var a=e.points,t=void 0===a?[]:a;return r.a.createElement("ul",{className:"list-points"},t.map((function(e,a){var l=e.city,n=e.durationTime,c=e.address,m=e.date,s=e.time;if(0===a||a===t.length-1)return r.a.createElement("li",{className:"list-points--item ",key:a+"_"+l},0===a?r.a.createElement("div",{className:"points-icon"},r.a.createElement(u.j,null)):"",a===t.length-1?r.a.createElement("div",{className:"points-icon"},r.a.createElement(d.d,null)):"",r.a.createElement("div",{className:"text-5"},s||""," ",r.a.createElement("sup",{className:" px-1 rounded bg-primary text-white "}," ",m||""," ")),r.a.createElement("div",{className:"text-3 text-primary"},l||""),r.a.createElement("small",{className:"d-inline-block "},c||""),0!=n&&a!==t.length-1?r.a.createElement("span",{className:"durtionTime text-muted"},r.a.createElement(d.b,null)," в пути: ",n||""):"")})))}function p(){var e=Object(l.useContext)(o.a).BASKET,a=function(){var e=Object(l.useContext)(o.a).BASKET;try{var a=e[0],t=e[1];return{FROM:a.length?a.find((function(e){var a=e.status,t=e.offers;return 1==a&&t})):null,BACK:t.length?t.find((function(e){var a=e.status,t=e.offers;return 1==a&&t})):null}}catch(r){return[]}}(),t=a.FROM,n=void 0===t?null:t,c=a.BACK,m=void 0===c?null:c;return r.a.createElement(s.a,{lg:"3",className:"border-left-dashed ticket-styled big"},r.a.createElement(i.a,{className:"border-0 sticky-top"},n?r.a.createElement(i.a.Header,{className:"px-1 bg-header bg-white"},r.a.createElement("div",{className:"text-5"},n.offers.route[0].city," ",r.a.createElement(d.a,null)," ",n.offers.route[n.offers.route.length-1].city),n&&m?r.a.createElement("span",{className:"text-muted"},"туда и обратно"):r.a.createElement("span",{className:"text-muted"},"в одну сторону")):null,n?r.a.createElement(i.a.Body,{className:"px-1 "},r.a.createElement(E,{points:n.offers.route}),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement(u.i,{size:"16",className:"text-dark mr-1"})," ",e[0].length," места:"," ",e[0].map((function(a,t){var l=a.place;return r.a.createElement("span",{className:"ml-1"},l,t!==e[0].length-1?", ":" ")})),r.a.createElement("span",{className:"cursor text-danger ml-auto"},"изменить..."))):"",m?r.a.createElement(i.a.Body,{className:"px-1 border-top"},r.a.createElement(E,{points:m.offers.route}),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement(u.i,{size:"16",className:"text-dark mr-1"})," ",e[0].length," места:"," ",e[1].map((function(a,t){var l=a.place;return r.a.createElement("span",{className:"ml-1"},l,t!==e[1].length-1?", ":" ")})),r.a.createElement("span",{className:"cursor text-danger ml-auto"},"изменить..."))):"",r.a.createElement(i.a.Footer,{className:"bg-white text-center text-4"},"Итого:")))}var b=t("QojX"),f=t("cWnB");function x(){return r.a.createElement(b.a,null,r.a.createElement(b.a.Row,{className:"mt-3"},r.a.createElement(s.a,{lg:"4"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Имя"),r.a.createElement(b.a.Control,{size:"md",placeholder:"Ваше имя"}))),r.a.createElement(s.a,{lg:"4"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Фамилия"),r.a.createElement(b.a.Control,{size:"md",placeholder:"Ваша фамилия"}))),r.a.createElement(s.a,{lg:"4"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Отчество"),r.a.createElement(b.a.Control,{size:"md",placeholder:"Ваше отчество"}))),r.a.createElement(s.a,{lg:"4"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Пасспорт"),r.a.createElement(b.a.Control,{size:"md",placeholder:"Номер пасспорта"}))),r.a.createElement(s.a,{lg:"4"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Дата рождения"),r.a.createElement(b.a.Control,{size:"md",placeholder:"Дата рождения"}))),r.a.createElement(s.a,{lg:"4"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Гражданство"),r.a.createElement(b.a.Control,{size:"md",as:"select",custom:!0},r.a.createElement("option",null,"Республика беларусь"),r.a.createElement("option",null,"Российская федерация"))))))}function N(){return r.a.createElement(b.a,null,r.a.createElement(b.a.Row,{className:"mt-3"},r.a.createElement(s.a,{lg:"6"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Имя"),r.a.createElement(b.a.Control,{size:"md",placeholder:"Ваше имя"}))),r.a.createElement(s.a,{lg:"6"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Label,null,"Номер телефона"),r.a.createElement(b.a.Control,{size:"md",placeholder:"Ваша номер телефона"})))))}function g(){var e=function(){var e=Object(l.useContext)(o.a).BASKET,a=void 0===e?{}:e;try{var t=a[0],r=a[1];return t.length>r.length?t.length:r.length}catch(n){return 0}}();return r.a.createElement(s.a,{lg:"9"},r.a.createElement(i.a,{className:"border-0"},function(){for(var a=[],t=1;t<=e;t++)a.push(r.a.createElement(i.a.Body,{className:"border-bottom"},r.a.createElement("div",{className:"text-6 mb-3"},"Пассажир №",t),r.a.createElement("p",{className:"text-dark line-height-14 mb-4"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla molestias quibusdam corrupti temporibus, quidem ducimus quis ut sapiente doloribus quasi recusandae obcaecati cum harum? A nobis esse excepturi! Repudiandae?"),r.a.createElement(x,{indexPassenger:t})));return a}()),r.a.createElement(i.a,{className:"border-0"},r.a.createElement(i.a.Body,null,r.a.createElement("div",{className:"text-6 mb-3"},"Информация о покупателе"),r.a.createElement("p",{className:"text-dark line-height-14 mb-4"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla molestias quibusdam corrupti temporibus, quidem ducimus quis ut sapiente doloribus quasi recusandae obcaecati cum harum? A nobis esse excepturi! Repudiandae?"),r.a.createElement(N,null)),r.a.createElement("div",{className:"px-3"},r.a.createElement(i.a.Footer,{className:"mb-4 p-4 border rounded"},r.a.createElement("div",{className:"text-6 mb-3 pb-2 d-flex border-bottom"},"К оплате: ",r.a.createElement("span",{className:"text-danger ml-auto"},"200 USD")),r.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sed alias, labore minus numquam amet possimus inventore quisquam iusto obcaecati aliquam aspernatur eveniet saepe dicta sint ea architecto nobis quod."),r.a.createElement("div",{className:"pb-3"},r.a.createElement(b.a.Group,{controlId:"formBasicCheckbox",className:"d-flex mb-0"},r.a.createElement(b.a.Check,{type:"checkbox"}),r.a.createElement(b.a,{className:"Labl"},"Я принимаю"," ",r.a.createElement("u",{className:"cursor text-warning text-underline"},"условия пользовательского соглашения")," ","lorem ipsum dolor sit amet consectetur adipisicing elit.")),r.a.createElement(b.a.Group,{controlId:"formBasicCheckbox",className:"d-flex mb-0"},r.a.createElement(b.a.Check,{type:"checkbox"}),r.a.createElement(b.a,{className:"Labl"},"Я даю"," ",r.a.createElement("u",{className:"cursor text-warning"},"согласие на обработку пользовательских данных")," ","Lorem ipsum dolor sit amet consectetur adipisicing elit."))),r.a.createElement(f.a,{variant:"danger",className:"btn-block"},"Оплатить")))))}function v(e){var a=Object(l.useRef)(null);return r.a.createElement("div",{ref:a})}var h=function(){return r.a.createElement(s.a,{lg:"3",className:"ml-auto pb-3"},r.a.createElement("div",{className:"bg-danger  text-white rounded w-100 d-flex align-items-center"},r.a.createElement("div",{className:"text-4 py-2 px-3 text-white border-right flex-grow-1"},"Заказ №1234"),r.a.createElement("div",{className:"text-4 py-2 px-3 text-white border-right"},r.a.createElement(v,{options:{prefix:"seconds elapsed!",delay:1e3}})),r.a.createElement("div",{className:"px-2"},r.a.createElement(u.a,{className:"cursor text-white ",size:"32"}))))};function y(){return r.a.createElement(n.a,{pageInfo:{pageName:"routes"}},r.a.createElement(c.a,{className:"my-5 "},r.a.createElement(m.a,null,r.a.createElement(h,null)),r.a.createElement(m.a,{className:"bg-white border-radius border rounded mx-0"},r.a.createElement(g,null),r.a.createElement(p,null))))}}}]);
//# sourceMappingURL=component---src-pages-basket-jsx-f21adbce871d1b46e2c9.js.map