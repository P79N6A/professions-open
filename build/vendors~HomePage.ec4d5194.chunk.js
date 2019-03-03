(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
  352(t, e, n) {
    let r;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    !(function () {
      const n = {}.hasOwnProperty; function s() { for (var t = [], e = 0; e < arguments.length; e++) { const r = arguments[e]; if (r) { const i = typeof r; if (i === 'string' || i === 'number')t.push(r); else if (Array.isArray(r) && r.length) { const o = s(...r); o && t.push(o); } else if (i === 'object') for (const u in r)n.call(r, u) && r[u] && t.push(u); } } return t.join(' '); }t.exports ? (s.default = s, t.exports = s) : void 0 === (r = function () { return s; }.apply(e, [])) || (t.exports = r);
    }());
  },
  383(t, e, n) {
    const r = {}; t.exports = function (t) {
      if (typeof window === 'undefined') return null; let e = window.OfflineAudioContext || window.webkitOfflineAudioContext,
        n = window.AudioContext || window.webkitAudioContext; if (!n) return null; typeof t === 'number' && (t = { sampleRate: t }); const s = t && t.sampleRate; if (t && t.offline) return e ? new e(t.channels || 2, t.length, s || 44100) : null; let i = r[s]; if (i) return i; try { i = new n(t); } catch (t) { i = new n(); } return r[i.sampleRate] = r[s] = i, i;
    };
  },
  384(t, e, n) {
    /*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
    let r; r = function () {
      return (function (t) { const e = {}; function n(r) { if (e[r]) return e[r].exports; const s = e[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(s.exports, s, s.exports, n), s.loaded = !0, s.exports; } return n.m = t, n.c = e, n.p = '', n(0); }([function (t, e, n) {
        Object.defineProperty(e, '__esModule', { value: !0 }); const r = (function () { function t(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e; }; }()); let s = n(1),
          i = n(3),
          o = (function () {
            function t(e, n) { !(function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }(this, t)), s.initializer.load(this, n, e), this.begin(); } return r(t, [{ key: 'toggle', value() { this.pause.status ? this.start() : this.stop(); } }, { key: 'stop', value() { this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this)); } }, { key: 'start', value() { this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this)); } }, { key: 'destroy', value() { this.reset(!1), this.options.onDestroy(this); } }, { key: 'reset', value() { const t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0]; clearInterval(this.timeout), this.replaceText(''), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin()); } }, { key: 'begin', value() { const t = this; this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(() => { t.currentElContent && t.currentElContent.length !== 0 ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos); }, this.startDelay); } }, {
              key: 'typewrite',
              value(t, e) {
                const n = this; this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass)); let r = this.humanizer(this.typeSpeed),
                  s = 1; !0 !== this.pause.status ? this.timeout = setTimeout(() => {
                  e = i.htmlParser.typeHtmlChars(t, e, n); let r = 0,
                    o = t.substr(e); if (o.charAt(0) === '^' && /^\^\d+/.test(o)) { let u = 1; u += (o = /\d+/.exec(o)[0]).length, r = parseInt(o), n.temporaryPause = !0, n.options.onTypingPaused(n.arrayPos, n), t = t.substring(0, e) + t.substring(e + u), n.toggleBlinking(!0); } if (o.charAt(0) === '`') {
                    for (;t.substr(e + s).charAt(0) !== '`' && !(e + ++s > t.length););let a = t.substring(0, e),
                      c = t.substring(a.length + 1, e + s),
                      l = t.substring(e + s + 1); t = a + c + l, s--;
                  }n.timeout = setTimeout(() => { n.toggleBlinking(!1), e >= t.length ? n.doneTyping(t, e) : n.keepTyping(t, e, s), n.temporaryPause && (n.temporaryPause = !1, n.options.onTypingResumed(n.arrayPos, n)); }, r);
                }, r) : this.setPauseStatus(t, e, !0);
              },
            }, { key: 'keepTyping', value(t, e, n) { e === 0 && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += n; const r = t.substr(0, e); this.replaceText(r), this.typewrite(t, e); } }, { key: 'doneTyping', value(t, e) { const n = this; this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(() => { n.backspace(t, e); }, this.backDelay)); } }, { key: 'backspace', value(t, e) { const n = this; if (!0 !== this.pause.status) { if (this.fadeOut) return this.initFadeOut(); this.toggleBlinking(!1); const r = this.humanizer(this.backSpeed); this.timeout = setTimeout(() => { e = i.htmlParser.backSpaceHtmlChars(t, e, n); const r = t.substr(0, e); if (n.replaceText(r), n.smartBackspace) { const s = n.strings[n.arrayPos + 1]; s && r === s.substr(0, e) ? n.stopNum = e : n.stopNum = 0; }e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.options.onLastStringBackspaced(), n.shuffleStringsIfNeeded(), n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e)); }, r); } else this.setPauseStatus(t, e, !0); } }, { key: 'complete', value() { this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0; } }, { key: 'setPauseStatus', value(t, e, n) { this.pause.typewrite = n, this.pause.curString = t, this.pause.curStrPos = e; } }, { key: 'toggleBlinking', value(t) { this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add('typed-cursor--blink') : this.cursor.classList.remove('typed-cursor--blink'))); } }, { key: 'humanizer', value(t) { return Math.round(Math.random() * t / 2) + t; } }, { key: 'shuffleStringsIfNeeded', value() { this.shuffle && (this.sequence = this.sequence.sort(() => Math.random() - 0.5)); } }, { key: 'initFadeOut', value() { const t = this; return this.el.className += ` ${this.fadeOutClass}`, this.cursor && (this.cursor.className += ` ${this.fadeOutClass}`), setTimeout(() => { t.arrayPos++, t.replaceText(''), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0); }, this.fadeOutDelay); } }, { key: 'replaceText', value(t) { this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : this.contentType === 'html' ? this.el.innerHTML = t : this.el.textContent = t; } }, { key: 'bindFocusEvents', value() { const t = this; this.isInput && (this.el.addEventListener('focus', (e) => { t.stop(); }), this.el.addEventListener('blur', (e) => { t.el.value && t.el.value.length !== 0 || t.start(); })); } }, { key: 'insertCursor', value() { this.showCursor && (this.cursor || (this.cursor = document.createElement('span'), this.cursor.className = 'typed-cursor', this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling))); } }]), t;
          }()); e.default = o, t.exports = e.default;
      }, function (t, e, n) {
        Object.defineProperty(e, '__esModule', { value: !0 }); let r = Object.assign || function (t) { for (let e = 1; e < arguments.length; e++) { const n = arguments[e]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]); } return t; },
          s = (function () { function t(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e; }; }()); let i,
          o = n(2),
          u = (i = o) && i.__esModule ? i : { default: i },
          a = (function () {
            function t() { !(function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }(this, t)); } return s(t, [{
              key: 'load',
              value(t, e, n) {
                if (t.el = typeof n === 'string' ? document.querySelector(n) : n, t.options = r({}, u.default, e), t.isInput = t.el.tagName.toLowerCase() === 'input', t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(t => t.trim()), typeof t.options.stringsElement === 'string' ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                  t.strings = [], t.stringsElement.style.display = 'none'; let s = Array.prototype.slice.apply(t.stringsElement.children),
                    i = s.length; if (i) for (var o = 0; o < i; o += 1) { const a = s[o]; t.strings.push(a.innerHTML.trim()); }
                } for (var o in t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                  status: !1, typewrite: !0, curString: '', curStrPos: 0,
                }, t.typingComplete = !1, t.strings)t.sequence[o] = o; t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
              },
            }, { key: 'getCurrentElContent', value(t) { return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : t.contentType === 'html' ? t.el.innerHTML : t.el.textContent; } }, { key: 'appendAnimationCss', value(t) { if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector('[data-typed-js-css]')) { const e = document.createElement('style'); e.type = 'text/css', e.setAttribute('data-typed-js-css', !0); let n = ''; t.showCursor && (n += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      '), t.fadeOut && (n += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      '), e.length !== 0 && (e.innerHTML = n, document.body.appendChild(e)); } } }]), t;
          }()); e.default = a; const c = new a(); e.initializer = c;
      }, function (t, e) {
        Object.defineProperty(e, '__esModule', { value: !0 }); const n = {
          strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: !0, shuffle: !1, backDelay: 700, fadeOut: !1, fadeOutClass: 'typed-fade-out', fadeOutDelay: 500, loop: !1, loopCount: 1 / 0, showCursor: !0, cursorChar: '|', autoInsertCss: !0, attr: null, bindInputFocusEvents: !1, contentType: 'html', onComplete(t) {}, preStringTyped(t, e) {}, onStringTyped(t, e) {}, onLastStringBackspaced(t) {}, onTypingPaused(t, e) {}, onTypingResumed(t, e) {}, onReset(t) {}, onStop(t, e) {}, onStart(t, e) {}, onDestroy(t) {},
        }; e.default = n, t.exports = e.default;
      }, function (t, e) {
        Object.defineProperty(e, '__esModule', { value: !0 }); const n = (function () { function t(t, e) { for (let n = 0; n < e.length; n++) { const r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r); } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e; }; }()); const r = (function () { function t() { !(function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function'); }(this, t)); } return n(t, [{ key: 'typeHtmlChars', value(t, e, n) { if (n.contentType !== 'html') return e; const r = t.substr(e).charAt(0); if (r === '<' || r === '&') { let s = ''; for (s = r === '<' ? '>' : ';'; t.substr(e + 1).charAt(0) !== s && !(++e + 1 > t.length););e++; } return e; } }, { key: 'backSpaceHtmlChars', value(t, e, n) { if (n.contentType !== 'html') return e; const r = t.substr(e).charAt(0); if (r === '>' || r === ';') { let s = ''; for (s = r === '>' ? '<' : '&'; t.substr(e - 1).charAt(0) !== s && !(--e < 0););e--; } return e; } }]), t; }()); e.default = r; const s = new r(); e.htmlParser = s;
      }]));
    }, t.exports = r();
  },
  438(t, e, n) {
    let r = n(439),
      s = n(383); function i(t) { return function (e) { return new Promise(((n, r) => { t.decodeAudioData(e, (t) => { n(t); }, (t) => { r(t); }); })); }; } function o(t, e) { return new Promise(((n, r) => { const s = new XMLHttpRequest(); e && (s.responseType = e), s.open('GET', t), s.onload = function () { s.status === 200 ? n(s.response) : r(Error(s.statusText)); }, s.onerror = function () { r(Error('Network Error')); }, s.send(); })); }t.exports = function (t, e, n) {
      e instanceof Function && (n = e, e = {}), (e = e || {}).ready = n || function () {}; let u = { decode: i(e && e.context ? e.context : s()), fetch: o },
        a = Object.assign(u, e); return r(t, a);
    };
  },
  439(t, e, n) {
    let r = n(440),
      s = n(441); function i(t) { return function (e) { return typeof e === 'string' && t.test(e); }; } function o(t, e) { return typeof t === 'string' ? t + e : typeof t === 'function' ? t(e) : e; } function u(t, e, n) {
      let r = t instanceof ArrayBuffer || s(t) ? a : c(t) ? l : (function (t) { return t && typeof t.then === 'function'; }(t)) ? p : f(t) ? h : (function (t) { return t && typeof t === 'object'; }(t)) ? d : y(t) ? v : g(t) ? m : b(t) ? k : null,
        i = e || {}; return (r ? r(t, i) : n ? Promise.resolve(n) : Promise.reject(`Source not valid (${t})`)).then(t => i.ready(null, t), t, (t) => { throw i.ready(t), t; });
    } function a(t, e) { return e.decode(t); } var c = i(/\.(mp3|wav|ogg)(\?.*)?$/i); function l(t, e) { const n = o(e.from, t); return u(e.fetch(n, 'arraybuffer'), e); } function p(t, e) { return t.then(t => u(t, e)); } var f = Array.isArray; function h(t, e) { return Promise.all(t.map(t => u(t, e, t))); } function d(t, e) {
      let n = {},
        r = Object.keys(t).map((r) => { if (e.only && e.only.indexOf(r) === -1) return null; const s = t[r]; return u(s, e, s).then((t) => { n[r] = t; }); }); return Promise.all(r).then(() => n);
    } var y = i(/\.json(\?.*)?$/i); function v(t, e) { const n = o(e.from, t); return u(e.fetch(n, 'text').then(JSON.parse), e); } var g = i(/^data:audio/); function m(t, e) { const n = t.indexOf(','); return u(r.decode(t.slice(n + 1)).buffer, e); } var b = i(/\.js(\?.*)?$/i); function k(t, e) { const n = o(e.from, t); return u(e.fetch(n, 'text').then(w), e); } function w(t) { let e = t.indexOf('MIDI.Soundfont.'); if (e < 0) throw Error('Invalid MIDI.js Soundfont format'); e = t.indexOf('=', e) + 2; const n = t.lastIndexOf(','); return JSON.parse(`${t.slice(e, n)}}`); }t.exports && (t.exports = u), typeof window !== 'undefined' && (window.loadAudio = u);
  },
  440(t, e, n) {
    t.exports = { decode(t, e) { for (var n, r, s, i = t.replace(/[^A-Za-z0-9\+\/]/g, ''), o = i.length, u = e ? Math.ceil((3 * o + 1 >> 2) / e) * e : 3 * o + 1 >> 2, a = new Uint8Array(u), c = 0, l = 0, p = 0; p < o; p++) if (r = 3 & p, c |= ((s = i.charCodeAt(p)) > 64 && s < 91 ? s - 65 : s > 96 && s < 123 ? s - 71 : s > 47 && s < 58 ? s + 4 : s === 43 ? 62 : s === 47 ? 63 : 0) << 18 - 6 * r, r === 3 || o - p == 1) { for (n = 0; n < 3 && l < u; n++, l++)a[l] = c >>> (16 >>> n & 24) & 255; c = 0; } return a; } };
  },
  441(t, e) {
    function n(t) { return !!t.constructor && typeof t.constructor.isBuffer === 'function' && t.constructor.isBuffer(t); }
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    t.exports = function (t) { return t != null && (n(t) || (function (t) { return typeof t.readFloatLE === 'function' && typeof t.slice === 'function' && n(t.slice(0, 0)); }(t)) || !!t._isBuffer); };
  },
  442(t, e, n) {
    let r = n(383),
      s = n(443); function i(t, e) { return t < 0 ? e + t % e : Math.min(e, t); }t.exports = function t(e, n, o) {
      if (!s(e)) throw Error('Argument should be an audio buffer'); n instanceof Function && (o = n), o = o || function () {}, (n = n || {}).context == null && (n.context = r()), n.currentTime == null && (n.currentTime = 0), n.start == null && (n.start = 0), n.end == null && (n.end = e.duration), n.start = i(n.start, e.duration), n.end = i(n.end, e.duration); const u = (function (t, e) { const n = e.context.createBufferSource(); n.buffer = t, e.detune != null && (n.detune = e.detune); e.rate != null && (n.playbackRate.value = e.rate); e.loop && (n.loop = !0, n.loopStart = e.start, n.loopEnd = e.end); return n; }(e, n)); n.gain || (n.gain = n.context.createGain(), n.gain.gain.value = n.volume == null ? 1 : n.volume, n.gain.connect(n.context.destination)), u.connect(n.gain), u.addEventListener('ended', o), l.play = p.play = l, l.pause = p.pause = p; let a = 0,
        c = !1; return n.autoplay != 0 ? l() : l; function l() { return c ? p : (c = !0, a = n.context.currentTime, n.loop ? u.start(a, n.start + n.currentTime) : u.start(a, n.start + n.currentTime, n.end - n.start), p); } function p() { if (!c) return p.play; c = !1, u.stop(), u.removeEventListener('ended', o); const r = n.context.currentTime - a; n.autoplay = !1, n.currentTime = r; const s = t(e, n, o); return l.play = p.play = s.play, l.pause = p.pause = s.pause, l.currentTime = p.currentTime = s.currentTime = n.currentTime, s; }
    };
  },
  443(t, e, n) {
    t.exports = function (t) { return t != null && typeof t.length === 'number' && typeof t.sampleRate === 'number' && typeof t.getChannelData === 'function' && typeof t.duration === 'number'; };
  },
  444(t, e, n) {},
}]);
