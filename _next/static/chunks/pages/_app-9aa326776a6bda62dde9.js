(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7481:function(e,t,n){"use strict";n.d(t,{Jn:function(){return L},qX:function(){return I},Xd:function(){return w},Mq:function(){return C},ZF:function(){return j},KN:function(){return N}});var r=n(552);const i=[];var o;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));const a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,c={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=c[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};var u=n(4444);class f{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const p="@firebase/app",h="0.7.5",d=new class{constructor(e){this.name=e,this._logLevel=s,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}("@firebase/app"),m="[DEFAULT]",v={[p]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},g=new Map,y=new Map;function b(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function w(e){const t=e.name;if(y.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;y.set(t,e);for(const n of g.values())b(n,e);return!0}function I(e,t){return e.container.getProvider(t)}const E={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},_=new u.LL("app","Firebase",E);class O{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}const L="9.2.0";function j(e,t={}){if("object"!==typeof t){t={name:t}}const n=Object.assign({name:m,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw _.create("bad-app-name",{appName:String(i)});const o=g.get(i);if(o){if((0,u.vZ)(e,o.options)&&(0,u.vZ)(n,o.config))return o;throw _.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of y.values())a.addComponent(r);const s=new O(e,n,a);return g.set(i,s),s}function C(e="[DEFAULT]"){const t=g.get(e);if(!t)throw _.create("no-app",{appName:e});return t}function N(e,t,n){var i;let o=null!==(i=v[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}w(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}var k;k="",w(new r.wA("platform-logger",(e=>new f(e)),"PRIVATE")),N(p,h,k),N(p,h,"esm2017"),N("fire-js","")},552:function(e,t,n){"use strict";n.d(t,{wA:function(){return l},H0:function(){return p}});function r(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}Object.create;function o(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function s(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var c=n(4444),l=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),u="[DEFAULT]",f=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new c.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:u})}catch(h){}try{for(var r=o(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=a(i.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var p=this.getOrInitializeService({instanceIdentifier:f});l.resolve(p)}catch(h){}}}catch(d){t={error:d}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=u),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(s(s([],a(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),a(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=u),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=u),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var l=o(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var f=a(u.value,2),p=f[0],h=f[1];s===this.normalizeInstanceIdentifier(p)&&h.resolve(c)}}catch(d){t={error:d}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return c},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var a=o(i),s=a.next();!s.done;s=a.next()){var c=s.value;try{c(e,t)}catch(l){}}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===u?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(a){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=u),this.component?this.component.multipleInstances?e:u:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();var p=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new f(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return i},LL:function(){return a},ZR:function(){return o},vZ:function(){return c},m9:function(){return u}});const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t};class i{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}class o extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(s,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new o(r,c,n)}}const s=/\{\$([^}]+)}/g;function c(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(l(n)&&l(o)){if(!c(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function l(e){return null!==e&&"object"===typeof e}function u(e){return e&&e._delegate?e._delegate:e}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(1063),s=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=s.useRouter(),f=o.default.useMemo((function(){var t=a.resolveHref(i,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?a.resolveHref(i,e.as):s||o}}),[i,e.href,e.as]),p=f.href,h=f.as,d=e.children,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof d&&(d=o.default.createElement("a",null,d));var b=(t=o.default.Children.only(d))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),I=r(w,2),E=I[0],_=I[1],O=o.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);o.default.useEffect((function(){var e=_&&n&&a.isLocalURL(p),t="undefined"!==typeof y?y:i&&i.locale,r=l[p+"%"+h+(t?"%"+t:"")];e&&!r&&u(i,p,h,{locale:t})}),[h,p,_,y,n,i]);var L={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}))}(e,i,p,h,m,v,g,y)},onMouseEnter:function(e){a.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,p,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var j="undefined"!==typeof y?y:i&&i.locale,C=i&&i.isLocaleDomain&&a.getDomainLocale(h,j,i&&i.locales,i&&i.domainLocales);L.href=C||a.addBasePath(a.addLocale(h,j,i&&i.defaultLocale))}return o.default.cloneElement(t,L)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=i.useRef(),l=i.useState(!1),u=r(l,2),f=u[0],p=u[1],h=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return i.useEffect((function(){if(!a&&!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var i=n(7294),o=n(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},3683:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(2809),i=(n(2702),n(7481));(0,i.KN)("firebase","9.2.0","app");var o=n(9008),a=n(9350),s=n.n(a),c=(n(7294),n(1664)),l=n(8818),u=n.n(l),f=n(5893),p=function(){return(0,f.jsxs)("div",{className:u().nav,children:[(0,f.jsx)(c.default,{href:"/",children:(0,f.jsx)("a",{children:"Home"})}),(0,f.jsx)(c.default,{href:"/about",children:(0,f.jsx)("a",{children:"About"})}),(0,f.jsx)(c.default,{href:"/art",children:(0,f.jsx)("a",{children:"Art"})}),(0,f.jsx)(c.default,{href:"/code",children:(0,f.jsx)("a",{children:"Code"})}),(0,f.jsx)(c.default,{href:"/cv",children:(0,f.jsx)("a",{children:"CV"})})]})},h=function(e){var t=e.children;return(0,f.jsxs)("div",{className:s().container,children:[(0,f.jsxs)(o.default,{children:[(0,f.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsxs)("header",{className:s().header,children:[(0,f.jsx)(p,{}),(0,f.jsx)("div",{className:s().buttons,children:(0,f.jsx)("a",{children:"Admin"})})]}),(0,f.jsx)("main",{className:s().main,children:t}),(0,f.jsx)("footer",{className:s().footer,children:(0,f.jsx)("span",{className:"highlighted",children:"\xa9 2021 MiscLG"})})]})},d=n(4155);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={apiKey:d.env.GOOGLE_API_KEY,authDomain:"misc-9029.firebaseapp.com",databaseURL:"https://misc-9029.firebaseio.com",projectId:"misc-9029",storageBucket:"misc-9029.appspot.com",messagingSenderId:"43515094373",appId:d.env.FIREBASE_APP_ID,measurementId:"G-97DBK3L632"};(0,i.ZF)(g);var y=function(e){var t=e.Component,n=e.pageProps;return(0,f.jsx)(h,{children:(0,f.jsx)(t,v({},n))})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3683)}])},9350:function(e){e.exports={buttons:"layout_buttons__2dY5w",header:"layout_header__1OJ41",main:"layout_main__7PkzU",footer:"layout_footer__ktNG5",container:"layout_container__1LfYE",sectionBlock:"layout_sectionBlock__1j1Ve"}},8818:function(e){e.exports={nav:"navigation_nav__TB-aw"}},2702:function(){},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},4155:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,c=[],l=!1,u=-1;function f(){l&&s&&(l=!1,s.length?c=s.concat(c):u=-1,c.length&&p())}function p(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(s=c,c=[];++u<t;)s&&s[u].run();u=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);