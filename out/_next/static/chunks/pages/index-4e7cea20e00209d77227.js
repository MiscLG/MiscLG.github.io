(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3865:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(5893),o=t(9008),a=t(5057),c=t.n(a),i=t(1664),l=t(3407),s=t.n(l),u=function(){return(0,r.jsxs)("div",{className:s().nav,children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})}),(0,r.jsx)(i.default,{href:"/about",children:(0,r.jsx)("a",{children:"About"})}),(0,r.jsx)(i.default,{href:"/art",children:(0,r.jsx)("a",{children:"Art"})}),(0,r.jsx)(i.default,{href:"/code",children:(0,r.jsx)("a",{children:"Code"})}),(0,r.jsx)(i.default,{href:"/cv",children:(0,r.jsx)("a",{children:"CV"})})]})},f=function(e){var n=e.children;return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("header",{className:c().header,children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:c().buttons,children:(0,r.jsx)("a",{children:"Hello"})})]}),(0,r.jsx)("main",{className:c().main,children:n}),(0,r.jsx)("footer",{className:c().footer,children:"&copy 2021"})]})}},2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),i=t(4651),l=t(7426);var s={};function u(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,_=f.as,h=e.children,p=e.replace,v=e.shallow,m=e.scroll,x=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,y=l.useIntersection({rootMargin:"200px"}),b=r(y,2),g=b[0],E=b[1],H=a.default.useCallback((function(e){g(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,g]);a.default.useEffect((function(){var e=E&&t&&c.isLocalURL(d),n="undefined"!==typeof x?x:o&&o.locale,r=s[d+"%"+_+(n?"%"+n:"")];e&&!r&&u(o,d,_,{locale:n})}),[_,d,E,x,t,o]);var N={ref:H,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,_,p,v,m,x)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,_,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof x?x:o&&o.locale,k=o&&o.isLocaleDomain&&c.getDomainLocale(_,w,o&&o.locales,o&&o.domainLocales);N.href=k||c.addBasePath(c.addLocale(_,w,o&&o.defaultLocale))}return a.default.cloneElement(n,N)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=o.useRef(),s=o.useState(!1),u=r(s,2),f=u[0],d=u[1],_=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[_,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},2562:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(9008),a=t(4476),c=t.n(a),i=t(3865);n.default=function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Welcome!"})}),(0,r.jsx)("main",{className:c().main,children:(0,r.jsx)("h1",{children:"Hello world!"})}),(0,r.jsx)("footer",{className:c().footer})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},5057:function(e){e.exports={buttons:"layout_buttons__2dY5w",header:"layout_header__1OJ41",main:"layout_main__7PkzU",footer:"layout_footer__ktNG5",container:"layout_container__1LfYE"}},3407:function(e){e.exports={nav:"navigation_nav__TB-aw"}},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);