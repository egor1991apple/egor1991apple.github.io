(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4xu4":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("q1tI"),n=a.n(r);function l(e){var t=e.children;return n.a.createElement("p",{className:"lead mb-4 text-center"},t)}},"6xyR":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("TSYQ"),c=a.n(l),o=a("q1tI"),i=a.n(o),s=a("vUet"),u=a("YdCC"),m=a("U1MP"),d=a("Wzyw"),p=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.variant,u=e.as,m=void 0===u?"img":u,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),p=Object(s.b)(a,"card-img");return i.a.createElement(m,Object(r.a)({ref:t,className:c()(o?p+"-"+o:p,l)},d))}));p.displayName="CardImg",p.defaultProps={variant:null};var b=p,v=Object(m.a)("h5"),f=Object(m.a)("h6"),E=Object(u.a)("card-body"),h=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,u=e.bg,m=e.text,p=e.border,b=e.body,v=e.children,f=e.as,h=void 0===f?"div":f,N=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(s.b)(a,"card"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return i.a.createElement(d.a.Provider,{value:x},i.a.createElement(h,Object(r.a)({ref:t},N,{className:c()(l,O,u&&"bg-"+u,m&&"text-"+m,p&&"border-"+p)}),b?i.a.createElement(E,null,v):v))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=b,h.Title=Object(u.a)("card-title",{Component:v}),h.Subtitle=Object(u.a)("card-subtitle",{Component:f}),h.Body=E,h.Link=Object(u.a)("card-link",{Component:"a"}),h.Text=Object(u.a)("card-text",{Component:"p"}),h.Header=Object(u.a)("card-header"),h.Footer=Object(u.a)("card-footer"),h.ImgOverlay=Object(u.a)("card-img-overlay");t.a=h},Dtc0:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),n=a.n(r),l=a("L12J"),c=a("vrFN"),o=a("uuXO"),i=(a("QojX"),a("JI6e")),s=(a("cWnB"),a("tYAf"),a("NIcq")),u=a("Wbzz");a("tUrg"),a("XfO3"),a("HEwt"),a("0l/t");var m=a("wx14"),d=a("zLVn"),p=a("ZCiN");var b=function(e,t){var a=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},v=(a("eM6i"),a("XcHJ")),f=a("i52p"),E=Math.pow(2,31)-1;function h(){var e=Object(v.a)(),t=Object(r.useRef)();return Object(f.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(r,n){void 0===n&&(n=0),e()&&(a(),n<=E?t.current=setTimeout(r,n):function e(t,a,r){var n=r-Date.now();t.current=n<=E?setTimeout(a,n):setTimeout((function(){return e(t,a,r)}),E)}(t,r,Date.now()+n))},clear:a}}),[])}var N=a("TSYQ"),O=a.n(N),x=a("YECM"),j=a("dRu9"),y=a("JCAc"),g=a("YdCC"),k=Object(g.a)("carousel-caption",{Component:"div"}),C=Object(g.a)("carousel-item"),I=a("noGa"),w=a("dbZe"),S=a("vUet"),T=a("z+q/"),R={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:n.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:n.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var _=n.a.forwardRef((function(e,t){var a=Object(y.a)(e,{activeIndex:"onSelect"}),l=a.as,c=void 0===l?"div":l,o=a.bsPrefix,i=a.slide,s=a.fade,u=a.controls,v=a.indicators,f=a.activeIndex,E=a.onSelect,N=a.onSlide,g=a.onSlid,k=a.interval,C=a.keyboard,R=a.onKeyDown,_=a.pause,M=a.onMouseOver,q=a.onMouseOut,L=a.wrap,P=a.touch,G=a.onTouchStart,z=a.onTouchMove,A=a.onTouchEnd,D=a.prevIcon,J=a.prevLabel,H=a.nextIcon,W=a.nextLabel,B=a.className,X=a.children,Y=Object(d.a)(a,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),F=Object(S.b)(o,"carousel"),U=Object(r.useRef)(null),K=Object(r.useState)("next"),Q=K[0],V=K[1],Z=Object(r.useState)(!1),$=Z[0],ee=Z[1],te=Object(r.useState)(f),ae=te[0],re=te[1];$||f===ae||(U.current?(V(U.current),U.current=null):V(f>ae?"next":"prev"),i&&ee(!0),re(f));var ne=n.a.Children.toArray(X).filter(n.a.isValidElement).length,le=Object(r.useCallback)((function(e){if(!$){var t=ae-1;if(t<0){if(!L)return;t=ne-1}U.current="prev",E(t,e)}}),[$,ae,E,L,ne]),ce=Object(p.a)((function(e){if(!$){var t=ae+1;if(t>=ne){if(!L)return;t=0}U.current="next",E(t,e)}})),oe=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:oe.current,prev:le,next:ce}}));var ie=Object(p.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(oe.current)&&ce()})),se="next"===Q?"left":"right";b((function(){i||(N&&N(ae,se),g&&g(ae,se))}),[ae]);var ue=F+"-item-"+Q,me=F+"-item-"+se,de=Object(r.useCallback)((function(e){Object(T.a)(e),N&&N(ae,se)}),[N,ae,se]),pe=Object(r.useCallback)((function(){ee(!1),g&&g(ae,se)}),[g,ae,se]),be=Object(r.useCallback)((function(e){if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void le(e);case"ArrowRight":return e.preventDefault(),void ce(e)}R&&R(e)}),[C,R,le,ce]),ve=Object(r.useState)(!1),fe=ve[0],Ee=ve[1],he=Object(r.useCallback)((function(e){"hover"===_&&Ee(!0),M&&M(e)}),[_,M]),Ne=Object(r.useCallback)((function(e){Ee(!1),q&&q(e)}),[q]),Oe=Object(r.useRef)(0),xe=Object(r.useRef)(0),je=Object(r.useState)(!1),ye=je[0],ge=je[1],ke=h(),Ce=Object(r.useCallback)((function(e){Oe.current=e.touches[0].clientX,xe.current=0,P&&ge(!0),G&&G(e)}),[P,G]),Ie=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?xe.current=0:xe.current=e.touches[0].clientX-Oe.current,z&&z(e)}),[z]),we=Object(r.useCallback)((function(e){if(P){var t=xe.current;if(Math.abs(t)<=40)return;t>0?le(e):ce(e)}ke.set((function(){ge(!1)}),k),A&&A(e)}),[P,le,ce,ke,k,A]),Se=null!=k&&!fe&&!ye&&!$,Te=Object(r.useRef)();Object(r.useEffect)((function(){if(Se)return Te.current=setInterval(document.visibilityState?ie:ce,k),function(){clearInterval(Te.current)}}),[Se,ce,k,ie]);var Re=Object(r.useMemo)((function(){return v&&Array.from({length:ne},(function(e,t){return function(e){E(t,e)}}))}),[v,ne,E]);return n.a.createElement(c,Object(m.a)({ref:oe},Y,{onKeyDown:be,onMouseOver:he,onMouseOut:Ne,onTouchStart:Ce,onTouchMove:Ie,onTouchEnd:we,className:O()(B,F,i&&"slide",s&&F+"-fade")}),v&&n.a.createElement("ol",{className:F+"-indicators"},Object(I.b)(X,(function(e,t){return n.a.createElement("li",{key:t,className:t===ae?"active":null,onClick:Re[t]})}))),n.a.createElement("div",{className:F+"-inner"},Object(I.b)(X,(function(e,t){var a=t===ae;return i?n.a.createElement(j.e,{in:a,onEnter:a?de:null,onEntered:a?pe:null,addEndListener:x.a},(function(t){return n.a.cloneElement(e,{className:O()(e.props.className,a&&"entered"!==t&&ue,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&me)})})):n.a.cloneElement(e,{className:O()(e.props.className,a&&"active")})}))),u&&n.a.createElement(n.a.Fragment,null,(L||0!==f)&&n.a.createElement(w.a,{className:F+"-control-prev",onClick:le},D,J&&n.a.createElement("span",{className:"sr-only"},J)),(L||f!==ne-1)&&n.a.createElement(w.a,{className:F+"-control-next",onClick:ce},H,W&&n.a.createElement("span",{className:"sr-only"},W))))}));_.displayName="Carousel",_.defaultProps=R,_.Caption=k,_.Item=C;var M=a("U5uR");a("ONTO");var q=a("7vrA"),L=a("3Z9Z");a("Jz+W"),a("KD6P");var P=function(e){var t,a,l=e.children,c=Object(r.useRef)(null);t=Object(r.useState)(0),a=t[0],t[1];return n.a.createElement("div",null,n.a.cloneElement(l,{ref:c}))};function G(){return n.a.createElement("section",{className:"bg-form py-5"},n.a.createElement(q.a,{className:"py-5 zIndex"},n.a.createElement(P,null,n.a.createElement(o.a,{type:"hor"}))))}var z=a("6xyR");function A(e){var t=e.title,a=void 0===t?null:t,r=e.subtitle,l=void 0===r?null:r,c=e.img,o=void 0===c?null:c,i=(e.see,e.link),s=void 0===i?null:i;return n.a.createElement(z.a,{as:u.Link,to:s},o&&n.a.createElement(z.a.Img,{src:o,style:{minHeight:250}}),n.a.createElement(z.a.Body,{style:D},a&&n.a.createElement(z.a.Title,{className:"mb-1"}," ",a),n.a.createElement(z.a.Subtitle,{className:"color-secondary text-2"}," ",l)))}var D={position:"absolute",bottom:0,left:0,color:"white",width:"100%",minHeight:"75px",background:"linear-gradient(0deg, black, transparent)"},J=a("uzDm");a("4xu4");function H(){var e=Object(r.useContext)(M.a).SERVISES,t=void 0===e?[]:e;return t.length&&n.a.createElement("section",{className:"bg-light-1"},n.a.createElement(q.a,{className:"py-5"},n.a.createElement(J.a,null,"Наши услуги"),n.a.createElement(L.a,{className:"pt-3"},t.map((function(e,t){return n.a.createElement(i.a,{md:"6",lg:"4",key:t+"_servises",className:"mb-4"},n.a.createElement(A,e))})))))}function W(e){var t=e.title,a=void 0===t?null:t,r=e.subtitle,l=void 0===r?null:r,c=e.icon,o=void 0===c?null:c;return n.a.createElement("div",{className:"featured-box text-center "},o&&n.a.createElement("img",{src:o,alt:"title",className:"pb-2"}),a&&n.a.createElement("h4",null," ",a),l&&n.a.createElement("p",null,l," "))}function B(){var e=Object(r.useContext)(M.a).MAIN_WHY_WE_ARE,t=void 0===e?[]:e;return t.length&&n.a.createElement("div",{className:"bg-white"},n.a.createElement(q.a,{as:"section",className:"py-5"},n.a.createElement(L.a,{className:"justify-content-center"},t.map((function(e,t){return n.a.createElement(i.a,{md:"4",key:t+"_card_we_are",className:"col-lg"},n.a.createElement(W,e))})))))}var X=Object(g.a)("card-deck");function Y(e){var t=e.title,a=void 0===t?null:t,r=e.date,l=void 0===r?null:r,c=e.text,o=void 0===c?null:c,i=e.img,m=void 0===i?null:i,d=(e.see,e.link),p=void 0===d?null:d;e.index;return n.a.createElement(z.a,{as:u.Link,to:p},m&&n.a.createElement(z.a.Img,{src:m}),n.a.createElement(z.a.Body,null,n.a.createElement("div",{className:"d-flex justify-content-between mb-2"},l&&n.a.createElement(z.a.Subtitle,{className:"color-secondary"}," ",n.a.createElement(s.b,null)," ",l)),a&&n.a.createElement(z.a.Title,null," ",a),n.a.createElement("hr",null),o&&n.a.createElement(z.a.Text,null,o)))}function F(){var e=Object(r.useContext)(M.a).MAIN_NEWS,t=void 0===e?[]:e;return t.length&&n.a.createElement("section",{className:"bg-light-1"},n.a.createElement(q.a,{className:"py-5"},n.a.createElement(J.a,null,"Новости и акции"),n.a.createElement(X,{className:"pt-3"},t.map((function(e,t){return n.a.createElement(Y,Object.assign({key:t+"_news"},e,{index:t}))})))))}t.default=function(e){var t=e.location;return n.a.createElement(l.a,Object.assign({pageInfo:{pageName:"offers"}},t),n.a.createElement(c.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),n.a.createElement(G,null),n.a.createElement(H,null),n.a.createElement(B,null),n.a.createElement(F,null))}},FNhl:function(e){e.exports=JSON.parse('{"ru":{"title":"Автобусные билеты","departure":{"label":"Откуда","placeholder":"Откуда","required":"true","text":"loream ipsulm"},"arrival":{"label":"Куда","placeholder":"Куда","required":"true","text":"loream ipsulm"},"date_departure":{"label":"Дата отправления","placeholder":"Туда","required":"true","text":"loream ipsulm"},"date_arrival":{"label":"Дата отправления","placeholder":"Обратно","required":"true","text":"loream ipsulm"},"seats":{"label":"Мест","placeholder":"Пассажиров","required":"true","text":"loream ipsulm"},"adults":{"title":"Взрослых","subtitle":"12 и старше"},"children":{"title":"Взрослых","subtitle":"до 12 лет"},"benefic":{"title":"Льготный","subtitle":"старше 62 и инвалиды."},"submit":"Искать"}}')},ONTO:function(e){e.exports=JSON.parse('{"ru":{"link":"подробнее"}}')},tYAf:function(e){e.exports=JSON.parse('{"ru":{"title":"Автобусные билеты","departure":{"label":"Откуда","placeholder":"Откуда","required":"true","text":"loream ipsulm"},"arrival":{"label":"Куда","placeholder":"Куда","required":"true","text":"loream ipsulm"},"date_departure":{"label":"Дата отправления","placeholder":"Туда","required":"true","text":"loream ipsulm"},"date_arrival":{"label":"Дата отправления","placeholder":"Обратно","required":"true","text":"loream ipsulm"},"seats":{"label":"Мест","placeholder":"Пассажиров","required":"true","text":"loream ipsulm"},"adults":{"title":"Взрослых","subtitle":"12 и старше"},"children":{"title":"Взрослых","subtitle":"до 12 лет"},"benefic":{"title":"Льготный","subtitle":"старше 62 и инвалиды."},"submit":"Искать"}}')},uuXO:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("QojX"),c=a("JI6e"),o=a("cWnB"),i=a("FNhl"),s=a("NIcq"),u=a("Wbzz");function m(e,t){var a=e.language,m=void 0===a?"ru":a,d=e.type;return"hor"!=(void 0===d?null:d)?n.a.createElement(r.Fragment,null,n.a.createElement(l.a,{id:"bookingBus",className:"d-block"},n.a.createElement(l.a.Row,null,n.a.createElement(l.a.Group,{as:c.a,controlId:"departure",className:"position-relative"},n.a.createElement(l.a.Control,{type:"text",placeholder:i.ru.departure.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.k,null))),n.a.createElement(l.a.Group,{as:c.a,controlId:"arrival",className:"position-relative"},n.a.createElement(l.a.Control,{type:"text",placeholder:i.ru.arrival.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.k,null)))),n.a.createElement(l.a.Row,null,n.a.createElement(l.a.Group,{as:c.a,controlId:"date_departure",className:"position-relative"},n.a.createElement(l.a.Control,{type:"text",placeholder:i.ru.date_departure.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.b,null))),n.a.createElement(l.a.Group,{as:c.a,controlId:"date_arrival",className:"position-relative"},n.a.createElement(l.a.Control,{disabled:!0,type:"text",placeholder:i.ru.date_arrival.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.b,null)))),n.a.createElement(l.a.Group,{controlId:"seats",className:"position-relative"},n.a.createElement(l.a.Control,{type:"text",placeholder:i[m].seats.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.i,null))),n.a.createElement(u.Link,{to:"/offers",className:"text-white"},n.a.createElement(o.a,{variant:"primary",type:"submit",className:"btn-block"},i[m].submit)))):n.a.createElement(r.Fragment,null,n.a.createElement(l.a,{id:"bookingBus",className:"d-block",ref:t},n.a.createElement(l.a.Row,null,n.a.createElement(l.a.Group,{controlId:"departure",className:"position-relative col-sm-6 col-lg"},n.a.createElement(l.a.Control,{type:"text",placeholder:i.ru.departure.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.k,null))),n.a.createElement(l.a.Group,{controlId:"arrival",className:"position-relative col-sm-6 col-lg"},n.a.createElement(l.a.Control,{type:"text",placeholder:i.ru.arrival.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.k,null))),n.a.createElement(l.a.Group,{controlId:"date_departure",className:"position-relative col-sm-6 col-lg"},n.a.createElement(l.a.Control,{type:"text",placeholder:i.ru.date_departure.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.b,null))),n.a.createElement(l.a.Group,{controlId:"date_arrival",className:"position-relative col-sm-6 col-lg"},n.a.createElement(l.a.Control,{disabled:!0,type:"text",placeholder:i.ru.date_arrival.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.b,null))),n.a.createElement(l.a.Group,{controlId:"seats",className:"position-relative col-sm-6 col-lg"},n.a.createElement(l.a.Control,{type:"text",placeholder:i[m].seats.placeholder}),n.a.createElement("span",{className:"icon-inside"},n.a.createElement(s.i,null))),n.a.createElement(l.a.Group,{className:"position-relative col-sm-6 col-lg"},n.a.createElement(u.Link,{to:"/offers",className:"text-white"},n.a.createElement(o.a,{variant:"primary",type:"submit",className:"btn-block"},i[m].submit))))))}t.a=n.a.forwardRef(m)},uzDm:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("q1tI"),n=a.n(r);function l(e){var t=e.children;return n.a.createElement("h2",{className:"text-6 text-center mb-3"},t)}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8f2a35c0f3729c436299.js.map