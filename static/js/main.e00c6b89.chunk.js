(this.webpackJsonpavia=this.webpackJsonpavia||[]).push([[0],{31:function(e,t,a){e.exports=a(62)},36:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),i=a.n(c),l=(a(36),function(e){return{type:"SET_ALL_FILTERS",payload:e}}),o=a(9),s=a.n(o);function u(e){var t=e.enableFilters,a=e.onSetFilters,r=e.activeTransfers;return n.a.createElement("div",{className:"transfer-filter"},n.a.createElement("h2",{className:"filter-title"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),t.map((function(e,c){return n.a.createElement("div",{className:s()("option-item",{active:r.includes(e.prop)||r.length===t.length-1}),key:"".concat(e,"_").concat(c),onClick:function(){return t=e.prop,void a(t);var t}},n.a.createElement("div",{className:"checkbox"},n.a.createElement("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z",fill:"#2196F3"}))),n.a.createElement("span",null,e.name))})))}u.defaultProps={enableFilters:[],activeTransfers:[]};var d=u;var m=function(e){var t=e.enableSort,a=e.onChangeSort,r=e.activeSort;return n.a.createElement("div",{className:"sort"},t.map((function(e,t){return n.a.createElement("div",{className:s()("sort__item",{active:r===e.prop}),key:"".concat(e,"_").concat(t),onClick:function(){return t=e.prop,void a(t);var t}},e.name)})))};var f=function(e){var t=e.countriesCodes,a=e.arrivalTimePeriod,r=e.flightTime,c=e.stopsCount,i=e.stops;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"info-item"},n.a.createElement("p",{className:"info-item__title"},t),n.a.createElement("p",{className:"title-item__content"},a)),n.a.createElement("div",{className:"info-item"},n.a.createElement("p",{className:"info-item__title"},"\u0432 \u043f\u0443\u0442\u0438"),n.a.createElement("p",{className:"title-item__content"},r)),n.a.createElement("div",{className:"info-item"},n.a.createElement("p",{className:"info-item__title"},c),n.a.createElement("p",{className:"title-item__content"},i)))};var p=function(e){var t=e.price,a=e.logoSrc,r=e.segments;return n.a.createElement("div",{className:"tickets-list__item"},n.a.createElement("div",{className:"item-head"},n.a.createElement("span",{className:"price"},t),n.a.createElement("div",{className:"company-logo"},n.a.createElement("img",{src:a,alt:""}))),n.a.createElement("div",{className:"flight-info"},r.map((function(e,t){return n.a.createElement(f,Object.assign({key:"".concat(e,"_").concat(t)},e))}))))},h=a(27);var E=function(){return n.a.createElement("div",{className:"tickets-list__item"},n.a.createElement(h.a,{speed:2,width:505,height:144,viewBox:"0 0 505 144",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},n.a.createElement("rect",{x:"0",y:"9",rx:"0",ry:"0",width:"95",height:"28"}),n.a.createElement("rect",{x:"344",y:"9",rx:"0",ry:"0",width:"98",height:"33"}),n.a.createElement("rect",{x:"1",y:"65",rx:"0",ry:"0",width:"92",height:"11"}),n.a.createElement("rect",{x:"1",y:"80",rx:"0",ry:"0",width:"92",height:"19"}),n.a.createElement("rect",{x:"0",y:"106",rx:"0",ry:"0",width:"92",height:"11"}),n.a.createElement("rect",{x:"0",y:"121",rx:"0",ry:"0",width:"92",height:"19"}),n.a.createElement("rect",{x:"172",y:"65",rx:"0",ry:"0",width:"87",height:"11"}),n.a.createElement("rect",{x:"172",y:"80",rx:"0",ry:"0",width:"87",height:"19"}),n.a.createElement("rect",{x:"171",y:"106",rx:"0",ry:"0",width:"87",height:"11"}),n.a.createElement("rect",{x:"171",y:"121",rx:"0",ry:"0",width:"87",height:"19"}),n.a.createElement("rect",{x:"327",y:"65",rx:"0",ry:"0",width:"127",height:"11"}),n.a.createElement("rect",{x:"327",y:"80",rx:"0",ry:"0",width:"127",height:"19"}),n.a.createElement("rect",{x:"327",y:"106",rx:"0",ry:"0",width:"127",height:"11"}),n.a.createElement("rect",{x:"326",y:"122",rx:"0",ry:"0",width:"127",height:"19"})))};var v=function(e){var t=e.tickets,a=e.isLoaded;return n.a.createElement("div",{className:"tickets-list"},a?t.length>0?t.map((function(e,t){return n.a.createElement(p,Object.assign({key:"".concat(e,"_").concat(t)},e))})):n.a.createElement("div",{className:"absence-tickets-placard"},n.a.createElement("h1",{className:"message"},"\u041f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u044b\u043c \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u043c \u0431\u0438\u043b\u0435\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")):Array(5).fill(0).map((function(e,t){return n.a.createElement(E,{key:t})})))},g=a(4),y=a(6),C=a.n(y),L=a(13),k=a(14),x=a.n(k),O=function(e){return{type:"SET_TICKETS",payload:e}},b=function(e){return{type:"SET_SEARCH_ID",payload:e}},w=function(e){return{type:"SET_IS_LOADED",payload:e}},_=[{name:"\u0412\u0441\u0435",prop:"all"},{name:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",prop:0},{name:"1 \u041f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",prop:1},{name:"2 \u041f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",prop:2},{name:"3 \u041f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",prop:3}],S=[{name:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0451\u0432\u044b\u0439",prop:"price"},{name:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439",prop:"speed"}],j=a(29),T=a(15),R=a.n(T),N=["\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a","\u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430","\u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"],F=a(7),I=function(e){var t=(e=String(e)).slice(0,Math.floor(e.length/2)),a=e.slice(-3);return"".concat(t," ").concat(a," \u0420")},M=function(e){return"".concat("https://pics.avs.io/99/36/").concat(e,".png")},B=function(e){return e.map((function(e){return{countriesCodes:A(e.origin,e.destination),arrivalTimePeriod:D(e.date,e.duration),flightTime:Z(e.duration),stopsCount:U(e.stops.length),stops:H(e.stops)}}))},A=function(e,t){return"".concat(e,"-").concat(t)},D=function(e,t){var a=R()(e).format("HH:mm"),r=R()(e).add({minute:t}).format("HH:mm");return"".concat(a,"-").concat(r)},Z=function(e){var t=Math.floor(e/60),a=0===t?e:e%60;return"".concat(t,"\u0447 ").concat(a,"\u043c")},U=function(e){switch(e){case 0:return"".concat(N[0]);case 1:return"".concat(e," ").concat(N[1]);case 2:return"".concat(e," ").concat(N[2]);case 3:return"".concat(e," ").concat(N[3]);default:return}},H=function(e){return 0===e.length?["\u043f\u0440\u044f\u043c\u043e\u0439"]:e.join(",")},P=function(e){return e.segments[0].duration+e.segments[1].duration},G=function(e){var t=e.segments[0].stops.length,a=e.segments[1].stops.length;return Object(F.max)([t,a])},W=Object(j.a)([function(e){return e.tickets.tickets},function(e){return e.filters.transfers},function(e){return e.filters.sort},function(e){return e.tickets.isLoaded}],(function(e,t,a,r){if(e.length>0)return function(e,t){switch(t){case"price":return Object(F.sortBy)(e,(function(e){return e.price}));case"speed":return Object(F.sortBy)(e,(function(e){return P(e)}));default:return}}(function(e,t){var a=Object(F.groupBy)(e,(function(e){return G(e)})),r=t.map((function(e){return a[e]}));return[].concat.apply([],r)}(e,t),a).slice(0,5).map((function(e){return{price:I((t=e).price),logoSrc:M(t.carrier),segments:B(t.segments)};var t}))}));function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var K=n.a.createElement("g",{filter:"url(#filter0_d)"},n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41 70C53.1503 70 63 60.1503 63 48C63 35.8497 53.1503 26 41 26C28.8497 26 19 35.8497 19 48C19 60.1503 28.8497 70 41 70Z",fill:"black",fillOpacity:.01})),X=n.a.createElement("g",{filter:"url(#filter1_d)"},n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41 70C57.5685 70 71 56.5685 71 40C71 23.4315 57.5685 10 41 10C24.4315 10 11 23.4315 11 40C11 56.5685 24.4315 70 41 70Z",fill:"#2196F3"}),n.a.createElement("path",{d:"M69 40C69 55.464 56.464 68 41 68C25.536 68 13 55.464 13 40C13 24.536 25.536 12 41 12C56.464 12 69 24.536 69 40Z",stroke:"#42A5F5",strokeWidth:4})),V=n.a.createElement("mask",{id:"mask0",maskUnits:"userSpaceOnUse",x:11,y:10,width:60,height:60},n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41 70C57.5685 70 71 56.5685 71 40C71 23.4315 57.5685 10 41 10C24.4315 10 11 23.4315 11 40C11 56.5685 24.4315 70 41 70Z",fill:"white"})),z=n.a.createElement("g",{mask:"url(#mask0)"},n.a.createElement("path",{d:"M13.714 32.875H67.536",stroke:"#42A5F5",strokeWidth:4,strokeLinecap:"square"}),n.a.createElement("path",{d:"M13.714 48.625H67.536",stroke:"#42A5F5",strokeWidth:4,strokeLinecap:"square"}),n.a.createElement("path",{d:"M40.25 14.5C40.25 14.5 30.2878 26.0775 30.5035 40.75C30.7191 55.4225 40.25 65.5 40.25 65.5",stroke:"#42A5F5",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"}),n.a.createElement("path",{d:"M41 14.5C41 14.5 50.9622 26.0775 50.7465 40.75C50.5309 55.4225 41 65.5 41 65.5",stroke:"#42A5F5",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"})),Q=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51.1946 29.0278C51.3946 28.9123 51.6151 28.8406 51.8456 28.8261C52.8621 28.7621 55.798 28.678 56.4347 29.7809C57.0715 30.8838 55.5298 33.3837 54.966 34.2314C54.8383 34.4235 54.666 34.5784 54.4662 34.6938L48.3904 38.2016L49.2343 55.302C49.2461 55.5414 49.125 55.7679 48.9193 55.8911L47.67 56.6393C47.5055 56.7379 47.3057 56.7586 47.1244 56.696L46.1776 56.369C46.019 56.3143 45.8877 56.2002 45.8114 56.0508L39.3534 43.4192L32.9843 47.0964L32.2974 51.7678C32.2498 52.0912 31.9693 52.3288 31.6426 52.3226L31.1446 52.3132C30.8927 52.3084 30.6663 52.1583 30.5638 51.9282L28.7741 47.9122C27.5439 47.9515 26.3891 47.8306 26.0792 47.294C25.7697 46.7579 26.2429 45.7021 26.893 44.6611L24.3295 41.1301C24.1815 40.9263 24.1648 40.6552 24.2866 40.4347L24.5274 39.9987C24.6854 39.7126 25.0314 39.5886 25.3352 39.709L29.6974 41.4392L36.0779 37.7555L28.4192 25.9267C28.328 25.7858 28.2948 25.6152 28.3267 25.4504L28.517 24.4669C28.5534 24.2786 28.6712 24.116 28.8389 24.0228L30.1115 23.315C30.321 23.1984 30.5777 23.2068 30.7791 23.3368L45.0768 32.5599L51.1946 29.0278Z",fill:"white"}),Y=n.a.createElement("mask",{id:"mask1",maskUnits:"userSpaceOnUse",x:24,y:23,width:33,height:34},n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51.1946 29.0278C51.3946 28.9123 51.6151 28.8406 51.8456 28.8261C52.8621 28.7621 55.798 28.678 56.4347 29.7809C57.0715 30.8838 55.5298 33.3837 54.966 34.2314C54.8383 34.4235 54.666 34.5784 54.4662 34.6938L48.3904 38.2016L49.2343 55.302C49.2461 55.5414 49.125 55.7679 48.9193 55.8911L47.67 56.6393C47.5055 56.7379 47.3057 56.7586 47.1244 56.696L46.1776 56.369C46.019 56.3143 45.8877 56.2002 45.8114 56.0508L39.3534 43.4192L32.9843 47.0964L32.2974 51.7678C32.2498 52.0912 31.9693 52.3288 31.6426 52.3226L31.1446 52.3132C30.8927 52.3084 30.6663 52.1583 30.5638 51.9282L28.7741 47.9122C27.5439 47.9515 26.3891 47.8306 26.0792 47.294C25.7697 46.7579 26.2429 45.7021 26.893 44.6611L24.3295 41.1301C24.1815 40.9263 24.1648 40.6552 24.2866 40.4347L24.5274 39.9987C24.6854 39.7126 25.0314 39.5886 25.3352 39.709L29.6974 41.4392L36.0779 37.7555L28.4192 25.9267C28.328 25.7858 28.2948 25.6152 28.3267 25.4504L28.517 24.4669C28.5534 24.2786 28.6712 24.116 28.8389 24.0228L30.1115 23.315C30.321 23.1984 30.5777 23.2068 30.7791 23.3368L45.0768 32.5599L51.1946 29.0278Z",fill:"white"})),$=n.a.createElement("g",{mask:"url(#mask1)"},n.a.createElement("rect",{x:45.536,y:30.7839,width:1.30853,height:12.4084,transform:"rotate(60 45.536 30.7839)",fill:"#EBECF2"}),n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.9193 55.8911C49.125 55.7679 49.2461 55.5415 49.2343 55.302L48.3628 37.6426L39.1264 42.9752L45.8114 56.0508C45.8877 56.2002 46.019 56.3143 46.1776 56.369L47.1244 56.696C47.3057 56.7587 47.5055 56.7379 47.67 56.6393L48.9193 55.8911Z",fill:"#DEE1E3"}),n.a.createElement("path",{opacity:.4,fillRule:"evenodd",clipRule:"evenodd",d:"M28.8366 47.8013L28.7476 47.8527L30.5638 51.9282C30.6664 52.1584 30.8927 52.3084 31.1446 52.3132L31.6426 52.3226C31.9693 52.3288 32.2498 52.0912 32.2974 51.7678L33.023 46.8334L32.56 47.1007C32.4167 47.1834 32.2626 47.2452 32.1011 47.2813C31.5509 47.4041 30.1547 47.6951 28.8366 47.8013Z",fill:"#DEE1E3"}),n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M39.2482 43.2134L48.3776 37.9426L48.4769 39.9539L40.956 46.5538L39.2482 43.2134Z",fill:"#C5C6CC"}),n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.4822 32.9524L27.6913 50.1523C27.6913 50.1523 26.8122 48.5636 26.0792 47.2939C26.0703 47.2786 26.062 47.263 26.0541 47.2473C27.4056 47.345 30.1268 47.2351 32.766 45.7114L53.3906 33.8038C55.6822 32.4807 56.2435 30.7674 56.5526 30.0309C57.0311 31.316 57.4822 32.9524 57.4822 32.9524Z",fill:"#DEE1E3"})),ee=n.a.createElement("defs",null,n.a.createElement("filter",{id:"filter0_d",x:8,y:23,width:66,height:66,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.a.createElement("feOffset",{dy:8}),n.a.createElement("feGaussianBlur",{stdDeviation:5.5}),n.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.215686 0 0 0 0 0.407843 0 0 0 0 0.556863 0 0 0 0.25 0"}),n.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})),n.a.createElement("filter",{id:"filter1_d",x:0,y:0,width:82,height:82,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),n.a.createElement("feOffset",{dy:1}),n.a.createElement("feGaussianBlur",{stdDeviation:5.5}),n.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.215686 0 0 0 0 0.407843 0 0 0 0 0.556863 0 0 0 0.3 0"}),n.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),n.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))),te=function(e){var t=e.svgRef,a=e.title,r=J(e,["svgRef","title"]);return n.a.createElement("svg",q({width:82,height:89,viewBox:"0 0 82 89",fill:"none",ref:t},r),a?n.a.createElement("title",null,a):null,K,X,V,z,Q,Y,$,ee)},ae=n.a.forwardRef((function(e,t){return n.a.createElement(te,q({svgRef:t},e))}));a.p;var re=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){var t=e.filters;return{activeTransfers:t.transfers,activeSort:t.sort}})),a=t.activeTransfers,r=t.activeSort,c=Object(g.c)((function(e){var t=e.tickets;return{searchId:t.searchId,isLoaded:t.isLoaded}})),i=c.searchId,o=c.isLoaded,s=Object(g.c)(W);return n.a.useEffect((function(){e(i?function e(t){return function(){var a=Object(L.a)(C.a.mark((function a(r){var n,c,i,l;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x.a.request("".concat("https://front-test.beta.aviasales.ru/tickets?searchId=").concat(t));case 3:n=a.sent,c=n.data,i=c.tickets,l=c.stop,r(O(i)),r(w(!0)),l||r(e(t)),a.next=16;break;case 12:throw a.prev=12,a.t0=a.catch(0),setTimeout((function(){r(e(t))}),1e3),a.t0;case 16:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()}(i):function(){var e=Object(L.a)(C.a.mark((function e(t){var a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!1)),e.prev=1,e.next=4,x.a.request("https://front-test.beta.aviasales.ru/search");case 4:a=e.sent,r=a.data.searchId,t(b(r)),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[i,e]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"logo"},n.a.createElement(ae,null)),n.a.createElement("div",{className:"main-content"},n.a.createElement(d,{enableFilters:_,onSetFilters:function(t){if("all"!==t){e({type:"SET_FILTER",payload:t})}else{if(a.length===_.length-1)return void e(l([]));var r=_.filter((function(e){return"all"!==e.prop})).map((function(e){return e.prop}));e(l(r))}},activeTransfers:a}),n.a.createElement("div",{className:"content-wrap"},n.a.createElement(m,{enableSort:S,onChangeSort:function(t){e(function(e){return{type:"SET_SORT",payload:e}}(t))},activeSort:r}),n.a.createElement(v,{tickets:s,isLoaded:o}))))},ne=(a(61),a(3)),ce=a(5),ie=a(1),le={tickets:[],searchId:null,isLoaded:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TICKETS":return Object(ie.a)(Object(ie.a)({},e),{},{tickets:[].concat(Object(ce.a)(e.tickets),Object(ce.a)(t.payload))});case"SET_SEARCH_ID":return Object(ie.a)(Object(ie.a)({},e),{},{searchId:t.payload});case"SET_IS_LOADED":return Object(ie.a)(Object(ie.a)({},e),{},{isLoaded:t.payload});default:return e}},se={transfers:[0,1,2,3],sort:"price"},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":var a=e.transfers;return a=a.includes(t.payload)?a.filter((function(e){return e!==t.payload})):[].concat(Object(ce.a)(a),[t.payload]),Object(ie.a)(Object(ie.a)({},e),{},{transfers:a});case"SET_ALL_FILTERS":return Object(ie.a)(Object(ie.a)({},e),{},{transfers:t.payload});case"SET_SORT":return Object(ie.a)(Object(ie.a)({},e),{},{sort:t.payload});default:return e}},de=Object(ne.c)({tickets:oe,filters:ue}),me=a(30),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,pe=Object(ne.e)(de,fe(Object(ne.a)(me.a)));i.a.render(n.a.createElement(g.a,{store:pe},n.a.createElement(re,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e00c6b89.chunk.js.map