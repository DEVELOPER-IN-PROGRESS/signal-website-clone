(window.webpackJsonp=window.webpackJsonp||[]).push([[28,25],{"0efe4d2baa95b81d2a6c":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));var a=t("8af190b70a6bc55c6f1b"),o=t.n(a),i=t("aa002c9ecdc30c05062b"),r=t.n(i),c=t("a8f8105d2d40178f277f");function l(){return c.a.get("current_brand_active")?o.a.createElement(o.a.Fragment,null,r()("txt.help_center.views.shared.setup_mode_notification.message")," ",o.a.createElement("a",{href:"/hc/admin/general_settings"},r()("txt.help_center.views.shared.setup_mode_notification.general_settings"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("strong",null,r()("txt.help_center.views.shared.brand_inactive_notification.heading"))," ",r()("txt.help_center.views.shared.brand_inactive_notification.message")," ",o.a.createElement("a",{href:"/agent/admin/brands",target:"_blank"},r()("txt.help_center.views.shared.brand_inactive_notification.brand_settings")))}},"525da436d046ad36d588":function(n,e,t){"use strict";t.d(e,"a",(function(){return h}));var a=t("dc270d9db2710066bad8"),o=t.n(a),i=t("c941771c892f8eea9763"),r=t.n(i),c=t("9d0a762c68b04db80a58"),l=t.n(c),s=t("8af190b70a6bc55c6f1b"),u=t.n(s),f=t("8a2d1b95e05b6a321e74"),d=t.n(f),b=t("b912ecc4473ae8a2ff0b"),m=t.n(b),p=t("aa002c9ecdc30c05062b"),v=t.n(p),w=t("e311e153022a38ebbb85"),g=t.n(w);function h(n){var e,t=n.type,a=n.title,i=n.className,c=n.testId,f=n.onClose,d=n.floating,b=n.children,p=Object(s.useRef)();return Object(s.useEffect)((function(){var n=l()(p.current.querySelectorAll("[data-action]"));return r()(n).call(n,(function(n){return n.addEventListener("click",f)})),function(){return r()(n).call(n,(function(n){return n.removeEventListener("click",f)}))}}),[p,f]),u.a.createElement("div",{className:m()(g.a.notification,g.a[t],(e={},o()(e,g.a.rtl,"rtl"===v.a.dir),o()(e,g.a.floating,d),e),i),"data-test-id":c,ref:p},a&&u.a.createElement("strong",{className:g.a.title,dangerouslySetInnerHTML:{__html:a}}),b,f&&u.a.createElement("div",{className:g.a.remove,onClick:f,role:"button",tabIndex:0,onKeyDown:function(n){13===n.keyCode&&f()}}))}h.propTypes={type:d.a.oneOf(["default","success","warning","error","info"]).isRequired,floating:d.a.bool,onClose:d.a.func,title:d.a.string,children:d.a.node,className:d.a.string,testId:d.a.string},h.defaultProps={dir:"ltr",type:"default"}},"548d0b986c059b1a2293":function(n,e,t){"use strict";t.r(e);var a=t("8613a2facb3a2b838c4c"),o=t.n(a),i=t("a24b5f2378113a79e775"),r=t.n(i),c=t("9466c4bf0b991fb30fa6"),l=t.n(c),s=t("8af190b70a6bc55c6f1b"),u=t.n(s),f=t("8a2d1b95e05b6a321e74"),d=t.n(f),b=t("525da436d046ad36d588"),m=t("1495cbcf66b387f322bd"),p=t.n(m),v=t("9d0a762c68b04db80a58"),w=t.n(v),g=t("c941771c892f8eea9763"),h=t.n(g),_=t("3e5f3c1fe817aad76f9d"),y=t.n(_),x=t("3e9c7e5351d86134f5f6"),k=t.n(x);var E=t("a78ae24d14f02224ceda"),T=t.n(E);t.d(e,"default",(function(){return j})),t.d(e,"notifications",(function(){return L}));var C,z,M,L=(C=new y.a,z=new y.a,M=function(){return h()(z).call(z,(function(n){return n(w()(C))}))},{subscribe:function(n){z.add(n)},unsubscribe:function(n){z.delete(n)},push:function(n){p()(n,{id:k.a.v4()}),C.add(n),M()},remove:function(n){C.delete(n),M()}}),O=function(n){var e=n.notification,t=e.type,a=e.title,o=e.message,i=e.timeout,r=Object(s.useCallback)((function(){return L.remove(e)}),[e]);return Object(s.useEffect)((function(){var n;return i!==1/0&&(n=l()(r,i||2e4)),function(){return clearTimeout(n)}}),[r,i]),u.a.createElement(b.a,{key:o,testId:"notification",onClose:r,type:t,title:a,floating:!0},o)};function j(){var n=Object(s.useState)([]),e=r()(n,2),t=e[0],a=e[1],i=function(n){a(n)};return Object(s.useLayoutEffect)((function(){return L.subscribe(i),function(){L.unsubscribe(i)}}),[]),u.a.createElement("div",{className:T.a.notifications},o()(t).call(t,(function(n){return u.a.createElement(O,{key:n.id,notification:n})})))}O.propTypes={notification:d.a.shape({id:d.a.string.isRequired,type:d.a.oneOf(["default","success","warning","error","info"]).isRequired,title:d.a.string,message:d.a.node,timeout:d.a.number}).isRequired}},"5d264e5bc7778fc1d09f":function(n,e,t){(e=t("0e326f80368fd0b1333e")(!1)).push([n.i,'._63983a716933a264792c2d8aeb1396b7-css {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  width: 360px;\n  z-index: 2147483647;\n}\n\n[dir="rtl"] ._63983a716933a264792c2d8aeb1396b7-css {\n  right: 0;\n  left: 16px;\n}\n\n._63983a716933a264792c2d8aeb1396b7-css > * {\n  margin-bottom: 10px;\n}',""]),e.locals={notifications:"_63983a716933a264792c2d8aeb1396b7-css"},n.exports=e},"5fb01c067ce2a2533619":function(n,e,t){"use strict";n.exports=t("711da9fec20ebd7abf22")},"711da9fec20ebd7abf22":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0});var t=null,a=!1,o=3,i=-1,r=-1,c=!1,l=!1;function s(){if(!c){var n=t.expirationTime;l?k():l=!0,x(d,n)}}function u(){var n=t,e=t.next;if(t===e)t=null;else{var a=t.previous;t=a.next=e,e.previous=a}n.next=n.previous=null,a=n.callback,e=n.expirationTime,n=n.priorityLevel;var i=o,c=r;o=n,r=e;try{var l=a()}finally{o=i,r=c}if("function"==typeof l)if(l={callback:l,priorityLevel:n,expirationTime:e,next:null,previous:null},null===t)t=l.next=l.previous=l;else{a=null,n=t;do{if(n.expirationTime>=e){a=n;break}n=n.next}while(n!==t);null===a?a=t:a===t&&(t=l,s()),(e=a.previous).next=a.previous=l,l.next=a,l.previous=e}}function f(){if(-1===i&&null!==t&&1===t.priorityLevel){c=!0;try{do{u()}while(null!==t&&1===t.priorityLevel)}finally{c=!1,null!==t?s():l=!1}}}function d(n){c=!0;var o=a;a=n;try{if(n)for(;null!==t;){var i=e.unstable_now();if(!(t.expirationTime<=i))break;do{u()}while(null!==t&&t.expirationTime<=i)}else if(null!==t)do{u()}while(null!==t&&!E())}finally{c=!1,a=o,null!==t?s():l=!1,f()}}var b,m,p=Date,v="function"==typeof setTimeout?setTimeout:void 0,w="function"==typeof clearTimeout?clearTimeout:void 0,g="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,h="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function _(n){b=g((function(e){w(m),n(e)})),m=v((function(){h(b),n(e.unstable_now())}),100)}if("object"==typeof performance&&"function"==typeof performance.now){var y=performance;e.unstable_now=function(){return y.now()}}else e.unstable_now=function(){return p.now()};var x,k,E,T=null;if("undefined"!=typeof window?T=window:void 0!==n&&(T=n),T&&T._schedMock){var C=T._schedMock;x=C[0],k=C[1],E=C[2],e.unstable_now=C[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var z=null,M=function(n){if(null!==z)try{z(n)}finally{z=null}};x=function(n){null!==z?setTimeout(x,0,n):(z=n,setTimeout(M,0,!1))},k=function(){z=null},E=function(){return!1}}else{"undefined"!=typeof console&&("function"!=typeof g&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var L=null,O=!1,j=-1,P=!1,F=!1,q=0,N=33,A=33;E=function(){return q<=e.unstable_now()};var I=new MessageChannel,R=I.port2;I.port1.onmessage=function(){O=!1;var n=L,t=j;L=null,j=-1;var a=e.unstable_now(),o=!1;if(0>=q-a){if(!(-1!==t&&t<=a))return P||(P=!0,_(S)),L=n,void(j=t);o=!0}if(null!==n){F=!0;try{n(o)}finally{F=!1}}};var S=function(n){if(null!==L){_(S);var e=n-q+A;e<A&&N<A?(8>e&&(e=8),A=e<N?N:e):N=e,q=n+A,O||(O=!0,R.postMessage(void 0))}else P=!1};x=function(n,e){L=n,j=e,F||0>e?R.postMessage(void 0):P||(P=!0,_(S))},k=function(){L=null,O=!1,j=-1}}e.unstable_ImmediatePriority=1,e.unstable_UserBlockingPriority=2,e.unstable_NormalPriority=3,e.unstable_IdlePriority=5,e.unstable_LowPriority=4,e.unstable_runWithPriority=function(n,t){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var a=o,r=i;o=n,i=e.unstable_now();try{return t()}finally{o=a,i=r,f()}},e.unstable_next=function(n){switch(o){case 1:case 2:case 3:var t=3;break;default:t=o}var a=o,r=i;o=t,i=e.unstable_now();try{return n()}finally{o=a,i=r,f()}},e.unstable_scheduleCallback=function(n,a){var r=-1!==i?i:e.unstable_now();if("object"==typeof a&&null!==a&&"number"==typeof a.timeout)a=r+a.timeout;else switch(o){case 1:a=r+-1;break;case 2:a=r+250;break;case 5:a=r+1073741823;break;case 4:a=r+1e4;break;default:a=r+5e3}if(n={callback:n,priorityLevel:o,expirationTime:a,next:null,previous:null},null===t)t=n.next=n.previous=n,s();else{r=null;var c=t;do{if(c.expirationTime>a){r=c;break}c=c.next}while(c!==t);null===r?r=t:r===t&&(t=n,s()),(a=r.previous).next=r.previous=n,n.next=r,n.previous=a}return n},e.unstable_cancelCallback=function(n){var e=n.next;if(null!==e){if(e===n)t=null;else{n===t&&(t=e);var a=n.previous;a.next=e,e.previous=a}n.next=n.previous=null}},e.unstable_wrapCallback=function(n){var t=o;return function(){var a=o,r=i;o=t,i=e.unstable_now();try{return n.apply(this,arguments)}finally{o=a,i=r,f()}}},e.unstable_getCurrentPriorityLevel=function(){return o},e.unstable_shouldYield=function(){return!a&&(null!==t&&t.expirationTime<r||E())},e.unstable_continueExecution=function(){null!==t&&s()},e.unstable_pauseExecution=function(){},e.unstable_getFirstCallbackNode=function(){return t}}).call(this,t("698d75b157f24ae829cc"))},"73b9a2b48ce36662a0dc":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));var a=t("8af190b70a6bc55c6f1b"),o=t.n(a),i=t("a8f8105d2d40178f277f"),r=t("aa002c9ecdc30c05062b"),c=t.n(r);function l(){var n=i.a.get("current_session.shared_csrf_token"),e=Object(a.useRef)(null);return o.a.createElement("form",{action:"/users/revert",method:"POST",ref:e},o.a.createElement("input",{type:"hidden",name:"authenticity_token",value:n}),o.a.createElement("strong",null,c()("txt.help_center.views.shared.assume_user_warning.heading"))," ",c()("txt.help_center.views.shared.assume_user_warning.message")," ",o.a.createElement("a",{href:"/users/revert",onClick:function(n){n.preventDefault(),e.current.submit()}},c()("txt.help_center.views.shared.assume_user_warning.end")))}},a34e19eb217936d9ef05:function(n,e,t){var a=t("0e326f80368fd0b1333e"),o=t("3f45c81f5efc015d5385");(e=a(!1)).i(o,"",!0),e.push([n.i,".f03d2584f163e3a2a104f430a15af54f-css {\n}\n\n._0124f0de2dc35111e0d8b199e6bb02be-css {\n}\n\n._0d5695f717dac86f770885896d0cc158-css {\n}\n\n._32a324f27ebbfe9056eefe6cd6265e5e-css {\n}\n\n._9440ef67f6ee9ccf66b65592d4b77443-css {\n  background-color: #f8f9f9;\n}\n\n._047323d4ac69153cd407a6ff44f5dfbb-css {\n  background-color: transparent !important;\n  padding: 0;\n}\n\n.f98a1b53ec6ec5c3dbe53172cbc6ff12-css {\n}\n\n.cd6ad42ca215ebe694a751df9ffe4754-css {\n}\n\n._770067c5bcccbf7afc960ad9271b90f2-css {\n}\n\n/* Reset styles for links within notifications */\n\n._17606607f52a4a3eebf0d5e8c75b3937-css a {\n  -webkit-animation: none 0s ease 0s 1 normal none running;\n          animation: none 0s ease 0s 1 normal none running;\n  -webkit-backface-visibility: visible;\n          backface-visibility: visible;\n  background: transparent none repeat 0 0 / auto auto padding-box border-box scroll;\n  border: medium none currentColor;\n  border-collapse: separate;\n  -webkit-border-image: none;\n       -o-border-image: none;\n          border-image: none;\n  border-radius: 0;\n  border-spacing: 0;\n  bottom: auto;\n  box-shadow: none;\n  box-sizing: content-box;\n  caption-side: top;\n  clear: none;\n  clip: auto;\n  color: #000;\n  -webkit-columns: auto;\n     -moz-columns: auto;\n          columns: auto;\n  -webkit-column-count: auto;\n     -moz-column-count: auto;\n          column-count: auto;\n  -webkit-column-fill: balance;\n     -moz-column-fill: balance;\n          column-fill: balance;\n  grid-column-gap: normal;\n  -webkit-column-gap: normal;\n     -moz-column-gap: normal;\n          column-gap: normal;\n  -webkit-column-rule: medium none currentColor;\n     -moz-column-rule: medium none currentColor;\n          column-rule: medium none currentColor;\n  -webkit-column-span: 1;\n     -moz-column-span: 1;\n          column-span: 1;\n  -webkit-column-width: auto;\n     -moz-column-width: auto;\n          column-width: auto;\n  content: normal;\n  counter-increment: none;\n  counter-reset: none;\n  cursor: auto;\n  direction: ltr;\n  display: inline;\n  empty-cells: show;\n  float: none;\n  font-family: serif;\n  font-size: medium;\n  font-style: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  line-height: normal;\n  height: auto;\n  -webkit-hyphens: none;\n      -ms-hyphens: none;\n          hyphens: none;\n  left: auto;\n  letter-spacing: normal;\n  list-style: disc outside none;\n  margin: 0;\n  max-height: none;\n  max-width: none;\n  min-height: 0;\n  min-width: 0;\n  opacity: 1;\n  orphans: 2;\n  outline: medium none invert;\n  overflow: visible;\n  overflow-x: visible;\n  overflow-y: visible;\n  padding: 0;\n  page-break-after: auto;\n  page-break-before: auto;\n  page-break-inside: auto;\n  -webkit-perspective: none;\n          perspective: none;\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%;\n  position: static;\n  right: auto;\n  -moz-tab-size: 8;\n    -o-tab-size: 8;\n       tab-size: 8;\n  table-layout: auto;\n  text-align: left;\n  -moz-text-align-last: auto;\n       text-align-last: auto;\n  text-decoration: none;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  top: auto;\n  -webkit-transform: none;\n          transform: none;\n  -webkit-transform-origin: 50% 50% 0;\n          transform-origin: 50% 50% 0;\n  -webkit-transform-style: flat;\n          transform-style: flat;\n  -webkit-transition: none 0s ease 0s;\n  transition: none 0s ease 0s;\n  unicode-bidi: normal;\n  vertical-align: baseline;\n  visibility: visible;\n  white-space: normal;\n  widows: 2;\n  width: auto;\n  word-spacing: normal;\n  z-index: auto;\n  all: initial;\n  font-size: inherit;\n  font-family: inherit;\n  color: #0072ef;\n  cursor: pointer;\n}\n\n._17606607f52a4a3eebf0d5e8c75b3937-css a:hover,\n._17606607f52a4a3eebf0d5e8c75b3937-css a:focus {\n  text-decoration: underline;\n}\n",""]),e.locals={default:"f03d2584f163e3a2a104f430a15af54f-css "+o.locals["c-callout"],success:"_0124f0de2dc35111e0d8b199e6bb02be-css "+o.locals["c-callout"]+" "+o.locals["c-callout--success"],warning:"_0d5695f717dac86f770885896d0cc158-css "+o.locals["c-callout"]+" "+o.locals["c-callout--warning"],error:"_32a324f27ebbfe9056eefe6cd6265e5e-css "+o.locals["c-callout"]+" "+o.locals["c-callout--error"],info:"_9440ef67f6ee9ccf66b65592d4b77443-css "+o.locals["c-callout"]+" "+o.locals["c-callout--info"],remove:"_047323d4ac69153cd407a6ff44f5dfbb-css "+o.locals["c-callout__close"],title:"f98a1b53ec6ec5c3dbe53172cbc6ff12-css "+o.locals["c-callout__title"],rtl:"cd6ad42ca215ebe694a751df9ffe4754-css "+o.locals["is-rtl"],floating:"_770067c5bcccbf7afc960ad9271b90f2-css "+o.locals["c-callout--dialog"],notification:"_17606607f52a4a3eebf0d5e8c75b3937-css"},n.exports=e},a78ae24d14f02224ceda:function(n,e,t){var a=t("745a70c961e0aad60670"),o=t("5d264e5bc7778fc1d09f");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},r=(a(o,i),o.locals?o.locals:{});n.exports=r},e311e153022a38ebbb85:function(n,e,t){var a=t("745a70c961e0aad60670"),o=t("a34e19eb217936d9ef05");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},r=(a(o,i),o.locals?o.locals:{});n.exports=r}}]);