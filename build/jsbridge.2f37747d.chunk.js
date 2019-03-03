(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
  523(e, t, n) {
    n.r(t); let r = n(401),
      i = n.n(r),
      a = n(44),
      o = n.n(a),
      u = n(20),
      c = n.n(u),
      s = n(27),
      p = n.n(s),
      f = n(57),
      d = n.n(f),
      l = n(402),
      h = n.n(l),
      w = n(404),
      g = n.n(w),
      v = n(52),
      b = { default: { mock: !1 }, whiteList: ['toast', 'alert', 'confirm', 'showLoading', 'hideLoading', 'setTitle', 'getNetworkType', 'registerAPI', 'detect', 'getAppName', 'getBridge', 'getBridgeName', 'getBridgeVersion'] },
      k = n(142),
      m = n.n(k).a,
      y = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = 'mock/jsbridge/'.concat(e, '.json'); return new Promise(((e, r) => { m(n, t, (t) => { e(t); }, (e) => { r(e); }); }));
      }; n.d(t, 'JSBridgeUtil', () => _); var x = b.whiteList,
      B = function (e, t, n, r) { return new window.Promise(((i, a) => { e.call(t, n, r, function () { i(...arguments); }, function () { a(...arguments); }); })); },
      j = function (e) {
        return new window.Promise(((t, n) => {
          let r = document,
            i = r.head || r.getElementsByTagName('head')[0] || r.documentElement,
            a = r.createElement('script'); a.setAttribute('charset', 'utf-8'), 'onload' in a ? (a.onload = function () { t(); }, a.onerror = function () { n(); }) : a.onreadystatechange = function () { /loaded|complete/.test(a.readyState) && t(); }, a.async = !0, a.src = e, i.appendChild(a);
        }));
      },
      _ = (function () {
        function e(t) { const n = this; c()(this, e); const r = t.onReady; t.onReady = function () { Object.keys(n._jsbridge).forEach((e) => { const t = n._jsbridge[e]; if (typeof t === 'function') if (typeof n[e] === 'function') { const r = n[e]; n[e] = function () { for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++)i[a] = arguments[a]; return n._options.mock && n.inWhiteList(e) < 0 ? y(...['JSBridge.'.concat(e)].concat(i)) : r.apply(n, i); }; } else n[e] = function () { for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)i[a] = arguments[a]; return n._options.mock && n.inWhiteList(e) < 0 ? y(...['JSBridge.'.concat(e)].concat(i)) : t.apply(n._jsbridge, i); }; }), v.a.isQianNiu() ? j('//g.alicdn.com/sj/tqn/m/sdk-mobile.min.js').then(() => { r(); }, () => { throw new Error('Qianniu JSSDK load failed'); }) : r(); }, this._jsbridge = new g.a(t), this._options = Object.assign({}, b.default); } return p()(e, [{ key: 'inWhiteList', value(e) { return x.indexOf(e); } }, { key: 'useMockData', value() { return this.setOption('mock', !0); } }, { key: 'setOption', value(e, t) { const n = ''.concat(e).trim(); return this._options[n] = t, this; } }, { key: 'config', value(e, t) { const n = this; return e == null ? this : (o()(e) === 'object' ? Object.keys(e).forEach((t) => { n.setOption(t, e[t]); }) : this.setOption(e, t), this); } }, {
          key: 'setTitle',
          value: (function () {
            const e = i()(regeneratorRuntime.mark(function e(t) {
              let n,
                r; return regeneratorRuntime.wrap(function (e) { for (;;) switch (e.prev = e.next) { case 0: return e.next = 2, this.getAppName(); case 2: if ((n = e.sent) !== 'QN') { e.next = 8; break; } return window.TOP.mobile.vpage.title(t.title), e.abrupt('return', {}); case 8: if (n !== 'FM') { e.next = 13; break; } return e.next = 11, this.getBridge(); case 11: return r = e.sent, e.abrupt('return', B(r, 'WVIdleFishApi', 'setTitle', t)); case 13: return e.abrupt('return', this._jsbridge.setTitle(t)); case 14: case 'end': return e.stop(); } }, e, this);
            })); return function (t) { return e.apply(this, arguments); };
          }()),
        }, {
          key: 'stopBack',
          value: (function () {
            const e = i()(regeneratorRuntime.mark(function e(t) {
              let n,
                r; return regeneratorRuntime.wrap(function (e) { for (;;) switch (e.prev = e.next) { case 0: return e.next = 2, this.getAppName(); case 2: if ((n = e.sent) !== 'QN') { e.next = 8; break; }window.TOP.mobile.vpage(!0), window.TOP.mobile.on('vpage', 'goback', () => { t.onBack(); }), e.next = 24; break; case 8: if (n !== 'TM') { e.next = 13; break; }window._jsShouldHookCloseEvent = function () { return !0; }, window._jsCloseEventCall = function () { t.onBack(); }, e.next = 24; break; case 13: if (n !== 'FM') { e.next = 23; break; } return e.next = 16, this.getBridge(); case 16: return r = e.sent, e.next = 19, B(r, 'WebAppInterface', 'enableHookNativeBack', {}); case 19: window._windvane_backControl = function () { return 'true'; }, document.addEventListener('wvBackClickEvent', () => { t.onBack(); }), e.next = 24; break; case 23: return e.abrupt('return', this._jsbridge.stopBack(t)); case 24: return e.abrupt('return', {}); case 25: case 'end': return e.stop(); } }, e, this);
            })); return function (t) { return e.apply(this, arguments); };
          }()),
        }, {
          key: 'pushWindow',
          value: (function () {
            const e = i()(regeneratorRuntime.mark(function e(t) {
              let n,
                r; return regeneratorRuntime.wrap(function (e) { for (;;) switch (e.prev = e.next) { case 0: return e.next = 2, this.getAppName(); case 2: if ((n = e.sent) !== 'FM') { e.next = 14; break; } return e.next = 6, this.getBridge(); case 6: return r = e.sent, e.prev = 7, e.abrupt('return', B(r, 'Base', 'openWindow', t)); case 11: e.prev = 11, e.t0 = e.catch(7), window.location.href = t.url; case 14: if (n !== 'QN') { e.next = 18; break; }window.TOP.mobile.application.request({ event: 'openWebsite', biz: { url: t.url }, error() { window.location.href = t.url; } }), e.next = 31; break; case 18: return e.prev = 18, e.abrupt('return', this._jsbridge.pushWindow(t)); case 22: return e.prev = 22, e.t1 = e.catch(18), e.prev = 24, e.abrupt('return', this.openInBrowser(t)); case 28: e.prev = 28, e.t2 = e.catch(24), window.location.href = t.url; case 31: return e.abrupt('return', {}); case 32: case 'end': return e.stop(); } }, e, this, [[7, 11], [18, 22], [24, 28]]);
            })); return function (t) { return e.apply(this, arguments); };
          }()),
        }, {
          key: 'popWindow',
          value: (function () {
            const t = i()(regeneratorRuntime.mark(function t() {
              let n,
                r,
                i,
                a; return regeneratorRuntime.wrap(function (t) { for (;;) switch (t.prev = t.next) { case 0: return t.next = 2, this.getAppName(); case 2: if ((n = t.sent) !== 'FM') { t.next = 10; break; } return t.next = 6, this.getBridge(); case 6: return r = t.sent, t.abrupt('return', B(r, 'WVNative', 'nativeBack')); case 10: if (n !== 'LX') { t.next = 19; break; } return t.next = 13, this.getBridge(); case 13: i = t.sent, a = window.history.length, window.history.go(1 - a), setTimeout(() => { i.call('close'); }, 0), t.next = 20; break; case 19: return t.abrupt('return', h()(d()(e.prototype), 'popWindow', this).call(this)); case 20: return t.abrupt('return', {}); case 21: case 'end': return t.stop(); } }, t, this);
            })); return function () { return t.apply(this, arguments); };
          }()),
        }]), e;
      }()); t.default = function () { return new window.Promise(((e) => { var t = new _({ onReady() { e(t); } }); })); };
  },
}]);
