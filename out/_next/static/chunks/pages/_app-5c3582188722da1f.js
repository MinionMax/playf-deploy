(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7942:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(4957),i=n(9898),u=n(639);var l={};function s(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var x=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,_=u.useIntersection({rootMargin:"200px"}),g=r(_,2),O=g[0],w=g[1],M=a.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);a.default.useEffect((function(){var e=w&&n&&c.isLocalURL(p),t="undefined"!==typeof b?b:o&&o.locale,r=l[p+"%"+d+(t?"%"+t:"")];e&&!r&&s(o,p,d,{locale:t})}),[d,p,w,b,n,o]);var j={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(e,o,p,d,h,m,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&s(o,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof b?b:o&&o.locale,P=o&&o.isLocaleDomain&&c.getDomainLocale(d,k,o&&o.locales,o&&o.domainLocales);j.href=P||c.addBasePath(c.addLocale(d,k,o&&o.defaultLocale))}return a.default.cloneElement(t,j)};t.default=f},639:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=o.useRef(),l=o.useState(!1),s=r(l,2),f=s[0],p=s[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=n(7294),a=n(6286),c="undefined"!==typeof IntersectionObserver;var i=new Map},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(8e3);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},2717:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),i=(a=n(1585))&&a.__esModule?a:{default:a},u=n(8e3),l=n(5850),s=n(5646);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,l=d.length;u<l;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;"name"===s&&c||!p.has(f)?(p.add(f),r[s]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,n=c.useContext(u.AmpStateContext),r=c.useContext(l.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:v,headManager:r,inAmpMode:s.isInAmpMode(n)},t)};t.default=h},1585:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),c=(n(450),n(9807)),i=n(7690),u=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var f=function(e){c(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},8277:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r,o,a,c,i=n(2809),u=(n(6963),n(2341)),l=n.n(u),s=n(7294),f=function(){return window.innerWidth<=786},p=function(){var e=(0,s.useState)(f()),t=e[0],n=e[1];return(0,s.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<=786&&n(!0),window.innerWidth>=786&&n(!1)}))}),[]),t},d=n(118),v=n(1163),h=n(1664);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y,b,x,_=function(e){return s.createElement("svg",m({viewBox:"0 0 3200 1010",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"bevel"}},e),s.createElement("text",{x:-21.055,y:61.938,style:{fontFamily:"'BodoniModa16pt-Book','Bodoni* 16pt'",fontSize:"22.535px"},transform:"matrix(15.7201 0 0 15.7453 322.58 -572.711)"},"P",r||(r=s.createElement("tspan",{x:"-7.545px -0.424px 10.675px",y:"61.938px 61.938px 61.938px"},"lay"))," F to pa",o||(o=s.createElement("tspan",{x:98.021,y:61.938},"y"))),s.createElement("text",{x:-20.729,y:84.445,style:{fontFamily:"'BodoniModa16pt-Book','Bodoni* 16pt'",fontSize:"22.507px"},transform:"matrix(15.7201 0 0 15.7453 322.58 -572.711)"},"r",a||(a=s.createElement("tspan",{x:"-1.7px 19.344px 38.046px 60.879px 81.923px 102.483px",y:"84.445px 84.445px 84.445px 84.445px 84.445px 84.445px"},"espect"))),s.createElement("g",{transform:"matrix(5.71276 0 0 5.7219 2147.296 -35.467)"},c||(c=s.createElement("clipPath",{id:"banner_svg__a"},s.createElement("path",{d:"M0 0h184v184H0z"}))),s.createElement("g",{clipPath:"url(#banner_svg__a)"},s.createElement("path",{d:"M-17.837 41.362h209.303M-17.837 66.363h209.303M-17.837 91.363h209.303M-17.837 116.363h209.303M-17.837 141.363h209.303",style:{fill:"none",stroke:"#000",strokeWidth:"3.25px"}}),s.createElement("path",{d:"M143.96 125.503V41.362",style:{fill:"none",stroke:"#000",strokeWidth:3}}),s.createElement("path",{d:"M112.562 133.563c0 5.8 4.8 9.3 10.8 9.3 9.9 0 22.1-9.2 22.1-18.7 0-5.6-4.5-9.3-10.9-9.3-12.2 0-22 9.1-22 18.7M43.063 141.563c2.3 0 4.9-.2 6.9-.6 1.1-.2 1.3-.3 1.5.9 1.2 6.7 2.7 15.4 2.7 20.1 0 14.8-10 16.6-15.9 16.6-5.4 0-8-1.6-8-2.9 0-.7.9-1 3.2-1.7 3.1-.9 6.7-3.6 6.7-9.4 0-5.5-3.5-10.2-9.6-10.2-6.7 0-10.7 5.3-10.7 11.5 0 6.5 3.9 16.3 19 16.3 6.7 0 19.7-3 19.7-20 0-5.7-1.8-15.2-2.9-21.4-.2-1.2-.1-1.1 1.3-1.7 10.1-4 16.8-12.5 16.8-23.8 0-12.8-9.4-24.101-24.1-24.101-2.6 0-2.6 0-2.9-1.799l-2.5-14.5c-.2-1.2 0-1.3.6-1.9 10.8-10.101 19-22.8 19-38.1 0-8.7-2.4-17.3-6.5-23.3-1.5-2.2-4.1-5-5.2-5-1.4 0-4.5 2.6-6.5 4.8-7.4 8.2-9.8 20.7-9.8 31.1 0 5.8.7 12.3 1.4 16.399.2 1.201.3 1.401-.9 2.401-14.4 11.9-29.7 26.2-29.7 46.4 0 17.4 11.9 33.9 36.4 33.9m-28.4-27.2c0-5.9 1-13.8 9.3-23.201 6-6.699 10.6-10.399 15.3-14.199 1-.8 1.2-.7 1.4.4l2.1 12.799c.3 1.901.3 1.801-1.5 2.401-8.8 3-14.5 10.9-14.5 19.4 0 9 4.7 15.4 11.5 17.7.8.3 2 .6 2.7.6.8 0 1.2-.5 1.2-1.1 0-.7-.8-1-1.5-1.3-4.2-1.8-7.2-6.1-7.2-10.7 0-5.7 3.9-10 10-11.7 1.6-.4 1.8-.3 2 .8l5 29.8c.2 1.1.1 1.1-1.4 1.4-1.6.3-3.6.5-5.6.5-17.5 0-28.8-9.7-28.8-23.6m39-92.3c3.3 0 6 2.7 6 8.2 0 11.099-9.5 20.099-17.4 27-.7.599-1.1.5-1.3-.8-.4-2.601-.6-6-.6-9.2 0-15.6 7.2-25.2 13.3-25.2m-2.9 82.6c8.1.7 14.8 7.5 14.8 16.3 0 6.3-3.8 11.4-9.4 14.2-1.2.6-1.4.6-1.6-.6l-4.9-28.5c-.2-1.2-.1-1.5 1.1-1.4",style:{fillRule:"nonzero"}}))))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=function(e){return s.createElement("svg",g({viewBox:"0 0 184 184",xmlns:"http://www.w3.org/2000/svg",baseProfile:"tiny"},e),y||(y=s.createElement("path",{fill:"none",stroke:"#000",strokeWidth:3.25,strokeLinejoin:"bevel",d:"M-17.837 41.362h209.303M-17.837 66.362h209.303M-17.837 91.362h209.303M-17.837 116.363h209.303M-17.837 141.363h209.303"})),b||(b=s.createElement("path",{fill:"none",stroke:"#000",strokeWidth:3,strokeLinejoin:"bevel",d:"M143.96 125.503v-84.14"})),x||(x=s.createElement("path",{d:"M112.562 133.563c0 5.8 4.8 9.3 10.8 9.3 9.9 0 22.1-9.2 22.1-18.7 0-5.6-4.5-9.3-10.9-9.3-12.2 0-22 9.1-22 18.7M43.063 141.563c2.3 0 4.9-.2 6.9-.6 1.1-.2 1.3-.3 1.5.9 1.2 6.7 2.7 15.4 2.7 20.1 0 14.8-10 16.6-15.9 16.6-5.4 0-8-1.6-8-2.9 0-.7.9-1 3.2-1.7 3.1-.9 6.7-3.6 6.7-9.4 0-5.5-3.5-10.2-9.6-10.2-6.7 0-10.7 5.3-10.7 11.5 0 6.5 3.9 16.3 19 16.3 6.7 0 19.7-3 19.7-20 0-5.7-1.8-15.2-2.9-21.4-.2-1.2-.1-1.1 1.3-1.7 10.1-4 16.8-12.5 16.8-23.8 0-12.8-9.4-24.1-24.1-24.1-2.6 0-2.6 0-2.9-1.8l-2.5-14.5c-.2-1.2 0-1.3.6-1.9 10.8-10.1 19-22.8 19-38.1 0-8.7-2.4-17.3-6.5-23.3-1.5-2.2-4.1-5-5.2-5-1.4 0-4.5 2.6-6.5 4.8-7.4 8.2-9.8 20.7-9.8 31.1 0 5.8.7 12.3 1.4 16.4.2 1.2.3 1.4-.9 2.4-14.4 11.9-29.7 26.2-29.7 46.4 0 17.4 11.9 33.9 36.4 33.9m-28.4-27.2c0-5.9 1-13.8 9.3-23.2 6-6.7 10.6-10.4 15.3-14.2 1-.8 1.2-.7 1.4.4l2.1 12.8c.3 1.9.3 1.8-1.5 2.4-8.8 3-14.5 10.9-14.5 19.4 0 9 4.7 15.4 11.5 17.7.8.3 2 .6 2.7.6.8 0 1.2-.5 1.2-1.1 0-.7-.8-1-1.5-1.3-4.2-1.8-7.2-6.1-7.2-10.7 0-5.7 3.9-10 10-11.7 1.6-.4 1.8-.3 2 .8l5 29.8c.2 1.1.1 1.1-1.4 1.4-1.6.3-3.6.5-5.6.5-17.5 0-28.8-9.7-28.8-23.6m39-92.3c3.3 0 6 2.7 6 8.2 0 11.1-9.5 20.1-17.4 27-.7.6-1.1.5-1.3-.8-.4-2.6-.6-6-.6-9.2 0-15.6 7.2-25.2 13.3-25.2m-2.9 82.6c8.1.7 14.8 7.5 14.8 16.3 0 6.3-3.8 11.4-9.4 14.2-1.2.6-1.4.6-1.6-.6l-4.9-28.5c-.2-1.2-.1-1.5 1.1-1.4M2450.83-2179.43c-.15-4.27-4.27-.3-4.27-6.45v-28.35c-1.13.23-2.78.3-4.95.3-2.1 0-3.68-.07-4.65-.3-.38 3.08-2.4 8.03-6 15 .3.08.6.08.82.08.23 0 4.65-5.48 4.73-5.48.37.38.52 1.43.52 3.15v15.45c0 3.08-.67 3.9-2.77 4.5-.75.23-1.13.9-1.13 2.1h17.7m.83-23.47c0 6 4.12 9.6 10.12 9.6 2.85 0 5.78-.83 8.85-2.4v1.5c0 8.85-1.95 13.2-6 13.2-1.65 0-2.47-.53-2.47-1.65 0-.68.75-2.48.75-3.3 0-3-2.03-5.33-5.03-5.33-2.77 0-4.72 2.33-4.72 5.1 0 4.2 5.77 7.28 11.77 7.28 8.7 0 14.93-8.03 14.93-17.93 0-10.87-5.03-17.92-13.95-17.92-8.63 0-14.25 4.2-14.25 11.85m14.1-9.23c3 0 4.72 3.6 4.72 8.33 0 4.95-1.87 7.42-5.62 7.42-3.38 0-5.03-3.22-5.03-7.42 0-4.88 2.25-8.33 5.93-8.33M1055.84 1639.29v.6h7.22v-.6h-3.37V1607l12.22 33.34h.72l11.74-33.66v32.61h-3.62v.6h11.05v-.6h-3.15v-32.54h3.15v-.61h-7.9l-9.81 28.08-10.4-28.08h-8.07v.61h3.44v32.54h-3.22m40.65-30.9c0 1.49 1.21 2.7 2.7 2.7 1.48 0 2.7-1.21 2.7-2.7 0-1.48-1.22-2.7-2.7-2.7-1.49 0-2.7 1.22-2.7 2.7m-1.73 30.9v.6h9.74v-.6h-2.84v-20.1h-6.9v.61h2.85v19.49h-2.85m13.1 0v.6h9.67v-.6h-2.83v-9.48c0-3.91 1.57-10.28 7-10.28 2.47 0 2.74 2.84 2.74 6.62v13.14h-2.86v.6h9.7v-.6h-2.86v-13.75c0-3.92-.99-6.8-6.23-6.8-4.72 0-6.75 3.69-7.49 7.29v-6.84h-6.84v.61h2.86v19.49h-2.86m49.96 0h-2.85v-33.15h-6.91v.61h2.86v18.68c-.99-4.05-3.54-6.66-7.11-6.66-4.8 0-9.39 4.05-9.39 10.8 0 6.75 4.59 10.75 9.39 10.75 3.57 0 6.12-2.59 7.11-6.64v6.21h6.9v-.6m-6.9-9.72c0 6.36-2.97 9.83-6.37 9.83-3.6 0-5.47-3.8-5.47-9.83s1.87-9.9 5.47-9.9c3.4 0 6.37 3.51 6.37 9.9m27.43 9.72v.6h14.18v-.6h-4.93v-32.54h4.48c5.26 0 6.39 3.8 6.39 9.52h.63v-10.13h-27.3v10.13h.63c0-5.72 1.11-9.52 6.37-9.52h4.5v32.54h-4.95m41.25-5.47h-.67c-1.13 3.33-3.85 5.85-8.1 5.85-4.75 0-5.92-5-5.92-10.13 0-.49.02-.96.04-1.46h14.43c0-4.9-2.46-9.34-9.05-9.34-5.8 0-10.08 4.05-10.08 10.8 0 6.75 4.52 10.8 10.31 10.8 4.92 0 7.87-2.79 9.04-6.52m-9.27-14.47c3.87 0 4.3 4.95 4.28 8.12h-9.63c.29-4.34 1.59-8.12 5.35-8.12m11.52 19.94v.6h8.07v-.6h-4.36l6.86-8.53 5.85 8.53h-2.47v.6h9.47v-.6h-2.14l-8.08-11.79 6.19-7.7h3.35v-.61h-7.8v.61h3.69l-5.79 7.18-4.92-7.18h3.01v-.61h-10.48v.61h2.58l7.18 10.44-7.29 9.05h-2.92m38.97-3.45-.52-.29c-.83 1.8-2.36 3.47-3.89 3.47-1.24 0-1.74-.59-1.74-2.84v-16.38h4.82v-.61h-4.82v-5.85c-.9.68-2.7 1.35-4.05 1.35v4.5h-3.1v.61h3.1v15.1c0 2.45.59 5.31 4.28 5.31 2.81 0 4.77-1.78 5.92-4.37m22.47 3.45v-20.1h-7.22v.61h3.17v9.47c0 3.92-1.51 10.29-6.93 10.29-2.48 0-2.75-2.84-2.75-6.62v-13.75h-6.9v.61h2.85v13.75c0 3.91 1.04 6.79 6.28 6.79 4.82 0 6.73-3.66 7.45-7.24v6.79h6.91v-.6h-2.86m5.97 0v.6h9.86v-.6h-3.02v-9.18c0-5.22 2.03-10.74 6.03-10.74.95 0 1.78.32 2.39.81-.29-.11-.61-.15-.97-.15-1.28 0-2.63.85-2.63 2.56 0 1.35 1.01 2.36 2.65 2.36 1.58 0 2.57-1.21 2.57-2.74 0-1.82-1.46-3.47-3.96-3.47-3.47 0-5.36 3.33-6.08 7.25v-6.8h-6.84v.61h2.86v19.49h-2.86m39.62-5.47h-.67c-1.13 3.33-3.85 5.85-8.1 5.85-4.75 0-5.92-5-5.92-10.13 0-.49.02-.96.05-1.46h14.42c0-4.9-2.45-9.34-9.05-9.34-5.8 0-10.08 4.05-10.08 10.8 0 6.75 4.53 10.8 10.31 10.8 4.93 0 7.87-2.79 9.04-6.52m-9.27-14.47c3.87 0 4.3 4.95 4.28 8.12h-9.63c.29-4.34 1.6-8.12 5.35-8.12m14.02 20.99 1.91-2.04c1.44 1.26 3.45 2.04 5.58 2.04 4.26 0 7.5-2.72 7.5-6.72 0-7.7-12.85-5.88-12.85-10.98 0-2.03 1.84-3.22 4.16-3.22 3.89 0 6.68 2.88 6.84 5.62h.61v-6.3h-.54l-1.78 1.94c-1.3-1.13-3.1-1.89-5.17-1.89-4.28 0-6.19 3.04-6.19 5.92 0 8.03 12.24 5.33 12.24 11 0 2.83-2.54 3.96-5.13 3.96-3.53 0-6.75-2.61-7.11-5.81h-.61v6.48h.54"})))},w=n(5893),M=function(){var e=(0,v.useRouter)(),t=p();return(0,w.jsxs)("div",{className:l().navbar,children:[(0,w.jsxs)("div",{className:l().logoContainer,onClick:function(){return e.push("/")},children:[(0,w.jsx)(_,{className:l().logo}),(0,w.jsx)(O,{className:l().f})]}),(0,w.jsxs)("ul",{className:l().links,children:[[{link:"/library/",text:"Library",altText:"\ud83d\udcda"},{link:"/about/",text:"About",altText:"\ud83d\udc81\u200d\u2642\ufe0f"},{link:"/contact/",text:"Contact",altText:"\ud83d\udcec"}].map((function(n,r){return(0,w.jsx)(h.default,{href:n.link,children:(0,w.jsx)("p",{className:e.pathname===n.link?"".concat(l().link," ").concat(l().active):l().link,children:t?n.altText:n.text})})})),(0,w.jsx)("button",{className:l().donateButton,onClick:function(){return(0,d.Z)("https://www.paypal.me/maximemion")},children:t?"\ud83d\udcb8":"Donate"})]})]})},j=n(2425),k=n.n(j),P=function(e){var t=e.children;return(0,w.jsxs)("div",{className:k().layout,children:[(0,w.jsx)(M,{}),(0,w.jsx)("main",{className:k().body,children:t})]})},E=n(9008);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){var t=e.Component,n=e.pageProps;return(0,w.jsxs)(P,{children:[(0,w.jsx)(E.default,{children:(0,w.jsx)("link",{rel:"icon",href:"/favicon.png",type:"image/png"})}),(0,w.jsx)(t,S({},n))]})}},118:function(e,t){"use strict";t.Z=function(e){window.open(e)}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8277)}])},2425:function(e){e.exports={layout:"layout_layout__yXZI_",body:"layout_body__PpLDH"}},2341:function(e){e.exports={navbar:"navbar_navbar__ZG6u0",logoContainer:"navbar_logoContainer__LesQA",logo:"navbar_logo__oMk12",f:"navbar_f__MjiGo",links:"navbar_links__wZXvQ",link:"navbar_link___cQ1N",donateButton:"navbar_donateButton__7ebzl",fadeInOpacity:"navbar_fadeInOpacity__CYoJh"}},6963:function(){},9008:function(e,t,n){e.exports=n(2717)},1664:function(e,t,n){e.exports=n(7942)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),c=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},1163:function(e,t,n){e.exports=n(9898)},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(9898)}));var n=e.O();_N_E=n}]);