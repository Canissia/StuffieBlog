"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9821],{19821:function(e,t,r){r.d(t,{$:function(){return be}});var n=r(73955),o=r.n(n),i=r(85893),s=r(67294),a=r(12751),c=r(22598),u=r(84141),l=r(39807),p=r(38075),f=r(51716),d=r(59499),v=r(9380),g=r(21092),y=r(86033),b=r(50735),O=r(299),m=r(5004),h=r(71126),w=r(54335);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const _=(0,h.N)()((e=>{const{fetchOptions:t,requestParams:r}=e,{guest:n}=(0,w.G)();if(!n.favoritesV2.apiKey)throw new Error("Missing guest favorites V2 apiKey.");const o=m.Z.buildURLWithParams(new URL(n.favoritesV2.endpointPaths.favoritesV2,n.favoritesV2.baseUrl),{guest_id:r.guest_id,key:n.favoritesV2.apiKey});return{fetch:()=>(0,O.U2)(o,P(P({},t),{},{credentials:"include",errorTag:"get_guest_favorites_v2_api_error",timerTag:"get_guest_favorites_v2_api_call"})),url:o,options:e}}));function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const x="@web/domain-guest/get-guest-favorites",E="@web/domain-guest/guestFavorites",S=18e5,{useQuery:T}=(0,v.J)({name:x,defaultOptions:{staleTime:S,cacheTime:S},keyFn:e=>{if(!e.guest_id)throw new Error("Please pass a `guest_id` to get guest favorites.");return[x,e]},queryFn:async(e,t)=>{const{guest_id:r}=e;await(0,g.rz)(E,g.ZP);const n=await g.ZP.get(E);if(n)return n;const o=_({requestParams:{guest_id:r}}),{data:i,ok:s,statusText:a}=await o.fetch();if(s)return await g.ZP.set(E,i,(null===t||void 0===t?void 0:t.cacheTime)?Date.now()+t.cacheTime:void 0),i;throw new Error("".concat(a))}}),V=(e,t)=>{var r;const[n]=(0,y.fo)(),o=n(b.Vl);return T(D(D({},e),{},{guest_id:o}),D(D({},t),{},{enabled:(null===(r=null===t||void 0===t?void 0:t.enabled)||void 0===r||r)&&Boolean(o)}))};V.queryName=T.queryName;const M=(0,l.Hv)(V,{allowAnonymous:!1});var F=r(47037),N=r.n(F),C=r(50166),Z=r(37881);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const L=(0,h.N)()((e=>{const{fetchOptions:t,requestParams:r}=null!==e&&void 0!==e?e:{},{guest:n}=(0,w.G)();if(!n.favoritesV2.apiKey)throw new Error("Missing guest favorites V2 apiKey.");const o=m.Z.buildURLWithParams(new URL(n.favoritesV2.endpointPaths.favoritesV2,n.favoritesV2.baseUrl),{key:n.favoritesV2.apiKey});return{fetch:()=>(0,O.v_)(o,I(I({},t),{},{credentials:"include",body:JSON.stringify(r),errorTag:"post_guest_favorites_v2_api_error",timerTag:"post_guest_favorites_v2_api_call"})),options:e,url:o}}));function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const{useMutation:U}=(0,C.F)({name:"@web/domain-guest/add-guest-favorite",mutationFn:async e=>{const t=L({requestParams:e}),r=await t.fetch();return null===r||void 0===r?void 0:r.data}}),J=e=>{const[t]=(0,y.fo)(),r=t(b.Vl),[n,o]=U(e);return[async e=>{const t=await n(R(R({},e),{},{guest_id:N()(r)?Number.parseInt(r,10):r})),o=await g.ZP.get(E),i=[...null!==o&&void 0!==o?o:[],t];return await g.ZP.set(E,i,Date.now()+S),await(0,Z.Dm)(x),t},o]};J.mutationName=U.mutationName;const K=(0,l.tW)(J);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const A=(0,h.N)()((e=>{const{fetchOptions:t,requestParams:r}=null!==e&&void 0!==e?e:{},{guest:n}=(0,w.G)();if(!n.favoritesV2.apiKey)throw new Error("Missing guest favorites V2 apiKey.");const{identifier:o,guest_id:i}=r,s=m.Z.buildURLWithParams(new URL("".concat(n.favoritesV2.endpointPaths.favoritesV2,"/").concat(i,"_").concat(o),n.favoritesV2.baseUrl),{key:n.favoritesV2.apiKey});return{fetch:()=>(0,O.IV)(s,W(W({},t),{},{credentials:"include",errorTag:"delete_guest_favorites_v2_api_error",timerTag:"delete_guest_favorites_v2_api_call"})),options:e,url:s}}));function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const{useMutation:Y}=(0,C.F)({name:"@web/domain-guest/remove-guest-favorite",mutationFn:async e=>{const t=A({requestParams:e}),r=await t.fetch();return null===r||void 0===r?void 0:r.data}}),Q=e=>{const[t]=(0,y.fo)(),r=t(b.Vl),[n,o]=Y(e);return[async e=>{var t;const o=await n(H(H({},e),{},{identifier:null!==(t=null===e||void 0===e?void 0:e.identifier)&&void 0!==t?t:"",guest_id:r})),i=await g.ZP.get(E),s=[...(null!==i&&void 0!==i?i:[]).filter(u.y).filter((e=>"partnumber"!==e.identifier_type||e.identifier!==(null===o||void 0===o?void 0:o.identifier)))];return await g.ZP.set(E,s,Date.now()+S),await(0,Z.Dm)(x),o},o]};Q.mutationName=Y.mutationName;const $=(0,l.tW)(Q);var X=r(18257),ee=r(53983),te=r(99414),re=r(24e3),ne=r(85703),oe=r(97121),ie=r(45319),se=r(87379),ae=r(14059),ce=r.n(ae);const ue=se.default.div.withConfig({displayName:"styles__FavoritesButtonStyled",componentId:"sc-19se466-0"})(["border-radius:50%;display:inherit;padding:5px;border:1px solid ",";background-color:",";background-image:none;position:relative;font-size:0;touch-action:manipulation;cursor:pointer;user-select:none;&:active > svg{opacity:0.8;transform:scale(0.8);path{fill:",";}}"],ce().colors.palette.gray.light,ce().colors.palette.white,ce().colors.palette.red.default),le=se.default.span.withConfig({displayName:"styles__SvgWrapper",componentId:"sc-19se466-1"})(["position:relative;top:1px;"]);var pe;!function(e){e.search="search",e.recommendations="recommendations",e.bia="bia"}(pe||(pe={}));const fe=(0,s.createContext)({placementType:pe.search}),de=l.Y3,ve=[l.Y3,l.Jr,l.IB],ge={unlovedMessage:(0,i.jsx)("div",{children:"Click to sign in and save"}),lovedMessage:(0,i.jsx)("div",{children:"Signing in ..."}),stickyJustLovedMessage:(0,i.jsx)("div",{children:"Signing in ..."})},ye={unlovedMessage:(0,i.jsx)("div",{children:"Favorite to keep tabs on it"}),lovedMessage:(0,i.jsx)("div",{children:"Remove it from your \u2665s"}),stickyJustLovedMessage:(0,i.jsxs)("div",{children:["Favorited!\xa0",(0,i.jsx)(a.r,{href:"/yr/crush",underline:"always",children:"See all of your favorites"})]})},be=()=>{const e=(0,p.rS)(),[t]=(0,y.fo)(),r=t(b.co),{placementType:n}=(0,s.useContext)(fe),[a]=M(),d=a(),v=(0,X.ct)(ee.hg),g=(0,X.Ao)(ee.hg),O=(0,te.T)(),m=(0,X.ct)(re.zZ),h=(0,X.ct)(ne.qJ),w=(0,s.useMemo)((()=>null===d||void 0===d?void 0:d.filter(u.y).some((e=>"partnumber"===e.identifier_type&&(e.identifier===v||e.identifier===g)))),[g,v,d]);(0,s.useEffect)((()=>{E(w)}),[w]);const j=r?ge:ye,{0:P,1:_}=(0,s.useState)(""),{0:k,1:D}=(0,s.useState)(!1),{0:x,1:E}=(0,s.useState)(w),{0:S}=(0,s.useState)((()=>o()("favorites-button-"))),T=(0,s.useRef)(null),V=(0,s.useCallback)((e=>T.current=e),[T]),[F]=K(),N=(0,s.useCallback)((async()=>{if(!v)return;r||e.trackEvent({guest:{eventType:"click"},crush:{lovedItems:{removed:!1},loved:!0},products:[{tcin:v,placementType:n}]});const{assuranceLevel:t,guestType:o}=await(0,l.xF)();t&&!ve.includes(t)||o!==l.R1?(0,l.Iq)(de):F({channel_name:"tablet",identifier_type:h?"collection":"partnumber",identifier:v,price:h?void 0:m})}),[v,r,n,e,F,h,m]),[C]=$(),Z=(0,s.useCallback)((async()=>{if(!v)return;r||e.trackEvent({guest:{eventType:"click"},crush:{lovedItems:{removed:!0},loved:!1},products:[{tcin:v,placementType:n}]});const{assuranceLevel:t,guestType:o}=await(0,l.xF)();t&&!ve.includes(t)||o!==l.R1?(0,l.Iq)(de):C({identifier:v})}),[v,r,n,e,C]),q=(0,s.useCallback)((()=>{D(!1),setTimeout((()=>{x?(D(!0),_(j.lovedMessage)):(D(!0),_(j.unlovedMessage))}),0)}),[x,j]),I=(0,s.useCallback)((()=>{const e=!x;D(!1),E(e),setTimeout((()=>{e?(D(!0),_(j.stickyJustLovedMessage)):(D(!0),_(j.unlovedMessage))}),0),N&&e&&N(),Z&&!e&&Z()}),[x,j,N,Z]),L=(0,s.useCallback)((()=>{P!==j.stickyJustLovedMessage&&D(!1)}),[j,P]),z=(0,s.useCallback)((e=>{var t;const r=null===e||void 0===e?void 0:e.relatedTarget;r&&T.current&&!(null===(t=T.current)||void 0===t?void 0:t.contains(r))&&D(!1)}),[T]),R=(e=>{const{title:t="this item",isFavorited:r,isAnonymous:n}=e;return r?"remove ".concat(t," from your favorites"):"".concat(n?"sign in to ":"","favorite ").concat(t," to keep tabs on it")})({title:O,isFavorited:x,isAnonymous:r}),U=!(0,f.tq)()&&!(0,f.zc)();return(0,i.jsxs)(ue,{className:"h-display-inline-block",children:[U&&(0,i.jsx)(c.J2,{childRef:V,isOpen:k,placement:"top",target:S,toggle:z,variant:"secondary",children:P}),(0,i.jsx)("button",{"aria-label":R,id:S,onBlur:z,onClick:I,onFocus:q,onMouseEnter:q,onMouseLeave:L,type:"button",children:x?(0,i.jsx)(le,{children:(0,i.jsx)(oe.f,{"data-test":"PersonalizationFavorites",size:20})}):(0,i.jsx)(le,{children:(0,i.jsx)(ie.k,{"data-test":"IconGeneralHeartOutline",size:20})})})]})};be.displayName="FavoritesButton"},97121:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(84314),o=r(67294),i=r(73955),s=r.n(i);function a(){var e=(0,n._)(['<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M21.67 6.224c-1.284-2.093-3.4-3.065-5.741-2.617-1.436.375-2.569 1.196-3.475 2.318l-.453.599-.455-.599c-.906-1.122-2.04-1.943-3.475-2.318-2.342-.448-4.457.524-5.74 2.617-.844 1.408-.937 2.8-.75 4.197.214 1.596 1.24 3.284 2.344 4.425.814.84 8.079 7.654 8.079 7.654 2.263-2.094 7.257-6.814 8.07-7.654 1.105-1.141 2.132-2.83 2.346-4.425.186-1.397.092-2.79-.75-4.197z" fill-rule="evenodd"/></svg>']);return a=function(){return e},e}var c=(0,r(53131).No)(a()),u={width:24,height:24,id:"PersonalizationFavorites",monochrome:!0,grayscale:!1,fullColor:!1,fills:["#cc0000"],nameComponents:{name:"Favorites",category:"Personalization",variant:null}},l=function(e){var t=e.id||s()("nds-Icon"),r=c({idPrefix:t});return o.createElement(n.I,Object.assign({},e,{svgData:r,svgMetadata:u}))};l.metadata=u,l.displayName="IconPersonalizationFavorites"}}]);