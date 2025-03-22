import{l as d,m as ae,n as ce,o as le,p as N,c as H,i as V,q as ue,t as me,_ as b,a as y,f as de,v as j,w as pe,R as _e,x as fe,Q as qe}from"./q-B76zfmTA.js";/**
 * @license
 * @builder.io/qwik/server 1.12.1-dev+7061ec0-20250220223946
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ye=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),ke="<sync>";function we(n,e){const t=e==null?void 0:e.mapper,s=n.symbolMapper?n.symbolMapper:(r,i,a)=>{var c;if(t){const l=F(r),u=t[l];if(!u){if(l===ke)return[l,""];if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(l))return[r,"_"];if(a)return[r,`${a}?qrl=${r}`];console.error("Cannot resolve symbol",r,"in",t,a)}return u}};return{isServer:!0,async importSymbol(r,i,a){var h;const c=F(a),l=(h=globalThis.__qwik_reg_symbols)==null?void 0:h.get(c);if(l)return l;let u=String(i);u.endsWith(".js")||(u+=".js");const q=ye(u);if(!(a in q))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${u}'.`);return q[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:r=>new Promise(i=>{setTimeout(()=>{i(r())})}),chunkForSymbol(r,i,a){return s(r,t,a)}}}async function be(n,e){const t=we(n,e);ce(t)}var F=n=>{const e=n.lastIndexOf("_");return e>-1?n.slice(e+1):n},he="q:instance";function je(n){if(n!=null&&n.mapping!=null&&typeof n.mapping=="object"&&n.symbols!=null&&typeof n.symbols=="object"&&n.bundles!=null&&typeof n.bundles=="object")return n}function C(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function ve(n,e){const t={bundles:v(e).map(o=>o.split("/").pop())},s=JSON.stringify(["prefetch",n,...t.bundles]);return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(t)}}));
          (window.qwikPrefetchSW||(window.qwikPrefetchSW=[])).push(${s});`}function v(n){const e=[],t=s=>{if(Array.isArray(s))for(const o of s)e.includes(o.url)||(e.push(o.url),t(o.imports))};return t(n),e}function xe(n){const e=new Map;let t=0;const s=(a,c)=>{if(Array.isArray(a))for(const l of a){const u=e.get(l.url)||0;e.set(l.url,u+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},o=new Set;for(const a of n)o.clear(),s(a.imports,o);const r=t/e.size*2,i=Array.from(e.entries());return i.sort((a,c)=>c[1]-a[1]),i.slice(0,5).filter(a=>a[1]>r).map(a=>a[0])}function ge(n,e,t,s){const o=Ne(e==null?void 0:e.implementation),r=[];return o.prefetchEvent==="always"&&Ee(n,r,t,s),o.linkInsert==="html-append"&&Se(r,t,o),o.linkInsert==="js-append"?Fe(r,t,o,s):o.workerFetchInsert==="always"&&Ce(r,t,s),r.length>0?d(N,{children:r}):null}function Ee(n,e,t,s){const o=xe(t);for(const r of o)e.push(d("link",{rel:"modulepreload",href:r,nonce:s}));e.push(d("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:ve(n,t)+"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:s}))}function Se(n,e,t){const s=v(e),o=t.linkRel||"prefetch",r=t.linkFetchPriority;for(const i of s){const a={};a.href=i,a.rel=o,r&&(a.fetchpriority=r),(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(a.as="script"),n.push(d("link",a))}}function Fe(n,e,t,s){const o=t.linkRel||"prefetch",r=t.linkFetchPriority;let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(v(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,r&&(i+=`l.setAttribute("fetchpriority","${r}");`),t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=C(),i+="}"),t.workerFetchInsert==="always"&&(i+=C()),n.push(d("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:i,nonce:s}))}function Ce(n,e,t){let s=`const u=${JSON.stringify(v(e))};`;s+=C(),n.push(d("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:s,nonce:t}))}function Ne(n){return{...Ze,...n}}var Ze={linkInsert:null,linkRel:null,linkFetchPriority:null,workerFetchInsert:null,prefetchEvent:"always"};function S(){if(typeof performance>"u")return()=>0;const n=performance.now();return()=>(performance.now()-n)/1e6}function Y(n){let e=n.base;return typeof n.base=="function"&&(e=n.base(n)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}function Pe(n,e,t){if(!t)return[];const s=e.prefetchStrategy,o=Y(e);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return ze(n,t,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(r){console.error("getPrefetchUrls, symbolsToPrefetch()",r)}}return[]}function ze(n,e,t){const s=[],o=n==null?void 0:n.qrls,{mapper:r,manifest:i}=e,a=new Map;if(Array.isArray(o))for(const c of o){const l=c.getHash(),u=r[l];if(u){const q=u[1];X(i,a,s,t,q)}}return s}function X(n,e,t,s,o){const r=s+o;let i=e.get(r);if(!i){i={url:r,imports:[]},e.set(r,i);const a=n.bundles[o];if(a&&Array.isArray(a.imports))for(const c of a.imports)X(n,e,i.imports,s,c)}t.push(i)}var Ae='(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,s=(e,s)=>{for(var a in s||(s={}))o.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))r.call(s,a)&&n(e,a,s[a]);return e};((e,t)=>{const o="__q_context__",r=window,n=new Set,a=new Set([e]),i="replace",c="forEach",l="target",f="getAttribute",p="isConnected",b="qvisible",u="_qwikjson_",y=(e,t)=>Array.from(e.querySelectorAll(t)),h=e=>{const t=[];return a.forEach((o=>t.push(...y(o,e)))),t},d=e=>{S(e),y(e,"[q\\\\:shadowroot]").forEach((e=>{const t=e.shadowRoot;t&&d(t)}))},m=e=>e&&"function"==typeof e.then,w=(e,t,o=t.type)=>{h("[on"+e+"\\\\:"+o+"]")[c]((r=>g(r,e,t,o)))},q=t=>{if(void 0===t[u]){let o=(t===e.documentElement?e.body:t).lastElementChild;for(;o;){if("SCRIPT"===o.tagName&&"qwik/json"===o[f]("type")){t[u]=JSON.parse(o.textContent[i](/\\\\x3C(\\/?script)/gi,"<$1"));break}o=o.previousElementSibling}}},v=(e,t)=>new CustomEvent(e,{detail:t}),g=async(t,r,n,a=n.type)=>{const c="on"+r+":"+a;t.hasAttribute("preventdefault:"+a)&&n.preventDefault(),t.hasAttribute("stoppropagation:"+a)&&n.stopPropagation();const l=t._qc_,b=l&&l.li.filter((e=>e[0]===c));if(b&&b.length>0){for(const e of b){const o=e[1].getFn([t,n],(()=>t[p]))(n,t),r=n.cancelBubble;m(o)&&await o,r&&n.stopPropagation()}return}const u=t[f](c);if(u){const r=t.closest("[q\\\\:container]"),a=r[f]("q:base"),c=r[f]("q:version")||"unknown",l=r[f]("q:manifest-hash")||"dev",b=new URL(a,e.baseURI);for(const f of u.split("\\n")){const u=new URL(f,b),y=u.href,h=u.hash[i](/^#?([^?[|]*).*$/,"$1")||"default",d=performance.now();let w,v,g;const A=f.startsWith("#"),_={qBase:a,qManifest:l,qVersion:c,href:y,symbol:h,element:t,reqTime:d};if(A){const t=r.getAttribute("q:instance");w=(e["qFuncs_"+t]||[])[Number.parseInt(h)],w||(v="sync",g=Error("sync handler error for symbol: "+h))}else{const e=u.href.split("#")[0];try{const t=import(e);q(r),w=(await t)[h],w||(v="no-symbol",g=Error(`${h} not in ${e}`))}catch(e){v||(v="async"),g=e}}if(!w){E("qerror",s({importError:v,error:g},_)),console.error(g);break}const k=e[o];if(t[p])try{e[o]=[t,n,u],A||E("qsymbol",s({},_));const r=w(n,t);m(r)&&await r}catch(e){E("qerror",s({error:e},_))}finally{e[o]=k}}}},E=(t,o)=>{e.dispatchEvent(v(t,o))},A=e=>e[i](/([A-Z])/g,(e=>"-"+e.toLowerCase())),_=async e=>{let t=A(e.type),o=e[l];for(w("-document",e,t);o&&o[f];){const r=g(o,"",e,t);let n=e.cancelBubble;m(r)&&await r,n=n||e.cancelBubble||o.hasAttribute("stoppropagation:"+e.type),o=e.bubbles&&!0!==n?o.parentElement:null}},k=e=>{w("-window",e,A(e.type))},C=()=>{var o;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(a.forEach(d),t=1,E("qinit"),(null!=(o=r.requestIdleCallback)?o:r.setTimeout).bind(r)((()=>E("qidle"))),n.has(b))){const e=h("[on\\\\:"+b+"]"),t=new IntersectionObserver((e=>{for(const o of e)o.isIntersecting&&(t.unobserve(o[l]),g(o[l],"",v(b,o)))}));e[c]((e=>t.observe(e)))}},O=(e,t,o,r=!1)=>e.addEventListener(t,o,{capture:r,passive:!1}),S=(...e)=>{for(const t of e)"string"==typeof t?n.has(t)||(a.forEach((e=>O(e,t,_,!0))),O(r,t,k,!0),n.add(t)):a.has(t)||(n.forEach((e=>O(t,e,_,!0))),a.add(t))};if(!(o in e)){e[o]=0;const t=r.qwikevents;Array.isArray(t)&&S(...t),r.qwikevents={events:n,roots:a,push:S},O(e,"readystatechange",C),C()}})(document)})()',Qe=`(() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value
    }) : obj[key] = value;
    var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) {
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        }
        if (__getOwnPropSymbols) {
            for (var prop of __getOwnPropSymbols(b)) {
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
            }
        }
        return a;
    };
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const roots =  new Set([ doc ]);
        const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
        const querySelectorAll = query => {
            const elements = [];
            roots.forEach((root => elements.push(...nativeQuerySelectorAll(root, query))));
            return elements;
        };
        const findShadowRoots = fragment => {
            processEventOrNode(fragment);
            nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent => {
                const shadowRoot = parent.shadowRoot;
                shadowRoot && findShadowRoots(shadowRoot);
            }));
        };
        const isPromise = promise => promise && "function" == typeof promise.then;
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            element.hasAttribute("stoppropagation:" + eventName) && ev.stopPropagation();
            const ctx = element._qc_;
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    const results = listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                    const cancelBubble = ev.cancelBubble;
                    isPromise(results) && await results;
                    cancelBubble && ev.stopPropagation();
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const qBase = container.getAttribute("q:base");
                const qVersion = container.getAttribute("q:version") || "unknown";
                const qManifest = container.getAttribute("q:manifest-hash") || "dev";
                const base = new URL(qBase, doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const href = url.href;
                    const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    let importError;
                    let error;
                    const isSync = qrl.startsWith("#");
                    const eventData = {
                        qBase: qBase,
                        qManifest: qManifest,
                        qVersion: qVersion,
                        href: href,
                        symbol: symbol,
                        element: element,
                        reqTime: reqTime
                    };
                    if (isSync) {
                        const hash = container.getAttribute("q:instance");
                        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
                        if (!handler) {
                            importError = "sync";
                            error = new Error("sync handler error for symbol: " + symbol);
                        }
                    } else {
                        const uri = url.href.split("#")[0];
                        try {
                            const module = import(
                                                        uri);
                            resolveContainer(container);
                            handler = (await module)[symbol];
                            if (!handler) {
                                importError = "no-symbol";
                                error = new Error(\`\${symbol} not in \${uri}\`);
                            }
                        } catch (err) {
                            importError || (importError = "async");
                            error = err;
                        }
                    }
                    if (!handler) {
                        emitEvent("qerror", __spreadValues({
                            importError: importError,
                            error: error
                        }, eventData));
                        console.error(error);
                        break;
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", __spreadValues({}, eventData));
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } catch (error2) {
                            emitEvent("qerror", __spreadValues({
                                error: error2
                            }, eventData));
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                const results = dispatch(element, "", ev, type);
                let cancelBubble = ev.cancelBubble;
                isPromise(results) && await results;
                cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
                element = ev.bubbles && !0 !== cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                roots.forEach(findShadowRoots);
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const processEventOrNode = (...eventNames) => {
            for (const eventNameOrNode of eventNames) {
                if ("string" == typeof eventNameOrNode) {
                    if (!events.has(eventNameOrNode)) {
                        roots.forEach((root => addEventListener(root, eventNameOrNode, processDocumentEvent, !0)));
                        addEventListener(win, eventNameOrNode, processWindowEvent, !0);
                        events.add(eventNameOrNode);
                    }
                } else if (!roots.has(eventNameOrNode)) {
                    events.forEach((eventName => addEventListener(eventNameOrNode, eventName, processDocumentEvent, !0)));
                    roots.add(eventNameOrNode);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && processEventOrNode(...qwikevents);
            win.qwikevents = {
                events: events,
                roots: roots,
                push: processEventOrNode
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`;function $(n={}){return n.debug?Qe:Ae}var Ge="<!DOCTYPE html>";async function Le(n,e){var L,T,I;let t=e.stream,s=0,o=0,r=0,i=0,a="",c;const l=((L=e.streaming)==null?void 0:L.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=e.containerTagName??"html",q=e.containerAttributes??{},h=t,ee=S(),ne=Y(e),p=Ie(e.manifest);function Z(){a&&(h.write(a),a="",s=0,r++,r===1&&(i=ee()))}function P(m){const _=m.length;s+=_,o+=_,a+=m}switch(l.strategy){case"disabled":t={write:P};break;case"direct":t=h;break;case"auto":let m=0,_=!1;const O=l.maximunChunk??0,E=l.maximunInitialChunk??0;t={write(w){w==="<!--qkssr-f-->"?_||(_=!0):w==="<!--qkssr-pu-->"?m++:w==="<!--qkssr-po-->"?m--:P(w),m===0&&(_||s>=(r===0?E:O))&&(_=!1,Z())}};break}u==="html"?t.write(Ge):(t.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"},e.qwikPrefetchServiceWorker||(e.qwikPrefetchServiceWorker={}),e.qwikPrefetchServiceWorker.include||(e.qwikPrefetchServiceWorker.include=!1),e.qwikPrefetchServiceWorker.position||(e.qwikPrefetchServiceWorker.position="top")),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await be(e,p);const z=p==null?void 0:p.manifest.injections,x=z?z.map(m=>d(m.tag,m.attributes??{})):[],g=((T=e.qwikLoader)==null?void 0:T.include)??"auto";if((((I=e.qwikLoader)==null?void 0:I.position)??"bottom")==="top"&&g!=="never"){const m=$({debug:e.debug});x.push(d("script",{id:"qwikloader",dangerouslySetInnerHTML:m})),x.push(d("script",{dangerouslySetInnerHTML:"window.qwikevents.push('click')"}))}const te=S(),A=[];let Q=0,G=0;await ae(n,{stream:t,containerTagName:u,containerAttributes:q,serverData:e.serverData,base:ne,beforeContent:x,beforeClose:async(m,_,O,E)=>{var M,K,W,B,J;Q=te();const w=S();c=await le(m,_,void 0,E);const k=[];if(e.prefetchStrategy!==null){const f=Pe(c,e,p),re=q["q:base"];if(f.length>0){const U=ge(re,e.prefetchStrategy,f,(M=e.serverData)==null?void 0:M.nonce);U&&k.push(U)}}const oe=JSON.stringify(c.state,void 0,void 0);if(k.push(d("script",{type:"qwik/json",dangerouslySetInnerHTML:Oe(oe),nonce:(K=e.serverData)==null?void 0:K.nonce})),c.funcs.length>0){const f=q[he];k.push(d("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Me(f,c.funcs),nonce:(W=e.serverData)==null?void 0:W.nonce}))}const ie=!c||c.mode!=="static",R=g==="always"||g==="auto"&&ie;if(R){const f=$({debug:e.debug});k.push(d("script",{id:"qwikloader",dangerouslySetInnerHTML:f,nonce:(B=e.serverData)==null?void 0:B.nonce}))}const D=Array.from(_.$events$,f=>JSON.stringify(f));if(D.length>0){const f=(R?"window.qwikevents":"(window.qwikevents||=[])")+`.push(${D.join(", ")})`;k.push(d("script",{dangerouslySetInnerHTML:f,nonce:(J=e.serverData)==null?void 0:J.nonce}))}return Re(A,m),G=w(),d(N,{children:k})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"+Te()}),u!=="html"&&t.write("<!--/cq-->"),Z();const se=c.resources.some(m=>m._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:r,manifest:p==null?void 0:p.manifest,size:o,isStatic:!se,timing:{render:Q,snapshot:G,firstFlush:i},_symbols:A}}function Te(){return Math.random().toString(36).slice(2)}function Ie(n){if(n){if("mapper"in n)return n;if(n=je(n),n){const e={};return Object.entries(n.mapping).forEach(([t,s])=>{e[F(t)]=[t,s]}),{mapper:e,manifest:n}}}}var Oe=n=>n.replace(/<(\/?script)/gi,"\\x3C$1");function Re(n,e){var t;for(const s of e){const o=(t=s.$componentQrl$)==null?void 0:t.getSymbol();o&&!n.includes(o)&&n.push(o)}}var De='document["qFuncs_HASH"]=';function Me(n,e){return De.replace("HASH",n)+`[${e.join(`,
`)}]`}const Ke={manifestHash:"qiz76p",symbols:{s_1JrtAARQZdo:{origin:"routes/joke/index.tsx",displayName:"index.tsx_joke_component_useTask",canonicalFilename:"index.tsx_joke_component_useTask_1JrtAARQZdo",hash:"1JrtAARQZdo",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_1U0sFrUmZSc",loc:[909,1136]},s_Ysfvd0zsHZc:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_QwikCityProvider_component_useTask",canonicalFilename:"index.qwik.mjs_QwikCityProvider_component_useTask_Ysfvd0zsHZc",hash:"Ysfvd0zsHZc",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_p1yCGpFL1xE",loc:[28920,38296]},s_26Zk9LevwR4:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_usePreventNavigateQrl_useVisibleTask",canonicalFilename:"index.qwik.mjs_usePreventNavigateQrl_useVisibleTask_26Zk9LevwR4",hash:"26Zk9LevwR4",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:null,loc:[22667,22695]},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"router-head.tsx_RouterHead_component",canonicalFilename:"router-head.tsx_RouterHead_component_0vphQYqOdZI",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,1201]},s_1U0sFrUmZSc:{origin:"routes/joke/index.tsx",displayName:"index.tsx_joke_component",canonicalFilename:"index.tsx_joke_component_1U0sFrUmZSc",hash:"1U0sFrUmZSc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[637,1717]},s_1raneLGffO8:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_Link_component",canonicalFilename:"index.qwik.mjs_Link_component_1raneLGffO8",hash:"1raneLGffO8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[39776,42066]},s_B0lqk5IDDy4:{origin:"routes/index.tsx",displayName:"index.tsx_routes_component",canonicalFilename:"index.tsx_routes_component_B0lqk5IDDy4",hash:"B0lqk5IDDy4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[194,535]},s_MiPVFWJLcMo:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_QwikCityMockProvider_component",canonicalFilename:"index.qwik.mjs_QwikCityMockProvider_component_MiPVFWJLcMo",hash:"MiPVFWJLcMo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[38544,39749]},s_ScE8eseirUA:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_RouterOutlet_component",canonicalFilename:"index.qwik.mjs_RouterOutlet_component_ScE8eseirUA",hash:"ScE8eseirUA",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7013,8167]},s_VKFlAWJuVm8:{origin:"routes/layout.tsx",displayName:"layout.tsx_layout_component",canonicalFilename:"layout.tsx_layout_component_VKFlAWJuVm8",hash:"VKFlAWJuVm8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[582,610]},s_p1yCGpFL1xE:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_QwikCityProvider_component",canonicalFilename:"index.qwik.mjs_QwikCityProvider_component_p1yCGpFL1xE",hash:"p1yCGpFL1xE",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[24103,38342]},s_pWsmcogutG8:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_GetForm_component",canonicalFilename:"index.qwik.mjs_GetForm_component_pWsmcogutG8",hash:"pWsmcogutG8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[58619,59772]},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root.tsx_root_component",canonicalFilename:"root.tsx_root_component_tntnak2DhJ8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[310,943]},s_K4gvalEGCME:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_QwikCityProvider_component_useStyles",canonicalFilename:"index.qwik.mjs_QwikCityProvider_component_useStyles_K4gvalEGCME",hash:"K4gvalEGCME",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_p1yCGpFL1xE",loc:[24129,24163]},s_41dn0cUZMXk:{origin:"routes/joke/index.tsx",displayName:"index.tsx_joke_component_useStylesScoped",canonicalFilename:"index.tsx_joke_component_useStylesScoped_41dn0cUZMXk",hash:"41dn0cUZMXk",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_1U0sFrUmZSc",loc:[665,671]},s_RZTeGW9xgPs:{origin:"routes/index.tsx",displayName:"index.tsx_routes_component_useStylesScoped",canonicalFilename:"index.tsx_routes_component_useStylesScoped_RZTeGW9xgPs",hash:"RZTeGW9xgPs",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_B0lqk5IDDy4",loc:[221,227]},s_9KRx0IOCHt8:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_spaInit_event",canonicalFilename:"index.qwik.mjs_spaInit_event_9KRx0IOCHt8",hash:"9KRx0IOCHt8",ctxKind:"function",ctxName:"event$",captures:!1,parent:null,loc:[1315,6978]},s_A5SCimyrjAE:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_Form_form_onSubmit",canonicalFilename:"index.qwik.mjs_Form_form_onSubmit_A5SCimyrjAE",hash:"A5SCimyrjAE",ctxKind:"function",ctxName:"$",captures:!0,parent:null,loc:[57750,57864]},s_N26RLdG0oBg:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_routeActionQrl_action_submit",canonicalFilename:"index.qwik.mjs_routeActionQrl_action_submit_N26RLdG0oBg",hash:"N26RLdG0oBg",ctxKind:"function",ctxName:"$",captures:!0,parent:null,loc:[44769,46414]},s_WfTOxT4IrdA:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_serverQrl_rpc",canonicalFilename:"index.qwik.mjs_serverQrl_rpc_WfTOxT4IrdA",hash:"WfTOxT4IrdA",ctxKind:"function",ctxName:"$",captures:!0,parent:null,loc:[52847,55821]},s_FdQ8zERN4uM:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_Link_component_handleClick",canonicalFilename:"index.qwik.mjs_Link_component_handleClick_FdQ8zERN4uM",hash:"FdQ8zERN4uM",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_1raneLGffO8",loc:[41087,41513]},s_PmWjL2RrvZM:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_QwikCityMockProvider_component_goto",canonicalFilename:"index.qwik.mjs_QwikCityMockProvider_component_goto_PmWjL2RrvZM",hash:"PmWjL2RrvZM",ctxKind:"function",ctxName:"$",captures:!1,parent:"s_MiPVFWJLcMo",loc:[38934,39012]},s_aww2BzpANGM:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_QwikCityProvider_component_goto",canonicalFilename:"index.qwik.mjs_QwikCityProvider_component_goto_aww2BzpANGM",hash:"aww2BzpANGM",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_p1yCGpFL1xE",loc:[26317,28391]},s_qGVD1Sz413o:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_QwikCityProvider_component_registerPreventNav",canonicalFilename:"index.qwik.mjs_QwikCityProvider_component_registerPreventNav_qGVD1Sz413o",hash:"qGVD1Sz413o",ctxKind:"function",ctxName:"$",captures:!1,parent:"s_p1yCGpFL1xE",loc:[25420,26297]},s_vo08u62K8xk:{origin:"routes/joke/index.tsx",displayName:"index.tsx_joke_component_section_button_onClick",canonicalFilename:"index.tsx_joke_component_section_button_onClick_vo08u62K8xk",hash:"vo08u62K8xk",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_1U0sFrUmZSc",loc:[1555,1611]},s_xe8duyQ5aaU:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_GetForm_component_form_onSubmit_1",canonicalFilename:"index.qwik.mjs_GetForm_component_form_onSubmit_1_xe8duyQ5aaU",hash:"xe8duyQ5aaU",ctxKind:"function",ctxName:"$",captures:!1,parent:"s_pWsmcogutG8",loc:[59374,59710]},s_zPJUEsxZLIA:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_Link_component_handlePrefetch",canonicalFilename:"index.qwik.mjs_Link_component_handlePrefetch_zPJUEsxZLIA",hash:"zPJUEsxZLIA",ctxKind:"function",ctxName:"$",captures:!1,parent:"s_1raneLGffO8",loc:[40488,40837]},s_zpHcJzYZ88E:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"index.qwik.mjs_GetForm_component_form_onSubmit",canonicalFilename:"index.qwik.mjs_GetForm_component_form_onSubmit_zpHcJzYZ88E",hash:"zpHcJzYZ88E",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_pWsmcogutG8",loc:[58983,59363]}},mapping:{s_1JrtAARQZdo:"q-DnuMw-SW.js",s_Ysfvd0zsHZc:"q-quUpqdeR.js",s_26Zk9LevwR4:"q-B5YnV_0M.js",s_0vphQYqOdZI:"q-BfMsBbPs.js",s_1U0sFrUmZSc:"q-Cc18TjdM.js",s_1raneLGffO8:"q-DTFEDh8k.js",s_B0lqk5IDDy4:"q-DAKJr1oG.js",s_MiPVFWJLcMo:"q-Kk47WfvG.js",s_ScE8eseirUA:"q-xa58mc_W.js",s_VKFlAWJuVm8:"q-GtkJ7OGK.js",s_p1yCGpFL1xE:"q-CNW1XmfN.js",s_pWsmcogutG8:"q-7ESEil32.js",s_tntnak2DhJ8:"q-4fkwtK5J.js",s_K4gvalEGCME:"q-DL52xGKd.js",s_41dn0cUZMXk:"q-CAFYuNG0.js",s_RZTeGW9xgPs:"q-i7l_gNY4.js",s_9KRx0IOCHt8:"q-BRBr7aun.js",s_A5SCimyrjAE:"q-CZZFFQzG.js",s_N26RLdG0oBg:"q-BIcg3y38.js",s_WfTOxT4IrdA:"q-DCtc2dy5.js",s_FdQ8zERN4uM:"q-DXBXKkiO.js",s_PmWjL2RrvZM:"q-DnwWzpsc.js",s_aww2BzpANGM:"q-DmMQA460.js",s_qGVD1Sz413o:"q-B_JxI4ZF.js",s_vo08u62K8xk:"q-NC5cr-QF.js",s_xe8duyQ5aaU:"q-DvsOpov0.js",s_zPJUEsxZLIA:"q-DwlQGJft.js",s_zpHcJzYZ88E:"q-BU4Zwwvh.js"},bundles:{"..\\service-worker.js":{size:2808,origins:["node_modules/@builder.io/qwik-city/lib/service-worker.mjs","src/routes/service-worker.ts"]},"q-4fkwtK5J.js":{size:488,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],dynamicImports:["q-BfMsBbPs.js"],origins:["src/components/router-head/router-head.tsx","src/root.tsx_root_component_tntnak2DhJ8.js"],symbols:["s_tntnak2DhJ8"]},"q-7ESEil32.js":{size:12992,imports:["q-CZZFFQzG.js"],dynamicImports:["q-BIcg3y38.js","q-BRBr7aun.js","q-CNW1XmfN.js","q-CZZFFQzG.js","q-DCtc2dy5.js","q-xa58mc_W.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_form_onSubmit_1_xe8duyQ5aaU.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_form_onSubmit_zpHcJzYZ88E.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_pWsmcogutG8.js","node_modules/zod/lib/index.mjs"],symbols:["s_pWsmcogutG8"]},"q-B5YnV_0M.js":{size:152,isTask:!0,imports:["q-CZZFFQzG.js"],origins:["node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_usePreventNavigateQrl_useVisibleTask_26Zk9LevwR4.js"],symbols:["s_26Zk9LevwR4"]},"q-B_JxI4ZF.js":{size:130,isTask:!0,imports:["q-7ESEil32.js","q-CNW1XmfN.js","q-CZZFFQzG.js"],symbols:["s_qGVD1Sz413o"]},"q-BfMsBbPs.js":{size:879,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],origins:["src/components/router-head/router-head.tsx_RouterHead_component_0vphQYqOdZI.js"],symbols:["s_0vphQYqOdZI"]},"q-BIcg3y38.js":{size:813,isTask:!0,imports:["q-CZZFFQzG.js"],origins:["node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_routeActionQrl_action_submit_N26RLdG0oBg.js"],symbols:["s_N26RLdG0oBg"]},"q-BRBr7aun.js":{size:2297,origins:["node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_spaInit_event_9KRx0IOCHt8.js"],symbols:["s_9KRx0IOCHt8"]},"q-BU4Zwwvh.js":{size:111,isTask:!0,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],symbols:["s_zpHcJzYZ88E"]},"q-CAFYuNG0.js":{size:112,imports:["q-7ESEil32.js","q-CZZFFQzG.js","q-NC5cr-QF.js"],symbols:["s_41dn0cUZMXk"]},"q-Cc18TjdM.js":{size:112,imports:["q-7ESEil32.js","q-CZZFFQzG.js","q-NC5cr-QF.js"],symbols:["s_1U0sFrUmZSc"]},"q-CEs_IqMO.js":{size:274,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],dynamicImports:["q-GtkJ7OGK.js"],origins:["src/routes/layout.tsx"]},"q-CNW1XmfN.js":{size:6980,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],dynamicImports:["q-CEs_IqMO.js","q-NC5cr-QF.js","q-TqK0PJbi.js"],origins:["@qwik-city-plan","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_goto_aww2BzpANGM.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_p1yCGpFL1xE.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_registerPreventNav_qGVD1Sz413o.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_useStyles_K4gvalEGCME.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_useTask_Ysfvd0zsHZc.js"],symbols:["s_p1yCGpFL1xE"]},"q-CZZFFQzG.js":{size:68035,isTask:!0,origins:["@builder.io/qwik/build","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Form_form_onSubmit_A5SCimyrjAE.js","node_modules/@builder.io/qwik/dist/core.prod.mjs"],symbols:["s_A5SCimyrjAE"]},"q-DAKJr1oG.js":{size:866,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],origins:["src/routes/index.css?inline","src/routes/index.tsx_routes_component_B0lqk5IDDy4.js","src/routes/index.tsx_routes_component_useStylesScoped_RZTeGW9xgPs.js"],symbols:["s_B0lqk5IDDy4"]},"q-DCtc2dy5.js":{size:1230,isTask:!0,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],origins:["node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_serverQrl_rpc_WfTOxT4IrdA.js"],symbols:["s_WfTOxT4IrdA"]},"q-DL52xGKd.js":{size:112,imports:["q-7ESEil32.js","q-CNW1XmfN.js","q-CZZFFQzG.js"],symbols:["s_K4gvalEGCME"]},"q-DmMQA460.js":{size:135,isTask:!0,imports:["q-7ESEil32.js","q-CNW1XmfN.js","q-CZZFFQzG.js"],symbols:["s_aww2BzpANGM"]},"q-DnuMw-SW.js":{size:135,isTask:!0,imports:["q-7ESEil32.js","q-CZZFFQzG.js","q-NC5cr-QF.js"],symbols:["s_1JrtAARQZdo"]},"q-DnwWzpsc.js":{size:807,isTask:!0,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],origins:["node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityMockProvider_component_MiPVFWJLcMo.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityMockProvider_component_goto_PmWjL2RrvZM.js"],symbols:["s_PmWjL2RrvZM"]},"q-DTFEDh8k.js":{size:112,imports:["q-7ESEil32.js","q-CZZFFQzG.js","q-DwlQGJft.js"],symbols:["s_1raneLGffO8"]},"q-DvsOpov0.js":{size:111,isTask:!0,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],symbols:["s_xe8duyQ5aaU"]},"q-DwlQGJft.js":{size:1684,isTask:!0,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],origins:["node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_1raneLGffO8.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_handleClick_FdQ8zERN4uM.js","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_handlePrefetch_zPJUEsxZLIA.js"],symbols:["s_zPJUEsxZLIA"]},"q-DXBXKkiO.js":{size:135,isTask:!0,imports:["q-7ESEil32.js","q-CZZFFQzG.js","q-DwlQGJft.js"],symbols:["s_FdQ8zERN4uM"]},"q-GtkJ7OGK.js":{size:102,imports:["q-CZZFFQzG.js"],origins:["src/routes/layout.tsx_layout_component_VKFlAWJuVm8.js"],symbols:["s_VKFlAWJuVm8"]},"q-i7l_gNY4.js":{size:112,imports:["q-7ESEil32.js","q-CZZFFQzG.js","q-DAKJr1oG.js"],symbols:["s_RZTeGW9xgPs"]},"q-inZcO9b2.js":{size:171,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],dynamicImports:["q-4fkwtK5J.js"],origins:["src/global.css","src/root.tsx"]},"q-Kk47WfvG.js":{size:112,imports:["q-7ESEil32.js","q-CZZFFQzG.js","q-DnwWzpsc.js"],symbols:["s_MiPVFWJLcMo"]},"q-n16T7f9h.js":{size:149,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],dynamicImports:["..\\service-worker.js"],origins:["@qwik-city-entries"]},"q-NC5cr-QF.js":{size:1812,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],origins:["src/routes/joke/index.css?inline","src/routes/joke/index.tsx","src/routes/joke/index.tsx_joke_component_1U0sFrUmZSc.js","src/routes/joke/index.tsx_joke_component_section_button_onClick_vo08u62K8xk.js","src/routes/joke/index.tsx_joke_component_useStylesScoped_41dn0cUZMXk.js","src/routes/joke/index.tsx_joke_component_useTask_1JrtAARQZdo.js"],symbols:["s_vo08u62K8xk"]},"q-quUpqdeR.js":{size:135,isTask:!0,imports:["q-7ESEil32.js","q-CNW1XmfN.js","q-CZZFFQzG.js"],symbols:["s_Ysfvd0zsHZc"]},"q-TqK0PJbi.js":{size:282,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],dynamicImports:["q-DAKJr1oG.js"],origins:["src/routes/index.tsx"]},"q-xa58mc_W.js":{size:982,imports:["q-7ESEil32.js","q-CZZFFQzG.js"],origins:["node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_RouterOutlet_component_ScE8eseirUA.js"],symbols:["s_ScE8eseirUA"]}},injections:[],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.12.1-dev+7061ec0-20250220223946",vite:"",rollup:"4.36.0",env:"node",os:"win32",node:"22.11.0"}},We=()=>{const n=ue(),e=me();return b(N,{children:[y("title",null,null,n.title,1,null),y("link",null,{rel:"canonical",href:de(t=>t.url.href,[e],"p0.url.href")},null,3,null),y("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),y("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),n.meta.map(t=>j("meta",{...t},null,0,t.key)),n.links.map(t=>j("link",{...t},null,0,t.key)),n.styles.map(t=>{var s;return j("style",{...t.props,...(s=t.props)!=null&&s.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.style}},null,0,t.key)}),n.scripts.map(t=>{var s;return j("script",{...t.props,...(s=t.props)!=null&&s.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:t.script}},null,0,t.key)})]},1,"0D_0")},Be=H(V(We,"s_0vphQYqOdZI")),Je=()=>(pe(),b(qe,{children:[y("head",null,null,[y("meta",null,{charset:"utf-8"},null,3,null),y("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"vp_0"),b(Be,null,3,"vp_1")],1,null),y("body",null,{lang:"en"},[b(_e,null,3,"vp_2"),b(fe,null,3,"vp_3")],1,null)]},1,"vp_4")),Ue=H(V(Je,"s_tntnak2DhJ8"));function Ye(n){return Le(b(Ue,null,3,"Qb_0"),{manifest:Ke,...n,containerAttributes:{lang:"en-us",...n.containerAttributes},serverData:{...n.serverData}})}export{Ye as default};
