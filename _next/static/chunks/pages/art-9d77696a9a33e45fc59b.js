(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{3865:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(5893),o=t(9008),a=t(5057),c=t.n(a),i=(t(7294),t(1664)),l=t(3407),s=t.n(l),u=function(){return(0,r.jsxs)("div",{className:s().nav,children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})}),(0,r.jsx)(i.default,{href:"/about",children:(0,r.jsx)("a",{children:"About"})}),(0,r.jsx)(i.default,{href:"/art",children:(0,r.jsx)("a",{children:"Art"})}),(0,r.jsx)(i.default,{href:"/code",children:(0,r.jsx)("a",{children:"Code"})}),(0,r.jsx)(i.default,{href:"/cv",children:(0,r.jsx)("a",{children:"CV"})})]})},f=function(e){var n=e.children;return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("header",{className:c().header,children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:c().buttons,children:(0,r.jsx)("a",{children:"Admin Login"})})]}),(0,r.jsx)("main",{className:c().main,children:n}),(0,r.jsx)("footer",{className:c().footer,children:"\xa9 2021 MiscLG"})]})}},2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),i=t(4651),l=t(7426);var s={};function u(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,_=e.shallow,x=e.scroll,j=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,y=l.useIntersection({rootMargin:"200px"}),b=r(y,2),g=b[0],k=b[1],w=a.default.useCallback((function(e){g(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,g]);a.default.useEffect((function(){var e=k&&t&&c.isLocalURL(d),n="undefined"!==typeof j?j:o&&o.locale,r=s[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(o,d,h,{locale:n})}),[h,d,k,j,t,o]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,h,p,_,x,j)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof j?j:o&&o.locale,N=o&&o.isLocaleDomain&&c.getDomainLocale(h,L,o&&o.locales,o&&o.domainLocales);E.href=N||c.addBasePath(c.addLocale(h,L,o&&o.defaultLocale))}return a.default.cloneElement(n,E)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=o.useRef(),s=o.useState(!1),u=r(s,2),f=u[0],d=u[1],h=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[h,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},7257:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893),o=t(3865);function a(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("h1",{children:"This is where my Art will be!"})})}},6445:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/art",function(){return t(7257)}])},5057:function(e){e.exports={buttons:"layout_buttons__2dY5w",header:"layout_header__1OJ41",main:"layout_main__7PkzU",footer:"layout_footer__ktNG5",container:"layout_container__1LfYE",sectionBlock:"layout_sectionBlock__1j1Ve"}},3407:function(e){e.exports={nav:"navigation_nav__TB-aw"}},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=6445,e(e.s=n);var n}));var n=e.O();_N_E=n}]);