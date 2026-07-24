/* @ds-bundle: {"format":3,"namespace":"RobinDesignSystem_2b6e7b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Card","sourcePath":"components/feedback/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"7cc888863390","components/core/Badge.jsx":"8d501385eec0","components/core/Button.jsx":"9d301180cbe5","components/core/IconButton.jsx":"48ec072916d8","components/core/Tag.jsx":"5ab1fce273a4","components/feedback/Alert.jsx":"09d43ecfa241","components/feedback/Card.jsx":"eec749b0b954","components/forms/Checkbox.jsx":"ed1e47a04b87","components/forms/Input.jsx":"3b231a6939b4","components/forms/Radio.jsx":"8fe5cabfb51a","components/forms/Select.jsx":"0f3683cf1ce9","components/forms/Switch.jsx":"4d7e581a73a8","components/navigation/Menu.jsx":"df4b2ddd99c8","components/navigation/Tabs.jsx":"bef7b1792648","ui_kits/web-app/icons.jsx":"0095e693eba5","ui_kits/web-app/screens.jsx":"653fae0e0a4a","ui_kits/web-app/shell.jsx":"8b256bc47b26"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RobinDesignSystem_2b6e7b = window.RobinDesignSystem_2b6e7b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  name = "",
  src,
  size = "md",
  square = false,
  className = "",
  ...rest
}) {
  const classes = ["rb-avatar", size !== "md" ? `rb-avatar--${size}` : "", square ? "rb-avatar--square" : "", className].filter(Boolean).join(" ");
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials);
}
function AvatarGroup({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["rb-avatar-group", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  count,
  dot = false,
  max = 99,
  className = "",
  ...rest
}) {
  const classes = ["rb-badge", className].filter(Boolean).join(" ");
  const display = typeof count === "number" && count > max ? `${max}+` : count;
  const showCount = !dot && typeof count === "number" && count > 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), children, dot ? /*#__PURE__*/React.createElement("span", {
    className: "rb-badge__dot"
  }) : null, showCount ? /*#__PURE__*/React.createElement("span", {
    className: "rb-badge__count"
  }, display) : null);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  block = false,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  const classes = ["rb-btn", `rb-btn--${variant}`, size !== "md" ? `rb-btn--${size}` : "", block ? "rb-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classes,
    disabled: disabled
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "rb-btn__icon"
  }, icon) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "rb-btn__label"
  }, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "rb-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  size = "md",
  disabled = false,
  className = "",
  "aria-label": ariaLabel,
  ...rest
}) {
  const classes = ["rb-iconbtn", size === "sm" ? "rb-iconbtn--sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    disabled: disabled,
    "aria-label": ariaLabel
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  variant = "neutral",
  dot = false,
  className = "",
  ...rest
}) {
  const classes = ["rb-tag", `rb-tag--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "rb-tag__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "var(--blue-6)",
    d: "M8 0a8 8 0 100 16A8 8 0 008 0zm0 3.4a1 1 0 110 2 1 1 0 010-2zM9 12H7V7h2v5z"
  })),
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "var(--green-6)",
    d: "M8 0a8 8 0 100 16A8 8 0 008 0zm3.7 5.9l-4.2 4.6a.8.8 0 01-1.1 0L4.3 8.4a.8.8 0 011.2-1.1l1.4 1.5 3.6-4a.8.8 0 011.2 1.1z"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "var(--gold-6)",
    d: "M7.1 1.3L.5 13a1 1 0 00.9 1.5h13.2A1 1 0 0015.5 13L8.9 1.3a1 1 0 00-1.8 0zM7 5.5h2V10H7V5.5zm1 7.2a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2z"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "var(--red-6)",
    d: "M8 0a8 8 0 100 16A8 8 0 008 0zm1 11H7V9.5h2V11zm0-3H7V4h2v4z"
  }))
};
function Alert({
  variant = "info",
  title,
  children,
  icon,
  className = "",
  ...rest
}) {
  const classes = ["rb-alert", `rb-alert--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "rb-alert__icon"
  }, icon || ICONS[variant]), /*#__PURE__*/React.createElement("div", {
    className: "rb-alert__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "rb-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "rb-alert__desc"
  }, children) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  extra,
  hoverable = false,
  children,
  bodyStyle,
  className = "",
  ...rest
}) {
  const classes = ["rb-card", hoverable ? "rb-card--hoverable" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), title || extra ? /*#__PURE__*/React.createElement("div", {
    className: "rb-card__header",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, title), extra ? /*#__PURE__*/React.createElement("span", null, extra) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "rb-card__body",
    style: bodyStyle
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 11 11",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 5.5l3 3 6-6.5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  children,
  className = ""
}) {
  const classes = ["rb-check", checked ? "rb-check--checked" : "", disabled ? "rb-check--disabled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", {
    className: classes
  }, /*#__PURE__*/React.createElement("span", {
    className: "rb-check__box"
  }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), children ? /*#__PURE__*/React.createElement("span", null, children) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  error = false,
  disabled = false,
  className = "",
  ...rest
}) {
  const wrap = ["rb-input-wrap", error ? "rb-input-wrap--error" : "", disabled ? "rb-input-wrap--disabled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: wrap
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    className: "rb-input__affix"
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: "rb-input",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    className: "rb-input__affix"
  }, suffix) : null);
}

/** Labelled field wrapper: label + control + help/error text. */
function Field({
  label,
  required = false,
  help,
  error,
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["rb-field", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "rb-field__label"
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "rb-req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "rb-field__help rb-field__help--error"
  }, error) : help ? /*#__PURE__*/React.createElement("span", {
    className: "rb-field__help"
  }, help) : null);
}
Object.assign(__ds_scope, { Input, Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  onChange,
  disabled = false,
  name,
  value,
  children,
  className = ""
}) {
  const classes = ["rb-radio", checked ? "rb-radio--checked" : "", disabled ? "rb-radio--disabled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", {
    className: classes
  }, /*#__PURE__*/React.createElement("span", {
    className: "rb-radio__dot"
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), children ? /*#__PURE__*/React.createElement("span", null, children) : null);
}
function RadioGroup({
  value,
  onChange,
  options = [],
  name = "rb-radio",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)"
    },
    role: "radiogroup"
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    checked: value === o.value,
    onChange: onChange
  }, o.label)));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const Caret = () => /*#__PURE__*/React.createElement("svg", {
  className: "rb-select__caret",
  viewBox: "0 0 12 12",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2 4l4 4 4-4",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select…",
  className = ""
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const selected = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    },
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: ["rb-select", open ? "rb-select--open" : "", !selected ? "rb-select--placeholder" : ""].filter(Boolean).join(" "),
    onClick: () => setOpen(o => !o),
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("span", null, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement(Caret, null)), open ? /*#__PURE__*/React.createElement("ul", {
    className: "rb-select__menu",
    role: "listbox"
  }, options.map(o => /*#__PURE__*/React.createElement("li", {
    key: o.value,
    role: "option",
    "aria-selected": o.value === value,
    className: ["rb-select__option", o.value === value ? "rb-select__option--selected" : ""].filter(Boolean).join(" "),
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, o.label))) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  className = "",
  "aria-label": ariaLabel
}) {
  const classes = ["rb-switch", checked ? "rb-switch--on" : "", disabled ? "rb-switch--disabled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-label": ariaLabel,
    className: classes,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    className: "rb-switch__knob"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function Menu({
  items = [],
  value,
  onChange,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: ["rb-menu", className].filter(Boolean).join(" "),
    role: "menu"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.key,
    role: "menuitem",
    className: ["rb-menu__item", it.key === value ? "rb-menu__item--active" : ""].filter(Boolean).join(" "),
    onClick: () => onChange && onChange(it.key)
  }, it.icon ? /*#__PURE__*/React.createElement("span", {
    className: "rb-menu__icon"
  }, it.icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.trailing ? /*#__PURE__*/React.createElement("span", null, it.trailing) : null)));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  className = ""
}) {
  const [internal, setInternal] = React.useState(tabs[0] && tabs[0].key);
  const active = value !== undefined ? value : internal;
  const select = k => {
    setInternal(k);
    onChange && onChange(k);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["rb-tabs", className].filter(Boolean).join(" "),
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    role: "tab",
    "aria-selected": t.key === active,
    className: ["rb-tab", t.key === active ? "rb-tab--active" : ""].filter(Boolean).join(" "),
    onClick: () => select(t.key)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/icons.jsx
try { (() => {
// Robin UI-kit icons — FontAwesome-style glyphs as inline SVG (24px frame).
// Exposed on window.RobinKit so screen scripts can share them.
(function () {
  const Icon = (path, vb) => props => /*#__PURE__*/React.createElement("svg", {
    viewBox: vb || "0 0 16 16",
    width: props.size || 18,
    height: props.size || 18,
    fill: "currentColor",
    "aria-hidden": "true",
    style: props.style
  }, Array.isArray(path) ? path.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })) : /*#__PURE__*/React.createElement("path", {
    d: path
  }));
  const Icons = {
    Logo: props => /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 20.012 15.363",
      width: props.size || 24,
      height: (props.size || 24) * 0.768,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      transform: "translate(0.731 0)",
      d: "M 4.552 4.545 C 6.33 1.074 9.889 -1.164 14.006 0.638 C 14.017 0.643 15.547 1.341 16.579 2.992 C 16.848 3.423 17.26 3.746 17.74 3.912 L 18.033 4.013 L 19.281 4.445 C 19.067 4.631 18.854 4.817 18.64 5.003 C 18.263 5.33 17.973 5.714 17.755 6.165 C 17.63 6.423 17.504 6.715 17.457 7.001 C 17.412 7.269 17.379 7.542 17.327 7.811 C 17.206 8.444 17.036 9.068 16.801 9.67 C 15.577 12.246 13.26 14.281 10.281 15.047 C 6.353 16.057 2.37 14.576 0 11.592 C 0.622 11.283 1.334 10.811 1.981 10.108 C 2.216 10.288 2.457 10.462 2.707 10.625 C 4.215 11.612 5.815 12.133 7.298 12.133 C 7.584 12.133 7.868 12.114 8.144 12.075 C 10.242 11.775 12.008 10.204 12.343 8.341 C 12.721 6.239 11.281 3.971 9.257 3.474 C 7.807 2.969 6.521 3.595 5.276 4.202 C 5.037 4.318 4.794 4.437 4.552 4.545 Z M 14.333 3.082 C 14.001 3.082 13.732 3.351 13.731 3.683 C 13.731 4.015 14.001 4.286 14.333 4.286 C 14.665 4.286 14.936 4.015 14.936 3.683 C 14.935 3.351 14.665 3.082 14.333 3.082 Z",
      fill: props.color || "#550331",
      fillRule: "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(0 3.985)",
      d: "M 9.772 0.159 L 9.749 0.152 C 8.563 -0.272 7.456 0.267 6.283 0.839 C 5.783 1.082 5.265 1.335 4.751 1.496 C 3.192 1.986 1.516 1.822 0 1.631 C 0.724 3.364 2.058 4.926 3.788 6.059 C 5.447 7.145 7.208 7.621 8.745 7.402 C 10.557 7.144 12.077 5.811 12.36 4.233 C 12.673 2.497 11.439 0.554 9.772 0.159 Z",
      fill: props.color ? props.color : "#A81F6B",
      fillRule: "nonzero"
    })),
    Home: Icon("M8 1L1 6.8V14a1 1 0 001 1h3.5v-4h3v4H13a1 1 0 001-1V6.8L8 1z"),
    Desk: Icon("M1 3h14v2.2H1V3zm1.3 3.4h11.4l-.9 7.2a.6.6 0 01-.6.5h-1.1l-.4-3.4H5.3l-.4 3.4H3.8a.6.6 0 01-.6-.5L2.3 6.4z"),
    Room: Icon("M2 2h12a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zm1.5 2v8h5V4h-5zm6.5 3.2a1 1 0 100 2 1 1 0 000-2z"),
    Calendar: Icon("M3 2h1V1h2v1h4V1h2v1h1a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm-1 4v7h12V6H2z"),
    People: Icon("M5.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm5 0a2 2 0 100-4 2 2 0 000 4zM1 14c0-2.5 2-4 4.5-4S10 11.5 10 14H1zm10 0c0-1.7-.6-3-1.6-3.7A4 4 0 0115 14h-4z"),
    Chart: Icon("M2 2h1.5v12H2V2zm3.2 5H7v7H5.2V7zm3.3-3H10v10H8.5V4zM12 8.5h1.5V14H12V8.5zM1 14.5h14V16H1v-1.5z"),
    Search: Icon("M7 1a6 6 0 104.2 10.3l3.3 3.2 1-1-3.2-3.3A6 6 0 007 1zM3 7a4 4 0 118 0 4 4 0 01-8 0z"),
    Bell: Icon("M8 1a3 3 0 00-3 3c0 3.5-1.3 4.2-1.5 5h9C12.3 8.2 11 7.5 11 4a3 3 0 00-3-3zM6 13a2 2 0 004 0H6z"),
    Gear: Icon("M8 5.3A2.7 2.7 0 108 10.7 2.7 2.7 0 008 5.3zm6.4 3.4l-1.3-1a5.5 5.5 0 000-1.4l1.3-1a.5.5 0 00.1-.6l-1.3-2.2a.5.5 0 00-.6-.2l-1.5.6a5.4 5.4 0 00-1.2-.7L9.9.9a.5.5 0 00-.5-.4H6.6a.5.5 0 00-.5.4l-.3 1.6a5.4 5.4 0 00-1.2.7l-1.5-.6a.5.5 0 00-.6.2L1.2 5.1a.5.5 0 00.1.6l1.3 1a5.5 5.5 0 000 1.4l-1.3 1a.5.5 0 00-.1.6l1.3 2.2a.5.5 0 00.6.2l1.5-.6c.4.3.8.5 1.2.7l.3 1.6a.5.5 0 00.5.4h2.8a.5.5 0 00.5-.4l.3-1.6c.4-.2.8-.4 1.2-.7l1.5.6a.5.5 0 00.6-.2l1.3-2.2a.5.5 0 00-.1-.6z"),
    Plus: Icon("M7 2h2v5h5v2H9v5H7V9H2V7h5V2z"),
    Clock: Icon("M8 1a7 7 0 100 14A7 7 0 008 1zm.8 7.2l3 1.8-.8 1.3L7.2 9V4h1.6v4.2z"),
    Pin: Icon("M8 1a5 5 0 00-5 5c0 3.6 5 9 5 9s5-5.4 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"),
    Check: Icon("M6.2 11.4L2.6 7.8l1.3-1.3 2.3 2.3 5.6-5.6 1.3 1.3z"),
    Chevron: Icon("M5 3l5 5-5 5"),
    Ellipsis: ["M3 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z", "M8 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z", "M13 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"].length ? Icon(["M3 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z", "M8 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z", "M13 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"]) : null,
    Sliders: Icon("M2 4h7a2 2 0 003.8 0H14V3h-1.2a2 2 0 00-3.8 0H2v1zm12 4H7a2 2 0 00-3.8 0H2v1h1.2a2 2 0 003.8 0H14V8zM2 13h7a2 2 0 003.8 0H14v-1h-1.2a2 2 0 00-3.8 0H2v1z"),
    Coffee: Icon("M2 3h10v4a3 3 0 01-3 3H5a3 3 0 01-3-3V3zm10 1h2a1.5 1.5 0 010 3h-2V4zM1 12h12v1.5H1V12z")
  };
  window.RobinKit = Object.assign(window.RobinKit || {}, {
    Icons
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/screens.jsx
try { (() => {
// Robin web-app screens. Composes DS primitives + RobinKit icons.
(function () {
  const DS = window.RobinDesignSystem_2b6e7b;
  const {
    Icons
  } = window.RobinKit;
  const {
    Button,
    Tag,
    Card,
    Avatar,
    AvatarGroup,
    Switch,
    Tabs
  } = DS;
  const Stat = ({
    label,
    value,
    sub,
    tone
  }) => /*#__PURE__*/React.createElement("div", {
    className: "rb-card",
    style: {
      flex: 1,
      padding: "18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      color: "var(--text-primary)",
      lineHeight: 1
    }
  }, value), sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: tone || "var(--text-muted)"
    }
  }, sub) : null));

  // ── HOME ────────────────────────────────────────────────
  function Home() {
    const [auto, setAuto] = React.useState(true);
    const schedule = [{
      t: "9:30",
      title: "Desk · 04C",
      meta: "3rd floor · Design pod",
      tag: ["success", "Checked in"]
    }, {
      t: "11:00",
      title: "Focus room · 2C",
      meta: "Design sync · 5 people",
      tag: ["accent", "Starts soon"]
    }, {
      t: "14:00",
      title: "Roof deck",
      meta: "Team lunch · 12 going",
      tag: ["neutral", "RSVP"]
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "robin-h1",
      style: {
        margin: 0
      }
    }, "Good morning, Dana"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        color: "var(--text-muted)",
        fontSize: 15
      }
    }, "Thursday, June 11 \xB7 HQ \u2014 Boston")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: /*#__PURE__*/React.createElement(Icons.Plus, {
        size: 15
      })
    }, "Book a space")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Desks available",
      value: "14",
      sub: "of 32"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Rooms free now",
      value: "6",
      sub: "+2 at noon",
      tone: "var(--green-7)"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Teammates in",
      value: "9",
      sub: "today"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Visitors",
      value: "2",
      sub: "expected"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Your day",
      extra: /*#__PURE__*/React.createElement("a", {
        href: "#",
        style: {
          color: "var(--text-link)",
          fontSize: 14,
          textDecoration: "none"
        }
      }, "Full schedule")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, schedule.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 16,
        alignItems: "center",
        padding: "14px 0",
        borderTop: i ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 54,
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, s.t), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        color: "var(--text-primary)"
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, s.meta)), /*#__PURE__*/React.createElement(Tag, {
      variant: s.tag[0],
      dot: s.tag[0] !== "neutral"
    }, s.tag[1]))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Quick check-in"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 14,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Auto check-in near my desk"), /*#__PURE__*/React.createElement(Switch, {
      checked: auto,
      onChange: setAuto,
      "aria-label": "Auto check-in"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      block: true,
      style: {
        marginTop: 16
      },
      icon: /*#__PURE__*/React.createElement(Icons.Pin, {
        size: 15
      })
    }, "Find my desk")), /*#__PURE__*/React.createElement(Card, {
      title: "In the office"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(AvatarGroup, null, /*#__PURE__*/React.createElement(Avatar, {
      name: "Ana Ruiz"
    }), /*#__PURE__*/React.createElement(Avatar, {
      name: "Theo Kim"
    }), /*#__PURE__*/React.createElement(Avatar, {
      name: "Mara P"
    }), /*#__PURE__*/React.createElement(Avatar, {
      name: "Lou D"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, "+5 teammates today"))))));
  }

  // ── DESKS ───────────────────────────────────────────────
  function Desks() {
    const [floor, setFloor] = React.useState("3");
    const [sel, setSel] = React.useState(7);
    // desk states: 0 free, 1 booked, 2 mine, 3 unavailable
    const layout = [0, 0, 1, 1, 0, 2, 0, 0, 1, 0, 0, 3, 0, 1, 0, 0, 0, 1, 0, 0, 3, 0, 1, 0, 0, 0, 0, 1, 0, 0];
    const colors = ["var(--green-5)", "var(--gray-30)", "var(--magenta-6)", "var(--gray-10)"];
    const labels = ["Available", "Booked", "Your desk", "Unavailable"];
    const desk = {
      id: "DESK-0" + (sel + 1) + "C",
      floor: "3rd floor",
      zone: "Design pod",
      near: ["Ana Ruiz", "Theo Kim"]
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "robin-h2",
      style: {
        margin: 0
      }
    }, "Desks"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icons.Sliders, {
        size: 14
      })
    }, "Filters"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icons.Calendar, {
        size: 14
      })
    }, "Today"))), /*#__PURE__*/React.createElement(Tabs, {
      value: floor,
      onChange: setFloor,
      tabs: [{
        key: "3",
        label: "3rd · Design"
      }, {
        key: "4",
        label: "4th · Engineering"
      }, {
        key: "5",
        label: "5th · Roof deck"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.7fr 1fr",
        gap: 18,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      bodyStyle: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        marginBottom: 18,
        flexWrap: "wrap"
      }
    }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: 4,
        background: colors[i]
      }
    }), " ", l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 12
      }
    }, layout.map((st, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => st !== 3 && setSel(i),
      disabled: st === 3,
      title: "Desk " + (i + 1),
      style: {
        aspectRatio: "1",
        borderRadius: 8,
        border: sel === i ? "2px solid var(--magenta-7)" : "2px solid transparent",
        background: colors[st],
        cursor: st === 3 ? "not-allowed" : "pointer",
        padding: 0,
        boxShadow: sel === i ? "0 0 0 3px var(--magenta-2)" : "none",
        transition: "box-shadow .15s, border-color .15s"
      }
    })))), /*#__PURE__*/React.createElement(Card, {
      title: desk.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      variant: "success",
      dot: true
    }, "Available"), /*#__PURE__*/React.createElement(Tag, {
      variant: "neutral"
    }, "Sit / stand")), /*#__PURE__*/React.createElement(Row, {
      icon: /*#__PURE__*/React.createElement(Icons.Pin, {
        size: 16
      }),
      label: desk.floor + " · " + desk.zone
    }), /*#__PURE__*/React.createElement(Row, {
      icon: /*#__PURE__*/React.createElement(Icons.Clock, {
        size: 16
      }),
      label: "Free all day"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        marginBottom: 8
      }
    }, "Nearby today"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(AvatarGroup, null, /*#__PURE__*/React.createElement(Avatar, {
      name: desk.near[0],
      size: "sm"
    }), /*#__PURE__*/React.createElement(Avatar, {
      name: desk.near[1],
      size: "sm"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-body)"
      }
    }, desk.near.join(", ")))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      icon: /*#__PURE__*/React.createElement(Icons.Check, {
        size: 15
      })
    }, "Book this desk")))));
  }
  const Row = ({
    icon,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--text-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--icon-muted)",
      display: "inline-flex"
    }
  }, icon), label);

  // ── ROOMS ───────────────────────────────────────────────
  function Rooms() {
    const rooms = [{
      name: "Focus room · 2C",
      seats: 5,
      status: ["success", "Free now"],
      until: "Open until 2:00 PM",
      amen: ["Display", "Whiteboard"]
    }, {
      name: "Boardroom",
      seats: 14,
      status: ["warning", "Busy"],
      until: "Free at 11:30 AM",
      amen: ["Display", "Video", "Phone"]
    }, {
      name: "Huddle · 4A",
      seats: 3,
      status: ["success", "Free now"],
      until: "Open until 5:00 PM",
      amen: ["Display"]
    }, {
      name: "Roof deck",
      seats: 40,
      status: ["danger", "Booked"],
      until: "Free tomorrow",
      amen: ["Projector", "Catering"]
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "robin-h2",
      style: {
        margin: 0
      }
    }, "Rooms"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icons.Plus, {
        size: 14
      })
    }, "New meeting")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, rooms.map((r, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      hoverable: true,
      bodyStyle: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        color: "var(--text-primary)"
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        marginTop: 3
      }
    }, "Seats ", r.seats, " \xB7 ", r.until)), /*#__PURE__*/React.createElement(Tag, {
      variant: r.status[0],
      dot: true
    }, r.status[1])), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, r.amen.map(a => /*#__PURE__*/React.createElement(Tag, {
      key: a,
      variant: "neutral"
    }, a))), /*#__PURE__*/React.createElement(Button, {
      variant: r.status[0] === "danger" ? "default" : "primary",
      block: true,
      disabled: r.status[0] === "danger"
    }, r.status[0] === "danger" ? "Join waitlist" : "Reserve"))))));
  }
  window.RobinKit = Object.assign(window.RobinKit || {}, {
    Screens: {
      Home,
      Desks,
      Rooms
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/shell.jsx
try { (() => {
// Robin web-app shell: login → app frame (sidebar + topbar + screen router).
(function () {
  const DS = window.RobinDesignSystem_2b6e7b;
  const {
    Icons,
    Screens
  } = window.RobinKit;
  const {
    Button,
    Menu,
    Avatar,
    Badge,
    Input,
    Field
  } = DS;
  function Login({
    onEnter
  }) {
    const [email, setEmail] = React.useState("dana@acme.com");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100%",
        display: "grid",
        placeItems: "center",
        background: "var(--surface-page)",
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rb-card",
      style: {
        width: 380,
        padding: 36,
        boxShadow: "var(--shadow-md)",
        border: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(Icons.Logo, {
      size: 30
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 26,
        letterSpacing: "-0.02em",
        color: "var(--robin-plum)"
      }
    }, "Robin")), /*#__PURE__*/React.createElement("h1", {
      className: "robin-h3",
      style: {
        margin: "0 0 4px"
      }
    }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 24px",
        color: "var(--text-muted)",
        fontSize: 14
      }
    }, "Sign in to book desks and rooms."), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        onEnter();
      },
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Work email"
    }, /*#__PURE__*/React.createElement(Input, {
      value: email,
      onChange: e => setEmail(e.target.value),
      placeholder: "you@company.com"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Password"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "password",
      defaultValue: "password"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      type: "submit"
    }, "Sign in")), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center",
        margin: "20px 0 0",
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "Use ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: "var(--text-link)",
        textDecoration: "none"
      }
    }, "single sign-on"), " instead")));
  }
  function Sidebar({
    page,
    setPage
  }) {
    const items = [{
      key: "home",
      label: "Home",
      icon: /*#__PURE__*/React.createElement(Icons.Home, null)
    }, {
      key: "desks",
      label: "Desks",
      icon: /*#__PURE__*/React.createElement(Icons.Desk, null)
    }, {
      key: "rooms",
      label: "Rooms",
      icon: /*#__PURE__*/React.createElement(Icons.Room, null)
    }, {
      key: "schedule",
      label: "Schedule",
      icon: /*#__PURE__*/React.createElement(Icons.Calendar, null)
    }, {
      key: "people",
      label: "People",
      icon: /*#__PURE__*/React.createElement(Icons.People, null)
    }, {
      key: "analytics",
      label: "Analytics",
      icon: /*#__PURE__*/React.createElement(Icons.Chart, null)
    }];
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 232,
        flex: "none",
        background: "var(--surface-card)",
        borderRight: "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "20px 20px 16px"
      }
    }, /*#__PURE__*/React.createElement(Icons.Logo, {
      size: 26
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: "-0.02em",
        color: "var(--robin-plum)"
      }
    }, "Robin")), /*#__PURE__*/React.createElement(Menu, {
      value: page,
      onChange: setPage,
      items: items
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        padding: 12,
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 10px"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Dana Lee"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: "var(--text-primary)"
      }
    }, "Dana Lee"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, "Design")))));
  }
  function TopBar({
    onLogout
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 60,
        flex: "none",
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rb-input-wrap",
      style: {
        maxWidth: 360,
        height: 36
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rb-input__affix",
      style: {
        color: "var(--icon-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icons.Search, {
      size: 16
    })), /*#__PURE__*/React.createElement("input", {
      className: "rb-input",
      placeholder: "Search desks, rooms, people\u2026"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "rb-iconbtn",
      "aria-label": "Notifications"
    }, /*#__PURE__*/React.createElement(Badge, {
      dot: true
    }, /*#__PURE__*/React.createElement(Icons.Bell, null))), /*#__PURE__*/React.createElement("button", {
      className: "rb-iconbtn",
      "aria-label": "Settings",
      onClick: onLogout
    }, /*#__PURE__*/React.createElement(Icons.Gear, null))));
  }
  function App() {
    const [authed, setAuthed] = React.useState(false);
    const [page, setPage] = React.useState("home");
    if (!authed) return /*#__PURE__*/React.createElement(Login, {
      onEnter: () => setAuthed(true)
    });
    const Screen = Screens[page === "desks" ? "Desks" : page === "rooms" ? "Rooms" : "Home"];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: "100%",
        minHeight: "100vh",
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement(Sidebar, {
      page: page,
      setPage: setPage
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      onLogout: () => setAuthed(false)
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflow: "auto",
        padding: 28
      }
    }, /*#__PURE__*/React.createElement(Screen, null))));
  }
  window.RobinKit = Object.assign(window.RobinKit || {}, {
    App
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
