!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8601ed23-6969-43ce-a05e-e4f49fef792e",e._sentryDebugIdIdentifier="sentry-dbid-8601ed23-6969-43ce-a05e-e4f49fef792e")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"30b1ba65cc8722be7e184f4a401fb43e6b21634d"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[7840],{17840:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(96540),o=r(47767),a=(r(30067),r(93518),r(17333),r(41393),r(8159),r(98992),r(54520),r(81454),r(37550),r(62953),r(3296),r(27208),r(48408),r(83199)),c=r(22292),i=r(79731),s=r(9224);const u=new URLSearchParams(window.location.search.substr(1)),d=()=>{location.assign("https://registry.my-netdata.io/goto-host-from-alarm.html".concat(location.search))},l=e=>fetch(e,{redirect:"follow"}).then((()=>e)),f=e=>{let t="top;nowelcome=1";for(let[n,o]of u.entries())n=decodeURIComponent(n),"agentID"!==n&&(t+=";".concat(encodeURIComponent(n)),o=decodeURIComponent(o),""!==o&&(t+="=".concat(encodeURIComponent(o))));const r=new URL(e);return"/"===r.pathname&&(r.pathname=""),r.hash=t,r.toString()},p=(e,t)=>{if(!u.has("agentID"))return void(document.body.innerHTML='<p>missing "agentID" query string parameter</p>');(async(e,t)=>{try{return(await(0,s.tz)(t,e)).data}catch(r){const{data:e}=r.response;document.body.innerHTML="".concat((0,i.o)(null===e||void 0===e?void 0:e.errorMsgKey),"</br></br>Getting you back to Netdata...");const t=new Error((0,i.o)(null===e||void 0===e?void 0:e.errorMsgKey)||"Redirect error");throw t.name="".concat((null===e||void 0===e?void 0:e.errorMsgKey)||"Server error"),t.stack="".concat((null===e||void 0===e?void 0:e.errorCode)||"Redirect error code"),t}})(decodeURIComponent(u.get("agentID")||"unknown_agent_id"),e).catch((e=>{if("ErrVisitedNodeNotFound"!==(null===e||void 0===e?void 0:e.name))throw document.body.innerHTML="<p>".concat(null===e||void 0===e?void 0:e.message,"</p>"),e;d()})).then((e=>{var r;const n=null===e||void 0===e||null===(r=e.urls)||void 0===r?void 0:r.map(f),o="https:"===location.protocol&&n.some((e=>!e.startsWith("https:"))),a=o?n.filter((e=>e.startsWith("https:"))):n;if(0!==a.length)return Promise.any(a.map(l)).then((()=>{location.assign("url".concat(t))}),(()=>{o?location.protocol="http:":document.body.innerHTML="\n                <ul>\n                    ".concat(n.map((e=>'<li><a href="'.concat(encodeURIComponent(e),'" target="_blank" rel="noopener noreferrer">').concat(e,"</a></li>"))).join("\n"),"\n                </ul>\n            ")}));o?location.protocol="http:":d()}))},v=()=>{const e=(0,c.NJ)(),{search:t}=(0,o.zy)();return(0,n.useEffect)((()=>{e&&p(e,t||"")}),[e,t]),n.createElement(a.H4,null,"Redirecting...")},h=()=>n.createElement(o.BV,null,n.createElement(o.qh,{path:"/redirects/alerts",element:n.createElement(v,null)}),n.createElement(o.qh,{path:"/redirects/alarms",element:n.createElement(v,null)})," ")},84428:(e,t,r)=>{var n=r(78227)("iterator"),o=!1;try{var a=0,c={next:function(){return{done:!!a++}},return:function(){o=!0}};c[n]=function(){return this},Array.from(c,(function(){throw 2}))}catch(i){}e.exports=function(e,t){try{if(!t&&!o)return!1}catch(i){return!1}var r=!1;try{var a={};a[n]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(i){}return r}},87290:(e,t,r)=>{var n=r(50516),o=r(19088);e.exports=!n&&!o&&"object"==typeof window&&"object"==typeof document},50516:e=>{e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},19088:(e,t,r)=>{var n=r(24475),o=r(44576);e.exports="process"===o(n.process)},16193:(e,t,r)=>{var n=r(79504),o=Error,a=n("".replace),c=String(new o("zxcasd").stack),i=/\n\s*at [^:]*:[^\n]*/,s=i.test(c);e.exports=function(e,t){if(s&&"string"==typeof e&&!o.prepareStackTrace)for(;t--;)e=a(e,i,"");return e}},80747:(e,t,r)=>{var n=r(66699),o=r(16193),a=r(24659),c=Error.captureStackTrace;e.exports=function(e,t,r,i){a&&(c?c(e,t):n(e,"stack",o(r,i)))}},24659:(e,t,r)=>{var n=r(79039),o=r(6980);e.exports=!n((function(){var e=new Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},77584:(e,t,r)=>{var n=r(20034),o=r(66699);e.exports=function(e,t){n(t)&&"cause"in t&&o(e,"cause",t.cause)}},32603:(e,t,r)=>{var n=r(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},10916:(e,t,r)=>{var n=r(24475),o=r(80550),a=r(94901),c=r(92796),i=r(33706),s=r(78227),u=r(87290),d=r(50516),l=r(96395),f=r(77388),p=o&&o.prototype,v=s("species"),h=!1,g=a(n.PromiseRejectionEvent),m=c("Promise",(function(){var e=i(o),t=e!==String(o);if(!t&&66===f)return!0;if(l&&(!p.catch||!p.finally))return!0;if(!f||f<51||!/native code/.test(e)){var r=new o((function(e){e(1)})),n=function(e){e((function(){}),(function(){}))};if((r.constructor={})[v]=n,!(h=r.then((function(){}))instanceof n))return!0}return!t&&(u||d)&&!g}));e.exports={CONSTRUCTOR:m,REJECTION_EVENT:g,SUBCLASSING:h}},90537:(e,t,r)=>{var n=r(80550),o=r(84428),a=r(10916).CONSTRUCTOR;e.exports=a||!o((function(e){n.all(e).then(void 0,(function(){}))}))},17145:(e,t,r)=>{var n=r(46518),o=r(1625),a=r(42787),c=r(52967),i=r(77740),s=r(2360),u=r(66699),d=r(6980),l=r(77584),f=r(80747),p=r(72652),v=r(32603),h=r(78227)("toStringTag"),g=Error,m=[].push,y=function(e,t){var r,n=o(b,this);c?r=c(new g,n?a(this):b):(r=n?this:s(b),u(r,h,"Error")),void 0!==t&&u(r,"message",v(t)),f(r,y,r.stack,1),arguments.length>2&&l(r,arguments[2]);var i=[];return p(e,m,{that:i}),u(r,"errors",i),r};c?c(y,g):i(y,g,{name:!0});var b=y.prototype=s(g.prototype,{constructor:d(1,y),message:d(1,""),name:d(1,"AggregateError")});n({global:!0,constructor:!0,arity:2},{AggregateError:y})},30067:(e,t,r)=>{r(17145)},93518:(e,t,r)=>{var n=r(46518),o=r(69565),a=r(79306),c=r(97751),i=r(36043),s=r(1103),u=r(72652),d=r(90537),l="No one promise resolved";n({target:"Promise",stat:!0,forced:d},{any:function(e){var t=this,r=c("AggregateError"),n=i.f(t),d=n.resolve,f=n.reject,p=s((function(){var n=a(t.resolve),c=[],i=0,s=1,p=!1;u(e,(function(e){var a=i++,u=!1;s++,o(n,t,e).then((function(e){u||p||(p=!0,d(e))}),(function(e){u||p||(u=!0,c[a]=e,--s||f(new r(c,l)))}))})),--s||f(new r(c,l))}));return p.error&&f(p.value),n.promise}})}}]);