(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(9493)}])},6843:function(e,n,r){"use strict";var t=r(5893),l=r(1664),o=r.n(l),a=r(38),i=r.n(a),c=r(7294);n.Z=function(){var e=(0,c.useState)(!1),n=e[0],r=e[1];return(0,t.jsx)("div",{id:i().container,children:(0,t.jsxs)("div",{id:i().wrapper,children:[(0,t.jsx)(o(),{href:"/",children:(0,t.jsx)("a",{id:i().logo,children:(0,t.jsx)("img",{src:"/logo.png",style:{maxWidth:"150px"},alt:"Chennai Den Athletic Clan Logo"})})}),(0,t.jsx)("div",{id:i().menuToggle,onClick:function(){return r(!n)},className:n?i().active:""}),(0,t.jsxs)("div",{id:i().links,className:n?i().active:"",children:[(0,t.jsx)(o(),{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"Home"})})}),(0,t.jsx)(o(),{href:"/programs",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"Programs"})})}),(0,t.jsx)(o(),{href:"/about",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"About"})})}),(0,t.jsx)(o(),{href:"/updates",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"Updates"})})}),(0,t.jsx)(o(),{href:"/contact",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"Contact Us"})})})]})]})})}},1551:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,l,o=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(c){i=!0,l=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw l}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(1003),c=r(880),s=r(9246);function d(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={};function f(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var l=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(l?"%"+l:"")]=!0}}var h=a.default.forwardRef((function(e,n){var r,t=e.legacyBehavior,o=void 0===t?!0!==Boolean(!1):t,h=e.href,p=e.as,x=e.children,j=e.prefetch,m=e.passHref,y=e.replace,v=e.shallow,b=e.scroll,g=e.locale,_=e.onClick,w=e.onMouseEnter,C=d(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=x,o&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var E,M=!1!==j,O=c.useRouter(),S=a.default.useMemo((function(){var e=l(i.resolveHref(O,h,!0),2),n=e[0],r=e[1];return{href:n,as:p?i.resolveHref(O,p):r||n}}),[O,h,p]),A=S.href,k=S.as,L=a.default.useRef(A),P=a.default.useRef(k);o&&(E=a.default.Children.only(r));var N=o?E&&"object"===typeof E&&E.ref:n,R=l(s.useIntersection({rootMargin:"200px"}),3),B=R[0],T=R[1],U=R[2],D=a.default.useCallback((function(e){P.current===k&&L.current===A||(U(),P.current=k,L.current=A),B(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[k,N,A,U,B]);a.default.useEffect((function(){var e=T&&M&&i.isLocalURL(A),n="undefined"!==typeof g?g:O&&O.locale,r=u[A+"%"+k+(n?"%"+n:"")];e&&!r&&f(O,A,k,{locale:n})}),[k,A,T,g,M,O]);var F={ref:D,onClick:function(e){o||"function"!==typeof _||_(e),o&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,r,t,l,o,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),n[l?"replace":"push"](r,t,{shallow:o,locale:c,scroll:a}))}(e,O,A,k,y,v,b,g)},onMouseEnter:function(e){o||"function"!==typeof w||w(e),o&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),i.isLocalURL(A)&&f(O,A,k,{priority:!0})}};if(!o||m||"a"===E.type&&!("href"in E.props)){var I="undefined"!==typeof g?g:O&&O.locale,W=O&&O.isLocaleDomain&&i.getDomainLocale(k,I,O&&O.locales,O&&O.domainLocales);F.href=W||i.addBasePath(i.addLocale(k,I,O&&O.defaultLocale))}return o?a.default.cloneElement(E,F):a.default.createElement("a",Object.assign({},C,F),r)}));n.default=h,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},9493:function(e,n,r){"use strict";r.r(n);var t=r(5893),l=r(6843),o=r(5989),a=r.n(o);n.default=function(){return(0,t.jsxs)("div",{className:a().container,children:[(0,t.jsx)(l.Z,{}),(0,t.jsxs)("div",{id:a().contact,children:[(0,t.jsx)("div",{className:a().wrapper,children:(0,t.jsx)("h1",{children:"Contact Us"})}),(0,t.jsxs)("form",{method:"POST",action:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSfo5o0X30AToxsGvC4cG0bWWeTjD31PDKuN5ph4WaBo3Cph7Q/formResponse",children:[(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{name:"entry.578066189"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{children:"Gender"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("select",{name:"entry.1635572541",children:[(0,t.jsx)("option",{value:"Select",children:"Please select"}),(0,t.jsx)("option",{value:"Male",children:"Male"}),(0,t.jsx)("option",{value:"Female",children:"Female"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{children:"Age"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{name:"entry.637818451",type:"number"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{children:"Programme"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("select",{name:"entry.1141368735",children:[(0,t.jsx)("option",{value:"Select",children:"Please select"}),(0,t.jsx)("option",{value:"Football",children:"Football"}),(0,t.jsx)("option",{value:"Sports Conditioning",children:"Sports Conditioning"}),(0,t.jsx)("option",{value:"Football and Sports Conditioning",children:"Football & Sports Conditioning"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{children:"Address"})}),(0,t.jsx)("td",{children:(0,t.jsx)("textarea",{name:"entry.1776465259"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{children:"Contact Number"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{name:"entry.684983279",type:"number"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{children:"Email"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{name:"entry.146499336",type:"email"})})]})]})}),(0,t.jsx)("input",{type:"submit",value:"Submit"})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)("h1",{children:"OR"}),(0,t.jsx)("a",{href:"tel:8248985001",children:(0,t.jsx)("h1",{children:"Call us / WhatsApp: 8248985001"})})]})]}),(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.060868116681!2d80.272108!3d13.0028289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8be364000e9a8422!2sChennai%20Den%20Athletic%20Clan!5e0!3m2!1sen!2sin!4v1653994404070!5m2!1sen!2sin",height:"450",width:"100%",style:{border:"0px"},allowFullScreen:!1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})}},38:function(e){e.exports={container:"MenuBar_container__8yY75",wrapper:"MenuBar_wrapper__Bn2dg",menuToggle:"MenuBar_menuToggle__BCkfQ",active:"MenuBar_active__nm55O",logo:"MenuBar_logo__mvQRZ",links:"MenuBar_links__hqLn_"}},5989:function(e){e.exports={container:"Contact_container__WvsZb",wrapper:"Contact_wrapper__RTnAm",contact:"Contact_contact__xI6wR"}},1664:function(e,n,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return n=1382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);