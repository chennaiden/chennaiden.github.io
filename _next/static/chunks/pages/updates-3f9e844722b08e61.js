(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[389],{5323:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updates",function(){return r(6293)}])},6843:function(e,n,r){"use strict";var t=r(5893),o=r(1664),a=r.n(o),l=r(38),i=r.n(l),c=r(7294);n.Z=function(){var e=(0,c.useState)(!1),n=e[0],r=e[1];return(0,t.jsx)("div",{id:i().container,children:(0,t.jsxs)("div",{id:i().wrapper,children:[(0,t.jsx)(a(),{href:"/",children:(0,t.jsx)("a",{id:i().logo,children:(0,t.jsx)("img",{src:"/logo.png",style:{maxWidth:"150px"},alt:"Chennai Den Athletic Clan Logo"})})}),(0,t.jsx)("div",{id:i().menuToggle,onClick:function(){return r(!n)},className:n?i().active:""}),(0,t.jsxs)("div",{id:i().links,className:n?i().active:"",children:[(0,t.jsx)(a(),{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"Home"})})}),(0,t.jsx)(a(),{href:"/programs",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"Programs"})})}),(0,t.jsx)(a(),{href:"/about",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"About"})})}),(0,t.jsx)(a(),{href:"/updates",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"Updates"})})}),(0,t.jsx)(a(),{href:"/contact",children:(0,t.jsx)("a",{children:(0,t.jsx)("p",{children:"Contact Us"})})})]})]})})}},1551:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1003),c=r(880),s=r(9246);function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={};function d(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;f[n+"%"+r+(o?"%"+o:"")]=!0}}var p=l.default.forwardRef((function(e,n){var r,t=e.legacyBehavior,a=void 0===t?!0!==Boolean(!1):t,p=e.href,h=e.as,v=e.children,y=e.prefetch,j=e.passHref,x=e.replace,m=e.shallow,_=e.scroll,g=e.locale,b=e.onClick,w=e.onMouseEnter,C=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,a&&"string"===typeof r&&(r=l.default.createElement("a",null,r));var E,k=!1!==y,M=c.useRouter(),O=l.default.useMemo((function(){var e=o(i.resolveHref(M,p,!0),2),n=e[0],r=e[1];return{href:n,as:h?i.resolveHref(M,h):r||n}}),[M,p,h]),L=O.href,U=O.as,A=l.default.useRef(L),B=l.default.useRef(U);a&&(E=l.default.Children.only(r));var N=a?E&&"object"===typeof E&&E.ref:n,P=o(s.useIntersection({rootMargin:"200px"}),3),R=P[0],S=P[1],T=P[2],D=l.default.useCallback((function(e){B.current===U&&A.current===L||(T(),B.current=U,A.current=L),R(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[U,N,L,T,R]);l.default.useEffect((function(){var e=S&&k&&i.isLocalURL(L),n="undefined"!==typeof g?g:M&&M.locale,r=f[L+"%"+U+(n?"%"+n:"")];e&&!r&&d(M,L,U,{locale:n})}),[U,L,S,g,k,M]);var H={ref:D,onClick:function(e){a||"function"!==typeof b||b(e),a&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:a,locale:c,scroll:l}))}(e,M,L,U,x,m,_,g)},onMouseEnter:function(e){a||"function"!==typeof w||w(e),a&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),i.isLocalURL(L)&&d(M,L,U,{priority:!0})}};if(!a||j||"a"===E.type&&!("href"in E.props)){var I="undefined"!==typeof g?g:M&&M.locale,K=M&&M.isLocaleDomain&&i.getDomainLocale(U,I,M&&M.locales,M&&M.domainLocales);H.href=K||i.addBasePath(i.addLocale(U,I,M&&M.defaultLocale))}return a?l.default.cloneElement(E,H):l.default.createElement("a",Object.assign({},C,H),r)}));n.default=p,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},6293:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=r(6843),a=r(9008),l=r.n(a),i=r(716),c=r.n(i);n.default=function(){return(0,t.jsxs)("div",{className:c().container,children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:"Updates \u2014 Chennai Den Athletic Clan"}),(0,t.jsx)("meta",{name:"description",content:"Chennai Den Athletic Clan Programs"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(o.Z,{}),(0,t.jsx)("main",{children:(0,t.jsx)("div",{id:c().updates,children:(0,t.jsxs)("div",{id:c().wrapper,children:[(0,t.jsx)("h1",{children:"Updates"}),(0,t.jsx)("img",{src:"/images/1.svg"})]})})})]})}},38:function(e){e.exports={container:"MenuBar_container__8yY75",wrapper:"MenuBar_wrapper__Bn2dg",menuToggle:"MenuBar_menuToggle__BCkfQ",active:"MenuBar_active__nm55O",logo:"MenuBar_logo__mvQRZ",links:"MenuBar_links__hqLn_"}},716:function(e){e.exports={container:"Updates_container__8p1Kw",wrapper:"Updates_wrapper__dmH34"}},9008:function(e,n,r){e.exports=r(3121)},1664:function(e,n,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return n=5323,e(e.s=n);var n}));var n=e.O();_N_E=n}]);