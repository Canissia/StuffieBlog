(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4983],{14035:function(e,t,r){var n=r(35393)((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()}));e.exports=n},88768:function(e,t,r){"use strict";r.d(t,{Q:function(){return b},g:function(){return m}});var n=r(59499),o=r(14035),i=r.n(o),s=r(79833),u=r.n(s),c=r(67294),a=r(11163),l=r(28421),d=r(39807),y=r(92260),g=r(89112),p=r(54207),f=r(4543);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(){const e=(0,a.useRouter)(),{query:t}=e,r=(0,f.jI)(t,"regMode"),n=(0,f.jI)(t,"registryId"),o=(0,f.jI)(t,"itemLineNum"),s=(0,f.jI)(t,"registryType"),y=(0,f.jI)(t,"type"),g=u()(r),v=(0,d.xd)(),b=(0,c.useMemo)((()=>g===p.vC||g===p.Dk),[g]),m=(0,c.useCallback)((()=>(0,l.ej)(p.A8)),[]),j=(0,c.useCallback)((()=>g===p.vC),[g]),_=(0,c.useCallback)((()=>{if(n){var e;const t=o?{registry_line_id:o}:{};return{registry_information:O({registry_id:n,registry_subtype:i()(null!==(e=null!==s&&void 0!==s?s:y)&&void 0!==e?e:""),registry_type:"Registry"},t)}}}),[o,n,s,y]),h=(0,c.useMemo)((()=>!(!m()&&g!==p.Dk)),[m,g]),P=(0,c.useMemo)((()=>g===p.vC),[g]),I=(0,c.useMemo)((()=>g===p.D||!b&&!!m()),[m,b,g]),C=(0,c.useMemo)((()=>!(!v||!I&&!b)),[I,b,v]);return{isGiftGiverOrRegistrantFromMyItems:b,getRegistryModeStatusFromCookie:m,getRegistryInformationForAddToCart:_,hasRegistryModeStatus:I,isInRegistrantMode:h,isInGiftGiverMode:P,isInRegistryMode:C,getRegistryGiftGiverStatus:j}}function m({registryId:e,tcin:t,isStandaloneOrChildItem:r=!0,addItemToRegistryOnSuccessCallback:n,addItemToRegistryOnErrorCallback:o,openCreateARegistryModal:i,openMultipleRegistryDrawer:s}){const u=(0,a.useRouter)(),{query:l}=u,p=(0,d.zy)(),v=(0,d.Pd)(),[O,{isSuccess:b}]=(0,y.Kp)(),m=O(),j=(0,d.xd)(),_=(0,f.jI)(l,"registryId"),h=1===(null===m||void 0===m?void 0:m.length)?m[0].registry_id:null,P=Boolean(e||_||h),{ffCustomInteraction:I}=(0,g.d)(),[C]=(0,y.EZ)({onSuccess:async()=>{I("registry_tcin_".concat(t,"_added_to_registry")),n()},onError:async()=>{I("registry_tcin_".concat(t,"_add_to_registry_failed")),o()}}),R=(0,c.useCallback)((async()=>{I("registry_add_to_registry_button_clicked"),j?b&&(null!==m&&void 0!==m&&m.length||!i?P&&r?C({tcin:t,requested_quantity:1,purchased_quantity:0,registry_item_type:"TCIN",added_by_recipient:!0,registry_id:e||_||h||""}):s():i()):(0,d.zB)()}),[C,i,I,P,r,b,j,null===m||void 0===m?void 0:m.length,e,_,t,s,h]);return{handleRegistryButtonClick:(0,c.useCallback)((async()=>{v&&(p?R():(0,d.zB)())}),[R,v,p])}}},94923:function(e,t,r){"use strict";r.r(t),r.d(t,{UseGptComponent:function(){return O}});var n=r(59499),o=r(11163),i=r(67294),s=r(84557),u=r(24897),c=r(27074),a=r(86535),l=r(58063),d=r(11286),y=r(88768),g=r(1397);const p=({adUnitPath:e,getAdSlots:t,shouldUseRedoakAdSlots:r=!0})=>{const n=(0,o.useRouter)(),p=(0,d.o)(n.asPath),{isPageLevelTargetingReady:f,targeting:v}=(0,g.A)(),O=(0,a.r)(),b=O(l.u5),{isInRegistryMode:m}=(0,y.Q)(),j=m&&p===c.En,_=(0,g.p)(),h=(0,i.useMemo)((()=>(j&&(_.pt="registry"),r?(0,s.Ch)({pageContent:O,adUnitPath:e,targeting:_,pageKey:p}):[])),[e,O,r,p,j,_]),P=[];return r&&P.push(...h),t&&P.push(...t()),(0,u.p)({deferAdLoading:!f,enableSingleRequest:!0,slots:b?[]:P,targeting:v}),null};p.displayName="UseGptComponentInner";var f=r(85893);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const O=e=>{const t=(0,o.useRouter)().asPath;return(0,f.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),t)};O.displayName="UseGptComponent"},1397:function(e,t,r){"use strict";r.d(t,{A:function(){return v},p:function(){return m}});var n=r(67294),o=r(11163),i=r(27074),s=r(42248),u=r(98875),c=r(90931),a=r(55334),l=r(14278),d=r(11286),y=r(4543),g=r(5004),p=r(88768),f=r(4518);function v(){var e,t;const r=(0,o.useRouter)(),{asPath:v,query:O}=r,b=(0,d.o)(v),m=(0,u.A)(c.cP),j=(0,u.A)(a.wj),_=(0,u.A)(a.RJ),h=(0,u.A)(a.rQ),P=(0,y.lW)(O),I=(C=m)?function(e=[]){var t,r;const n=[];if("Category"===(null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.display_name)&&null!==e&&void 0!==e&&null!==(r=e[0])&&void 0!==r&&r.details){const t=e[0].details;for(let e=0;e<3;e+=1){var o;if(null!==(o=t[e])&&void 0!==o&&o.display_name){var i;const r=null===(i=t[e].display_name)||void 0===i?void 0:i.replace(/\s/g,"");"Target"!==r&&n.push(r)}}}return n}(C).join(","):"";var C;const{isInRegistryMode:R}=(0,p.Q)(),k=R&&b===i.En,{pathname:w}=new g.Z(v);let M,E,S="/"===w?"homepage":(0,l.aZ)(v);b===i.mo||b===i.kj?(S="",M=null!==P&&void 0!==P?P:"",E=I.length>0?I:""):(M="",E="");let D=b;b===i.kj&&(D="search"),"pdp"===b&&(D="productdetails"),k&&(D="registry");const A=null!==(e=(0,s.OP)())&&void 0!==e?e:"0",G=null!==(t=(0,f._x)(v))&&void 0!==t?t:"",T=b===i.En||b===i.mo||b===i.kj;let q=!0;return T&&!(!_&&!j&&h)&&(q=!1),(0,n.useMemo)((()=>({isPageLevelTargetingReady:q,targeting:{n_cat:S,s_t:M,cat:E,fly:A,item:G,pt:D}})),[q,S,M,E,A,G,D])}var O=r(1415),b=r(7053);function m(){var e;const{asPath:t}=(0,o.useRouter)(),r=(0,d.o)(t),{isInRegistryMode:s,getRegistryModeStatusFromCookie:u}=(0,p.Q)(),c=s&&r===i.En,a=null!==(e=u())&&void 0!==e?e:"",l=c?a:"",y=(0,b.kO)(),g=null!==y&&void 0!==y?y:O.AP;return(0,n.useMemo)((()=>({registrytype:l,storeId:g})),[l,g])}},54207:function(e,t,r){"use strict";r.d(t,{Oe:function(){return n},A8:function(){return o},So:function(){return i},vC:function(){return s},Dk:function(){return u},D:function(){return c},qN:function(){return a},LL:function(){return l},xb:function(){return d},vq:function(){return y}});const n="https://www.target.com/gift-registry",o="regModeLP",i="Add to registry",s="GG",u="REGST",c="REG",a="CUSTOM",l="WEDDING",d="BABY",y="CHARITY"},89112:function(e,t,r){"use strict";r.d(t,{d:function(){return y}});var n=r(59499),o=r(45021),i=r.n(o),s=r(67294),u=r(11163),c=r(38075),a=r(4543);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(){const e=(0,c.rS)(),t=(0,u.useRouter)(),{query:r}=t,n=(0,a.jI)(r,"type"),o=(0,a.jI)(r,"registryId"),l=(0,s.useMemo)((()=>o&&n?{registries:[{hasItems:!1,id:o,type:"".concat(i()(n)," registry")}]}:{}),[o,n]);return{ffCustomInteraction:function(t,r={}){t&&e.trackEvent({guest:{eventType:"customInteraction"},customInteraction:d({value:t},r)})},ffAdImpressionsInteraction:function(t){t&&e.trackEvent({guest:{eventType:"adimp"},adImpressions:t})},ffComponentload:function(t={}){e.trackEvent({guest:{eventType:"componentload"},registry:d(d({},l),t)})}}}}}]);