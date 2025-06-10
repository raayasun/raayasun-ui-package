import * as c from "react";
import Et, { useContext as cr } from "react";
var pe = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function fr() {
  if (mt) return ne;
  mt = 1;
  var e = Et, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, l, s) {
    var v, y = {}, h = null, x = null;
    s !== void 0 && (h = "" + s), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (v in l) o.call(l, v) && !i.hasOwnProperty(v) && (y[v] = l[v]);
    if (d && d.defaultProps) for (v in l = d.defaultProps, l) y[v] === void 0 && (y[v] = l[v]);
    return { $$typeof: r, type: d, key: h, ref: x, props: y, _owner: a.current };
  }
  return ne.Fragment = n, ne.jsx = f, ne.jsxs = f, ne;
}
var ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function dr() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Et, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), p = Symbol.iterator, E = "@@iterator";
    function T(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = p && t[p] || t[E];
      return typeof u == "function" ? u : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var u = arguments.length, g = new Array(u > 1 ? u - 1 : 0), b = 1; b < u; b++)
          g[b - 1] = arguments[b];
        S("error", t, g);
      }
    }
    function S(t, u, g) {
      {
        var b = m.ReactDebugCurrentFrame, C = b.getStackAddendum();
        C !== "" && (u += "%s", g = g.concat([C]));
        var P = g.map(function(_) {
          return String(_);
        });
        P.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, P);
      }
    }
    var j = !1, F = !1, H = !1, M = !1, U = !1, D;
    D = Symbol.for("react.module.reference");
    function W(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === i || U || t === a || t === s || t === v || M || t === x || j || F || H || typeof t == "object" && t !== null && (t.$$typeof === h || t.$$typeof === y || t.$$typeof === f || t.$$typeof === d || t.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === D || t.getModuleId !== void 0));
    }
    function ce(t, u, g) {
      var b = t.displayName;
      if (b)
        return b;
      var C = u.displayName || u.name || "";
      return C !== "" ? g + "(" + C + ")" : g;
    }
    function Ve(t) {
      return t.displayName || "Context";
    }
    function J(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case s:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            var u = t;
            return Ve(u) + ".Consumer";
          case f:
            var g = t;
            return Ve(g._context) + ".Provider";
          case l:
            return ce(t, t.render, "ForwardRef");
          case y:
            var b = t.displayName || null;
            return b !== null ? b : J(t.type) || "Memo";
          case h: {
            var C = t, P = C._payload, _ = C._init;
            try {
              return J(_(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, te = 0, Ye, ze, He, Je, Ke, qe, Ge;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function Ft() {
      {
        if (te === 0) {
          Ye = console.log, ze = console.info, He = console.warn, Je = console.error, Ke = console.group, qe = console.groupCollapsed, Ge = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        te++;
      }
    }
    function At() {
      {
        if (te--, te === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, t, {
              value: Ye
            }),
            info: q({}, t, {
              value: ze
            }),
            warn: q({}, t, {
              value: He
            }),
            error: q({}, t, {
              value: Je
            }),
            group: q({}, t, {
              value: Ke
            }),
            groupCollapsed: q({}, t, {
              value: qe
            }),
            groupEnd: q({}, t, {
              value: Ge
            })
          });
        }
        te < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = m.ReactCurrentDispatcher, Ce;
    function fe(t, u, g) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (C) {
            var b = C.stack.trim().match(/\n( *(at )?)/);
            Ce = b && b[1] || "";
          }
        return `
` + Ce + t;
      }
    }
    var Se = !1, de;
    {
      var Mt = typeof WeakMap == "function" ? WeakMap : Map;
      de = new Mt();
    }
    function Ze(t, u) {
      if (!t || Se)
        return "";
      {
        var g = de.get(t);
        if (g !== void 0)
          return g;
      }
      var b;
      Se = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = _e.current, _e.current = null, Ft();
      try {
        if (u) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (N) {
              b = N;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (N) {
              b = N;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            b = N;
          }
          t();
        }
      } catch (N) {
        if (N && b && typeof N.stack == "string") {
          for (var R = N.stack.split(`
`), I = b.stack.split(`
`), k = R.length - 1, O = I.length - 1; k >= 1 && O >= 0 && R[k] !== I[O]; )
            O--;
          for (; k >= 1 && O >= 0; k--, O--)
            if (R[k] !== I[O]) {
              if (k !== 1 || O !== 1)
                do
                  if (k--, O--, O < 0 || R[k] !== I[O]) {
                    var A = `
` + R[k].replace(" at new ", " at ");
                    return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), typeof t == "function" && de.set(t, A), A;
                  }
                while (k >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        Se = !1, _e.current = P, At(), Error.prepareStackTrace = C;
      }
      var Q = t ? t.displayName || t.name : "", G = Q ? fe(Q) : "";
      return typeof t == "function" && de.set(t, G), G;
    }
    function Wt(t, u, g) {
      return Ze(t, !1);
    }
    function Bt(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function me(t, u, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ze(t, Bt(t));
      if (typeof t == "string")
        return fe(t);
      switch (t) {
        case s:
          return fe("Suspense");
        case v:
          return fe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Wt(t.render);
          case y:
            return me(t.type, u, g);
          case h: {
            var b = t, C = b._payload, P = b._init;
            try {
              return me(P(C), u, g);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, Qe = {}, et = m.ReactDebugCurrentFrame;
    function he(t) {
      if (t) {
        var u = t._owner, g = me(t.type, t._source, u ? u.type : null);
        et.setExtraStackFrame(g);
      } else
        et.setExtraStackFrame(null);
    }
    function Ut(t, u, g, b, C) {
      {
        var P = Function.call.bind(re);
        for (var _ in t)
          if (P(t, _)) {
            var R = void 0;
            try {
              if (typeof t[_] != "function") {
                var I = Error((b || "React class") + ": " + g + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              R = t[_](u, _, b, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              R = k;
            }
            R && !(R instanceof Error) && (he(C), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", g, _, typeof R), he(null)), R instanceof Error && !(R.message in Qe) && (Qe[R.message] = !0, he(C), w("Failed %s type: %s", g, R.message), he(null));
          }
      }
    }
    var Vt = Array.isArray;
    function Pe(t) {
      return Vt(t);
    }
    function Yt(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, g = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g;
      }
    }
    function zt(t) {
      try {
        return tt(t), !1;
      } catch {
        return !0;
      }
    }
    function tt(t) {
      return "" + t;
    }
    function rt(t) {
      if (zt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yt(t)), tt(t);
    }
    var nt = m.ReactCurrentOwner, Ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, at, it;
    function Jt(t) {
      if (re.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Kt(t) {
      if (re.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function qt(t, u) {
      typeof t.ref == "string" && nt.current;
    }
    function Gt(t, u) {
      {
        var g = function() {
          at || (at = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Xt(t, u) {
      {
        var g = function() {
          it || (it = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Zt = function(t, u, g, b, C, P, _) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: g,
        props: _,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Qt(t, u, g, b, C) {
      {
        var P, _ = {}, R = null, I = null;
        g !== void 0 && (rt(g), R = "" + g), Kt(u) && (rt(u.key), R = "" + u.key), Jt(u) && (I = u.ref, qt(u, C));
        for (P in u)
          re.call(u, P) && !Ht.hasOwnProperty(P) && (_[P] = u[P]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (P in k)
            _[P] === void 0 && (_[P] = k[P]);
        }
        if (R || I) {
          var O = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          R && Gt(_, O), I && Xt(_, O);
        }
        return Zt(t, R, I, C, b, nt.current, _);
      }
    }
    var Te = m.ReactCurrentOwner, ot = m.ReactDebugCurrentFrame;
    function Z(t) {
      if (t) {
        var u = t._owner, g = me(t.type, t._source, u ? u.type : null);
        ot.setExtraStackFrame(g);
      } else
        ot.setExtraStackFrame(null);
    }
    var $e;
    $e = !1;
    function ke(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function lt() {
      {
        if (Te.current) {
          var t = J(Te.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function er(t) {
      return "";
    }
    var st = {};
    function tr(t) {
      {
        var u = lt();
        if (!u) {
          var g = typeof t == "string" ? t : t.displayName || t.name;
          g && (u = `

Check the top-level render call using <` + g + ">.");
        }
        return u;
      }
    }
    function ut(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var g = tr(u);
        if (st[g])
          return;
        st[g] = !0;
        var b = "";
        t && t._owner && t._owner !== Te.current && (b = " It was passed a child from " + J(t._owner.type) + "."), Z(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, b), Z(null);
      }
    }
    function ct(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Pe(t))
          for (var g = 0; g < t.length; g++) {
            var b = t[g];
            ke(b) && ut(b, u);
          }
        else if (ke(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = T(t);
          if (typeof C == "function" && C !== t.entries)
            for (var P = C.call(t), _; !(_ = P.next()).done; )
              ke(_.value) && ut(_.value, u);
        }
      }
    }
    function rr(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var g;
        if (typeof u == "function")
          g = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === y))
          g = u.propTypes;
        else
          return;
        if (g) {
          var b = J(u);
          Ut(g, t.props, "prop", b, t);
        } else if (u.PropTypes !== void 0 && !$e) {
          $e = !0;
          var C = J(u);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(t) {
      {
        for (var u = Object.keys(t.props), g = 0; g < u.length; g++) {
          var b = u[g];
          if (b !== "children" && b !== "key") {
            Z(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), Z(null);
            break;
          }
        }
        t.ref !== null && (Z(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    var ft = {};
    function dt(t, u, g, b, C, P) {
      {
        var _ = W(t);
        if (!_) {
          var R = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = er();
          I ? R += I : R += lt();
          var k;
          t === null ? k = "null" : Pe(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (J(t.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, R);
        }
        var O = Qt(t, u, g, C, P);
        if (O == null)
          return O;
        if (_) {
          var A = u.children;
          if (A !== void 0)
            if (b)
              if (Pe(A)) {
                for (var Q = 0; Q < A.length; Q++)
                  ct(A[Q], t);
                Object.freeze && Object.freeze(A);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ct(A, t);
        }
        if (re.call(u, "key")) {
          var G = J(t), N = Object.keys(u).filter(function(ur) {
            return ur !== "key";
          }), Oe = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ft[G + Oe]) {
            var sr = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Oe, G, sr, G), ft[G + Oe] = !0;
          }
        }
        return t === o ? nr(O) : rr(O), O;
      }
    }
    function ar(t, u, g) {
      return dt(t, u, g, !0);
    }
    function ir(t, u, g) {
      return dt(t, u, g, !1);
    }
    var or = ir, lr = ar;
    ae.Fragment = o, ae.jsx = or, ae.jsxs = lr;
  }()), ae;
}
var pt;
function mr() {
  return pt || (pt = 1, process.env.NODE_ENV === "production" ? pe.exports = fr() : pe.exports = dr()), pe.exports;
}
var $ = mr();
const hr = "_card_de1z7_3", pr = "_image_de1z7_25", vr = "_title_de1z7_41", je = {
  card: hr,
  image: pr,
  title: vr
};
var ie = {}, vt;
function gr() {
  if (vt) return ie;
  vt = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.parse = f, ie.serialize = s;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, n = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, o = /^[\u0020-\u003A\u003D-\u007E]*$/, a = Object.prototype.toString, i = /* @__PURE__ */ (() => {
    const h = function() {
    };
    return h.prototype = /* @__PURE__ */ Object.create(null), h;
  })();
  function f(h, x) {
    const p = new i(), E = h.length;
    if (E < 2)
      return p;
    const T = (x == null ? void 0 : x.decode) || v;
    let m = 0;
    do {
      const w = h.indexOf("=", m);
      if (w === -1)
        break;
      const S = h.indexOf(";", m), j = S === -1 ? E : S;
      if (w > j) {
        m = h.lastIndexOf(";", w - 1) + 1;
        continue;
      }
      const F = d(h, m, w), H = l(h, w, F), M = h.slice(F, H);
      if (p[M] === void 0) {
        let U = d(h, w + 1, j), D = l(h, j, U);
        const W = T(h.slice(U, D));
        p[M] = W;
      }
      m = j + 1;
    } while (m < E);
    return p;
  }
  function d(h, x, p) {
    do {
      const E = h.charCodeAt(x);
      if (E !== 32 && E !== 9)
        return x;
    } while (++x < p);
    return p;
  }
  function l(h, x, p) {
    for (; x > p; ) {
      const E = h.charCodeAt(--x);
      if (E !== 32 && E !== 9)
        return x + 1;
    }
    return p;
  }
  function s(h, x, p) {
    const E = (p == null ? void 0 : p.encode) || encodeURIComponent;
    if (!e.test(h))
      throw new TypeError(`argument name is invalid: ${h}`);
    const T = E(x);
    if (!r.test(T))
      throw new TypeError(`argument val is invalid: ${x}`);
    let m = h + "=" + T;
    if (!p)
      return m;
    if (p.maxAge !== void 0) {
      if (!Number.isInteger(p.maxAge))
        throw new TypeError(`option maxAge is invalid: ${p.maxAge}`);
      m += "; Max-Age=" + p.maxAge;
    }
    if (p.domain) {
      if (!n.test(p.domain))
        throw new TypeError(`option domain is invalid: ${p.domain}`);
      m += "; Domain=" + p.domain;
    }
    if (p.path) {
      if (!o.test(p.path))
        throw new TypeError(`option path is invalid: ${p.path}`);
      m += "; Path=" + p.path;
    }
    if (p.expires) {
      if (!y(p.expires) || !Number.isFinite(p.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${p.expires}`);
      m += "; Expires=" + p.expires.toUTCString();
    }
    if (p.httpOnly && (m += "; HttpOnly"), p.secure && (m += "; Secure"), p.partitioned && (m += "; Partitioned"), p.priority)
      switch (typeof p.priority == "string" ? p.priority.toLowerCase() : void 0) {
        case "low":
          m += "; Priority=Low";
          break;
        case "medium":
          m += "; Priority=Medium";
          break;
        case "high":
          m += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${p.priority}`);
      }
    if (p.sameSite)
      switch (typeof p.sameSite == "string" ? p.sameSite.toLowerCase() : p.sameSite) {
        case !0:
        case "strict":
          m += "; SameSite=Strict";
          break;
        case "lax":
          m += "; SameSite=Lax";
          break;
        case "none":
          m += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${p.sameSite}`);
      }
    return m;
  }
  function v(h) {
    if (h.indexOf("%") === -1)
      return h;
    try {
      return decodeURIComponent(h);
    } catch {
      return h;
    }
  }
  function y(h) {
    return a.call(h) === "[object Date]";
  }
  return ie;
}
gr();
/**
 * react-router v7.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function L(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function Y(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Ie({
  pathname: e = "/",
  search: r = "",
  hash: n = ""
}) {
  return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function Ne(e) {
  let r = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (r.hash = e.substring(n), e = e.substring(0, n));
    let o = e.indexOf("?");
    o >= 0 && (r.search = e.substring(o), e = e.substring(0, o)), e && (r.pathname = e);
  }
  return r;
}
function bt(e, r, n = "/") {
  return yr(e, r, n, !1);
}
function yr(e, r, n, o) {
  let a = typeof r == "string" ? Ne(r) : r, i = K(a.pathname || "/", n);
  if (i == null)
    return null;
  let f = wt(e);
  xr(f);
  let d = null;
  for (let l = 0; d == null && l < f.length; ++l) {
    let s = kr(i);
    d = Tr(
      f[l],
      s,
      o
    );
  }
  return d;
}
function wt(e, r = [], n = [], o = "") {
  let a = (i, f, d) => {
    let l = {
      relativePath: d === void 0 ? i.path || "" : d,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: f,
      route: i
    };
    l.relativePath.startsWith("/") && (L(
      l.relativePath.startsWith(o),
      `Absolute route path "${l.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), l.relativePath = l.relativePath.slice(o.length));
    let s = V([o, l.relativePath]), v = n.concat(l);
    i.children && i.children.length > 0 && (L(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${s}".`
    ), wt(i.children, r, v, s)), !(i.path == null && !i.index) && r.push({
      path: s,
      score: Sr(s, i.index),
      routesMeta: v
    });
  };
  return e.forEach((i, f) => {
    var d;
    if (i.path === "" || !((d = i.path) != null && d.includes("?")))
      a(i, f);
    else
      for (let l of Rt(i.path))
        a(i, f, l);
  }), r;
}
function Rt(e) {
  let r = e.split("/");
  if (r.length === 0) return [];
  let [n, ...o] = r, a = n.endsWith("?"), i = n.replace(/\?$/, "");
  if (o.length === 0)
    return a ? [i, ""] : [i];
  let f = Rt(o.join("/")), d = [];
  return d.push(
    ...f.map(
      (l) => l === "" ? i : [i, l].join("/")
    )
  ), a && d.push(...f), d.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function xr(e) {
  e.sort(
    (r, n) => r.score !== n.score ? n.score - r.score : Pr(
      r.routesMeta.map((o) => o.childrenIndex),
      n.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Er = /^:[\w-]+$/, br = 3, wr = 2, Rr = 1, _r = 10, Cr = -2, gt = (e) => e === "*";
function Sr(e, r) {
  let n = e.split("/"), o = n.length;
  return n.some(gt) && (o += Cr), r && (o += wr), n.filter((a) => !gt(a)).reduce(
    (a, i) => a + (Er.test(i) ? br : i === "" ? Rr : _r),
    o
  );
}
function Pr(e, r) {
  return e.length === r.length && e.slice(0, -1).every((o, a) => o === r[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Tr(e, r, n = !1) {
  let { routesMeta: o } = e, a = {}, i = "/", f = [];
  for (let d = 0; d < o.length; ++d) {
    let l = o[d], s = d === o.length - 1, v = i === "/" ? r : r.slice(i.length) || "/", y = Ee(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
      v
    ), h = l.route;
    if (!y && s && n && !o[o.length - 1].route.index && (y = Ee(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      v
    )), !y)
      return null;
    Object.assign(a, y.params), f.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: V([i, y.pathname]),
      pathnameBase: Dr(
        V([i, y.pathnameBase])
      ),
      route: h
    }), y.pathnameBase !== "/" && (i = V([i, y.pathnameBase]));
  }
  return f;
}
function Ee(e, r) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, o] = $r(
    e.path,
    e.caseSensitive,
    e.end
  ), a = r.match(n);
  if (!a) return null;
  let i = a[0], f = i.replace(/(.)\/+$/, "$1"), d = a.slice(1);
  return {
    params: o.reduce(
      (s, { paramName: v, isOptional: y }, h) => {
        if (v === "*") {
          let p = d[h] || "";
          f = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
        }
        const x = d[h];
        return y && !x ? s[v] = void 0 : s[v] = (x || "").replace(/%2F/g, "/"), s;
      },
      {}
    ),
    pathname: i,
    pathnameBase: f,
    pattern: e
  };
}
function $r(e, r = !1, n = !0) {
  Y(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let o = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (f, d, l) => (o.push({ paramName: d, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (o.push({ paramName: "*" }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, r ? void 0 : "i"), o];
}
function kr(e) {
  try {
    return e.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return Y(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), e;
  }
}
function K(e, r) {
  if (r === "/") return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let n = r.endsWith("/") ? r.length - 1 : r.length, o = e.charAt(n);
  return o && o !== "/" ? null : e.slice(n) || "/";
}
function Or(e, r = "/") {
  let {
    pathname: n,
    search: o = "",
    hash: a = ""
  } = typeof e == "string" ? Ne(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : jr(n, r) : r,
    search: Ir(o),
    hash: Nr(a)
  };
}
function jr(e, r) {
  let n = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
  }), n.length > 1 ? n.join("/") : "/";
}
function Le(e, r, n, o) {
  return `Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Lr(e) {
  return e.filter(
    (r, n) => n === 0 || r.route.path && r.route.path.length > 0
  );
}
function _t(e) {
  let r = Lr(e);
  return r.map(
    (n, o) => o === r.length - 1 ? n.pathname : n.pathnameBase
  );
}
function Ct(e, r, n, o = !1) {
  let a;
  typeof e == "string" ? a = Ne(e) : (a = { ...e }, L(
    !a.pathname || !a.pathname.includes("?"),
    Le("?", "pathname", "search", a)
  ), L(
    !a.pathname || !a.pathname.includes("#"),
    Le("#", "pathname", "hash", a)
  ), L(
    !a.search || !a.search.includes("#"),
    Le("#", "search", "hash", a)
  ));
  let i = e === "" || a.pathname === "", f = i ? "/" : a.pathname, d;
  if (f == null)
    d = n;
  else {
    let y = r.length - 1;
    if (!o && f.startsWith("..")) {
      let h = f.split("/");
      for (; h[0] === ".."; )
        h.shift(), y -= 1;
      a.pathname = h.join("/");
    }
    d = y >= 0 ? r[y] : "/";
  }
  let l = Or(a, d), s = f && f !== "/" && f.endsWith("/"), v = (i || f === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (s || v) && (l.pathname += "/"), l;
}
var V = (e) => e.join("/").replace(/\/\/+/g, "/"), Dr = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Ir = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Nr = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Fr(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var St = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  St
);
var Ar = [
  "GET",
  ...St
];
new Set(Ar);
var ee = c.createContext(null);
ee.displayName = "DataRouter";
var be = c.createContext(null);
be.displayName = "DataRouterState";
var Pt = c.createContext({
  isTransitioning: !1
});
Pt.displayName = "ViewTransition";
var Mr = c.createContext(
  /* @__PURE__ */ new Map()
);
Mr.displayName = "Fetchers";
var Wr = c.createContext(null);
Wr.displayName = "Await";
var z = c.createContext(
  null
);
z.displayName = "Navigation";
var Fe = c.createContext(
  null
);
Fe.displayName = "Location";
var B = c.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
B.displayName = "Route";
var Ae = c.createContext(null);
Ae.displayName = "RouteError";
function Br(e, { relative: r } = {}) {
  L(
    we(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: o } = c.useContext(z), { hash: a, pathname: i, search: f } = ue(e, { relative: r }), d = i;
  return n !== "/" && (d = i === "/" ? n : V([n, i])), o.createHref({ pathname: d, search: f, hash: a });
}
function we() {
  return c.useContext(Fe) != null;
}
function X() {
  return L(
    we(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), c.useContext(Fe).location;
}
var Tt = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function $t(e) {
  c.useContext(z).static || c.useLayoutEffect(e);
}
function Ur() {
  let { isDataRoute: e } = c.useContext(B);
  return e ? tn() : Vr();
}
function Vr() {
  L(
    we(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = c.useContext(ee), { basename: r, navigator: n } = c.useContext(z), { matches: o } = c.useContext(B), { pathname: a } = X(), i = JSON.stringify(_t(o)), f = c.useRef(!1);
  return $t(() => {
    f.current = !0;
  }), c.useCallback(
    (l, s = {}) => {
      if (Y(f.current, Tt), !f.current) return;
      if (typeof l == "number") {
        n.go(l);
        return;
      }
      let v = Ct(
        l,
        JSON.parse(i),
        a,
        s.relative === "path"
      );
      e == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : V([r, v.pathname])), (s.replace ? n.replace : n.push)(
        v,
        s.state,
        s
      );
    },
    [
      r,
      n,
      i,
      a,
      e
    ]
  );
}
c.createContext(null);
function ue(e, { relative: r } = {}) {
  let { matches: n } = c.useContext(B), { pathname: o } = X(), a = JSON.stringify(_t(n));
  return c.useMemo(
    () => Ct(
      e,
      JSON.parse(a),
      o,
      r === "path"
    ),
    [e, a, o, r]
  );
}
function Yr(e, r, n, o) {
  L(
    we(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: a } = c.useContext(z), { matches: i } = c.useContext(B), f = i[i.length - 1], d = f ? f.params : {}, l = f ? f.pathname : "/", s = f ? f.pathnameBase : "/", v = f && f.route;
  {
    let m = v && v.path || "";
    kt(
      l,
      !v || m.endsWith("*") || m.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m === "/" ? "*" : `${m}/*`}">.`
    );
  }
  let y = X(), h;
  h = y;
  let x = h.pathname || "/", p = x;
  if (s !== "/") {
    let m = s.replace(/^\//, "").split("/");
    p = "/" + x.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let E = bt(e, { pathname: p });
  return Y(
    v || E != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `
  ), Y(
    E == null || E[E.length - 1].route.element !== void 0 || E[E.length - 1].route.Component !== void 0 || E[E.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), qr(
    E && E.map(
      (m) => Object.assign({}, m, {
        params: Object.assign({}, d, m.params),
        pathname: V([
          s,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(m.pathname).pathname : m.pathname
        ]),
        pathnameBase: m.pathnameBase === "/" ? s : V([
          s,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(m.pathnameBase).pathname : m.pathnameBase
        ])
      })
    ),
    i,
    n,
    o
  );
}
function zr() {
  let e = en(), r = Fr(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: o }, i = { padding: "2px 4px", backgroundColor: o }, f = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), f = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ c.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ c.createElement("code", { style: i }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ c.createElement("code", { style: i }, "errorElement"), " prop on your route.")), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ c.createElement("h3", { style: { fontStyle: "italic" } }, r), n ? /* @__PURE__ */ c.createElement("pre", { style: a }, n) : null, f);
}
var Hr = /* @__PURE__ */ c.createElement(zr, null), Jr = class extends c.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, r) {
    return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : r.error,
      location: r.location,
      revalidation: e.revalidation || r.revalidation
    };
  }
  componentDidCatch(e, r) {
    console.error(
      "React Router caught the following error during render",
      e,
      r
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ c.createElement(B.Provider, { value: this.props.routeContext }, /* @__PURE__ */ c.createElement(
      Ae.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Kr({ routeContext: e, match: r, children: n }) {
  let o = c.useContext(ee);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ c.createElement(B.Provider, { value: e }, n);
}
function qr(e, r = [], n = null, o = null) {
  if (e == null) {
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if (r.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let a = e, i = n == null ? void 0 : n.errors;
  if (i != null) {
    let l = a.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id]) !== void 0
    );
    L(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        i
      ).join(",")}`
    ), a = a.slice(
      0,
      Math.min(a.length, l + 1)
    );
  }
  let f = !1, d = -1;
  if (n)
    for (let l = 0; l < a.length; l++) {
      let s = a[l];
      if ((s.route.HydrateFallback || s.route.hydrateFallbackElement) && (d = l), s.route.id) {
        let { loaderData: v, errors: y } = n, h = s.route.loader && !v.hasOwnProperty(s.route.id) && (!y || y[s.route.id] === void 0);
        if (s.route.lazy || h) {
          f = !0, d >= 0 ? a = a.slice(0, d + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((l, s, v) => {
    let y, h = !1, x = null, p = null;
    n && (y = i && s.route.id ? i[s.route.id] : void 0, x = s.route.errorElement || Hr, f && (d < 0 && v === 0 ? (kt(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), h = !0, p = null) : d === v && (h = !0, p = s.route.hydrateFallbackElement || null)));
    let E = r.concat(a.slice(0, v + 1)), T = () => {
      let m;
      return y ? m = x : h ? m = p : s.route.Component ? m = /* @__PURE__ */ c.createElement(s.route.Component, null) : s.route.element ? m = s.route.element : m = l, /* @__PURE__ */ c.createElement(
        Kr,
        {
          match: s,
          routeContext: {
            outlet: l,
            matches: E,
            isDataRoute: n != null
          },
          children: m
        }
      );
    };
    return n && (s.route.ErrorBoundary || s.route.errorElement || v === 0) ? /* @__PURE__ */ c.createElement(
      Jr,
      {
        location: n.location,
        revalidation: n.revalidation,
        component: x,
        error: y,
        children: T(),
        routeContext: { outlet: null, matches: E, isDataRoute: !0 }
      }
    ) : T();
  }, null);
}
function Me(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gr(e) {
  let r = c.useContext(ee);
  return L(r, Me(e)), r;
}
function Xr(e) {
  let r = c.useContext(be);
  return L(r, Me(e)), r;
}
function Zr(e) {
  let r = c.useContext(B);
  return L(r, Me(e)), r;
}
function We(e) {
  let r = Zr(e), n = r.matches[r.matches.length - 1];
  return L(
    n.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), n.route.id;
}
function Qr() {
  return We(
    "useRouteId"
    /* UseRouteId */
  );
}
function en() {
  var o;
  let e = c.useContext(Ae), r = Xr(
    "useRouteError"
    /* UseRouteError */
  ), n = We(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (o = r.errors) == null ? void 0 : o[n];
}
function tn() {
  let { router: e } = Gr(
    "useNavigate"
    /* UseNavigateStable */
  ), r = We(
    "useNavigate"
    /* UseNavigateStable */
  ), n = c.useRef(!1);
  return $t(() => {
    n.current = !0;
  }), c.useCallback(
    async (a, i = {}) => {
      Y(n.current, Tt), n.current && (typeof a == "number" ? e.navigate(a) : await e.navigate(a, { fromRouteId: r, ...i }));
    },
    [e, r]
  );
}
var yt = {};
function kt(e, r, n) {
  !r && !yt[e] && (yt[e] = !0, Y(!1, n));
}
c.memo(rn);
function rn({
  routes: e,
  future: r,
  state: n
}) {
  return Yr(e, void 0, n, r);
}
var ye = "get", xe = "application/x-www-form-urlencoded";
function Re(e) {
  return e != null && typeof e.tagName == "string";
}
function nn(e) {
  return Re(e) && e.tagName.toLowerCase() === "button";
}
function an(e) {
  return Re(e) && e.tagName.toLowerCase() === "form";
}
function on(e) {
  return Re(e) && e.tagName.toLowerCase() === "input";
}
function ln(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function sn(e, r) {
  return e.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !ln(e);
}
var ve = null;
function un() {
  if (ve === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ve = !1;
    } catch {
      ve = !0;
    }
  return ve;
}
var cn = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function De(e) {
  return e != null && !cn.has(e) ? (Y(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`
  ), null) : e;
}
function fn(e, r) {
  let n, o, a, i, f;
  if (an(e)) {
    let d = e.getAttribute("action");
    o = d ? K(d, r) : null, n = e.getAttribute("method") || ye, a = De(e.getAttribute("enctype")) || xe, i = new FormData(e);
  } else if (nn(e) || on(e) && (e.type === "submit" || e.type === "image")) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || d.getAttribute("action");
    if (o = l ? K(l, r) : null, n = e.getAttribute("formmethod") || d.getAttribute("method") || ye, a = De(e.getAttribute("formenctype")) || De(d.getAttribute("enctype")) || xe, i = new FormData(d, e), !un()) {
      let { name: s, type: v, value: y } = e;
      if (v === "image") {
        let h = s ? `${s}.` : "";
        i.append(`${h}x`, "0"), i.append(`${h}y`, "0");
      } else s && i.append(s, y);
    }
  } else {
    if (Re(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    n = ye, o = null, a = xe, f = e;
  }
  return i && a === "text/plain" && (f = i, i = void 0), { action: o, method: n.toLowerCase(), encType: a, formData: i, body: f };
}
function Be(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
async function dn(e, r) {
  if (e.id in r)
    return r[e.id];
  try {
    let n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return r[e.id] = n, n;
  } catch (n) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function mn(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function hn(e, r, n) {
  let o = await Promise.all(
    e.map(async (a) => {
      let i = r.routes[a.route.id];
      if (i) {
        let f = await dn(i, n);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return yn(
    o.flat(1).filter(mn).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map(
      (a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }
    )
  );
}
function xt(e, r, n, o, a, i) {
  let f = (l, s) => n[s] ? l.route.id !== n[s].route.id : !0, d = (l, s) => {
    var v;
    return (
      // param change, /users/123 -> /users/456
      n[s].pathname !== l.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((v = n[s].route.path) == null ? void 0 : v.endsWith("*")) && n[s].params["*"] !== l.params["*"]
    );
  };
  return i === "assets" ? r.filter(
    (l, s) => f(l, s) || d(l, s)
  ) : i === "data" ? r.filter((l, s) => {
    var y;
    let v = o.routes[l.route.id];
    if (!v || !v.hasLoader)
      return !1;
    if (f(l, s) || d(l, s))
      return !0;
    if (l.route.shouldRevalidate) {
      let h = l.route.shouldRevalidate({
        currentUrl: new URL(
          a.pathname + a.search + a.hash,
          window.origin
        ),
        currentParams: ((y = n[0]) == null ? void 0 : y.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof h == "boolean")
        return h;
    }
    return !0;
  }) : [];
}
function pn(e, r, { includeHydrateFallback: n } = {}) {
  return vn(
    e.map((o) => {
      let a = r.routes[o.route.id];
      if (!a) return [];
      let i = [a.module];
      return a.clientActionModule && (i = i.concat(a.clientActionModule)), a.clientLoaderModule && (i = i.concat(a.clientLoaderModule)), n && a.hydrateFallbackModule && (i = i.concat(a.hydrateFallbackModule)), a.imports && (i = i.concat(a.imports)), i;
    }).flat(1)
  );
}
function vn(e) {
  return [...new Set(e)];
}
function gn(e) {
  let r = {}, n = Object.keys(e).sort();
  for (let o of n)
    r[o] = e[o];
  return r;
}
function yn(e, r) {
  let n = /* @__PURE__ */ new Set();
  return new Set(r), e.reduce((o, a) => {
    let i = JSON.stringify(gn(a));
    return n.has(i) || (n.add(i), o.push({ key: i, link: a })), o;
  }, []);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var xn = /* @__PURE__ */ new Set([100, 101, 204, 205]);
function En(e, r) {
  let n = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return n.pathname === "/" ? n.pathname = "_root.data" : r && K(n.pathname, r) === "/" ? n.pathname = `${r.replace(/\/$/, "")}/_root.data` : n.pathname = `${n.pathname.replace(/\/$/, "")}.data`, n;
}
function Ot() {
  let e = c.useContext(ee);
  return Be(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function bn() {
  let e = c.useContext(be);
  return Be(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Ue = c.createContext(void 0);
Ue.displayName = "FrameworkContext";
function jt() {
  let e = c.useContext(Ue);
  return Be(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function wn(e, r) {
  let n = c.useContext(Ue), [o, a] = c.useState(!1), [i, f] = c.useState(!1), { onFocus: d, onBlur: l, onMouseEnter: s, onMouseLeave: v, onTouchStart: y } = r, h = c.useRef(null);
  c.useEffect(() => {
    if (e === "render" && f(!0), e === "viewport") {
      let E = (m) => {
        m.forEach((w) => {
          f(w.isIntersecting);
        });
      }, T = new IntersectionObserver(E, { threshold: 0.5 });
      return h.current && T.observe(h.current), () => {
        T.disconnect();
      };
    }
  }, [e]), c.useEffect(() => {
    if (o) {
      let E = setTimeout(() => {
        f(!0);
      }, 100);
      return () => {
        clearTimeout(E);
      };
    }
  }, [o]);
  let x = () => {
    a(!0);
  }, p = () => {
    a(!1), f(!1);
  };
  return n ? e !== "intent" ? [i, h, {}] : [
    i,
    h,
    {
      onFocus: oe(d, x),
      onBlur: oe(l, p),
      onMouseEnter: oe(s, x),
      onMouseLeave: oe(v, p),
      onTouchStart: oe(y, x)
    }
  ] : [!1, h, {}];
}
function oe(e, r) {
  return (n) => {
    e && e(n), n.defaultPrevented || r(n);
  };
}
function Rn({
  page: e,
  ...r
}) {
  let { router: n } = Ot(), o = c.useMemo(
    () => bt(n.routes, e, n.basename),
    [n.routes, e, n.basename]
  );
  return o ? /* @__PURE__ */ c.createElement(Cn, { page: e, matches: o, ...r }) : null;
}
function _n(e) {
  let { manifest: r, routeModules: n } = jt(), [o, a] = c.useState([]);
  return c.useEffect(() => {
    let i = !1;
    return hn(e, r, n).then(
      (f) => {
        i || a(f);
      }
    ), () => {
      i = !0;
    };
  }, [e, r, n]), o;
}
function Cn({
  page: e,
  matches: r,
  ...n
}) {
  let o = X(), { manifest: a, routeModules: i } = jt(), { basename: f } = Ot(), { loaderData: d, matches: l } = bn(), s = c.useMemo(
    () => xt(
      e,
      r,
      l,
      a,
      o,
      "data"
    ),
    [e, r, l, a, o]
  ), v = c.useMemo(
    () => xt(
      e,
      r,
      l,
      a,
      o,
      "assets"
    ),
    [e, r, l, a, o]
  ), y = c.useMemo(() => {
    if (e === o.pathname + o.search + o.hash)
      return [];
    let p = /* @__PURE__ */ new Set(), E = !1;
    if (r.forEach((m) => {
      var S;
      let w = a.routes[m.route.id];
      !w || !w.hasLoader || (!s.some((j) => j.route.id === m.route.id) && m.route.id in d && ((S = i[m.route.id]) != null && S.shouldRevalidate) || w.hasClientLoader ? E = !0 : p.add(m.route.id));
    }), p.size === 0)
      return [];
    let T = En(e, f);
    return E && p.size > 0 && T.searchParams.set(
      "_routes",
      r.filter((m) => p.has(m.route.id)).map((m) => m.route.id).join(",")
    ), [T.pathname + T.search];
  }, [
    f,
    d,
    o,
    a,
    s,
    r,
    e,
    i
  ]), h = c.useMemo(
    () => pn(v, a),
    [v, a]
  ), x = _n(v);
  return /* @__PURE__ */ c.createElement(c.Fragment, null, y.map((p) => /* @__PURE__ */ c.createElement("link", { key: p, rel: "prefetch", as: "fetch", href: p, ...n })), h.map((p) => /* @__PURE__ */ c.createElement("link", { key: p, rel: "modulepreload", href: p, ...n })), x.map(({ key: p, link: E }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ c.createElement("link", { key: p, ...E })
  )));
}
function Sn(...e) {
  return (r) => {
    e.forEach((n) => {
      typeof n == "function" ? n(r) : n != null && (n.current = r);
    });
  };
}
var Lt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Lt && (window.__reactRouterVersion = "7.6.1");
} catch {
}
var Dt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, It = c.forwardRef(
  function({
    onClick: r,
    discover: n = "render",
    prefetch: o = "none",
    relative: a,
    reloadDocument: i,
    replace: f,
    state: d,
    target: l,
    to: s,
    preventScrollReset: v,
    viewTransition: y,
    ...h
  }, x) {
    let { basename: p } = c.useContext(z), E = typeof s == "string" && Dt.test(s), T, m = !1;
    if (typeof s == "string" && E && (T = s, Lt))
      try {
        let D = new URL(window.location.href), W = s.startsWith("//") ? new URL(D.protocol + s) : new URL(s), ce = K(W.pathname, p);
        W.origin === D.origin && ce != null ? s = ce + W.search + W.hash : m = !0;
      } catch {
        Y(
          !1,
          `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let w = Br(s, { relative: a }), [S, j, F] = wn(
      o,
      h
    ), H = kn(s, {
      replace: f,
      state: d,
      target: l,
      preventScrollReset: v,
      relative: a,
      viewTransition: y
    });
    function M(D) {
      r && r(D), D.defaultPrevented || H(D);
    }
    let U = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ c.createElement(
        "a",
        {
          ...h,
          ...F,
          href: T || w,
          onClick: m || i ? r : M,
          ref: Sn(x, j),
          target: l,
          "data-discover": !E && n === "render" ? "true" : void 0
        }
      )
    );
    return S && !E ? /* @__PURE__ */ c.createElement(c.Fragment, null, U, /* @__PURE__ */ c.createElement(Rn, { page: w })) : U;
  }
);
It.displayName = "Link";
var Pn = c.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: n = !1,
    className: o = "",
    end: a = !1,
    style: i,
    to: f,
    viewTransition: d,
    children: l,
    ...s
  }, v) {
    let y = ue(f, { relative: s.relative }), h = X(), x = c.useContext(be), { navigator: p, basename: E } = c.useContext(z), T = x != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    In(y) && d === !0, m = p.encodeLocation ? p.encodeLocation(y).pathname : y.pathname, w = h.pathname, S = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    n || (w = w.toLowerCase(), S = S ? S.toLowerCase() : null, m = m.toLowerCase()), S && E && (S = K(S, E) || S);
    const j = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
    let F = w === m || !a && w.startsWith(m) && w.charAt(j) === "/", H = S != null && (S === m || !a && S.startsWith(m) && S.charAt(m.length) === "/"), M = {
      isActive: F,
      isPending: H,
      isTransitioning: T
    }, U = F ? r : void 0, D;
    typeof o == "function" ? D = o(M) : D = [
      o,
      F ? "active" : null,
      H ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let W = typeof i == "function" ? i(M) : i;
    return /* @__PURE__ */ c.createElement(
      It,
      {
        ...s,
        "aria-current": U,
        className: D,
        ref: v,
        style: W,
        to: f,
        viewTransition: d
      },
      typeof l == "function" ? l(M) : l
    );
  }
);
Pn.displayName = "NavLink";
var Tn = c.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: r,
    navigate: n,
    reloadDocument: o,
    replace: a,
    state: i,
    method: f = ye,
    action: d,
    onSubmit: l,
    relative: s,
    preventScrollReset: v,
    viewTransition: y,
    ...h
  }, x) => {
    let p = Ln(), E = Dn(d, { relative: s }), T = f.toLowerCase() === "get" ? "get" : "post", m = typeof d == "string" && Dt.test(d), w = (S) => {
      if (l && l(S), S.defaultPrevented) return;
      S.preventDefault();
      let j = S.nativeEvent.submitter, F = (j == null ? void 0 : j.getAttribute("formmethod")) || f;
      p(j || S.currentTarget, {
        fetcherKey: r,
        method: F,
        navigate: n,
        replace: a,
        state: i,
        relative: s,
        preventScrollReset: v,
        viewTransition: y
      });
    };
    return /* @__PURE__ */ c.createElement(
      "form",
      {
        ref: x,
        method: T,
        action: E,
        onSubmit: o ? l : w,
        ...h,
        "data-discover": !m && e === "render" ? "true" : void 0
      }
    );
  }
);
Tn.displayName = "Form";
function $n(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Nt(e) {
  let r = c.useContext(ee);
  return L(r, $n(e)), r;
}
function kn(e, {
  target: r,
  replace: n,
  state: o,
  preventScrollReset: a,
  relative: i,
  viewTransition: f
} = {}) {
  let d = Ur(), l = X(), s = ue(e, { relative: i });
  return c.useCallback(
    (v) => {
      if (sn(v, r)) {
        v.preventDefault();
        let y = n !== void 0 ? n : Ie(l) === Ie(s);
        d(e, {
          replace: y,
          state: o,
          preventScrollReset: a,
          relative: i,
          viewTransition: f
        });
      }
    },
    [
      l,
      d,
      s,
      n,
      o,
      r,
      e,
      a,
      i,
      f
    ]
  );
}
var On = 0, jn = () => `__${String(++On)}__`;
function Ln() {
  let { router: e } = Nt(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = c.useContext(z), n = Qr();
  return c.useCallback(
    async (o, a = {}) => {
      let { action: i, method: f, encType: d, formData: l, body: s } = fn(
        o,
        r
      );
      if (a.navigate === !1) {
        let v = a.fetcherKey || jn();
        await e.fetch(v, n, a.action || i, {
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: s,
          formMethod: a.method || f,
          formEncType: a.encType || d,
          flushSync: a.flushSync
        });
      } else
        await e.navigate(a.action || i, {
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: s,
          formMethod: a.method || f,
          formEncType: a.encType || d,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        });
    },
    [e, r, n]
  );
}
function Dn(e, { relative: r } = {}) {
  let { basename: n } = c.useContext(z), o = c.useContext(B);
  L(o, "useFormAction must be used inside a RouteContext");
  let [a] = o.matches.slice(-1), i = { ...ue(e || ".", { relative: r }) }, f = X();
  if (e == null) {
    i.search = f.search;
    let d = new URLSearchParams(i.search), l = d.getAll("index");
    if (l.some((v) => v === "")) {
      d.delete("index"), l.filter((y) => y).forEach((y) => d.append("index", y));
      let v = d.toString();
      i.search = v ? `?${v}` : "";
    }
  }
  return (!e || e === ".") && a.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (i.pathname = i.pathname === "/" ? n : V([n, i.pathname])), Ie(i);
}
function In(e, r = {}) {
  let n = c.useContext(Pt);
  L(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Nt(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), a = ue(e, { relative: r.relative });
  if (!n.isTransitioning)
    return !1;
  let i = K(n.currentLocation.pathname, o) || n.currentLocation.pathname, f = K(n.nextLocation.pathname, o) || n.nextLocation.pathname;
  return Ee(a.pathname, f) != null || Ee(a.pathname, i) != null;
}
[
  ...xn
];
const aa = ({ title: e, imageUrl: r }) => cr(B) ? /* @__PURE__ */ $.jsxs(
  "div",
  {
    className: `d-flex flex-column justify-content-around text-decoration-none fw-bold ${je.card}`,
    children: [
      r && /* @__PURE__ */ $.jsx("img", { src: r, alt: e, className: `mx-auto ${je.image}` }),
      /* @__PURE__ */ $.jsx("h3", { className: `mt-3 text-center fw-bold ${je.title}`, children: e })
    ]
  }
) : null, Nn = "_card_s7oay_3", Fn = "_info_s7oay_27", An = "_danger_s7oay_53", Mn = "_success_s7oay_79", Wn = "_image_s7oay_123", Bn = "_icon_s7oay_135", Un = "_title_s7oay_149", Vn = "_subTitle_s7oay_159", Yn = "_date_s7oay_169", le = {
  card: Nn,
  info: Fn,
  danger: An,
  success: Mn,
  image: Wn,
  icon: Bn,
  title: Un,
  subTitle: Vn,
  date: Yn
}, ia = ({ title: e, subTitle: r, date: n, bgColor: o }) => /* @__PURE__ */ $.jsxs("div", { className: `d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${le.card} ${le[o]}`, children: [
  /* @__PURE__ */ $.jsx("div", { className: "d-flex align-items-center ", children: /* @__PURE__ */ $.jsxs("div", { className: "d-flex align-items-center ms-2", children: [
    /* @__PURE__ */ $.jsx("h3", { className: ` text-center m-0  ${le.title}`, children: e }),
    /* @__PURE__ */ $.jsxs("span", { className: `ms-2 ${le.subTitle}`, children: [
      "#",
      r
    ] })
  ] }) }),
  /* @__PURE__ */ $.jsx("span", { className: le.date, children: n })
] }), zn = "_card_13nft_3", Hn = "_image_13nft_33", Jn = "_icon_13nft_43", Kn = "_title_13nft_55", qn = "_subTitle_13nft_65", se = {
  card: zn,
  image: Hn,
  icon: Jn,
  title: Kn,
  subTitle: qn
}, oa = ({ title: e, imageUrl: r, subTitle: n, iconUrl: o }) => /* @__PURE__ */ $.jsxs(
  "div",
  {
    className: `d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${se.card}`,
    children: [
      /* @__PURE__ */ $.jsxs("div", { className: "d-flex align-items-center ", children: [
        r && /* @__PURE__ */ $.jsx("img", { src: r, alt: e, className: `mx-auto ${se.image}` }),
        /* @__PURE__ */ $.jsxs("div", { className: "d-flex flex-column ms-2", children: [
          /* @__PURE__ */ $.jsx("h3", { className: ` text-center m-0 mb-2 fw-bold ${se.title}`, children: e }),
          /* @__PURE__ */ $.jsx("span", { className: se.subTitle, children: n })
        ] })
      ] }),
      o && /* @__PURE__ */ $.jsx("img", { src: o, alt: e, className: `${se.icon}` })
    ]
  }
), Gn = "_card_1rn1o_3", Xn = "_image_1rn1o_33", Zn = "_icon_1rn1o_43", Qn = "_title_1rn1o_55", ge = {
  card: Gn,
  image: Xn,
  icon: Zn,
  title: Qn
}, la = ({ title: e, imageUrl: r, iconUrl: n }) => /* @__PURE__ */ $.jsxs(
  "div",
  {
    className: `d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${ge.card}`,
    children: [
      /* @__PURE__ */ $.jsxs("div", { className: "d-flex align-items-center ", children: [
        r && /* @__PURE__ */ $.jsx("img", { src: r, alt: e, className: `mx-auto ${ge.image}` }),
        /* @__PURE__ */ $.jsx("h3", { className: ` text-center fw-bold m-0 ms-2 ${ge.title}`, children: e })
      ] }),
      n && /* @__PURE__ */ $.jsx("img", { src: n, alt: e, className: `${ge.icon}` })
    ]
  }
), ea = "_card_12vca_1", ta = {
  card: ea
}, sa = ({ children: e }) => /* @__PURE__ */ $.jsx("div", { className: ta.card, children: e }), ra = {}, ua = ({ type: e, placeholder: r, label: n, value: o, name: a }) => /* @__PURE__ */ $.jsxs("div", { className: "form-floating mb-3", children: [
  /* @__PURE__ */ $.jsx(
    "input",
    {
      type: e,
      className: `form-control ${ra.customInput} custom-input`,
      id: "floatingInput",
      placeholder: r
    }
  ),
  /* @__PURE__ */ $.jsx("label", { htmlFor: "floatingInput", children: n })
] });
export {
  ia as EventBtn,
  ua as Input,
  aa as MainButton,
  sa as MainCard,
  oa as SomeBtn,
  la as SomeBtnMini
};
