(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{8667:function(e,n,t){"use strict";var a=t(3715),o=t.n(a),s=t(5893);n.Z=function(e){return(0,s.jsx)("div",{className:o().container,children:(0,s.jsxs)("div",{className:o().headerContainer,children:[(0,s.jsx)("h1",{className:o().header,children:e.header}),e.details?(0,s.jsx)("p",{className:o().headerDetails,children:e.details}):null]})})}},3194:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e,n,t){(0,a.useEffect)((function(){var a=!0;return e(t||null).then((function(e){a&&n(e)})),function(){a=!1}}),[e,n,t])}},8488:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var a,o=t(2209),s=t(1163),i=t(7294),l=t(2962),r=t(864),d=t.n(r),c=t(118),u=t(5893),h=function(e){var n=e.setModalIsOpen;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:d().darkBG,onClick:function(){return n(!1)}}),(0,u.jsx)("div",{className:d().centered,children:(0,u.jsxs)("div",{className:d().modal,children:[(0,u.jsx)("div",{className:d().modalHeader,children:(0,u.jsx)("h2",{className:d().heading,children:"Download PDF"})}),(0,u.jsx)("button",{className:d().closeBtn,onClick:function(){return n(!1)},children:"\u274e"}),(0,u.jsx)("div",{className:d().modalContent,children:"All the PDFs on here are free, but a donation to keep this running would be greatly appreciated..."}),(0,u.jsx)("div",{className:d().modalActions,children:(0,u.jsxs)("div",{className:d().actionsContainer,children:[(0,u.jsx)("button",{className:d().deleteBtn,onClick:function(){return n(!1),(0,c.Z)("https://www.paypal.me/maximemion")},children:"Donate"}),(0,u.jsx)("button",{className:d().cancelBtn,onClick:function(){n(!1),(0,c.Z)(e.downloadLink)},children:"Download"})]})})]})})]})},_=t(6969),m=t(8667),p=t(5440),f=t(2706),v=t.n(f),b=t(3194),x=function(e){var n=(0,i.useState)(""),t=n[0],a=n[1];return(0,i.useEffect)((function(){if(e.isReady){var n=e.query.id;n&&a(n.toString())}else;})),t},k=t(4040),j=function(){return(j=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},w=function(){return"undefined"!==typeof window&&!!window.document&&!!window.document.createElement},N=new(function(){function e(){var e=this;this.handleWheel=function(e){e.preventDefault()},this.handleScroll=function(){window.scrollTo.apply(window,e.lockToScrollPos)},this.handleKeydown=function(n){var t=e.options.keyboardKeys;["INPUT","TEXTAREA"].includes(n.target.tagName)&&(t=t.filter((function(n){return!e.options.authorizedInInputs.includes(n)}))),t.includes(n.keyCode)&&n.preventDefault()},this.element=null,this.lockToScrollPos=[0,0],this.options={authorizedInInputs:[32,37,38,39,40],disableKeys:!0,disableScroll:!0,disableWheel:!0,keyboardKeys:[32,33,34,35,36,37,38,39,40]},w()&&(this.element=document.scrollingElement)}return e.prototype.on=function(e,n){var t,a,o,s;if(w()){this.element=e||this.element,this.options=j(j({},this.options),n);var i=this.options,l=i.disableKeys,r=i.disableScroll;i.disableWheel&&(document.addEventListener("wheel",this.handleWheel,{passive:!1}),document.addEventListener("touchmove",this.handleWheel,{passive:!1})),r&&(this.lockToScrollPos=[null!==(a=null===(t=this.element)||void 0===t?void 0:t.scrollLeft)&&void 0!==a?a:0,null!==(s=null===(o=this.element)||void 0===o?void 0:o.scrollTop)&&void 0!==s?s:0],document.addEventListener("scroll",this.handleScroll,{passive:!1})),l&&document.addEventListener("keydown",this.handleKeydown,{passive:!1})}},e.prototype.off=function(){w()&&(document.removeEventListener("wheel",this.handleWheel),document.removeEventListener("touchmove",this.handleWheel),document.removeEventListener("scroll",this.handleScroll),document.removeEventListener("keydown",this.handleKeydown))},e}()),y=t(3057),g=function(){var e=(0,i.useState)(),n=e[0],t=e[1],r=(0,i.useState)(!1),d=r[0],f=r[1];(0,i.useEffect)((function(){d?(window.scrollTo({top:0,behavior:"smooth"}),setTimeout((function(){return N.on()}),1e3)):d||N.off()}),[d]);var j=(0,s.useRouter)(),w=x(j);return(0,b.Z)(_.Q5,t,w),n?(0,u.jsxs)("div",{className:v().container,children:[(0,u.jsx)(l.PB,{title:"\ud83d\udcda Library | "+n.title}),(0,u.jsx)("div",{className:v().backContainer,children:(0,u.jsx)("button",{className:v().backBtn,onClick:function(){return j.back()},children:"\u2b05\ufe0f"})}),(0,u.jsx)(m.Z,{header:n.title,details:n.description}),(0,u.jsxs)("div",{className:v().detailContainer,children:[(0,u.jsx)("button",{className:v().button,onClick:function(){return(0,c.Z)(n.videoLink)},children:"\u25b6\ufe0f Watch on YT"}),(0,u.jsx)("div",{className:v().break}),n.views?(0,u.jsxs)("p",{className:v().details,children:["\ud83d\udc40 ",n.views]}):null,(0,u.jsxs)("p",{className:v().details,children:["\ud83d\udc64 ",n.composer]}),(0,u.jsxs)("p",{className:v().details,children:["\ud83d\udcc6 ",n.date]}),(0,u.jsx)("div",{className:v().break}),(0,u.jsx)("button",{className:v().button,onClick:function(){return f(!0)},children:"\u2b07\ufe0f Download PDF"})]}),(0,u.jsxs)("div",{className:v().suggestionContainer,children:[(0,u.jsxs)("h1",{className:v().header,children:["\ud83d\udd2d More by ",n.composer,":"]}),(0,u.jsx)(p.Z,{amount:2,composer:n.composer,parentId:n.id})]}),d&&(0,u.jsx)(h,{setModalIsOpen:f,downloadLink:n.fileLink})]}):(0,u.jsxs)("div",{className:v().container,children:[(0,u.jsx)(l.PB,{title:"\ud83d\udcda Library | Loading..."}),(0,u.jsx)(k.PropagateLoader,{color:"#FF2853",css:(0,y.css)(a||(a=(0,o.Z)(["align-self: center"])))})]})}},7596:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library/post",function(){return t(8488)}])},864:function(e){e.exports={darkBG:"modal_darkBG__Y4O80",centered:"modal_centered__nPpZW",modal:"modal_modal__K981V",modalHeader:"modal_modalHeader__fPw2f",heading:"modal_heading__Ga6F_",modalContent:"modal_modalContent__Ky2CW",modalActions:"modal_modalActions__n_gUP",actionsContainer:"modal_actionsContainer___0t5X",closeBtn:"modal_closeBtn__g5nOs",deleteBtn:"modal_deleteBtn__O8_Mz",cancelBtn:"modal_cancelBtn__GR2fT"}},3715:function(e){e.exports={container:"pageHeader_container__kWDF_",headerContainer:"pageHeader_headerContainer__N0GrS",header:"pageHeader_header__TMM2i",headerDetails:"pageHeader_headerDetails__beLGB",fadeInOpacity:"pageHeader_fadeInOpacity__WqT1h"}},2706:function(e){e.exports={container:"post_container__hjS1D",fadeInOpacity:"post_fadeInOpacity__0EIKr",backContainer:"post_backContainer__xaqrE",backBtn:"post_backBtn__B090J",detailContainer:"post_detailContainer___Vp28",details:"post_details__FKPsp",button:"post_button__K7kDH",tag:"post_tag__OhSNB",loader:"post_loader__98fUC",suggestionContainer:"post_suggestionContainer__mQBpZ",header:"post_header__F1Gzz",break:"post_break__zsVZ1"}}},function(e){e.O(0,[655,962,440,774,888,179],(function(){return n=7596,e(e.s=n);var n}));var n=e.O();_N_E=n}]);