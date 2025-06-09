import * as d from "react";
import fr, { useContext as fe, useMemo as dr } from "react";
function Et(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Be = { exports: {} }, Ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function un() {
  if (zt) return Ie;
  zt = 1;
  var e = fr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var f, y = {}, p = null, b = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (f in l) i.call(l, f) && !n.hasOwnProperty(f) && (y[f] = l[f]);
    if (c && c.defaultProps) for (f in l = c.defaultProps, l) y[f] === void 0 && (y[f] = l[f]);
    return { $$typeof: t, type: c, key: p, ref: b, props: y, _owner: a.current };
  }
  return Ie.Fragment = r, Ie.jsx = s, Ie.jsxs = s, Ie;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function cn() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = fr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), m = Symbol.iterator, x = "@@iterator";
    function P(o) {
      if (o === null || typeof o != "object")
        return null;
      var v = m && o[m] || o[x];
      return typeof v == "function" ? v : null;
    }
    var h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(o) {
      {
        for (var v = arguments.length, R = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
          R[O - 1] = arguments[O];
        S("error", o, R);
      }
    }
    function S(o, v, R) {
      {
        var O = h.ReactDebugCurrentFrame, Y = O.getStackAddendum();
        Y !== "" && (v += "%s", R = R.concat([Y]));
        var V = R.map(function(W) {
          return String(W);
        });
        V.unshift("Warning: " + v), Function.prototype.apply.call(console[o], console, V);
      }
    }
    var I = !1, E = !1, K = !1, X = !1, ae = !1, H;
    H = Symbol.for("react.module.reference");
    function ee(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === i || o === n || ae || o === a || o === u || o === f || X || o === b || I || E || K || typeof o == "object" && o !== null && (o.$$typeof === p || o.$$typeof === y || o.$$typeof === s || o.$$typeof === c || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === H || o.getModuleId !== void 0));
    }
    function de(o, v, R) {
      var O = o.displayName;
      if (O)
        return O;
      var Y = v.displayName || v.name || "";
      return Y !== "" ? R + "(" + Y + ")" : R;
    }
    function _e(o) {
      return o.displayName || "Context";
    }
    function ie(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case n:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var v = o;
            return _e(v) + ".Consumer";
          case s:
            var R = o;
            return _e(R._context) + ".Provider";
          case l:
            return de(o, o.render, "ForwardRef");
          case y:
            var O = o.displayName || null;
            return O !== null ? O : ie(o.type) || "Memo";
          case p: {
            var Y = o, V = Y._payload, W = Y._init;
            try {
              return ie(W(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, pe = 0, oe, ce, be, Ce, g, _, F;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function $() {
      {
        if (pe === 0) {
          oe = console.log, ce = console.info, be = console.warn, Ce = console.error, g = console.group, _ = console.groupCollapsed, F = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: A,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        pe++;
      }
    }
    function M() {
      {
        if (pe--, pe === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, o, {
              value: oe
            }),
            info: te({}, o, {
              value: ce
            }),
            warn: te({}, o, {
              value: be
            }),
            error: te({}, o, {
              value: Ce
            }),
            group: te({}, o, {
              value: g
            }),
            groupCollapsed: te({}, o, {
              value: _
            }),
            groupEnd: te({}, o, {
              value: F
            })
          });
        }
        pe < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = h.ReactCurrentDispatcher, k;
    function N(o, v, R) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (Y) {
            var O = Y.stack.trim().match(/\n( *(at )?)/);
            k = O && O[1] || "";
          }
        return `
` + k + o;
      }
    }
    var B = !1, L;
    {
      var Z = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Z();
    }
    function w(o, v) {
      if (!o || B)
        return "";
      {
        var R = L.get(o);
        if (R !== void 0)
          return R;
      }
      var O;
      B = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = j.current, j.current = null, $();
      try {
        if (v) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (re) {
              O = re;
            }
            Reflect.construct(o, [], W);
          } else {
            try {
              W.call();
            } catch (re) {
              O = re;
            }
            o.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            O = re;
          }
          o();
        }
      } catch (re) {
        if (re && O && typeof re.stack == "string") {
          for (var D = re.stack.split(`
`), Q = O.stack.split(`
`), z = D.length - 1, J = Q.length - 1; z >= 1 && J >= 0 && D[z] !== Q[J]; )
            J--;
          for (; z >= 1 && J >= 0; z--, J--)
            if (D[z] !== Q[J]) {
              if (z !== 1 || J !== 1)
                do
                  if (z--, J--, J < 0 || D[z] !== Q[J]) {
                    var le = `
` + D[z].replace(" at new ", " at ");
                    return o.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", o.displayName)), typeof o == "function" && L.set(o, le), le;
                  }
                while (z >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        B = !1, j.current = V, M(), Error.prepareStackTrace = Y;
      }
      var Pe = o ? o.displayName || o.name : "", we = Pe ? N(Pe) : "";
      return typeof o == "function" && L.set(o, we), we;
    }
    function se(o, v, R) {
      return w(o, !1);
    }
    function Te(o) {
      var v = o.prototype;
      return !!(v && v.isReactComponent);
    }
    function xe(o, v, R) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return w(o, Te(o));
      if (typeof o == "string")
        return N(o);
      switch (o) {
        case u:
          return N("Suspense");
        case f:
          return N("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return se(o.render);
          case y:
            return xe(o.type, v, R);
          case p: {
            var O = o, Y = O._payload, V = O._init;
            try {
              return xe(V(Y), v, R);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, kt = {}, It = h.ReactDebugCurrentFrame;
    function We(o) {
      if (o) {
        var v = o._owner, R = xe(o.type, o._source, v ? v.type : null);
        It.setExtraStackFrame(R);
      } else
        It.setExtraStackFrame(null);
    }
    function Wr(o, v, R, O, Y) {
      {
        var V = Function.call.bind(ke);
        for (var W in o)
          if (V(o, W)) {
            var D = void 0;
            try {
              if (typeof o[W] != "function") {
                var Q = Error((O || "React class") + ": " + R + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              D = o[W](v, W, O, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              D = z;
            }
            D && !(D instanceof Error) && (We(Y), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", R, W, typeof D), We(null)), D instanceof Error && !(D.message in kt) && (kt[D.message] = !0, We(Y), C("Failed %s type: %s", R, D.message), We(null));
          }
      }
    }
    var Br = Array.isArray;
    function rt(o) {
      return Br(o);
    }
    function Yr(o) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, R = v && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return R;
      }
    }
    function Ur(o) {
      try {
        return At(o), !1;
      } catch {
        return !0;
      }
    }
    function At(o) {
      return "" + o;
    }
    function Ft(o) {
      if (Ur(o))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yr(o)), At(o);
    }
    var Nt = h.ReactCurrentOwner, qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lt, Dt;
    function Vr(o) {
      if (ke.call(o, "ref")) {
        var v = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function zr(o) {
      if (ke.call(o, "key")) {
        var v = Object.getOwnPropertyDescriptor(o, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Hr(o, v) {
      typeof o.ref == "string" && Nt.current;
    }
    function Jr(o, v) {
      {
        var R = function() {
          Lt || (Lt = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        R.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function Kr(o, v) {
      {
        var R = function() {
          Dt || (Dt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        R.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var Gr = function(o, v, R, O, Y, V, W) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: v,
        ref: R,
        props: W,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Xr(o, v, R, O, Y) {
      {
        var V, W = {}, D = null, Q = null;
        R !== void 0 && (Ft(R), D = "" + R), zr(v) && (Ft(v.key), D = "" + v.key), Vr(v) && (Q = v.ref, Hr(v, Y));
        for (V in v)
          ke.call(v, V) && !qr.hasOwnProperty(V) && (W[V] = v[V]);
        if (o && o.defaultProps) {
          var z = o.defaultProps;
          for (V in z)
            W[V] === void 0 && (W[V] = z[V]);
        }
        if (D || Q) {
          var J = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          D && Jr(W, J), Q && Kr(W, J);
        }
        return Gr(o, D, Q, Y, O, Nt.current, W);
      }
    }
    var nt = h.ReactCurrentOwner, Mt = h.ReactDebugCurrentFrame;
    function Se(o) {
      if (o) {
        var v = o._owner, R = xe(o.type, o._source, v ? v.type : null);
        Mt.setExtraStackFrame(R);
      } else
        Mt.setExtraStackFrame(null);
    }
    var at;
    at = !1;
    function ot(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Wt() {
      {
        if (nt.current) {
          var o = ie(nt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Zr(o) {
      return "";
    }
    var Bt = {};
    function Qr(o) {
      {
        var v = Wt();
        if (!v) {
          var R = typeof o == "string" ? o : o.displayName || o.name;
          R && (v = `

Check the top-level render call using <` + R + ">.");
        }
        return v;
      }
    }
    function Yt(o, v) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var R = Qr(v);
        if (Bt[R])
          return;
        Bt[R] = !0;
        var O = "";
        o && o._owner && o._owner !== nt.current && (O = " It was passed a child from " + ie(o._owner.type) + "."), Se(o), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, O), Se(null);
      }
    }
    function Ut(o, v) {
      {
        if (typeof o != "object")
          return;
        if (rt(o))
          for (var R = 0; R < o.length; R++) {
            var O = o[R];
            ot(O) && Yt(O, v);
          }
        else if (ot(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var Y = P(o);
          if (typeof Y == "function" && Y !== o.entries)
            for (var V = Y.call(o), W; !(W = V.next()).done; )
              ot(W.value) && Yt(W.value, v);
        }
      }
    }
    function en(o) {
      {
        var v = o.type;
        if (v == null || typeof v == "string")
          return;
        var R;
        if (typeof v == "function")
          R = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === y))
          R = v.propTypes;
        else
          return;
        if (R) {
          var O = ie(v);
          Wr(R, o.props, "prop", O, o);
        } else if (v.PropTypes !== void 0 && !at) {
          at = !0;
          var Y = ie(v);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(o) {
      {
        for (var v = Object.keys(o.props), R = 0; R < v.length; R++) {
          var O = v[R];
          if (O !== "children" && O !== "key") {
            Se(o), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Se(null);
            break;
          }
        }
        o.ref !== null && (Se(o), C("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var qt = {};
    function Vt(o, v, R, O, Y, V) {
      {
        var W = ee(o);
        if (!W) {
          var D = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Zr();
          Q ? D += Q : D += Wt();
          var z;
          o === null ? z = "null" : rt(o) ? z = "array" : o !== void 0 && o.$$typeof === t ? (z = "<" + (ie(o.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : z = typeof o, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, D);
        }
        var J = Xr(o, v, R, Y, V);
        if (J == null)
          return J;
        if (W) {
          var le = v.children;
          if (le !== void 0)
            if (O)
              if (rt(le)) {
                for (var Pe = 0; Pe < le.length; Pe++)
                  Ut(le[Pe], o);
                Object.freeze && Object.freeze(le);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(le, o);
        }
        if (ke.call(v, "key")) {
          var we = ie(o), re = Object.keys(v).filter(function(ln) {
            return ln !== "key";
          }), it = re.length > 0 ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qt[we + it]) {
            var sn = re.length > 0 ? "{" + re.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, it, we, sn, we), qt[we + it] = !0;
          }
        }
        return o === i ? tn(J) : en(J), J;
      }
    }
    function rn(o, v, R) {
      return Vt(o, v, R, !0);
    }
    function nn(o, v, R) {
      return Vt(o, v, R, !1);
    }
    var an = nn, on = rn;
    Ae.Fragment = i, Ae.jsx = an, Ae.jsxs = on;
  }()), Ae;
}
var Jt;
function fn() {
  return Jt || (Jt = 1, process.env.NODE_ENV === "production" ? Be.exports = un() : Be.exports = cn()), Be.exports;
}
var T = fn();
const dn = "_card_de1z7_3", pn = "_image_de1z7_25", mn = "_title_de1z7_41", st = {
  card: dn,
  image: pn,
  title: mn
};
var Fe = {}, Kt;
function hn() {
  if (Kt) return Fe;
  Kt = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.parse = s, Fe.serialize = u;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, i = /^[\u0020-\u003A\u003D-\u007E]*$/, a = Object.prototype.toString, n = /* @__PURE__ */ (() => {
    const p = function() {
    };
    return p.prototype = /* @__PURE__ */ Object.create(null), p;
  })();
  function s(p, b) {
    const m = new n(), x = p.length;
    if (x < 2)
      return m;
    const P = (b == null ? void 0 : b.decode) || f;
    let h = 0;
    do {
      const C = p.indexOf("=", h);
      if (C === -1)
        break;
      const S = p.indexOf(";", h), I = S === -1 ? x : S;
      if (C > I) {
        h = p.lastIndexOf(";", C - 1) + 1;
        continue;
      }
      const E = c(p, h, C), K = l(p, C, E), X = p.slice(E, K);
      if (m[X] === void 0) {
        let ae = c(p, C + 1, I), H = l(p, I, ae);
        const ee = P(p.slice(ae, H));
        m[X] = ee;
      }
      h = I + 1;
    } while (h < x);
    return m;
  }
  function c(p, b, m) {
    do {
      const x = p.charCodeAt(b);
      if (x !== 32 && x !== 9)
        return b;
    } while (++b < m);
    return m;
  }
  function l(p, b, m) {
    for (; b > m; ) {
      const x = p.charCodeAt(--b);
      if (x !== 32 && x !== 9)
        return b + 1;
    }
    return m;
  }
  function u(p, b, m) {
    const x = (m == null ? void 0 : m.encode) || encodeURIComponent;
    if (!e.test(p))
      throw new TypeError(`argument name is invalid: ${p}`);
    const P = x(b);
    if (!t.test(P))
      throw new TypeError(`argument val is invalid: ${b}`);
    let h = p + "=" + P;
    if (!m)
      return h;
    if (m.maxAge !== void 0) {
      if (!Number.isInteger(m.maxAge))
        throw new TypeError(`option maxAge is invalid: ${m.maxAge}`);
      h += "; Max-Age=" + m.maxAge;
    }
    if (m.domain) {
      if (!r.test(m.domain))
        throw new TypeError(`option domain is invalid: ${m.domain}`);
      h += "; Domain=" + m.domain;
    }
    if (m.path) {
      if (!i.test(m.path))
        throw new TypeError(`option path is invalid: ${m.path}`);
      h += "; Path=" + m.path;
    }
    if (m.expires) {
      if (!y(m.expires) || !Number.isFinite(m.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${m.expires}`);
      h += "; Expires=" + m.expires.toUTCString();
    }
    if (m.httpOnly && (h += "; HttpOnly"), m.secure && (h += "; Secure"), m.partitioned && (h += "; Partitioned"), m.priority)
      switch (typeof m.priority == "string" ? m.priority.toLowerCase() : void 0) {
        case "low":
          h += "; Priority=Low";
          break;
        case "medium":
          h += "; Priority=Medium";
          break;
        case "high":
          h += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${m.priority}`);
      }
    if (m.sameSite)
      switch (typeof m.sameSite == "string" ? m.sameSite.toLowerCase() : m.sameSite) {
        case !0:
        case "strict":
          h += "; SameSite=Strict";
          break;
        case "lax":
          h += "; SameSite=Lax";
          break;
        case "none":
          h += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${m.sameSite}`);
      }
    return h;
  }
  function f(p) {
    if (p.indexOf("%") === -1)
      return p;
    try {
      return decodeURIComponent(p);
    } catch {
      return p;
    }
  }
  function y(p) {
    return a.call(p) === "[object Date]";
  }
  return Fe;
}
hn();
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
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function he(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function gt({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function bt(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let i = e.indexOf("?");
    i >= 0 && (t.search = e.substring(i), e = e.substring(0, i)), e && (t.pathname = e);
  }
  return t;
}
function pr(e, t, r = "/") {
  return vn(e, t, r, !1);
}
function vn(e, t, r, i) {
  let a = typeof t == "string" ? bt(t) : t, n = Ee(a.pathname || "/", r);
  if (n == null)
    return null;
  let s = mr(e);
  yn(s);
  let c = null;
  for (let l = 0; c == null && l < s.length; ++l) {
    let u = Pn(n);
    c = Tn(
      s[l],
      u,
      i
    );
  }
  return c;
}
function mr(e, t = [], r = [], i = "") {
  let a = (n, s, c) => {
    let l = {
      relativePath: c === void 0 ? n.path || "" : c,
      caseSensitive: n.caseSensitive === !0,
      childrenIndex: s,
      route: n
    };
    l.relativePath.startsWith("/") && (G(
      l.relativePath.startsWith(i),
      `Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), l.relativePath = l.relativePath.slice(i.length));
    let u = me([i, l.relativePath]), f = r.concat(l);
    n.children && n.children.length > 0 && (G(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      n.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
    ), mr(n.children, t, f, u)), !(n.path == null && !n.index) && t.push({
      path: u,
      score: _n(u, n.index),
      routesMeta: f
    });
  };
  return e.forEach((n, s) => {
    var c;
    if (n.path === "" || !((c = n.path) != null && c.includes("?")))
      a(n, s);
    else
      for (let l of hr(n.path))
        a(n, s, l);
  }), t;
}
function hr(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...i] = t, a = r.endsWith("?"), n = r.replace(/\?$/, "");
  if (i.length === 0)
    return a ? [n, ""] : [n];
  let s = hr(i.join("/")), c = [];
  return c.push(
    ...s.map(
      (l) => l === "" ? n : [n, l].join("/")
    )
  ), a && c.push(...s), c.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function yn(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : Cn(
      t.routesMeta.map((i) => i.childrenIndex),
      r.routesMeta.map((i) => i.childrenIndex)
    )
  );
}
var gn = /^:[\w-]+$/, En = 3, bn = 2, xn = 1, wn = 10, Rn = -2, Gt = (e) => e === "*";
function _n(e, t) {
  let r = e.split("/"), i = r.length;
  return r.some(Gt) && (i += Rn), t && (i += bn), r.filter((a) => !Gt(a)).reduce(
    (a, n) => a + (gn.test(n) ? En : n === "" ? xn : wn),
    i
  );
}
function Cn(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, a) => i === t[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Tn(e, t, r = !1) {
  let { routesMeta: i } = e, a = {}, n = "/", s = [];
  for (let c = 0; c < i.length; ++c) {
    let l = i[c], u = c === i.length - 1, f = n === "/" ? t : t.slice(n.length) || "/", y = Je(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
      f
    ), p = l.route;
    if (!y && u && r && !i[i.length - 1].route.index && (y = Je(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      f
    )), !y)
      return null;
    Object.assign(a, y.params), s.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: me([n, y.pathname]),
      pathnameBase: kn(
        me([n, y.pathnameBase])
      ),
      route: p
    }), y.pathnameBase !== "/" && (n = me([n, y.pathnameBase]));
  }
  return s;
}
function Je(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, i] = Sn(
    e.path,
    e.caseSensitive,
    e.end
  ), a = t.match(r);
  if (!a) return null;
  let n = a[0], s = n.replace(/(.)\/+$/, "$1"), c = a.slice(1);
  return {
    params: i.reduce(
      (u, { paramName: f, isOptional: y }, p) => {
        if (f === "*") {
          let m = c[p] || "";
          s = n.slice(0, n.length - m.length).replace(/(.)\/+$/, "$1");
        }
        const b = c[p];
        return y && !b ? u[f] = void 0 : u[f] = (b || "").replace(/%2F/g, "/"), u;
      },
      {}
    ),
    pathname: n,
    pathnameBase: s,
    pattern: e
  };
}
function Sn(e, t = !1, r = !0) {
  he(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let i = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (s, c, l) => (i.push({ paramName: c, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (i.push({ paramName: "*" }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), i];
}
function Pn(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return he(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function Ee(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, i = e.charAt(r);
  return i && i !== "/" ? null : e.slice(r) || "/";
}
function On(e, t = "/") {
  let {
    pathname: r,
    search: i = "",
    hash: a = ""
  } = typeof e == "string" ? bt(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : $n(r, t) : t,
    search: In(i),
    hash: An(a)
  };
}
function $n(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function lt(e, t, r, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function jn(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function vr(e) {
  let t = jn(e);
  return t.map(
    (r, i) => i === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function yr(e, t, r, i = !1) {
  let a;
  typeof e == "string" ? a = bt(e) : (a = { ...e }, G(
    !a.pathname || !a.pathname.includes("?"),
    lt("?", "pathname", "search", a)
  ), G(
    !a.pathname || !a.pathname.includes("#"),
    lt("#", "pathname", "hash", a)
  ), G(
    !a.search || !a.search.includes("#"),
    lt("#", "search", "hash", a)
  ));
  let n = e === "" || a.pathname === "", s = n ? "/" : a.pathname, c;
  if (s == null)
    c = r;
  else {
    let y = t.length - 1;
    if (!i && s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; )
        p.shift(), y -= 1;
      a.pathname = p.join("/");
    }
    c = y >= 0 ? t[y] : "/";
  }
  let l = On(a, c), u = s && s !== "/" && s.endsWith("/"), f = (n || s === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"), l;
}
var me = (e) => e.join("/").replace(/\/\/+/g, "/"), kn = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), In = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, An = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Fn(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var gr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  gr
);
var Nn = [
  "GET",
  ...gr
];
new Set(Nn);
var $e = d.createContext(null);
$e.displayName = "DataRouter";
var Xe = d.createContext(null);
Xe.displayName = "DataRouterState";
var Er = d.createContext({
  isTransitioning: !1
});
Er.displayName = "ViewTransition";
var Ln = d.createContext(
  /* @__PURE__ */ new Map()
);
Ln.displayName = "Fetchers";
var Dn = d.createContext(null);
Dn.displayName = "Await";
var ye = d.createContext(
  null
);
ye.displayName = "Navigation";
var xt = d.createContext(
  null
);
xt.displayName = "Location";
var ge = d.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ge.displayName = "Route";
var wt = d.createContext(null);
wt.displayName = "RouteError";
function Mn(e, { relative: t } = {}) {
  G(
    Ze(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: i } = d.useContext(ye), { hash: a, pathname: n, search: s } = Me(e, { relative: t }), c = n;
  return r !== "/" && (c = n === "/" ? r : me([r, n])), i.createHref({ pathname: c, search: s, hash: a });
}
function Ze() {
  return d.useContext(xt) != null;
}
function Re() {
  return G(
    Ze(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), d.useContext(xt).location;
}
var br = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function xr(e) {
  d.useContext(ye).static || d.useLayoutEffect(e);
}
function Wn() {
  let { isDataRoute: e } = d.useContext(ge);
  return e ? Qn() : Bn();
}
function Bn() {
  G(
    Ze(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = d.useContext($e), { basename: t, navigator: r } = d.useContext(ye), { matches: i } = d.useContext(ge), { pathname: a } = Re(), n = JSON.stringify(vr(i)), s = d.useRef(!1);
  return xr(() => {
    s.current = !0;
  }), d.useCallback(
    (l, u = {}) => {
      if (he(s.current, br), !s.current) return;
      if (typeof l == "number") {
        r.go(l);
        return;
      }
      let f = yr(
        l,
        JSON.parse(n),
        a,
        u.relative === "path"
      );
      e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : me([t, f.pathname])), (u.replace ? r.replace : r.push)(
        f,
        u.state,
        u
      );
    },
    [
      t,
      r,
      n,
      a,
      e
    ]
  );
}
d.createContext(null);
function Me(e, { relative: t } = {}) {
  let { matches: r } = d.useContext(ge), { pathname: i } = Re(), a = JSON.stringify(vr(r));
  return d.useMemo(
    () => yr(
      e,
      JSON.parse(a),
      i,
      t === "path"
    ),
    [e, a, i, t]
  );
}
function Yn(e, t, r, i) {
  G(
    Ze(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: a } = d.useContext(ye), { matches: n } = d.useContext(ge), s = n[n.length - 1], c = s ? s.params : {}, l = s ? s.pathname : "/", u = s ? s.pathnameBase : "/", f = s && s.route;
  {
    let h = f && f.path || "";
    wr(
      l,
      !f || h.endsWith("*") || h.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h === "/" ? "*" : `${h}/*`}">.`
    );
  }
  let y = Re(), p;
  p = y;
  let b = p.pathname || "/", m = b;
  if (u !== "/") {
    let h = u.replace(/^\//, "").split("/");
    m = "/" + b.replace(/^\//, "").split("/").slice(h.length).join("/");
  }
  let x = pr(e, { pathname: m });
  return he(
    f || x != null,
    `No routes matched location "${p.pathname}${p.search}${p.hash}" `
  ), he(
    x == null || x[x.length - 1].route.element !== void 0 || x[x.length - 1].route.Component !== void 0 || x[x.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), Hn(
    x && x.map(
      (h) => Object.assign({}, h, {
        params: Object.assign({}, c, h.params),
        pathname: me([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(h.pathname).pathname : h.pathname
        ]),
        pathnameBase: h.pathnameBase === "/" ? u : me([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(h.pathnameBase).pathname : h.pathnameBase
        ])
      })
    ),
    n,
    r,
    i
  );
}
function Un() {
  let e = Zn(), t = Fn(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, i = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: i }, n = { padding: "2px 4px", backgroundColor: i }, s = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), s = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ d.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ d.createElement("code", { style: n }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ d.createElement("code", { style: n }, "errorElement"), " prop on your route.")), /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ d.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ d.createElement("pre", { style: a }, r) : null, s);
}
var qn = /* @__PURE__ */ d.createElement(Un, null), Vn = class extends d.Component {
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
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ d.createElement(ge.Provider, { value: this.props.routeContext }, /* @__PURE__ */ d.createElement(
      wt.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function zn({ routeContext: e, match: t, children: r }) {
  let i = d.useContext($e);
  return i && i.static && i.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ d.createElement(ge.Provider, { value: e }, r);
}
function Hn(e, t = [], r = null, i = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let a = e, n = r == null ? void 0 : r.errors;
  if (n != null) {
    let l = a.findIndex(
      (u) => u.route.id && (n == null ? void 0 : n[u.route.id]) !== void 0
    );
    G(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        n
      ).join(",")}`
    ), a = a.slice(
      0,
      Math.min(a.length, l + 1)
    );
  }
  let s = !1, c = -1;
  if (r)
    for (let l = 0; l < a.length; l++) {
      let u = a[l];
      if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (c = l), u.route.id) {
        let { loaderData: f, errors: y } = r, p = u.route.loader && !f.hasOwnProperty(u.route.id) && (!y || y[u.route.id] === void 0);
        if (u.route.lazy || p) {
          s = !0, c >= 0 ? a = a.slice(0, c + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((l, u, f) => {
    let y, p = !1, b = null, m = null;
    r && (y = n && u.route.id ? n[u.route.id] : void 0, b = u.route.errorElement || qn, s && (c < 0 && f === 0 ? (wr(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), p = !0, m = null) : c === f && (p = !0, m = u.route.hydrateFallbackElement || null)));
    let x = t.concat(a.slice(0, f + 1)), P = () => {
      let h;
      return y ? h = b : p ? h = m : u.route.Component ? h = /* @__PURE__ */ d.createElement(u.route.Component, null) : u.route.element ? h = u.route.element : h = l, /* @__PURE__ */ d.createElement(
        zn,
        {
          match: u,
          routeContext: {
            outlet: l,
            matches: x,
            isDataRoute: r != null
          },
          children: h
        }
      );
    };
    return r && (u.route.ErrorBoundary || u.route.errorElement || f === 0) ? /* @__PURE__ */ d.createElement(
      Vn,
      {
        location: r.location,
        revalidation: r.revalidation,
        component: b,
        error: y,
        children: P(),
        routeContext: { outlet: null, matches: x, isDataRoute: !0 }
      }
    ) : P();
  }, null);
}
function Rt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jn(e) {
  let t = d.useContext($e);
  return G(t, Rt(e)), t;
}
function Kn(e) {
  let t = d.useContext(Xe);
  return G(t, Rt(e)), t;
}
function Gn(e) {
  let t = d.useContext(ge);
  return G(t, Rt(e)), t;
}
function _t(e) {
  let t = Gn(e), r = t.matches[t.matches.length - 1];
  return G(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function Xn() {
  return _t(
    "useRouteId"
    /* UseRouteId */
  );
}
function Zn() {
  var i;
  let e = d.useContext(wt), t = Kn(
    "useRouteError"
    /* UseRouteError */
  ), r = _t(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (i = t.errors) == null ? void 0 : i[r];
}
function Qn() {
  let { router: e } = Jn(
    "useNavigate"
    /* UseNavigateStable */
  ), t = _t(
    "useNavigate"
    /* UseNavigateStable */
  ), r = d.useRef(!1);
  return xr(() => {
    r.current = !0;
  }), d.useCallback(
    async (a, n = {}) => {
      he(r.current, br), r.current && (typeof a == "number" ? e.navigate(a) : await e.navigate(a, { fromRouteId: t, ...n }));
    },
    [e, t]
  );
}
var Xt = {};
function wr(e, t, r) {
  !t && !Xt[e] && (Xt[e] = !0, he(!1, r));
}
d.memo(ea);
function ea({
  routes: e,
  future: t,
  state: r
}) {
  return Yn(e, void 0, r, t);
}
var ze = "get", He = "application/x-www-form-urlencoded";
function Qe(e) {
  return e != null && typeof e.tagName == "string";
}
function ta(e) {
  return Qe(e) && e.tagName.toLowerCase() === "button";
}
function ra(e) {
  return Qe(e) && e.tagName.toLowerCase() === "form";
}
function na(e) {
  return Qe(e) && e.tagName.toLowerCase() === "input";
}
function aa(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function oa(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !aa(e);
}
var Ye = null;
function ia() {
  if (Ye === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ye = !1;
    } catch {
      Ye = !0;
    }
  return Ye;
}
var sa = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ut(e) {
  return e != null && !sa.has(e) ? (he(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${He}"`
  ), null) : e;
}
function la(e, t) {
  let r, i, a, n, s;
  if (ra(e)) {
    let c = e.getAttribute("action");
    i = c ? Ee(c, t) : null, r = e.getAttribute("method") || ze, a = ut(e.getAttribute("enctype")) || He, n = new FormData(e);
  } else if (ta(e) || na(e) && (e.type === "submit" || e.type === "image")) {
    let c = e.form;
    if (c == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || c.getAttribute("action");
    if (i = l ? Ee(l, t) : null, r = e.getAttribute("formmethod") || c.getAttribute("method") || ze, a = ut(e.getAttribute("formenctype")) || ut(c.getAttribute("enctype")) || He, n = new FormData(c, e), !ia()) {
      let { name: u, type: f, value: y } = e;
      if (f === "image") {
        let p = u ? `${u}.` : "";
        n.append(`${p}x`, "0"), n.append(`${p}y`, "0");
      } else u && n.append(u, y);
    }
  } else {
    if (Qe(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = ze, i = null, a = He, s = e;
  }
  return n && a === "text/plain" && (s = n, n = void 0), { action: i, method: r.toLowerCase(), encType: a, formData: n, body: s };
}
function Ct(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
async function ua(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function ca(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function fa(e, t, r) {
  let i = await Promise.all(
    e.map(async (a) => {
      let n = t.routes[a.route.id];
      if (n) {
        let s = await ua(n, r);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return ha(
    i.flat(1).filter(ca).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map(
      (a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }
    )
  );
}
function Zt(e, t, r, i, a, n) {
  let s = (l, u) => r[u] ? l.route.id !== r[u].route.id : !0, c = (l, u) => {
    var f;
    return (
      // param change, /users/123 -> /users/456
      r[u].pathname !== l.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((f = r[u].route.path) == null ? void 0 : f.endsWith("*")) && r[u].params["*"] !== l.params["*"]
    );
  };
  return n === "assets" ? t.filter(
    (l, u) => s(l, u) || c(l, u)
  ) : n === "data" ? t.filter((l, u) => {
    var y;
    let f = i.routes[l.route.id];
    if (!f || !f.hasLoader)
      return !1;
    if (s(l, u) || c(l, u))
      return !0;
    if (l.route.shouldRevalidate) {
      let p = l.route.shouldRevalidate({
        currentUrl: new URL(
          a.pathname + a.search + a.hash,
          window.origin
        ),
        currentParams: ((y = r[0]) == null ? void 0 : y.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof p == "boolean")
        return p;
    }
    return !0;
  }) : [];
}
function da(e, t, { includeHydrateFallback: r } = {}) {
  return pa(
    e.map((i) => {
      let a = t.routes[i.route.id];
      if (!a) return [];
      let n = [a.module];
      return a.clientActionModule && (n = n.concat(a.clientActionModule)), a.clientLoaderModule && (n = n.concat(a.clientLoaderModule)), r && a.hydrateFallbackModule && (n = n.concat(a.hydrateFallbackModule)), a.imports && (n = n.concat(a.imports)), n;
    }).flat(1)
  );
}
function pa(e) {
  return [...new Set(e)];
}
function ma(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let i of r)
    t[i] = e[i];
  return t;
}
function ha(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((i, a) => {
    let n = JSON.stringify(ma(a));
    return r.has(n) || (r.add(n), i.push({ key: n, link: a })), i;
  }, []);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var va = /* @__PURE__ */ new Set([100, 101, 204, 205]);
function ya(e, t) {
  let r = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r.pathname === "/" ? r.pathname = "_root.data" : t && Ee(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.data` : r.pathname = `${r.pathname.replace(/\/$/, "")}.data`, r;
}
function Rr() {
  let e = d.useContext($e);
  return Ct(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function ga() {
  let e = d.useContext(Xe);
  return Ct(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Tt = d.createContext(void 0);
Tt.displayName = "FrameworkContext";
function _r() {
  let e = d.useContext(Tt);
  return Ct(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Ea(e, t) {
  let r = d.useContext(Tt), [i, a] = d.useState(!1), [n, s] = d.useState(!1), { onFocus: c, onBlur: l, onMouseEnter: u, onMouseLeave: f, onTouchStart: y } = t, p = d.useRef(null);
  d.useEffect(() => {
    if (e === "render" && s(!0), e === "viewport") {
      let x = (h) => {
        h.forEach((C) => {
          s(C.isIntersecting);
        });
      }, P = new IntersectionObserver(x, { threshold: 0.5 });
      return p.current && P.observe(p.current), () => {
        P.disconnect();
      };
    }
  }, [e]), d.useEffect(() => {
    if (i) {
      let x = setTimeout(() => {
        s(!0);
      }, 100);
      return () => {
        clearTimeout(x);
      };
    }
  }, [i]);
  let b = () => {
    a(!0);
  }, m = () => {
    a(!1), s(!1);
  };
  return r ? e !== "intent" ? [n, p, {}] : [
    n,
    p,
    {
      onFocus: Ne(c, b),
      onBlur: Ne(l, m),
      onMouseEnter: Ne(u, b),
      onMouseLeave: Ne(f, m),
      onTouchStart: Ne(y, b)
    }
  ] : [!1, p, {}];
}
function Ne(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function ba({
  page: e,
  ...t
}) {
  let { router: r } = Rr(), i = d.useMemo(
    () => pr(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return i ? /* @__PURE__ */ d.createElement(wa, { page: e, matches: i, ...t }) : null;
}
function xa(e) {
  let { manifest: t, routeModules: r } = _r(), [i, a] = d.useState([]);
  return d.useEffect(() => {
    let n = !1;
    return fa(e, t, r).then(
      (s) => {
        n || a(s);
      }
    ), () => {
      n = !0;
    };
  }, [e, t, r]), i;
}
function wa({
  page: e,
  matches: t,
  ...r
}) {
  let i = Re(), { manifest: a, routeModules: n } = _r(), { basename: s } = Rr(), { loaderData: c, matches: l } = ga(), u = d.useMemo(
    () => Zt(
      e,
      t,
      l,
      a,
      i,
      "data"
    ),
    [e, t, l, a, i]
  ), f = d.useMemo(
    () => Zt(
      e,
      t,
      l,
      a,
      i,
      "assets"
    ),
    [e, t, l, a, i]
  ), y = d.useMemo(() => {
    if (e === i.pathname + i.search + i.hash)
      return [];
    let m = /* @__PURE__ */ new Set(), x = !1;
    if (t.forEach((h) => {
      var S;
      let C = a.routes[h.route.id];
      !C || !C.hasLoader || (!u.some((I) => I.route.id === h.route.id) && h.route.id in c && ((S = n[h.route.id]) != null && S.shouldRevalidate) || C.hasClientLoader ? x = !0 : m.add(h.route.id));
    }), m.size === 0)
      return [];
    let P = ya(e, s);
    return x && m.size > 0 && P.searchParams.set(
      "_routes",
      t.filter((h) => m.has(h.route.id)).map((h) => h.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    s,
    c,
    i,
    a,
    u,
    t,
    e,
    n
  ]), p = d.useMemo(
    () => da(f, a),
    [f, a]
  ), b = xa(f);
  return /* @__PURE__ */ d.createElement(d.Fragment, null, y.map((m) => /* @__PURE__ */ d.createElement("link", { key: m, rel: "prefetch", as: "fetch", href: m, ...r })), p.map((m) => /* @__PURE__ */ d.createElement("link", { key: m, rel: "modulepreload", href: m, ...r })), b.map(({ key: m, link: x }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ d.createElement("link", { key: m, ...x })
  )));
}
function Ra(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Cr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Cr && (window.__reactRouterVersion = "7.6.1");
} catch {
}
var Tr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, je = d.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: i = "none",
    relative: a,
    reloadDocument: n,
    replace: s,
    state: c,
    target: l,
    to: u,
    preventScrollReset: f,
    viewTransition: y,
    ...p
  }, b) {
    let { basename: m } = d.useContext(ye), x = typeof u == "string" && Tr.test(u), P, h = !1;
    if (typeof u == "string" && x && (P = u, Cr))
      try {
        let H = new URL(window.location.href), ee = u.startsWith("//") ? new URL(H.protocol + u) : new URL(u), de = Ee(ee.pathname, m);
        ee.origin === H.origin && de != null ? u = de + ee.search + ee.hash : h = !0;
      } catch {
        he(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let C = Mn(u, { relative: a }), [S, I, E] = Ea(
      i,
      p
    ), K = Sa(u, {
      replace: s,
      state: c,
      target: l,
      preventScrollReset: f,
      relative: a,
      viewTransition: y
    });
    function X(H) {
      t && t(H), H.defaultPrevented || K(H);
    }
    let ae = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ d.createElement(
        "a",
        {
          ...p,
          ...E,
          href: P || C,
          onClick: h || n ? t : X,
          ref: Ra(b, I),
          target: l,
          "data-discover": !x && r === "render" ? "true" : void 0
        }
      )
    );
    return S && !x ? /* @__PURE__ */ d.createElement(d.Fragment, null, ae, /* @__PURE__ */ d.createElement(ba, { page: C })) : ae;
  }
);
je.displayName = "Link";
var _a = d.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: i = "",
    end: a = !1,
    style: n,
    to: s,
    viewTransition: c,
    children: l,
    ...u
  }, f) {
    let y = Me(s, { relative: u.relative }), p = Re(), b = d.useContext(Xe), { navigator: m, basename: x } = d.useContext(ye), P = b != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ka(y) && c === !0, h = m.encodeLocation ? m.encodeLocation(y).pathname : y.pathname, C = p.pathname, S = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
    r || (C = C.toLowerCase(), S = S ? S.toLowerCase() : null, h = h.toLowerCase()), S && x && (S = Ee(S, x) || S);
    const I = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
    let E = C === h || !a && C.startsWith(h) && C.charAt(I) === "/", K = S != null && (S === h || !a && S.startsWith(h) && S.charAt(h.length) === "/"), X = {
      isActive: E,
      isPending: K,
      isTransitioning: P
    }, ae = E ? t : void 0, H;
    typeof i == "function" ? H = i(X) : H = [
      i,
      E ? "active" : null,
      K ? "pending" : null,
      P ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ee = typeof n == "function" ? n(X) : n;
    return /* @__PURE__ */ d.createElement(
      je,
      {
        ...u,
        "aria-current": ae,
        className: H,
        ref: f,
        style: ee,
        to: s,
        viewTransition: c
      },
      typeof l == "function" ? l(X) : l
    );
  }
);
_a.displayName = "NavLink";
var Ca = d.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: i,
    replace: a,
    state: n,
    method: s = ze,
    action: c,
    onSubmit: l,
    relative: u,
    preventScrollReset: f,
    viewTransition: y,
    ...p
  }, b) => {
    let m = $a(), x = ja(c, { relative: u }), P = s.toLowerCase() === "get" ? "get" : "post", h = typeof c == "string" && Tr.test(c), C = (S) => {
      if (l && l(S), S.defaultPrevented) return;
      S.preventDefault();
      let I = S.nativeEvent.submitter, E = (I == null ? void 0 : I.getAttribute("formmethod")) || s;
      m(I || S.currentTarget, {
        fetcherKey: t,
        method: E,
        navigate: r,
        replace: a,
        state: n,
        relative: u,
        preventScrollReset: f,
        viewTransition: y
      });
    };
    return /* @__PURE__ */ d.createElement(
      "form",
      {
        ref: b,
        method: P,
        action: x,
        onSubmit: i ? l : C,
        ...p,
        "data-discover": !h && e === "render" ? "true" : void 0
      }
    );
  }
);
Ca.displayName = "Form";
function Ta(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Sr(e) {
  let t = d.useContext($e);
  return G(t, Ta(e)), t;
}
function Sa(e, {
  target: t,
  replace: r,
  state: i,
  preventScrollReset: a,
  relative: n,
  viewTransition: s
} = {}) {
  let c = Wn(), l = Re(), u = Me(e, { relative: n });
  return d.useCallback(
    (f) => {
      if (oa(f, t)) {
        f.preventDefault();
        let y = r !== void 0 ? r : gt(l) === gt(u);
        c(e, {
          replace: y,
          state: i,
          preventScrollReset: a,
          relative: n,
          viewTransition: s
        });
      }
    },
    [
      l,
      c,
      u,
      r,
      i,
      t,
      e,
      a,
      n,
      s
    ]
  );
}
var Pa = 0, Oa = () => `__${String(++Pa)}__`;
function $a() {
  let { router: e } = Sr(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = d.useContext(ye), r = Xn();
  return d.useCallback(
    async (i, a = {}) => {
      let { action: n, method: s, encType: c, formData: l, body: u } = la(
        i,
        t
      );
      if (a.navigate === !1) {
        let f = a.fetcherKey || Oa();
        await e.fetch(f, r, a.action || n, {
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || s,
          formEncType: a.encType || c,
          flushSync: a.flushSync
        });
      } else
        await e.navigate(a.action || n, {
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || s,
          formEncType: a.encType || c,
          replace: a.replace,
          state: a.state,
          fromRouteId: r,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        });
    },
    [e, t, r]
  );
}
function ja(e, { relative: t } = {}) {
  let { basename: r } = d.useContext(ye), i = d.useContext(ge);
  G(i, "useFormAction must be used inside a RouteContext");
  let [a] = i.matches.slice(-1), n = { ...Me(e || ".", { relative: t }) }, s = Re();
  if (e == null) {
    n.search = s.search;
    let c = new URLSearchParams(n.search), l = c.getAll("index");
    if (l.some((f) => f === "")) {
      c.delete("index"), l.filter((y) => y).forEach((y) => c.append("index", y));
      let f = c.toString();
      n.search = f ? `?${f}` : "";
    }
  }
  return (!e || e === ".") && a.route.index && (n.search = n.search ? n.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (n.pathname = n.pathname === "/" ? r : me([r, n.pathname])), gt(n);
}
function ka(e, t = {}) {
  let r = d.useContext(Er);
  G(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = Sr(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), a = Me(e, { relative: t.relative });
  if (!r.isTransitioning)
    return !1;
  let n = Ee(r.currentLocation.pathname, i) || r.currentLocation.pathname, s = Ee(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return Je(a.pathname, s) != null || Je(a.pathname, n) != null;
}
[
  ...va
];
const To = ({ title: e, imageUrl: t, href: r }) => /* @__PURE__ */ T.jsxs(
  je,
  {
    to: r,
    className: `d-flex flex-column justify-content-around  text-decoration-none fw-bold ${st.card}`,
    children: [
      t && /* @__PURE__ */ T.jsx("img", { src: t, alt: e, className: `mx-auto ${st.image}` }),
      /* @__PURE__ */ T.jsx("h3", { className: `mt-3 text-center fw-bold ${st.title}`, children: e })
    ]
  }
), Ia = "_card_s7oay_3", Aa = "_info_s7oay_27", Fa = "_danger_s7oay_53", Na = "_success_s7oay_79", La = "_image_s7oay_123", Da = "_icon_s7oay_135", Ma = "_title_s7oay_149", Wa = "_subTitle_s7oay_159", Ba = "_date_s7oay_169", Le = {
  card: Ia,
  info: Aa,
  danger: Fa,
  success: Na,
  image: La,
  icon: Da,
  title: Ma,
  subTitle: Wa,
  date: Ba
}, So = ({ title: e, href: t, subTitle: r, date: i, bgColor: a }) => /* @__PURE__ */ T.jsxs(
  je,
  {
    to: t,
    className: `d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${Le.card} ${Le[a]}`,
    children: [
      /* @__PURE__ */ T.jsx("div", { className: "d-flex align-items-center ", children: /* @__PURE__ */ T.jsxs("div", { className: "d-flex align-items-center ms-2", children: [
        /* @__PURE__ */ T.jsx("h3", { className: ` text-center m-0  ${Le.title}`, children: e }),
        /* @__PURE__ */ T.jsxs("span", { className: `ms-2 ${Le.subTitle}`, children: [
          "#",
          r
        ] })
      ] }) }),
      /* @__PURE__ */ T.jsx("span", { className: Le.date, children: i })
    ]
  }
), Ya = "_card_13nft_3", Ua = "_image_13nft_33", qa = "_icon_13nft_43", Va = "_title_13nft_55", za = "_subTitle_13nft_65", De = {
  card: Ya,
  image: Ua,
  icon: qa,
  title: Va,
  subTitle: za
}, Po = ({ title: e, imageUrl: t, href: r, subTitle: i, iconUrl: a }) => /* @__PURE__ */ T.jsxs(
  je,
  {
    to: r,
    className: `d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${De.card}`,
    children: [
      /* @__PURE__ */ T.jsxs("div", { className: "d-flex align-items-center ", children: [
        t && /* @__PURE__ */ T.jsx("img", { src: t, alt: e, className: `mx-auto ${De.image}` }),
        /* @__PURE__ */ T.jsxs("div", { className: "d-flex flex-column ms-2", children: [
          /* @__PURE__ */ T.jsx("h3", { className: ` text-center m-0 mb-2 fw-bold ${De.title}`, children: e }),
          /* @__PURE__ */ T.jsx("span", { className: De.subTitle, children: i })
        ] })
      ] }),
      a && /* @__PURE__ */ T.jsx("img", { src: a, alt: e, className: `${De.icon}` })
    ]
  }
), Ha = "_card_1rn1o_3", Ja = "_image_1rn1o_33", Ka = "_icon_1rn1o_43", Ga = "_title_1rn1o_55", Ue = {
  card: Ha,
  image: Ja,
  icon: Ka,
  title: Ga
}, Oo = ({ title: e, imageUrl: t, href: r, iconUrl: i }) => /* @__PURE__ */ T.jsxs(
  je,
  {
    to: r,
    className: `d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${Ue.card}`,
    children: [
      /* @__PURE__ */ T.jsxs("div", { className: "d-flex align-items-center ", children: [
        t && /* @__PURE__ */ T.jsx("img", { src: t, alt: e, className: `mx-auto ${Ue.image}` }),
        /* @__PURE__ */ T.jsx("h3", { className: ` text-center fw-bold m-0 ms-2 ${Ue.title}`, children: e })
      ] }),
      i && /* @__PURE__ */ T.jsx("img", { src: i, alt: e, className: `${Ue.icon}` })
    ]
  }
), Xa = "_card_12vca_1", Za = {
  card: Xa
};
var ct = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Qt;
function Qa() {
  return Qt || (Qt = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var n = "", s = 0; s < arguments.length; s++) {
          var c = arguments[s];
          c && (n = a(n, i(c)));
        }
        return n;
      }
      function i(n) {
        if (typeof n == "string" || typeof n == "number")
          return n;
        if (typeof n != "object")
          return "";
        if (Array.isArray(n))
          return r.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
          return n.toString();
        var s = "";
        for (var c in n)
          t.call(n, c) && n[c] && (s = a(s, c));
        return s;
      }
      function a(n, s) {
        return s ? n ? n + " " + s : n + s : n;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(ct)), ct.exports;
}
var eo = Qa();
const ne = /* @__PURE__ */ Et(eo), to = ["xxl", "xl", "lg", "md", "sm", "xs"], ro = "xs", et = /* @__PURE__ */ d.createContext({
  prefixes: {},
  breakpoints: to,
  minBreakpoint: ro
}), {
  Consumer: $o,
  Provider: jo
} = et;
function ue(e, t) {
  const {
    prefixes: r
  } = fe(et);
  return e || r[t] || t;
}
function no() {
  const {
    breakpoints: e
  } = fe(et);
  return e;
}
function ao() {
  const {
    minBreakpoint: e
  } = fe(et);
  return e;
}
var qe = { exports: {} }, Ve = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function oo() {
  if (er) return U;
  er = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var K = E.$$typeof;
      switch (K) {
        case t:
          switch (E = E.type, E) {
            case l:
            case u:
            case i:
            case n:
            case a:
            case y:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case c:
                case f:
                case m:
                case b:
                case s:
                  return E;
                default:
                  return K;
              }
          }
        case r:
          return K;
      }
    }
  }
  function I(E) {
    return S(E) === u;
  }
  return U.AsyncMode = l, U.ConcurrentMode = u, U.ContextConsumer = c, U.ContextProvider = s, U.Element = t, U.ForwardRef = f, U.Fragment = i, U.Lazy = m, U.Memo = b, U.Portal = r, U.Profiler = n, U.StrictMode = a, U.Suspense = y, U.isAsyncMode = function(E) {
    return I(E) || S(E) === l;
  }, U.isConcurrentMode = I, U.isContextConsumer = function(E) {
    return S(E) === c;
  }, U.isContextProvider = function(E) {
    return S(E) === s;
  }, U.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, U.isForwardRef = function(E) {
    return S(E) === f;
  }, U.isFragment = function(E) {
    return S(E) === i;
  }, U.isLazy = function(E) {
    return S(E) === m;
  }, U.isMemo = function(E) {
    return S(E) === b;
  }, U.isPortal = function(E) {
    return S(E) === r;
  }, U.isProfiler = function(E) {
    return S(E) === n;
  }, U.isStrictMode = function(E) {
    return S(E) === a;
  }, U.isSuspense = function(E) {
    return S(E) === y;
  }, U.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === i || E === u || E === n || E === a || E === y || E === p || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === b || E.$$typeof === s || E.$$typeof === c || E.$$typeof === f || E.$$typeof === P || E.$$typeof === h || E.$$typeof === C || E.$$typeof === x);
  }, U.typeOf = S, U;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function io() {
  return tr || (tr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function S(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === i || w === u || w === n || w === a || w === y || w === p || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === b || w.$$typeof === s || w.$$typeof === c || w.$$typeof === f || w.$$typeof === P || w.$$typeof === h || w.$$typeof === C || w.$$typeof === x);
    }
    function I(w) {
      if (typeof w == "object" && w !== null) {
        var se = w.$$typeof;
        switch (se) {
          case t:
            var Te = w.type;
            switch (Te) {
              case l:
              case u:
              case i:
              case n:
              case a:
              case y:
                return Te;
              default:
                var xe = Te && Te.$$typeof;
                switch (xe) {
                  case c:
                  case f:
                  case m:
                  case b:
                  case s:
                    return xe;
                  default:
                    return se;
                }
            }
          case r:
            return se;
        }
      }
    }
    var E = l, K = u, X = c, ae = s, H = t, ee = f, de = i, _e = m, ie = b, te = r, pe = n, oe = a, ce = y, be = !1;
    function Ce(w) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(w) || I(w) === l;
    }
    function g(w) {
      return I(w) === u;
    }
    function _(w) {
      return I(w) === c;
    }
    function F(w) {
      return I(w) === s;
    }
    function A(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function $(w) {
      return I(w) === f;
    }
    function M(w) {
      return I(w) === i;
    }
    function j(w) {
      return I(w) === m;
    }
    function k(w) {
      return I(w) === b;
    }
    function N(w) {
      return I(w) === r;
    }
    function B(w) {
      return I(w) === n;
    }
    function L(w) {
      return I(w) === a;
    }
    function Z(w) {
      return I(w) === y;
    }
    q.AsyncMode = E, q.ConcurrentMode = K, q.ContextConsumer = X, q.ContextProvider = ae, q.Element = H, q.ForwardRef = ee, q.Fragment = de, q.Lazy = _e, q.Memo = ie, q.Portal = te, q.Profiler = pe, q.StrictMode = oe, q.Suspense = ce, q.isAsyncMode = Ce, q.isConcurrentMode = g, q.isContextConsumer = _, q.isContextProvider = F, q.isElement = A, q.isForwardRef = $, q.isFragment = M, q.isLazy = j, q.isMemo = k, q.isPortal = N, q.isProfiler = B, q.isStrictMode = L, q.isSuspense = Z, q.isValidElementType = S, q.typeOf = I;
  }()), q;
}
var rr;
function Pr() {
  return rr || (rr = 1, process.env.NODE_ENV === "production" ? Ve.exports = oo() : Ve.exports = io()), Ve.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ft, nr;
function so() {
  if (nr) return ft;
  nr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function i(n) {
    if (n == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(n);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var n = new String("abc");
      if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ft = a() ? Object.assign : function(n, s) {
    for (var c, l = i(n), u, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var y in c)
        t.call(c, y) && (l[y] = c[y]);
      if (e) {
        u = e(c);
        for (var p = 0; p < u.length; p++)
          r.call(c, u[p]) && (l[u[p]] = c[u[p]]);
      }
    }
    return l;
  }, ft;
}
var dt, ar;
function St() {
  if (ar) return dt;
  ar = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dt = e, dt;
}
var pt, or;
function Or() {
  return or || (or = 1, pt = Function.call.bind(Object.prototype.hasOwnProperty)), pt;
}
var mt, ir;
function lo() {
  if (ir) return mt;
  ir = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ St(), r = {}, i = /* @__PURE__ */ Or();
    e = function(n) {
      var s = "Warning: " + n;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(n, s, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in n)
        if (i(n, f)) {
          var y;
          try {
            if (typeof n[f] != "function") {
              var p = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            y = n[f](s, f, l, c, null, t);
          } catch (m) {
            y = m;
          }
          if (y && !(y instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + c + " type: " + y.message + (b ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, mt = a, mt;
}
var ht, sr;
function uo() {
  if (sr) return ht;
  sr = 1;
  var e = Pr(), t = so(), r = /* @__PURE__ */ St(), i = /* @__PURE__ */ Or(), a = /* @__PURE__ */ lo(), n = function() {
  };
  process.env.NODE_ENV !== "production" && (n = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ht = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function y(g) {
      var _ = g && (u && g[u] || g[f]);
      if (typeof _ == "function")
        return _;
    }
    var p = "<<anonymous>>", b = {
      array: h("array"),
      bigint: h("bigint"),
      bool: h("boolean"),
      func: h("function"),
      number: h("number"),
      object: h("object"),
      string: h("string"),
      symbol: h("symbol"),
      any: C(),
      arrayOf: S,
      element: I(),
      elementType: E(),
      instanceOf: K,
      node: ee(),
      objectOf: ae,
      oneOf: X,
      oneOfType: H,
      shape: _e,
      exact: ie
    };
    function m(g, _) {
      return g === _ ? g !== 0 || 1 / g === 1 / _ : g !== g && _ !== _;
    }
    function x(g, _) {
      this.message = g, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function P(g) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, F = 0;
      function A(M, j, k, N, B, L, Z) {
        if (N = N || p, L = L || k, Z !== r) {
          if (l) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = N + ":" + k;
            !_[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (n(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[se] = !0, F++);
          }
        }
        return j[k] == null ? M ? j[k] === null ? new x("The " + B + " `" + L + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new x("The " + B + " `" + L + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : g(j, k, N, B, L);
      }
      var $ = A.bind(null, !1);
      return $.isRequired = A.bind(null, !0), $;
    }
    function h(g) {
      function _(F, A, $, M, j, k) {
        var N = F[A], B = oe(N);
        if (B !== g) {
          var L = ce(N);
          return new x(
            "Invalid " + M + " `" + j + "` of type " + ("`" + L + "` supplied to `" + $ + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return P(_);
    }
    function C() {
      return P(s);
    }
    function S(g) {
      function _(F, A, $, M, j) {
        if (typeof g != "function")
          return new x("Property `" + j + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var k = F[A];
        if (!Array.isArray(k)) {
          var N = oe(k);
          return new x("Invalid " + M + " `" + j + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var B = 0; B < k.length; B++) {
          var L = g(k, B, $, M, j + "[" + B + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return P(_);
    }
    function I() {
      function g(_, F, A, $, M) {
        var j = _[F];
        if (!c(j)) {
          var k = oe(j);
          return new x("Invalid " + $ + " `" + M + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return P(g);
    }
    function E() {
      function g(_, F, A, $, M) {
        var j = _[F];
        if (!e.isValidElementType(j)) {
          var k = oe(j);
          return new x("Invalid " + $ + " `" + M + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return P(g);
    }
    function K(g) {
      function _(F, A, $, M, j) {
        if (!(F[A] instanceof g)) {
          var k = g.name || p, N = Ce(F[A]);
          return new x("Invalid " + M + " `" + j + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return P(_);
    }
    function X(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? n(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : n("Invalid argument supplied to oneOf, expected an array.")), s;
      function _(F, A, $, M, j) {
        for (var k = F[A], N = 0; N < g.length; N++)
          if (m(k, g[N]))
            return null;
        var B = JSON.stringify(g, function(Z, w) {
          var se = ce(w);
          return se === "symbol" ? String(w) : w;
        });
        return new x("Invalid " + M + " `" + j + "` of value `" + String(k) + "` " + ("supplied to `" + $ + "`, expected one of " + B + "."));
      }
      return P(_);
    }
    function ae(g) {
      function _(F, A, $, M, j) {
        if (typeof g != "function")
          return new x("Property `" + j + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var k = F[A], N = oe(k);
        if (N !== "object")
          return new x("Invalid " + M + " `" + j + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected an object."));
        for (var B in k)
          if (i(k, B)) {
            var L = g(k, B, $, M, j + "." + B, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return P(_);
    }
    function H(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && n("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var _ = 0; _ < g.length; _++) {
        var F = g[_];
        if (typeof F != "function")
          return n(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(F) + " at index " + _ + "."
          ), s;
      }
      function A($, M, j, k, N) {
        for (var B = [], L = 0; L < g.length; L++) {
          var Z = g[L], w = Z($, M, j, k, N, r);
          if (w == null)
            return null;
          w.data && i(w.data, "expectedType") && B.push(w.data.expectedType);
        }
        var se = B.length > 0 ? ", expected one of type [" + B.join(", ") + "]" : "";
        return new x("Invalid " + k + " `" + N + "` supplied to " + ("`" + j + "`" + se + "."));
      }
      return P(A);
    }
    function ee() {
      function g(_, F, A, $, M) {
        return te(_[F]) ? null : new x("Invalid " + $ + " `" + M + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return P(g);
    }
    function de(g, _, F, A, $) {
      return new x(
        (g || "React class") + ": " + _ + " type `" + F + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function _e(g) {
      function _(F, A, $, M, j) {
        var k = F[A], N = oe(k);
        if (N !== "object")
          return new x("Invalid " + M + " `" + j + "` of type `" + N + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var B in g) {
          var L = g[B];
          if (typeof L != "function")
            return de($, M, j, B, ce(L));
          var Z = L(k, B, $, M, j + "." + B, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return P(_);
    }
    function ie(g) {
      function _(F, A, $, M, j) {
        var k = F[A], N = oe(k);
        if (N !== "object")
          return new x("Invalid " + M + " `" + j + "` of type `" + N + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var B = t({}, F[A], g);
        for (var L in B) {
          var Z = g[L];
          if (i(g, L) && typeof Z != "function")
            return de($, M, j, L, ce(Z));
          if (!Z)
            return new x(
              "Invalid " + M + " `" + j + "` key `" + L + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(F[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var w = Z(k, L, $, M, j + "." + L, r);
          if (w)
            return w;
        }
        return null;
      }
      return P(_);
    }
    function te(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(te);
          if (g === null || c(g))
            return !0;
          var _ = y(g);
          if (_) {
            var F = _.call(g), A;
            if (_ !== g.entries) {
              for (; !(A = F.next()).done; )
                if (!te(A.value))
                  return !1;
            } else
              for (; !(A = F.next()).done; ) {
                var $ = A.value;
                if ($ && !te($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(g, _) {
      return g === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function oe(g) {
      var _ = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : pe(_, g) ? "symbol" : _;
    }
    function ce(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var _ = oe(g);
      if (_ === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function be(g) {
      var _ = ce(g);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function Ce(g) {
      return !g.constructor || !g.constructor.name ? p : g.constructor.name;
    }
    return b.checkPropTypes = a, b.resetWarningCache = a.resetWarningCache, b.PropTypes = b, b;
  }, ht;
}
var vt, lr;
function co() {
  if (lr) return vt;
  lr = 1;
  var e = /* @__PURE__ */ St();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, vt = function() {
    function i(s, c, l, u, f, y) {
      if (y !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    i.isRequired = i;
    function a() {
      return i;
    }
    var n = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: a,
      element: i,
      elementType: i,
      instanceOf: a,
      node: i,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return n.PropTypes = n, n;
  }, vt;
}
var ur;
function fo() {
  if (ur) return qe.exports;
  if (ur = 1, process.env.NODE_ENV !== "production") {
    var e = Pr(), t = !0;
    qe.exports = /* @__PURE__ */ uo()(e.isElement, t);
  } else
    qe.exports = /* @__PURE__ */ co()();
  return qe.exports;
}
var po = /* @__PURE__ */ fo();
const Oe = /* @__PURE__ */ Et(po);
function mo(e, t) {
  return d.Children.toArray(e).some((r) => /* @__PURE__ */ d.isValidElement(r) && r.type === t);
}
function ho({
  as: e,
  bsPrefix: t,
  className: r,
  ...i
}) {
  t = ue(t, "col");
  const a = no(), n = ao(), s = [], c = [];
  return a.forEach((l) => {
    const u = i[l];
    delete i[l];
    let f, y, p;
    typeof u == "object" && u != null ? {
      span: f,
      offset: y,
      order: p
    } = u : f = u;
    const b = l !== n ? `-${l}` : "";
    f && s.push(f === !0 ? `${t}${b}` : `${t}${b}-${f}`), p != null && c.push(`order${b}-${p}`), y != null && c.push(`offset${b}-${y}`);
  }), [{
    ...i,
    className: ne(r, ...s, ...c)
  }, {
    as: e,
    bsPrefix: t,
    spans: s
  }];
}
const $r = /* @__PURE__ */ d.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (e, t) => {
    const [{
      className: r,
      ...i
    }, {
      as: a = "div",
      bsPrefix: n,
      spans: s
    }] = ho(e);
    return /* @__PURE__ */ T.jsx(a, {
      ...i,
      ref: t,
      className: ne(r, !s.length && n)
    });
  }
);
$r.displayName = "Col";
var yt, cr;
function vo() {
  if (cr) return yt;
  cr = 1;
  var e = process.env.NODE_ENV !== "production", t = function() {
  };
  if (e) {
    var r = function(a, n) {
      var s = arguments.length;
      n = new Array(s > 1 ? s - 1 : 0);
      for (var c = 1; c < s; c++)
        n[c - 1] = arguments[c];
      var l = 0, u = "Warning: " + a.replace(/%s/g, function() {
        return n[l++];
      });
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
    t = function(i, a, n) {
      var s = arguments.length;
      n = new Array(s > 2 ? s - 2 : 0);
      for (var c = 2; c < s; c++)
        n[c - 2] = arguments[c];
      if (a === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      i || r.apply(null, [a].concat(n));
    };
  }
  return yt = t, yt;
}
var yo = vo();
const jr = /* @__PURE__ */ Et(yo), go = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: Oe.string,
  /** Display feedback as a tooltip. */
  tooltip: Oe.bool,
  as: Oe.elementType
}, tt = /* @__PURE__ */ d.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: e = "div",
    className: t,
    type: r = "valid",
    tooltip: i = !1,
    ...a
  }, n) => /* @__PURE__ */ T.jsx(e, {
    ...a,
    ref: n,
    className: ne(t, `${r}-${i ? "tooltip" : "feedback"}`)
  })
);
tt.displayName = "Feedback";
tt.propTypes = go;
const ve = /* @__PURE__ */ d.createContext({}), Pt = /* @__PURE__ */ d.forwardRef(({
  id: e,
  bsPrefix: t,
  className: r,
  type: i = "checkbox",
  isValid: a = !1,
  isInvalid: n = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: s = "input",
  ...c
}, l) => {
  const {
    controlId: u
  } = fe(ve);
  return t = ue(t, "form-check-input"), /* @__PURE__ */ T.jsx(s, {
    ...c,
    ref: l,
    type: i,
    id: e || u,
    className: ne(r, t, a && "is-valid", n && "is-invalid")
  });
});
Pt.displayName = "FormCheckInput";
const Ke = /* @__PURE__ */ d.forwardRef(({
  bsPrefix: e,
  className: t,
  htmlFor: r,
  ...i
}, a) => {
  const {
    controlId: n
  } = fe(ve);
  return e = ue(e, "form-check-label"), /* @__PURE__ */ T.jsx("label", {
    ...i,
    ref: a,
    htmlFor: r || n,
    className: ne(t, e)
  });
});
Ke.displayName = "FormCheckLabel";
const kr = /* @__PURE__ */ d.forwardRef(({
  id: e,
  bsPrefix: t,
  bsSwitchPrefix: r,
  inline: i = !1,
  reverse: a = !1,
  disabled: n = !1,
  isValid: s = !1,
  isInvalid: c = !1,
  feedbackTooltip: l = !1,
  feedback: u,
  feedbackType: f,
  className: y,
  style: p,
  title: b = "",
  type: m = "checkbox",
  label: x,
  children: P,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: h = "input",
  ...C
}, S) => {
  t = ue(t, "form-check"), r = ue(r, "form-switch");
  const {
    controlId: I
  } = fe(ve), E = dr(() => ({
    controlId: e || I
  }), [I, e]), K = !P && x != null && x !== !1 || mo(P, Ke), X = /* @__PURE__ */ T.jsx(Pt, {
    ...C,
    type: m === "switch" ? "checkbox" : m,
    ref: S,
    isValid: s,
    isInvalid: c,
    disabled: n,
    as: h
  });
  return /* @__PURE__ */ T.jsx(ve.Provider, {
    value: E,
    children: /* @__PURE__ */ T.jsx("div", {
      style: p,
      className: ne(y, K && t, i && `${t}-inline`, a && `${t}-reverse`, m === "switch" && r),
      children: P || /* @__PURE__ */ T.jsxs(T.Fragment, {
        children: [X, K && /* @__PURE__ */ T.jsx(Ke, {
          title: b,
          children: x
        }), u && /* @__PURE__ */ T.jsx(tt, {
          type: f,
          tooltip: l,
          children: u
        })]
      })
    })
  });
});
kr.displayName = "FormCheck";
const Ge = Object.assign(kr, {
  Input: Pt,
  Label: Ke
}), Ir = /* @__PURE__ */ d.forwardRef(({
  bsPrefix: e,
  type: t,
  size: r,
  htmlSize: i,
  id: a,
  className: n,
  isValid: s = !1,
  isInvalid: c = !1,
  plaintext: l,
  readOnly: u,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: f = "input",
  ...y
}, p) => {
  const {
    controlId: b
  } = fe(ve);
  return e = ue(e, "form-control"), process.env.NODE_ENV !== "production" && jr(b == null || !a, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ T.jsx(f, {
    ...y,
    type: t,
    size: i,
    ref: p,
    readOnly: u,
    id: a || b,
    className: ne(n, l ? `${e}-plaintext` : e, r && `${e}-${r}`, t === "color" && `${e}-color`, s && "is-valid", c && "is-invalid")
  });
});
Ir.displayName = "FormControl";
const Eo = Object.assign(Ir, {
  Feedback: tt
}), Ar = /* @__PURE__ */ d.forwardRef(({
  className: e,
  bsPrefix: t,
  as: r = "div",
  ...i
}, a) => (t = ue(t, "form-floating"), /* @__PURE__ */ T.jsx(r, {
  ref: a,
  className: ne(e, t),
  ...i
})));
Ar.displayName = "FormFloating";
const Ot = /* @__PURE__ */ d.forwardRef(({
  controlId: e,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: t = "div",
  ...r
}, i) => {
  const a = dr(() => ({
    controlId: e
  }), [e]);
  return /* @__PURE__ */ T.jsx(ve.Provider, {
    value: a,
    children: /* @__PURE__ */ T.jsx(t, {
      ...r,
      ref: i
    })
  });
});
Ot.displayName = "FormGroup";
const Fr = /* @__PURE__ */ d.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: e = "label",
  bsPrefix: t,
  column: r = !1,
  visuallyHidden: i = !1,
  className: a,
  htmlFor: n,
  ...s
}, c) => {
  const {
    controlId: l
  } = fe(ve);
  t = ue(t, "form-label");
  let u = "col-form-label";
  typeof r == "string" && (u = `${u} ${u}-${r}`);
  const f = ne(a, t, i && "visually-hidden", r && u);
  return process.env.NODE_ENV !== "production" && jr(l == null || !n, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), n = n || l, r ? /* @__PURE__ */ T.jsx($r, {
    ref: c,
    as: "label",
    className: f,
    htmlFor: n,
    ...s
  }) : /* @__PURE__ */ T.jsx(e, {
    ref: c,
    className: f,
    htmlFor: n,
    ...s
  });
});
Fr.displayName = "FormLabel";
const Nr = /* @__PURE__ */ d.forwardRef(({
  bsPrefix: e,
  className: t,
  id: r,
  ...i
}, a) => {
  const {
    controlId: n
  } = fe(ve);
  return e = ue(e, "form-range"), /* @__PURE__ */ T.jsx("input", {
    ...i,
    type: "range",
    ref: a,
    className: ne(t, e),
    id: r || n
  });
});
Nr.displayName = "FormRange";
const Lr = /* @__PURE__ */ d.forwardRef(({
  bsPrefix: e,
  size: t,
  htmlSize: r,
  className: i,
  isValid: a = !1,
  isInvalid: n = !1,
  id: s,
  ...c
}, l) => {
  const {
    controlId: u
  } = fe(ve);
  return e = ue(e, "form-select"), /* @__PURE__ */ T.jsx("select", {
    ...c,
    size: r,
    ref: l,
    className: ne(i, e, t && `${e}-${t}`, a && "is-valid", n && "is-invalid"),
    id: s || u
  });
});
Lr.displayName = "FormSelect";
const Dr = /* @__PURE__ */ d.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    as: r = "small",
    muted: i,
    ...a
  }, n) => (e = ue(e, "form-text"), /* @__PURE__ */ T.jsx(r, {
    ...a,
    ref: n,
    className: ne(t, e, i && "text-muted")
  }))
);
Dr.displayName = "FormText";
const Mr = /* @__PURE__ */ d.forwardRef((e, t) => /* @__PURE__ */ T.jsx(Ge, {
  ...e,
  ref: t,
  type: "switch"
}));
Mr.displayName = "Switch";
const bo = Object.assign(Mr, {
  Input: Ge.Input,
  Label: Ge.Label
}), $t = /* @__PURE__ */ d.forwardRef(({
  bsPrefix: e,
  className: t,
  children: r,
  controlId: i,
  label: a,
  ...n
}, s) => (e = ue(e, "form-floating"), /* @__PURE__ */ T.jsxs(Ot, {
  ref: s,
  className: ne(t, e),
  controlId: i,
  ...n,
  children: [r, /* @__PURE__ */ T.jsx("label", {
    htmlFor: i,
    children: a
  })]
})));
$t.displayName = "FloatingLabel";
const xo = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: Oe.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: Oe.bool,
  as: Oe.elementType
}, jt = /* @__PURE__ */ d.forwardRef(({
  className: e,
  validated: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: r = "form",
  ...i
}, a) => /* @__PURE__ */ T.jsx(r, {
  ...i,
  ref: a,
  className: ne(e, t && "was-validated")
}));
jt.displayName = "Form";
jt.propTypes = xo;
const wo = Object.assign(jt, {
  Group: Ot,
  Control: Eo,
  Floating: Ar,
  Check: Ge,
  Switch: bo,
  Label: Fr,
  Text: Dr,
  Range: Nr,
  Select: Lr,
  FloatingLabel: $t
}), ko = ({ children: e }) => /* @__PURE__ */ T.jsx("div", { className: Za.card, children: e }), Ro = "_input_16w1a_1", _o = {
  input: Ro
}, Io = ({ type: e, placeholder: t, label: r, value: i, name: a }) => /* @__PURE__ */ T.jsx(
  $t,
  {
    label: r,
    className: "mb-3",
    children: /* @__PURE__ */ T.jsx(wo.Control, { type: e, placeholder: t, value: i, name: a, className: _o.input })
  }
);
export {
  So as EventBtn,
  Io as Input,
  To as MainButton,
  ko as MainCard,
  Po as SomeBtn,
  Oo as SomeBtnMini
};
