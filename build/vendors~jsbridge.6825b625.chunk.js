(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
  382(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      LOAD_RESOURCE_ERROR: 'LOAD_RESOURCE_ERROR', BRIDGE_CANT_READY: 'BRIDGE_CANT_READY', INVOKE_EXCEPTION: 'INVOKE_EXCEPTION', USER_CANCEL: 'USER_CANCEL', NO_PERMISSION: 'NO_PERMISSION', APP_NOT_SUPPORT: 'APP_NOT_SUPPORT', API_NOT_SUPPORT: 'API_NOT_SUPPORT', PARAM_NOT_SET: 'PARAM_NOT_SET', PARAM_WRONG: 'PARAM_WRONG', PARAM_NOT_SUPPORT: 'PARAM_NOT_SUPPORT', throw(e, t) { return t ? { errorCode: e, errorMsg: t } : { errorCode: e }; },
    }, e.exports = t.default;
  },
  401(e, t) {
    function r(e, t, r, i, n, o, a) {
      try {
        var u = e[o](a),
          d = u.value;
      } catch (e) { return void r(e); }u.done ? t(d) : Promise.resolve(d).then(i, n);
    }e.exports = function (e) {
      return function () {
        let t = this,
          i = arguments; return new Promise(((n, o) => { const a = e.apply(t, i); function u(e) { r(a, n, o, u, d, 'next', e); } function d(e) { r(a, n, o, u, d, 'throw', e); }u(void 0); }));
      };
    };
  },
  402(e, t, r) { r(57); const i = r(403); function n(t, r, o) { return typeof Reflect !== 'undefined' && Reflect.get ? e.exports = n = Reflect.get : e.exports = n = function (e, t, r) { const n = i(e, t); if (n) { const o = Object.getOwnPropertyDescriptor(n, t); return o.get ? o.get.call(r) : o.value; } }, n(t, r, o || t); }e.exports = n; },
  403(e, t, r) { const i = r(57); e.exports = function (e, t) { for (;!Object.prototype.hasOwnProperty.call(e, t) && (e = i(e)) !== null;);return e; }; },
  404(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let i,
      n = r(405),
      o = (i = n) && i.__esModule ? i : { default: i }; t.default = function e() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return (function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), t.__version = '0.0.19', new o.default(t); }, e.exports = t.default;
  },
  405(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; },
      n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()); r(406); let o = l(r(408)),
      a = l(r(382)),
      u = l(r(409)),
      d = l(r(410)),
      s = r(411); function l(e) { return e && e.__esModule ? e : { default: e }; } let c = '@VERSION@',
      f = (function () {
        function e(t) { !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), t = o.default.getDefault(t, {}), this.Util = o.default, this.CommonError = a.default, this.APIConfig = d.default, this.env = o.default.getDefault(t.env, 'publish'), this.devOrigin = o.default.getDefault(t.devOrigin, o.default.devOrigin), this.version = o.default.getDefault(t.__version, c), this.enableTracker = o.default.getDefault(t.enableTracker, !0), this.clientInfo = o.default.clientInfo, this.clientConfig = null, this.isDepReady = !1, this.isBridgeReady = !1, this.onReady = t.onReady, this.clientBridge = null, this.jsBridgeAPI = null, this.cachedCustomAPI = {}, this.callerStack = [], this.error = null, this.__bindAPI(), this.__init(); } return n(e, [{
          key: '__init',
          value() {
            const e = this; this.clientConfig = this.__detect(), this.__loadDep(this.clientConfig).then(() => {
              e.jsBridgeAPI = new window.JSBridgeAPI({ Util: o.default, CommonError: a.default, client: e.clientConfig }), e.clientBridge = e.jsBridgeAPI.bridge, e.isDepReady = !0, e.__clearCachedCustomAPI(), e.jsBridgeAPI.__ready().then(() => { e.isBridgeReady = !0, e.__clearCallStack(), e.onReady && e.onReady(); }).catch(() => {
                e.error = a.default.throw(a.default.BRIDGE_CANT_READY), e.__clearCallStackWithError(), e.__tracker({
                  type: 'core', module: `${e.clientConfig.bridgeName}-${e.clientConfig.bridgeVersion}`, action: 'ready', result: 'fail',
                });
              });
            }).catch(() => {
              e.error = a.default.throw(a.default.LOAD_RESOURCE_ERROR), e.__clearCallStackWithError(), e.__tracker({
                type: 'core', module: 'dependence', action: 'load', result: 'fail',
              });
            }), this.__tracker({ type: 'core', module: 'jsbridge', action: 'init' });
          },
        }, {
          key: '__bindAPI',
          value() {
            let e = this,
              t = function (t) { if (!(t in e)) { const r = e.APIConfig[t]; if (['on', 'off'].indexOf(t) !== -1) return e[t] = function (r, i) { e.__callEvent(t, r, i); }, 'continue'; e[t] = function (i) { const n = o.default.getDefaultParams(t, i, r); return n.errorCode ? window.Promise.reject(n) : e.__call(t, n); }; } }; for (const r in this.APIConfig)t(r);
          },
        }, { key: '__detect', value() { for (let e = window.navigator.userAgent, t = 0; t < s.ClientConfig.length; t++) { const r = s.ClientConfig[t]; if (r.detect(e)) return r; } return s.WapConfig; } }, {
          key: '__call',
          value(e, t) {
            const r = this; return this.error ? window.Promise.reject(this.error) : this.isBridgeReady ? (this.__tracker({
              type: 'api', module: e, action: 'execute', result: 'start',
            }), e in this.jsBridgeAPI ? new window.Promise(((n, o) => {
              let a = r,
                u = r.jsBridgeAPI[e](t, a); u && (void 0 === u ? 'undefined' : i(u)) === 'object' && u instanceof Promise ? u.then(function () {
                a.__tracker({
                  type: 'api', module: e, action: 'execute', result: 'success',
                }), n(...arguments);
              }).catch(function () {
                a.__tracker({
                  type: 'api', module: e, action: 'execute', result: 'fail',
                }), o(...arguments);
              }) : n(u);
            })) : (this.__tracker({
              type: 'api', module: e, action: 'execute', result: 'notsupport',
            }), o.default.notSupportAPI())) : new window.Promise(((i, n) => {
              r.callerStack.push({
                name: e, params: t, resolve: i, reject: n,
              });
            }));
          },
        }, { key: '__clearCachedCustomAPI', value() { for (const e in this.cachedCustomAPI) this.jsBridgeAPI[e] = this.cachedCustomAPI[e]; } }, { key: '__callEvent', value(e, t, r) { if (this.error) throw this.error; this.isBridgeReady ? this.jsBridgeAPI[e](t, r) : this.callerStack.push({ api: e, name: t, callback: r }); } }, { key: '__clearCallStack', value() { for (var e = this, t = function (t) { const r = e.callerStack[t]; r.api ? e.__callEvent(r.api, r.name, r.callback) : e.__call(r.name, r.params).then((e) => { r.resolve(e); }).catch((e) => { r.reject(e); }); }, r = 0; r < this.callerStack.length; r++)t(r); } }, { key: '__clearCallStackWithError', value() { for (let e = 0; e < this.callerStack.length; e++) { this.callerStack[e].reject(this.error); } } }, {
          key: '__loadDep',
          value(e) {
            let t = [],
              r = !1; if (e.bridgeRefer == 'memory' && e.getBridge() && (r = !0), this.env == 'publish' || this.env == 'daily') { let i = `${this.env == 'daily' ? o.default.dailyOrigin : o.default.publishOrigin}/fgt/jsbridge/${this.version}/??`; r || (i += `bridge/${e.bridgeName}/${e.bridgeVersion}.js,`), i += `client/${e.clientName}.js`, t.push({ key: 'JSBridgeDependency', ver: this.version, url: i }); } if (this.env == 'dev') {
              let n = `${this.devOrigin}/dev/`,
                a = (new Date()).getTime(); if (!r) { const d = `${n}bridge/${e.bridgeName}/${e.bridgeVersion}.js?t=${a}`; t.push({ key: 'JSBridgeDependency_Bridge', ver: this.version, url: d }); } const s = `${n}client/${e.clientName}.js?t=${a}`; t.push({ key: 'JSBridgeDependency_API', ver: this.version, url: s });
            } return u.default.loadScripts(t);
          },
        }, { key: '__tracker', value(e) { e.jbv = this.version, this.enableTracker && o.default.tracker(e); } }, {
          key: 'registerAPI',
          value(e) {
            let t = this,
              r = function (r) { t[r] = function (e) { return t.__call(r, e); }, t.isDepReady ? t.jsBridgeAPI[r] = e[r] : t.cachedCustomAPI[r] = e[r]; }; for (const i in e)r(i); return window.Promise.resolve();
          },
        }]), e;
      }()); t.default = f, e.exports = t.default;
  },
  406(e, t, r) {
    let i,
      n = r(407); ((i = n) && i.__esModule ? i : { default: i }).default.polyfill();
  },
  407(e, t, r) {
    (function (t, r) {
    /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */let i; i = function () {
        function e(e) { return typeof e === 'function'; } let i = Array.isArray ? Array.isArray : function (e) { return Object.prototype.toString.call(e) === '[object Array]'; },
          n = 0,
          o = void 0,
          a = void 0,
          u = function (e, t) { g[n] = e, g[n + 1] = t, (n += 2) === 2 && (a ? a(m) : y()); },
          d = typeof window !== 'undefined' ? window : void 0,
          s = d || {},
          l = s.MutationObserver || s.WebKitMutationObserver,
          c = typeof self === 'undefined' && void 0 !== t && {}.toString.call(t) === '[object process]',
          f = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined'; function p() { const e = setTimeout; return function () { return e(m, 1); }; } var g = new Array(1e3); function m() { for (let e = 0; e < n; e += 2) { (0, g[e])(g[e + 1]), g[e] = void 0, g[e + 1] = void 0; }n = 0; } var h,
          _,
          v,
          b,
          y = void 0; function w(e, t) {
          let r = this,
            i = new this.constructor(N); void 0 === i[P] && q(i); const n = r._state; if (n) { const o = arguments[n - 1]; u(() => E(n, i, o, r._result)); } else I(r, i, e, t); return i;
        } function A(e) { if (e && typeof e === 'object' && e.constructor === this) return e; const t = new this(N); return C(t, e), t; }c ? y = function () { return t.nextTick(m); } : l ? (_ = 0, v = new l(m), b = document.createTextNode(''), v.observe(b, { characterData: !0 }), y = function () { b.data = _ = ++_ % 2; }) : f ? ((h = new MessageChannel()).port1.onmessage = m, y = function () { return h.port2.postMessage(0); }) : y = void 0 === d ? (function () { try { const e = Function('return this')().require('vertx'); return void 0 !== (o = e.runOnLoop || e.runOnContext) ? function () { o(m); } : p(); } catch (e) { return p(); } }()) : p(); var P = Math.random().toString(36).substring(2); function N() {} let O = void 0,
          R = 1,
          S = 2,
          B = { error: null }; function k(e) { try { return e.then; } catch (e) { return B.error = e, B; } } function j(t, r, i) {
          r.constructor === t.constructor && i === w && r.constructor.resolve === A ? (function (e, t) { t._state === R ? T(e, t._result) : t._state === S ? V(e, t._result) : I(t, void 0, t => C(e, t), t => V(e, t)); }(t, r)) : i === B ? (V(t, B.error), B.error = null) : void 0 === i ? T(t, r) : e(i) ? (function (e, t, r) {
            u((e) => {
              let i = !1,
                n = (function (e, t, r, i) { try { e.call(t, r, i); } catch (e) { return e; } }(r, t, (r) => { i || (i = !0, t !== r ? C(e, r) : T(e, r)); }, (t) => { i || (i = !0, V(e, t)); }, e._label)); !i && n && (i = !0, V(e, n));
            }, e);
          }(t, r, i)) : T(t, r);
        } function C(e, t) {
          let r,
            i; e === t ? V(e, new TypeError('You cannot resolve a promise with itself')) : (i = typeof (r = t), r === null || i !== 'object' && i !== 'function' ? T(e, t) : j(e, t, k(t)));
        } function M(e) { e._onerror && e._onerror(e._result), x(e); } function T(e, t) { e._state === O && (e._result = t, e._state = R, e._subscribers.length !== 0 && u(x, e)); } function V(e, t) { e._state === O && (e._state = S, e._result = t, u(M, e)); } function I(e, t, r, i) {
          let n = e._subscribers,
            o = n.length; e._onerror = null, n[o] = t, n[o + R] = r, n[o + S] = i, o === 0 && e._state && u(x, e);
        } function x(e) {
          let t = e._subscribers,
            r = e._state; if (t.length !== 0) { for (let i = void 0, n = void 0, o = e._result, a = 0; a < t.length; a += 3)i = t[a], n = t[a + r], i ? E(r, i, n, o) : n(o); e._subscribers.length = 0; }
        } function E(t, r, i, n) {
          let o = e(i),
            a = void 0,
            u = void 0,
            d = void 0,
            s = void 0; if (o) { if ((a = (function (e, t) { try { return e(t); } catch (e) { return B.error = e, B; } }(i, n))) === B ? (s = !0, u = a.error, a.error = null) : d = !0, r === a) return void V(r, new TypeError('A promises callback cannot return that same promise.')); } else a = n, d = !0; r._state !== O || (o && d ? C(r, a) : s ? V(r, u) : t === R ? T(r, a) : t === S && V(r, a));
        } let W = 0; function q(e) { e[P] = W++, e._state = void 0, e._result = void 0, e._subscribers = []; } var D = (function () {
            function e(e, t) { this._instanceConstructor = e, this.promise = new e(N), this.promise[P] || q(this.promise), i(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), this.length === 0 ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), this._remaining === 0 && T(this.promise, this._result))) : V(this.promise, new Error('Array Methods must be provided an Array')); } return e.prototype._enumerate = function (e) { for (let t = 0; this._state === O && t < e.length; t++) this._eachEntry(e[t], t); }, e.prototype._eachEntry = function (e, t) {
              let r = this._instanceConstructor,
                i = r.resolve; if (i === A) { const n = k(e); if (n === w && e._state !== O) this._settledAt(e._state, t, e._result); else if (typeof n !== 'function') this._remaining--, this._result[t] = e; else if (r === U) { const o = new r(N); j(o, e, n), this._willSettleAt(o, t); } else this._willSettleAt(new r((t => t(e))), t); } else this._willSettleAt(i(e), t);
            }, e.prototype._settledAt = function (e, t, r) { const i = this.promise; i._state === O && (this._remaining--, e === S ? V(i, r) : this._result[t] = r), this._remaining === 0 && T(i, this._result); }, e.prototype._willSettleAt = function (e, t) { const r = this; I(e, void 0, e => r._settledAt(R, t, e), e => r._settledAt(S, t, e)); }, e;
          }()),
          U = (function () { function t(e) { this[P] = W++, this._result = this._state = void 0, this._subscribers = [], N !== e && (typeof e !== 'function' && (function () { throw new TypeError('You must pass a resolver function as the first argument to the promise constructor'); }()), this instanceof t ? (function (e, t) { try { t((t) => { C(e, t); }, (t) => { V(e, t); }); } catch (t) { V(e, t); } }(this, e)) : (function () { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."); }())); } return t.prototype.catch = function (e) { return this.then(null, e); }, t.prototype.finally = function (t) { const r = this.constructor; return e(t) ? this.then(e => r.resolve(t()).then(() => e), e => r.resolve(t()).then(() => { throw e; })) : this.then(t, t); }, t; }()); return U.prototype.then = w, U.all = function (e) { return new D(this, e).promise; }, U.race = function (e) { const t = this; return i(e) ? new t(((r, i) => { for (let n = e.length, o = 0; o < n; o++)t.resolve(e[o]).then(r, i); })) : new t(((e, t) => t(new TypeError('You must pass an array to race.')))); }, U.resolve = A, U.reject = function (e) { const t = new this(N); return V(t, e), t; }, U._setScheduler = function (e) { a = e; }, U._setAsap = function (e) { u = e; }, U._asap = u, U.polyfill = function () { let e = void 0; if (void 0 !== r)e = r; else if (typeof self !== 'undefined')e = self; else try { e = Function('return this')(); } catch (e) { throw new Error('polyfill failed because global object is unavailable in this environment'); } const t = e.Promise; if (t) { let i = null; try { i = Object.prototype.toString.call(t.resolve()); } catch (e) {} if (i === '[object Promise]' && !t.cast) return; }e.Promise = U; }, U.Promise = U, U;
      }, e.exports = i();
    }).call(this, r(149), r(79));
  },
  408(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let i,
      n = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; },
      o = r(382),
      a = (i = o) && i.__esModule ? i : { default: i }; let u = window.location.protocol; u !== 'http:' && u !== 'https:' && (u = 'https:'); const d = (function () {
      let e = {
          app: 'unknown', appv: '0.0.0', os: 'unknown', osv: '0.0.0',
        },
        t = window.navigator.userAgent,
        r = void 0; if (r = t.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/))e.os = 'WindowsPhone', e.osv = r[1], e.isWindowsPhone = !0; else if (t.match(/Safari/) && (r = t.match(/Android[\s\/]([\d\.]+)/)))e.os = 'Android', e.osv = r[1], e.isAndroid = !0; else if (r = t.match(/(iPhone|iPad|iPod)/)) { e.os = 'iOS', e.isIOS = !0; const i = r[1]; (r = t.match(/OS ([\d_\.]+) like Mac OS X/)) && (e.osv = r[1].replace(/_/g, '.'), i !== 'iPhone' && i !== 'iPod' || (e.isIPhone = !0), i === 'iPad' && (e.isIPad = !0)); } return t.match(/Weibo/i) ? e.isWeibo = !0 : t.match(/MicroMessenger/i) ? e.isWeixin = !0 : (r = t.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (e.app = r[1], e.appv = r[2], e.isAliApp = !0, e[`is${e.app}`] = !0), e.app === 'unknown' && t.indexOf('TBIOS') > 0 && (e.app = 'TB', e.isAliApp = !0, e.isTB = !0), e;
    }()); t.default = {
      publishOrigin: `${u}//g.alicdn.com`,
      dailyOrigin: `${u}//g-assets.daily.taobao.net`,
      devOrigin: 'http://127.0.0.1:8080',
      clientInfo: d,
      getDefault(e, t) { return void 0 === e ? t : e; },
      getDefaultParams(e, t, r) {
        if (t = this.getDefault(t, {}), r.params) {
          const i = {}; for (const n in r.params) {
            let o = r.params[n],
              u = t[n]; if (void 0 === u) { if (o.required && void 0 === o.default) return a.default.throw(a.default.PARAM_NOT_SET, `[JSBridge.${e}] Parameter '${n}' is required.`); } else if (o.options && o.options.indexOf(u) === -1) return a.default.throw(a.default.PARAM_WRONG, `[JSBridge.${e}] Parameter '${n}' is not in options ${JSON.stringify(o.options)}.`); o.required && void 0 !== o.default && void 0 === u ? i[n] = o.default : i[n] = u;
          } return i;
        } return t;
      },
      invokeException(e) { return a.default.throw(a.default.INVOKE_EXCEPTION, e); },
      notSupportAPI(e) { const t = a.default.throw(a.default.API_NOT_SUPPORT, e); return window.Promise.reject(t); },
      notSupportParam(e) { const t = a.default.throw(a.default.PARAM_NOT_SUPPORT, e); return window.Promise.reject(t); },
      packParams(e) { return Object.keys(e).map((t) => { let r = e[t]; return typeof r === 'function' && (r = r()), (void 0 === r ? 'undefined' : n(r)) === 'object' && (r = JSON.stringify(r)), `${t}=${encodeURIComponent(r)}`; }).join('&'); },
      tracker(e) {
        const t = this; setTimeout(() => {
          let r = {
              tid: 'XT-00068',
              v: '1.2.2',
              ts() { return Math.floor(Date.now() / 1e3); },
              ds: 'web',
              ni: !0,
              t: 'event',
              ec: e.module,
              ea: e.action,
              el: e.result || '',
              cus_data: JSON.stringify({
                c1: `${window.location.origin}${window.location.pathname}`, c2: d.app, c3: d.appv, c4: d.os, c5: d.osv, c6: e.jbv || '0.0.0',
              }),
            },
            i = t.packParams(r); if (window.goldlog && window.goldlog.record)window.goldlog.record('/xtracker.1.1', 'OTHER', i, 'H46807174'); else {
            let n = new Image(),
              o = `_img_${Math.random()}`; window[o] = n, n.onload = n.onerror = function () { window[o] = null; }, n.src = `//gm.mmstat.com/xtracker.1.1?cache=${Date.now()}&chksum=H46807174&gmkey=OTHER&gokey=${encodeURIComponent(i)}`, n = null;
          }
        }, 0);
      },
    }, e.exports = t.default;
  },
  409(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      getScriptFromCDN(e) {
        return new window.Promise(((t, r) => {
          let i = document,
            n = i.head || i.getElementsByTagName('head')[0] || i.documentElement,
            o = i.createElement('script'); o.setAttribute('charset', 'utf-8'), 'onload' in o ? (o.onload = function () { t(); }, o.onerror = function () { r(); }) : o.onreadystatechange = function () { /loaded|complete/.test(o.readyState) && t(); }, o.async = !0, o.src = e, n.appendChild(o);
        }));
      },
      loadScripts(e) { for (var t = [], r = 0; r < e.length; r++) { const i = this.getScriptFromCDN(e[r].url); t.push(i); } return window.Promise.all(t); },
    }, e.exports = t.default;
  },
  410(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      registerAPI: {},
      detect: { params: { name: { required: !0 } } },
      getAppName: {},
      getBridgeName: {},
      getBridgeVersion: {},
      getBridge: {},
      toast: { params: { message: { required: !0 }, duration: { required: !0, default: 2 } } },
      alert: { params: { title: { required: !0 }, message: { required: !0 }, button: { required: !0, default: '确认' } } },
      confirm: {
        params: {
          title: { required: !0 }, message: { required: !0 }, okButton: { required: !0, default: '确认' }, cancelButton: { required: !0, default: '取消' },
        },
      },
      actionSheet: { params: { title: { required: !0 }, buttons: { required: !0 } } },
      showLoading: {},
      hideLoading: {},
      setTitle: { params: { title: { required: !0 } } },
      showTitle: {},
      hideTitle: {},
      setNaviBarRightItem: {
        params: {
          type: { required: !0, options: ['text', 'icon'] }, title: {}, iconBase64: {}, onClick: {},
        },
      },
      clearNaviBarRightItem: { params: { show: { required: !0, default: !0 } } },
      chooseSysContact: {},
      chooseCity: {},
      share: {
        params: {
          title: { required: !0 }, content: { required: !0 }, image: { required: !0 }, url: { required: !0 },
        },
      },
      setBackgroundColor: { params: { color: { required: !0 }, alpha: { required: !0, default: 1 } } },
      openInBrowser: { params: { url: { required: !0 } } },
      pushWindow: { params: { url: { required: !0 } } },
      popWindow: {},
      back: {},
      stopBack: { params: { onBack: { required: !0 } } },
      onPause: { params: { onPause: { required: !0 } } },
      onResume: { params: { onResume: { required: !0 } } },
      photo: { params: { maxSelect: { required: !0, default: 1 } } },
      takePhoto: { params: { needBase64: { required: !0, default: !1 } } },
      choosePhoto: { params: { maxSelect: { required: !0, default: 1 } } },
      uploadImage: {
        params: {
          bizCode: {}, dataList: { required: !0 }, 'dataList[].dataURL': {}, 'dataList[].localID': {}, 'dataList[].fileURL': {},
        },
      },
      imageViewer: { params: { images: { required: !0 }, init: { required: !0, default: 0 } } },
      playAudio: { params: { urlMP3: { required: !0 }, urlAMR: { required: !0 }, identifier: { required: !0 } } },
      pauseAudio: { params: { identifier: { required: !0 } } },
      resumeAudio: { params: { identifier: { required: !0 } } },
      stopAudio: { params: { identifier: { required: !0 } } },
      getDeviceId: {},
      getNetworkType: {},
      getLocation: { params: { highAccuracy: { required: !0, default: !1 }, timeout: { required: !0, default: 5 } } },
      getOrientation: {},
      setOrientation: { params: { orientation: { required: !0, options: ['default', 'landscape', 'portrait', 'landscapeRight', 'landscapeRight', 'portraitUpsideDown', 'auto'] } } },
      isAppInstalled: { params: { ios: { required: !0 }, android: { required: !0 } } },
      copyToClipboard: { params: { text: { required: !0 } } },
      scan: { params: { type: { required: !0, default: 'qr', options: ['qr', 'bar'] } } },
      snapshot: { params: { saveToGallery: { required: !0, default: !0 } } },
      vibrate: {},
      watchShake: { params: { onShake: { required: !0 } } },
      stopWatchShake: {},
      watchBlow: { params: { onBlow: { required: !0 } } },
      stopWatchBlow: {},
      mtop: {
        params: {
          api: { required: !0 }, v: { required: !0 }, ecode: { default: !1 }, post: { default: !1 }, useHttp: { default: !1 }, isSec: { default: 0, options: [0, 1, 2] }, param: {},
        },
      },
    }, e.exports = t.default;
  },
  411(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ClientConfig = t.WapConfig = void 0; let i = k(r(412)),
      n = k(r(413)),
      o = k(r(414)),
      a = k(r(415)),
      u = k(r(416)),
      d = k(r(417)),
      s = k(r(418)),
      l = k(r(419)),
      c = k(r(420)),
      f = k(r(421)),
      p = k(r(422)),
      g = k(r(423)),
      m = k(r(424)),
      h = k(r(425)),
      _ = k(r(426)),
      v = k(r(427)),
      b = k(r(428)),
      y = k(r(429)),
      w = k(r(430)),
      A = k(r(431)),
      P = k(r(432)),
      N = k(r(433)),
      O = k(r(434)),
      R = k(r(435)),
      S = k(r(436)),
      B = k(r(437)); function k(e) { return e && e.__esModule ? e : { default: e }; }t.WapConfig = i.default, t.ClientConfig = [n.default, o.default, a.default, u.default, d.default, s.default, l.default, c.default, f.default, p.default, g.default, m.default, h.default, _.default, v.default, b.default, y.default, w.default, A.default, P.default, N.default, O.default, R.default, S.default, B.default];
  },
  412(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'WAP', clientName: 'wap', detect() { return !0; }, bridgeRefer: 'cdn', bridgeName: 'wap', bridgeVersion: '1.0.0', getBridge() { return null; },
    }, e.exports = t.default;
  },
  413(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'AFW', clientName: 'afw', detect(e) { return /AliApp\(AFW\//i.test(e) && /Nebula\s+/i.test(e); }, bridgeRefer: 'memory', bridgeName: 'nebula', bridgeVersion: '1.1.1', getBridge() { return window.AlipayJSBridge; },
    }, e.exports = t.default;
  },
  414(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'AK', clientName: 'ak', detect(e) { return /AliApp\(AK\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  415(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'ALIWORK', clientName: 'aliwork', detect(e) { return /AliApp\(ALIWORK\//i.test(e) && /Nebula\s+/i.test(e); }, bridgeRefer: 'memory', bridgeName: 'nebula', bridgeVersion: '1.1.1', getBridge() { return window.AlipayJSBridge; },
    }, e.exports = t.default;
  },
  416(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'Aliyun', clientName: 'aliyun', detect(e) { return /AliApp\(Aliyun\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  417(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'AP', clientName: 'ap', detect(e) { return /AliApp\(AP\//i.test(e) && /Nebula\s+/i.test(e); }, bridgeRefer: 'memory', bridgeName: 'nebula', bridgeVersion: '1.1.1', getBridge() { return window.AlipayJSBridge; },
    }, e.exports = t.default;
  },
  418(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'AT', clientName: 'at', detect(e) { return /AliApp\(AT\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  419(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'BK', clientName: 'bk', detect(e) { return /AliApp\(BK\//i.test(e); }, bridgeRefer: 'memory', bridgeName: 'nebula', bridgeVersion: '1.1.1', getBridge() { return window.AlipayJSBridge; },
    }, e.exports = t.default;
  },
  420(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: '1688', clientName: 'cbu', detect(e) { return /AliApp\(1688\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  421(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'CN', clientName: 'cn', detect(e) { return /AliApp\(CN\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  422(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'DingTalk', clientName: 'dingtalk', detect(e) { return /AliApp\(DingTalk\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'dingtalk', bridgeVersion: '1.8.6', getBridge() { return window.dd; },
    }, e.exports = t.default;
  },
  423(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'DY', clientName: 'dy_nebula', detect(e) { return /AliApp\(DY\//i.test(e) && !/WindVane\//i.test(e); }, bridgeRefer: 'memory', bridgeName: 'nebula', bridgeVersion: '1.1.1', getBridge() { return window.AlipayJSBridge; },
    }, e.exports = t.default;
  },
  424(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'DY', clientName: 'dy_windvane', detect(e) { return /AliApp\(DY\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  425(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'ET', clientName: 'et', detect(e) { return /AliApp\(ET\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  426(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'FM', clientName: 'fm', detect(e) { return /AliApp\(FM\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  427(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'KB', clientName: 'kb', detect(e) { return /AliApp\(KB\//i.test(e) && /Nebula\s+/i.test(e); }, bridgeRefer: 'memory', bridgeName: 'nebula', bridgeVersion: '1.1.1', getBridge() { return window.AlipayJSBridge; },
    }, e.exports = t.default;
  },
  428(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'LX', clientName: 'lx', detect(e) { return /AliApp\(LX\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'alitrip', bridgeVersion: '0.3.39', getBridge() { return new Bridge('ali_trip_webview_bridge'); },
    }, e.exports = t.default;
  },
  429(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'NJ', clientName: 'nj', detect(e) { return /AliApp\(NJ\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  430(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'QN', clientName: 'qn', detect(e) { return /AliApp\(QN\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  431(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'Retail', clientName: 'retail', detect(e) { return /AliApp\(Retail\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  432(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'RetailTrader', clientName: 'retailtrader', detect(e) { return /AliApp\(RetailTrader\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  433(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'TB', clientName: 'tb', detect(e) { return /AliApp\(TB\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  434(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'TM', clientName: 'tm', detect(e) { return /AliApp\(TM\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  435(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'WDKHEMA', clientName: 'wdkhema', detect(e) { return /AliApp\(wdkhema\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
  436(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'XIONGANAPP', clientName: 'xionganapp', detect(e) { return /xionganapp\//i.test(e) && /Nebula\s+/i.test(e); }, bridgeRefer: 'memory', bridgeName: 'nebula', bridgeVersion: '1.1.1', getBridge() { return window.AlipayJSBridge; },
    }, e.exports = t.default;
  },
  437(e, t, r) {
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {
      appName: 'XM', clientName: 'xm', detect(e) { return /AliApp\(XM\//i.test(e) && /WindVane\//i.test(e); }, bridgeRefer: 'cdn', bridgeName: 'windvane', bridgeVersion: '2.1.8', getBridge() { return window.WindVane; },
    }, e.exports = t.default;
  },
}]);
