import {
  basicSetup,
  indentWithTab
} from "./chunk-6OMWZU27.js";
import "./chunk-XOLXVIVH.js";
import {
  Compartment,
  EditorState,
  EditorView,
  StateEffect,
  indentUnit,
  keymap,
  placeholder
} from "./chunk-EO7OTINV.js";
import {
  computed,
  defineComponent,
  h,
  inject,
  onBeforeUnmount,
  onMounted,
  shallowRef,
  toRaw,
  watch
} from "./chunk-5K23BRP6.js";

// node_modules/vue-codemirror/dist/vue-codemirror.esm.js
var h2 = Object.freeze({ autofocus: false, disabled: false, indentWithTab: true, tabSize: 2, placeholder: "", autoDestroy: true, extensions: [basicSetup] });
var y = Symbol("vue-codemirror-global-config");
var O;
var j = function(e) {
  var t = e.onUpdate, n = e.onChange, o = e.onFocus, r = e.onBlur, u = function(e2, t2) {
    var n2 = {};
    for (var o2 in e2) Object.prototype.hasOwnProperty.call(e2, o2) && t2.indexOf(o2) < 0 && (n2[o2] = e2[o2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
      var r2 = 0;
      for (o2 = Object.getOwnPropertySymbols(e2); r2 < o2.length; r2++) t2.indexOf(o2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, o2[r2]) && (n2[o2[r2]] = e2[o2[r2]]);
    }
    return n2;
  }(e, ["onUpdate", "onChange", "onFocus", "onBlur"]);
  return EditorState.create({ doc: u.doc, selection: u.selection, extensions: (Array.isArray(u.extensions) ? u.extensions : [u.extensions]).concat([EditorView.updateListener.of(function(e2) {
    t(e2), e2.docChanged && n(e2.state.doc.toString(), e2), e2.focusChanged && (e2.view.hasFocus ? o(e2) : r(e2));
  })]) });
};
var S = function(e) {
  var t = new Compartment();
  return { compartment: t, run: function(n) {
    t.get(e.state) ? e.dispatch({ effects: t.reconfigure(n) }) : e.dispatch({ effects: StateEffect.appendConfig.of(t.of(n)) });
  } };
};
var x = function(e, t) {
  var n = S(e), o = n.compartment, r = n.run;
  return function(n2) {
    var u = o.get(e.state);
    r((null != n2 ? n2 : u !== t) ? t : []);
  };
};
var C = { type: Boolean, default: void 0 };
var D = { autofocus: C, disabled: C, indentWithTab: C, tabSize: Number, placeholder: String, style: Object, autoDestroy: C, phrases: Object, root: Object, extensions: Array, selection: Object };
var U = { modelValue: { type: String, default: "" } };
var w = Object.assign(Object.assign({}, D), U);
!function(e) {
  e.Change = "change", e.Update = "update", e.Focus = "focus", e.Blur = "blur", e.Ready = "ready", e.ModelUpdate = "update:modelValue";
}(O || (O = {}));
var z = {};
z[O.Change] = function(e, t) {
  return true;
}, z[O.Update] = function(e) {
  return true;
}, z[O.Focus] = function(e) {
  return true;
}, z[O.Blur] = function(e) {
  return true;
}, z[O.Ready] = function(e) {
  return true;
};
var B = {};
B[O.ModelUpdate] = z[O.Change];
var F = Object.assign(Object.assign({}, z), B);
var P = defineComponent({ name: "VueCodemirror", props: Object.assign({}, w), emits: Object.assign({}, F), setup: function(t, s) {
  var f = shallowRef(), d = shallowRef(), C2 = shallowRef(), D2 = Object.assign(Object.assign({}, h2), inject(y, {})), U2 = computed(function() {
    var e = {};
    return Object.keys(toRaw(t)).forEach(function(n) {
      var o;
      "modelValue" !== n && (e[n] = null !== (o = t[n]) && void 0 !== o ? o : D2[n]);
    }), e;
  });
  return onMounted(function() {
    var e;
    d.value = j({ doc: t.modelValue, selection: U2.value.selection, extensions: null !== (e = D2.extensions) && void 0 !== e ? e : [], onFocus: function(e2) {
      return s.emit(O.Focus, e2);
    }, onBlur: function(e2) {
      return s.emit(O.Blur, e2);
    }, onUpdate: function(e2) {
      return s.emit(O.Update, e2);
    }, onChange: function(e2, n2) {
      e2 !== t.modelValue && (s.emit(O.Change, e2, n2), s.emit(O.ModelUpdate, e2, n2));
    } }), C2.value = function(e2) {
      return new EditorView(Object.assign({}, e2));
    }({ state: d.value, parent: f.value, root: U2.value.root });
    var n = function(e2) {
      var t2 = function() {
        return e2.state.doc.toString();
      }, n2 = S(e2).run, o = x(e2, [EditorView.editable.of(false), EditorState.readOnly.of(true)]), r = x(e2, keymap.of([indentWithTab])), u = S(e2).run, a = S(e2).run, i = S(e2).run, c = S(e2).run;
      return { focus: function() {
        return e2.focus();
      }, getDoc: t2, setDoc: function(n3) {
        n3 !== t2() && e2.dispatch({ changes: { from: 0, to: e2.state.doc.length, insert: n3 } });
      }, reExtensions: n2, toggleDisabled: o, toggleIndentWithTab: r, setTabSize: function(e3) {
        u([EditorState.tabSize.of(e3), indentUnit.of(" ".repeat(e3))]);
      }, setPhrases: function(e3) {
        a([EditorState.phrases.of(e3)]);
      }, setPlaceholder: function(e3) {
        i(placeholder(e3));
      }, setStyle: function(e3) {
        void 0 === e3 && (e3 = {}), c(EditorView.theme({ "&": Object.assign({}, e3) }));
      } };
    }(C2.value);
    watch(function() {
      return t.modelValue;
    }, function(e2) {
      e2 !== n.getDoc() && n.setDoc(e2);
    }), watch(function() {
      return t.extensions;
    }, function(e2) {
      return n.reExtensions(e2 || []);
    }, { immediate: true }), watch(function() {
      return U2.value.disabled;
    }, function(e2) {
      return n.toggleDisabled(e2);
    }, { immediate: true }), watch(function() {
      return U2.value.indentWithTab;
    }, function(e2) {
      return n.toggleIndentWithTab(e2);
    }, { immediate: true }), watch(function() {
      return U2.value.tabSize;
    }, function(e2) {
      return n.setTabSize(e2);
    }, { immediate: true }), watch(function() {
      return U2.value.phrases;
    }, function(e2) {
      return n.setPhrases(e2 || {});
    }, { immediate: true }), watch(function() {
      return U2.value.placeholder;
    }, function(e2) {
      return n.setPlaceholder(e2);
    }, { immediate: true }), watch(function() {
      return U2.value.style;
    }, function(e2) {
      return n.setStyle(e2);
    }, { immediate: true }), U2.value.autofocus && n.focus(), s.emit(O.Ready, { state: d.value, view: C2.value, container: f.value });
  }), onBeforeUnmount(function() {
    U2.value.autoDestroy && C2.value && function(e) {
      e.destroy();
    }(C2.value);
  }), function() {
    return h("div", { class: "v-codemirror", style: { display: "contents" }, ref: f });
  };
} });
var T = P;
var V = function(e, t) {
  e.component(P.name, P), e.component("Codemirror", P), function(e2, t2) {
    e2.provide(y, t2);
  }(e, t);
};
var W = { Codemirror: T, install: V };
export {
  T as Codemirror,
  h2 as DEFAULT_CONFIG,
  W as default,
  V as install
};
/*! Bundled license information:

vue-codemirror/dist/vue-codemirror.esm.js:
  (*!
  * VueCodemirror v6.1.1
  * Copyright (c) Surmon. All rights reserved.
  * Released under the MIT License.
  * Surmon
  *)
*/
//# sourceMappingURL=vue-codemirror.js.map
