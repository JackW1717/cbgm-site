/* @ds-bundle: {"format":4,"namespace":"CBGMDesignSystem_e5adbb","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"FeatureItem","sourcePath":"components/marketing/FeatureItem.jsx"},{"name":"SectionHeader","sourcePath":"components/marketing/SectionHeader.jsx"},{"name":"SiteFooter","sourcePath":"components/marketing/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/marketing/SiteHeader.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"DataGrid","sourcePath":"components/terminal/DataGrid.jsx"},{"name":"DonutChart","sourcePath":"components/terminal/DonutChart.jsx"},{"name":"MoneyCell","sourcePath":"components/terminal/MoneyCell.jsx"},{"name":"Panel","sourcePath":"components/terminal/Panel.jsx"},{"name":"RateCell","sourcePath":"components/terminal/RateCell.jsx"},{"name":"RateHistoryChart","sourcePath":"components/terminal/RateHistoryChart.jsx"},{"name":"StatusCell","sourcePath":"components/terminal/StatusCell.jsx"},{"name":"TerminalButton","sourcePath":"components/terminal/TerminalButton.jsx"},{"name":"TerminalChrome","sourcePath":"components/terminal/TerminalChrome.jsx"},{"name":"TerminalInput","sourcePath":"components/terminal/TerminalInput.jsx"},{"name":"TerminalSelect","sourcePath":"components/terminal/TerminalSelect.jsx"},{"name":"TerminalToolbar","sourcePath":"components/terminal/TerminalToolbar.jsx"},{"name":"TotalsBar","sourcePath":"components/terminal/TotalsBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5ae914f80051","components/core/Button.jsx":"c6b2e079b9fa","components/core/Card.jsx":"cdd73feb6269","components/core/Eyebrow.jsx":"f0dc89af246b","components/core/Logo.jsx":"395f7007ad2d","components/marketing/FeatureItem.jsx":"aaeba4fe920b","components/marketing/SectionHeader.jsx":"0daf9e7ef737","components/marketing/SiteFooter.jsx":"3abc93dc9e55","components/marketing/SiteHeader.jsx":"3d11dc2f1a65","components/marketing/StatBlock.jsx":"685898354579","components/terminal/DataGrid.jsx":"623a1c884bd3","components/terminal/DonutChart.jsx":"5f2a4aa7d5a1","components/terminal/MoneyCell.jsx":"fc48f539aef1","components/terminal/Panel.jsx":"16470f74a7a7","components/terminal/RateCell.jsx":"ac9342a1c2e0","components/terminal/RateHistoryChart.jsx":"2f2d89c11ac4","components/terminal/StatusCell.jsx":"2592e5054ae4","components/terminal/TerminalButton.jsx":"815bbcf4e00b","components/terminal/TerminalChrome.jsx":"d2e81b0da0ff","components/terminal/TerminalInput.jsx":"375d8cf8d06a","components/terminal/TerminalSelect.jsx":"32a1b7b262c9","components/terminal/TerminalToolbar.jsx":"83b55e0efa19","components/terminal/TotalsBar.jsx":"26f6e8f708c3","slides/slide-shell.jsx":"273c42c86878","ui_kits/platform/BidSummaryScreen.jsx":"022420975b0f","ui_kits/platform/BlotterScreen.jsx":"0ac1ef1403e4","ui_kits/platform/MarketActivityScreen.jsx":"698b132e63c3","ui_kits/platform/SecondaryMarketScreen.jsx":"b14eb7916eae","ui_kits/platform/data.js":"2d4da95b6d2c","ui_kits/website/ContactScreen.jsx":"4b5c4b548b7b","ui_kits/website/HomeScreen.jsx":"b37406186173","ui_kits/website/PlatformScreen.jsx":"7f59f4313cc3"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldBox","sourcePath":"components/terminal/TerminalInput.jsx"}]} */

(() => {

const __ds_ns = (window.CBGMDesignSystem_e5adbb = window.CBGMDesignSystem_e5adbb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: 'var(--cbgm-grey-100)',
    fg: 'var(--cbgm-grey-600)',
    bd: 'var(--cbgm-grey-200)'
  },
  brand: {
    bg: 'var(--cbgm-navy-100)',
    fg: 'var(--cbgm-navy-600)',
    bd: '#D4DEEB'
  },
  accent: {
    bg: 'var(--cbgm-green-100)',
    fg: 'var(--cbgm-green-700)',
    bd: '#C9EBCF'
  },
  buy: {
    bg: 'var(--data-buy-bg)',
    fg: 'var(--data-buy)',
    bd: 'transparent'
  },
  sell: {
    bg: 'var(--data-sell-bg)',
    fg: 'var(--data-sell)',
    bd: 'transparent'
  },
  roll: {
    bg: 'var(--data-roll-bg)',
    fg: 'var(--data-roll)',
    bd: 'transparent'
  },
  warning: {
    bg: 'rgba(217,148,74,.16)',
    fg: '#A96A22',
    bd: 'transparent'
  },
  locked: {
    bg: 'rgba(201,83,106,.14)',
    fg: 'var(--data-locked)',
    bd: 'transparent'
  }
};
function Badge({
  tone = 'neutral',
  shape = 'rect',
  size = 'md',
  children,
  style,
  ...rest
}) {
  const t = tones[tone];
  const sz = size === 'sm' ? {
    fontSize: '10px',
    padding: '1px 5px'
  } : {
    fontSize: '11px',
    padding: '2px 8px'
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-2)',
      background: t.bg,
      color: t.fg,
      border: '1px solid ' + t.bd,
      ...sz,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--fw-semibold)',
  letterSpacing: '.01em',
  borderRadius: 'var(--radius-3)',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-4)',
  transition: 'var(--transition-control)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: '12px',
    padding: '6px 12px'
  },
  md: {
    fontSize: '14px',
    padding: '9px 18px'
  },
  lg: {
    fontSize: '15px',
    padding: '13px 26px'
  }
};
const variants = {
  primary: {
    background: 'var(--cbgm-navy-600)',
    color: 'var(--cbgm-white)',
    borderColor: 'var(--cbgm-navy-600)'
  },
  accent: {
    background: 'var(--cbgm-green-500)',
    color: 'var(--cbgm-white)',
    borderColor: 'var(--cbgm-green-500)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--cbgm-navy-600)',
    borderColor: 'var(--cbgm-navy-600)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--cbgm-navy-600)',
    borderColor: 'transparent'
  },
  inverse: {
    background: 'var(--cbgm-white)',
    color: 'var(--cbgm-navy-800)',
    borderColor: 'var(--cbgm-white)'
  },
  'inverse-outline': {
    background: 'transparent',
    color: 'var(--cbgm-white)',
    borderColor: 'rgba(255,255,255,.5)'
  }
};
const hovers = {
  primary: {
    background: 'var(--cbgm-navy-700)',
    borderColor: 'var(--cbgm-navy-700)'
  },
  accent: {
    background: 'var(--cbgm-green-600)',
    borderColor: 'var(--cbgm-green-600)'
  },
  secondary: {
    background: 'var(--cbgm-navy-100)'
  },
  ghost: {
    background: 'var(--cbgm-grey-100)'
  },
  inverse: {
    background: 'var(--cbgm-grey-100)',
    borderColor: 'var(--cbgm-grey-100)'
  },
  'inverse-outline': {
    background: 'rgba(255,255,255,.12)',
    borderColor: 'var(--cbgm-white)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  href,
  iconLeft,
  iconRight,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? .42 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    transform: press ? 'translateY(1px)' : 'none',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    disabled: href ? undefined : disabled,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    ...rest
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  tone = 'default',
  elevation = 1,
  accentTop = false,
  padding = 'var(--space-8)',
  children,
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    subtle: {
      background: 'var(--surface-subtle)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    navy: {
      background: 'var(--cbgm-navy-800)',
      color: 'var(--text-inverse-muted)',
      border: '1px solid rgba(255,255,255,.10)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)'
    }
  };
  const shadows = ['var(--shadow-none)', 'var(--shadow-1)', 'var(--shadow-2)', 'var(--shadow-3)'];
  return React.createElement('div', {
    style: {
      borderRadius: 'var(--radius-5)',
      padding,
      boxShadow: shadows[elevation],
      position: 'relative',
      overflow: 'hidden',
      ...tones[tone],
      ...style
    },
    ...rest
  }, accentTop ? React.createElement('div', {
    key: 'a',
    style: {
      position: 'absolute',
      insetInline: 0,
      top: 0,
      height: 3,
      background: 'var(--cbgm-gradient-rule)'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'default',
  style,
  ...rest
}) {
  const colors = {
    default: 'var(--cbgm-slate-800)',
    muted: 'var(--cbgm-slate-600)',
    brand: 'var(--cbgm-navy-600)',
    accent: 'var(--cbgm-green-600)',
    inverse: 'rgba(255,255,255,.78)'
  };
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.default,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  horizontal: 'assets/logo-horizontal.png',
  'horizontal-white': 'assets/logo-horizontal-white.png',
  mark: 'assets/logo-mark.png'
};
function Logo({
  variant = 'horizontal',
  height = 32,
  base = '',
  alt = 'ClearBid Global Markets',
  style,
  ...rest
}) {
  const src = (base ? base.replace(/\/$/, '') + '/' : '') + SRC[variant];
  return React.createElement('img', {
    src,
    alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureItem.jsx
try { (() => {
function FeatureItem({
  title,
  children,
  meta,
  rule = true,
  tone = 'default',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return React.createElement('div', {
    style: {
      ...style
    },
    ...rest
  }, rule ? React.createElement('div', {
    key: 'r',
    style: {
      height: 2,
      width: 36,
      background: 'var(--cbgm-gradient-rule)',
      marginBottom: 'var(--space-6)'
    }
  }) : null, React.createElement('div', {
    key: 'h',
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, React.createElement('h3', {
    key: 't',
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      lineHeight: 'var(--lh-h4)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-heading)',
      color: inv ? 'var(--cbgm-white)' : 'var(--text-heading)'
    }
  }, title), meta), React.createElement('div', {
    key: 'b',
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-light)',
      lineHeight: 'var(--lh-body)',
      color: inv ? 'var(--text-inverse-muted)' : 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'default',
  maxWidth = 760,
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return React.createElement('header', {
    style: {
      textAlign: align,
      maxWidth,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    },
    ...rest
  }, eyebrow ? React.createElement('div', {
    key: 'e',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: inv ? 'rgba(255,255,255,.78)' : 'var(--cbgm-slate-800)'
    }
  }, eyebrow) : null, React.createElement('h2', {
    key: 't',
    style: {
      margin: 'var(--space-5) 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      lineHeight: 'var(--lh-h1)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-display)',
      color: inv ? 'var(--cbgm-white)' : 'var(--cbgm-slate-600)'
    }
  }, title), intro ? React.createElement('p', {
    key: 'i',
    style: {
      margin: 'var(--space-6) 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      fontWeight: 'var(--fw-light)',
      color: inv ? 'var(--text-inverse-muted)' : 'var(--text-body)'
    }
  }, intro) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteFooter.jsx
try { (() => {
function SiteFooter({
  columns = [],
  legal,
  base = '',
  style,
  ...rest
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--cbgm-navy-900)',
      color: 'var(--text-inverse-muted)',
      padding: 'var(--space-12) var(--layout-gutter) var(--space-9)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    key: 'g',
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(' + Math.max(columns.length, 1) + ',1fr)',
      gap: 'var(--space-10)'
    }
  }, React.createElement('div', {
    key: 'b'
  }, React.createElement(__ds_scope.Logo, {
    variant: 'horizontal-white',
    height: 26,
    base
  }), React.createElement('p', {
    style: {
      margin: 'var(--space-6) 0 0',
      maxWidth: 300,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'rgba(255,255,255,.62)'
    }
  }, 'Digital infrastructure for the issuance, price discovery, trading and lifecycle management of debt and credit-market securities.')), columns.map(col => React.createElement('div', {
    key: col.title
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)'
    }
  }, col.title), React.createElement('ul', {
    style: {
      listStyle: 'none',
      margin: 'var(--space-6) 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, col.links.map(l => React.createElement('li', {
    key: l
  }, React.createElement('a', {
    href: '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'rgba(255,255,255,.8)',
      textDecoration: 'none'
    }
  }, l))))))), React.createElement('div', {
    key: 'l',
    style: {
      maxWidth: 'var(--layout-max)',
      margin: 'var(--space-11) auto 0',
      paddingTop: 'var(--space-7)',
      borderTop: '1px solid rgba(255,255,255,.12)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: 'rgba(255,255,255,.5)'
    }
  }, legal));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteHeader.jsx
try { (() => {
function SiteHeader({
  items = [],
  active,
  onNavigate,
  cta = 'Request access',
  onCta,
  base = '',
  tone = 'light',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-10)',
      height: 72,
      paddingInline: 'var(--layout-gutter)',
      background: inv ? 'transparent' : 'var(--surface-page)',
      borderBottom: '1px solid ' + (inv ? 'rgba(255,255,255,.14)' : 'var(--border-subtle)'),
      position: 'relative',
      zIndex: 5,
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Logo, {
    key: 'l',
    variant: inv ? 'horizontal-white' : 'horizontal',
    height: 26,
    base
  }), React.createElement('nav', {
    key: 'n',
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginInlineStart: 'var(--space-6)'
    }
  }, items.map(it => React.createElement('a', {
    key: it,
    href: '#' + it,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: active === it ? 'var(--fw-semibold)' : 'var(--fw-medium)',
      textDecoration: 'none',
      cursor: 'pointer',
      color: active === it ? inv ? 'var(--cbgm-white)' : 'var(--cbgm-navy-600)' : inv ? 'rgba(255,255,255,.74)' : 'var(--cbgm-grey-600)',
      borderBottom: '2px solid ' + (active === it ? 'var(--cbgm-green-500)' : 'transparent'),
      paddingBottom: 2,
      transition: 'var(--transition-control)'
    }
  }, it))), React.createElement('div', {
    key: 's',
    style: {
      flex: 1
    }
  }), React.createElement(__ds_scope.Button, {
    key: 'c',
    variant: inv ? 'inverse-outline' : 'primary',
    size: 'sm',
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  description,
  align = 'left',
  tone = 'brand',
  style,
  ...rest
}) {
  const c = {
    brand: 'var(--cbgm-slate-800)',
    navy: 'var(--cbgm-navy-600)',
    accent: 'var(--cbgm-green-600)',
    inverse: 'var(--cbgm-white)'
  }[tone];
  return React.createElement('div', {
    style: {
      textAlign: align,
      ...style
    },
    ...rest
  }, React.createElement('div', {
    key: 'v',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-metric)',
      lineHeight: 'var(--lh-metric)',
      fontWeight: 'var(--fw-metric)',
      letterSpacing: 'var(--ls-display)',
      color: c
    }
  }, value), label ? React.createElement('div', {
    key: 'l',
    style: {
      marginTop: 'var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontSize: '21px',
      fontWeight: 'var(--fw-medium)',
      color: tone === 'inverse' ? 'var(--cbgm-white)' : 'var(--text-heading)'
    }
  }, label) : null, description ? React.createElement('p', {
    key: 'd',
    style: {
      margin: 'var(--space-3) 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body-sm)',
      color: tone === 'inverse' ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/terminal/DataGrid.jsx
try { (() => {
function DataGrid({
  columns = [],
  rows = [],
  selectable = false,
  selected = [],
  onSelect,
  onRowClick,
  maxHeight,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(-1);
  const th = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    background: 'var(--term-bg-page)',
    color: 'var(--term-text-dim)',
    fontSize: 'var(--fs-data-sm)',
    fontWeight: 'var(--fw-medium)',
    textAlign: 'left',
    padding: '3px var(--cell-px)',
    borderBottom: '1px solid var(--term-border)',
    borderLeft: '1px solid var(--term-grid-line)',
    whiteSpace: 'nowrap'
  };
  return React.createElement('div', {
    style: {
      overflow: 'auto',
      maxHeight,
      background: 'var(--term-panel)',
      ...style
    },
    ...rest
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--fs-data)',
      color: 'var(--term-text)'
    }
  }, React.createElement('thead', {
    key: 'h'
  }, React.createElement('tr', null, selectable ? React.createElement('th', {
    key: 'c',
    style: {
      ...th,
      width: 22,
      borderLeft: 'none'
    }
  }, '') : null, columns.map((c, i) => React.createElement('th', {
    key: c.key,
    style: {
      ...th,
      textAlign: c.align || 'left',
      width: c.width,
      borderLeft: i === 0 && !selectable ? 'none' : th.borderLeft
    }
  }, c.label)))), React.createElement('tbody', {
    key: 'b'
  }, rows.map((r, ri) => {
    const isSel = selected.includes(ri);
    return React.createElement('tr', {
      key: ri,
      onMouseEnter: () => setHover(ri),
      onMouseLeave: () => setHover(-1),
      onClick: () => onRowClick && onRowClick(r, ri),
      style: {
        background: isSel ? 'var(--term-row-selected)' : hover === ri ? 'var(--term-row-hover)' : ri % 2 ? 'var(--term-row-alt)' : 'var(--term-row)',
        height: 'var(--row-h)',
        cursor: onRowClick ? 'pointer' : 'default'
      }
    }, selectable ? React.createElement('td', {
      key: 'c',
      style: {
        padding: '0 var(--cell-px)',
        borderLeft: 'none'
      }
    }, React.createElement('input', {
      type: 'checkbox',
      checked: isSel,
      onChange: () => onSelect && onSelect(ri),
      style: {
        width: 11,
        height: 11,
        accentColor: 'var(--term-control)'
      }
    })) : null, columns.map((c, i) => React.createElement('td', {
      key: c.key,
      style: {
        padding: 'var(--cell-py) var(--cell-px)',
        textAlign: c.align || 'left',
        whiteSpace: 'nowrap',
        borderLeft: i === 0 && !selectable ? 'none' : '1px solid var(--term-grid-line)',
        lineHeight: 'var(--lh-data-row)'
      }
    }, c.render ? c.render(r[c.key], r) : r[c.key])));
  }))));
}
Object.assign(__ds_scope, { DataGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/DataGrid.jsx", error: String((e && e.message) || e) }); }

// components/terminal/DonutChart.jsx
try { (() => {
function DonutChart({
  segments = [],
  size = 140,
  thickness = 26,
  centerLabel,
  centerValue,
  style
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2,
    C = 2 * Math.PI * r;
  let off = 0;
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, React.createElement('svg', {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, segments.map(s => {
    const len = C * (s.value / total);
    const el = React.createElement('circle', {
      key: s.label,
      cx: size / 2,
      cy: size / 2,
      r,
      fill: 'none',
      stroke: s.color,
      strokeWidth: thickness,
      strokeDasharray: len + ' ' + (C - len),
      strokeDashoffset: -off
    });
    off += len;
    return el;
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-data)',
      textAlign: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)'
    }
  }, centerLabel), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-data-lg)',
      color: 'var(--term-heading)'
    }
  }, centerValue)));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/terminal/MoneyCell.jsx
try { (() => {
function MoneyCell({
  value,
  side = 'buy',
  bar = true,
  style
}) {
  const c = side === 'buy' ? 'var(--data-buy)' : side === 'sell' ? 'var(--data-sell)' : 'var(--data-roll)';
  const bg = side === 'buy' ? 'var(--data-buy-bg)' : side === 'sell' ? 'var(--data-sell-bg)' : 'var(--data-roll-bg)';
  return React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      background: bg,
      padding: '1px 5px',
      borderLeft: bar ? '3px solid ' + c : 'none',
      color: c,
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, value);
}
Object.assign(__ds_scope, { MoneyCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/MoneyCell.jsx", error: String((e && e.message) || e) }); }

// components/terminal/Panel.jsx
try { (() => {
function Panel({
  title,
  actions,
  dense = false,
  children,
  style,
  bodyStyle,
  ...rest
}) {
  return React.createElement('section', {
    style: {
      background: 'var(--term-panel)',
      border: '1px solid var(--term-border)',
      borderRadius: 'var(--radius-1)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      overflow: 'hidden',
      ...style
    },
    ...rest
  }, title ? React.createElement('header', {
    key: 'h',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      height: 20,
      paddingInline: 'var(--space-4)',
      background: 'var(--term-panel-header)',
      borderBottom: '1px solid var(--term-border)',
      flex: '0 0 auto'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--fs-data-lg)',
      color: 'var(--term-heading)',
      letterSpacing: '.01em'
    }
  }, title), React.createElement('span', {
    style: {
      flex: 1
    }
  }), actions) : null, React.createElement('div', {
    key: 'b',
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto',
      padding: dense ? 0 : 'var(--space-4)',
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/Panel.jsx", error: String((e && e.message) || e) }); }

// components/terminal/RateCell.jsx
try { (() => {
function RateCell({
  value,
  direction,
  link = true,
  style
}) {
  const arrow = direction === 'up' ? '\u2191' : direction === 'down' ? '\u2193' : direction === 'flat' ? '\u2014' : null;
  const c = direction === 'up' ? 'var(--data-buy)' : direction === 'down' ? 'var(--data-sell)' : 'var(--term-text-dim)';
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      justifyContent: 'flex-end',
      ...style
    }
  }, React.createElement('span', {
    style: {
      color: link ? 'var(--term-link)' : 'var(--term-text)',
      textDecoration: link ? 'underline' : 'none'
    }
  }, value), arrow ? React.createElement('span', {
    style: {
      color: c,
      fontSize: 'var(--fs-data-sm)'
    }
  }, arrow) : null);
}
Object.assign(__ds_scope, { RateCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/RateCell.jsx", error: String((e && e.message) || e) }); }

// components/terminal/RateHistoryChart.jsx
try { (() => {
function RateHistoryChart({
  series = [],
  width = 460,
  height = 150,
  style
}) {
  const all = series.flatMap(s => s.points);
  const min = Math.min(...all) * 0.92,
    max = Math.max(...all) * 1.05;
  const px = (i, n) => 28 + i / Math.max(n - 1, 1) * (width - 44);
  const py = v => height - 22 - (v - min) / (max - min || 1) * (height - 40);
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-data)',
      ...style
    }
  }, React.createElement('svg', {
    width,
    height,
    style: {
      display: 'block'
    }
  }, [0, .5, 1].map(t => React.createElement('line', {
    key: t,
    x1: 28,
    x2: width - 16,
    y1: 22 + t * (height - 44),
    y2: 22 + t * (height - 44),
    stroke: 'var(--term-grid-line)',
    strokeWidth: 1
  })), series.map(s => React.createElement('polyline', {
    key: s.label,
    fill: 'none',
    stroke: s.color,
    strokeWidth: 1.4,
    points: s.points.map((v, i) => px(i, s.points.length) + ',' + py(v)).join(' ')
  })), series.map(s => s.points.map((v, i) => React.createElement('circle', {
    key: s.label + i,
    cx: px(i, s.points.length),
    cy: py(v),
    r: 2.2,
    fill: s.color
  }))), [max, (max + min) / 2, min].map((v, i) => React.createElement('text', {
    key: i,
    x: 4,
    y: 26 + i * (height - 44) / 2,
    fill: 'var(--term-text-faint)',
    fontSize: 9
  }, v.toFixed(0) + '%'))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      justifyContent: 'center',
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)'
    }
  }, series.map(s => React.createElement('span', {
    key: s.label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement('span', {
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-circle)',
      background: s.color,
      display: 'inline-block'
    }
  }), s.label))));
}
Object.assign(__ds_scope, { RateHistoryChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/RateHistoryChart.jsx", error: String((e && e.message) || e) }); }

// components/terminal/StatusCell.jsx
try { (() => {
const map = {
  Complete: {
    bg: '#2E6B3C',
    fg: '#DFF3E4'
  },
  Incomplete: {
    bg: '#6B2A38',
    fg: '#F7DFE5'
  },
  Locked: {
    bg: 'transparent',
    fg: 'var(--data-locked)'
  },
  Pending: {
    bg: 'transparent',
    fg: 'var(--data-missing)'
  }
};
function StatusCell({
  status,
  style
}) {
  const t = map[status] || {
    bg: 'transparent',
    fg: 'var(--term-text-dim)'
  };
  return React.createElement('span', {
    style: {
      display: 'inline-block',
      minWidth: t.bg === 'transparent' ? 0 : 64,
      textAlign: 'center',
      background: t.bg,
      color: t.fg,
      padding: '1px 8px',
      fontSize: 'var(--fs-data)',
      fontFamily: 'var(--font-data)',
      ...style
    }
  }, status);
}
Object.assign(__ds_scope, { StatusCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/StatusCell.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalButton.jsx
try { (() => {
const tones = {
  control: {
    background: 'var(--term-control)',
    color: '#EAF1F7',
    border: '1px solid var(--term-control)'
  },
  quiet: {
    background: 'var(--term-panel-header)',
    color: 'var(--term-text)',
    border: '1px solid var(--term-border)'
  },
  positive: {
    background: '#2E6B3C',
    color: '#E6F5E9',
    border: '1px solid #37804A'
  },
  negative: {
    background: '#6B2A38',
    color: '#F7E7EB',
    border: '1px solid #83384A'
  }
};
function TerminalButton({
  tone = 'control',
  iconLeft,
  children,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return React.createElement('button', {
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--fs-data-lg)',
      height: 24,
      padding: '0 12px',
      borderRadius: 'var(--radius-1)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      transition: 'var(--transition-control)',
      filter: h ? 'brightness(1.18)' : 'none',
      ...tones[tone],
      ...style
    },
    ...rest
  }, iconLeft, children);
}
Object.assign(__ds_scope, { TerminalButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalButton.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalChrome.jsx
try { (() => {
function TerminalChrome({
  items = [],
  active,
  onNavigate,
  time = '03:13:52 PM WAT',
  account = 'ABC CO',
  base = '',
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--term-bg-page)',
      color: 'var(--term-text)',
      fontFamily: 'var(--font-data)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      ...style
    },
    ...rest
  }, React.createElement('div', {
    key: 'bar',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      height: 28,
      paddingInline: 'var(--space-6)',
      background: 'var(--term-chrome)',
      borderBottom: '1px solid var(--term-border-soft)',
      flex: '0 0 auto'
    }
  }, React.createElement(__ds_scope.Logo, {
    key: 'l',
    variant: 'horizontal-white',
    height: 16,
    base
  }), React.createElement('nav', {
    key: 'n',
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginInlineStart: 'var(--space-6)'
    }
  }, items.map(it => React.createElement('span', {
    key: it,
    onClick: () => onNavigate && onNavigate(it),
    style: {
      fontSize: 'var(--fs-data-lg)',
      cursor: 'pointer',
      letterSpacing: '.01em',
      color: active === it ? 'var(--term-nav-active)' : 'var(--term-text)',
      transition: 'var(--transition-control)'
    }
  }, it))), React.createElement('div', {
    key: 's',
    style: {
      flex: 1
    }
  }), React.createElement('span', {
    key: 't',
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)'
    }
  }, 'Current Time: ', React.createElement('span', {
    style: {
      color: 'var(--term-nav-active)'
    }
  }, time)), React.createElement('span', {
    key: 'a',
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement('span', {
    style: {
      width: 12,
      height: 12,
      borderRadius: 'var(--radius-circle)',
      border: '1px solid var(--term-text-faint)',
      display: 'inline-block'
    }
  }), account)), React.createElement('div', {
    key: 'b',
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children));
}
Object.assign(__ds_scope, { TerminalChrome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalChrome.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalInput.jsx
try { (() => {
const fieldBox = {
  fontFamily: 'var(--font-data)',
  fontSize: 'var(--fs-data-lg)',
  color: 'var(--term-text)',
  background: 'var(--term-input)',
  border: '1px solid var(--term-border)',
  borderRadius: 'var(--radius-1)',
  height: 24,
  padding: '0 6px',
  outline: 'none',
  boxSizing: 'border-box'
};
function TerminalInput({
  label,
  placeholder,
  value,
  onChange,
  width = '100%',
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width,
      ...style
    }
  }, label ? React.createElement('span', {
    key: 'l',
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)'
    }
  }, label) : null, React.createElement('input', {
    key: 'i',
    placeholder,
    value,
    onChange,
    style: {
      ...fieldBox,
      width: '100%'
    },
    ...rest
  }));
}
Object.assign(__ds_scope, { fieldBox, TerminalInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalInput.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalSelect.jsx
try { (() => {
function TerminalSelect({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select or search',
  width = '100%',
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width,
      ...style
    }
  }, label ? React.createElement('span', {
    key: 'l',
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)'
    }
  }, label) : null, React.createElement('div', {
    key: 'w',
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    value,
    onChange,
    style: {
      ...__ds_scope.fieldBox,
      width: '100%',
      appearance: 'none',
      color: value ? 'var(--term-text)' : 'var(--term-text-faint)'
    },
    ...rest
  }, React.createElement('option', {
    value: ''
  }, placeholder), options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o))), React.createElement('span', {
    style: {
      position: 'absolute',
      right: 6,
      top: 5,
      fontSize: 10,
      color: 'var(--term-text-dim)',
      pointerEvents: 'none'
    }
  }, '\u25BC')));
}
Object.assign(__ds_scope, { TerminalSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalSelect.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalToolbar.jsx
try { (() => {
function TerminalToolbar({
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-5)',
      padding: '6px var(--space-6)',
      background: 'var(--term-toolbar)',
      borderBottom: '1px solid var(--term-border-soft)',
      flexWrap: 'wrap',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { TerminalToolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalToolbar.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TotalsBar.jsx
try { (() => {
function TotalsBar({
  items = [],
  align = 'right',
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      gap: 'var(--space-7)',
      padding: '3px var(--space-6)',
      background: 'var(--term-toolbar)',
      borderTop: '1px solid var(--term-border-soft)',
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--fs-data)',
      color: 'var(--term-text-dim)',
      ...style
    }
  }, items.map(it => React.createElement('span', {
    key: it.label
  }, it.label + ': ', React.createElement('span', {
    style: {
      color: it.tone === 'buy' ? 'var(--data-buy)' : it.tone === 'sell' ? 'var(--data-sell)' : it.tone === 'roll' ? 'var(--data-roll)' : 'var(--term-text)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { TotalsBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TotalsBar.jsx", error: String((e && e.message) || e) }); }

// slides/slide-shell.jsx
try { (() => {
const {
  Eyebrow,
  Logo
} = window.CBGMDesignSystem_e5adbb;
function Slide({
  eyebrow,
  tone = 'light',
  image,
  children,
  style
}) {
  const inv = tone === 'navy' || tone === 'gradient' || tone === 'image';
  const bg = tone === 'navy' ? 'var(--cbgm-navy-800)' : tone === 'gradient' ? 'var(--cbgm-gradient-navy)' : tone === 'subtle' ? 'var(--surface-subtle)' : tone === 'band' ? 'var(--surface-band)' : 'var(--surface-page)';
  return /*#__PURE__*/React.createElement("div", {
    className: "slide",
    style: {
      background: bg,
      color: inv ? '#fff' : 'var(--text-body)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(13,18,28,.92) 0%,rgba(13,18,28,.72) 48%,rgba(13,18,28,.30) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: inv ? 'inverse' : 'default'
  }, eyebrow)), children), /*#__PURE__*/React.createElement("div", {
    className: "foot",
    style: {
      color: inv ? 'rgba(255,255,255,.55)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 CBGM. Confidential. Not for Redistribution."), /*#__PURE__*/React.createElement(Logo, {
    base: "..",
    variant: inv ? 'horizontal-white' : 'horizontal',
    height: 16
  })));
}
function SlideTitle({
  children,
  size = 44,
  inverse
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: size,
      lineHeight: 1.1,
      fontWeight: 500,
      letterSpacing: 'var(--ls-display)',
      color: inverse ? '#fff' : 'var(--cbgm-slate-600)',
      maxWidth: 1000
    }
  }, children);
}
function SlideLead({
  children,
  inverse
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      maxWidth: 940,
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      fontWeight: 300,
      color: inverse ? 'rgba(255,255,255,.82)' : 'var(--cbgm-slate-800)'
    }
  }, children);
}
function Icon({
  name,
  size = 44,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: '../assets/icons/' + name + '.svg',
    alt: "",
    style: {
      width: size,
      height: size,
      display: 'block',
      ...style
    }
  });
}
function mount(el) {
  ReactDOM.createRoot(document.getElementById('root')).render(el);
}
Object.assign(window, {
  Slide,
  SlideTitle,
  SlideLead,
  Icon,
  mount
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/slide-shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/BidSummaryScreen.jsx
try { (() => {
const {
  TerminalToolbar,
  TerminalSelect,
  TerminalButton,
  DataGrid,
  Panel,
  DonutChart,
  RateHistoryChart
} = window.CBGMDesignSystem_e5adbb;
function BidSummaryScreen({
  security
}) {
  const D = window.CBGMData;
  const [orders, setOrders] = React.useState(D.orders);
  const [editing, setEditing] = React.useState(-1);
  const [draft, setDraft] = React.useState('');
  const meta = [['Deadline (WAT)', '10:00 PM'], ['Issuer Description', 'Transit'], ['Issue Size', '$100,000,000'], ['Ceiling Rate', 'N/A'], ['Previous Rate', '5.9917%'], ['Not Demand', '0.0000%'], ['Instalment Count', '02'], ['Put Date', '09/11/26'], ['Projected Final Rate', '4.5461%'], ['Min Rate', '25.0000%']];
  const cols = [{
    key: 'account',
    label: 'Account'
  }, {
    key: 'opening',
    label: 'Opening Position',
    align: 'right'
  }, {
    key: 'bidType',
    label: 'Bid Type',
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        color: v.startsWith('BUY') ? 'var(--data-buy)' : v.startsWith('SELL') ? 'var(--data-sell)' : 'var(--data-roll)'
      }
    }, v)
  }, {
    key: 'size',
    label: 'Size',
    align: 'right'
  }, {
    key: 'bidRate',
    label: 'Bid Rate',
    align: 'right',
    render: (v, r) => r.outside ? /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--data-sell-bg)',
        color: 'var(--data-sell)',
        padding: '0 4px'
      }
    }, v) : /*#__PURE__*/React.createElement("span", null, v)
  }, {
    key: 'alloc',
    label: 'Projected Allocation',
    align: 'right'
  }, {
    key: 'actions',
    label: 'Actions',
    align: 'center',
    width: 70,
    render: (_, r) => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 6,
        color: 'var(--term-text-dim)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      title: "Edit",
      style: {
        cursor: 'pointer'
      }
    }, "\u270E"), /*#__PURE__*/React.createElement("span", {
      title: "Cancel",
      style: {
        cursor: 'pointer',
        color: 'var(--data-sell)'
      }
    }, "\u2715"))
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(TerminalToolbar, null, /*#__PURE__*/React.createElement(TerminalSelect, {
    label: "Security Id",
    width: 180,
    options: [security || 'T24173073212 - Rail'],
    value: security || 'T24173073212 - Rail',
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 18,
      paddingBottom: 4,
      flexWrap: 'wrap'
    }
  }, meta.map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: 'var(--fs-data-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-text-dim)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-text)',
      fontSize: 'var(--fs-data)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 250px 300px',
      gap: 6,
      padding: 6,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Security Market Activity",
    dense: true,
    actions: /*#__PURE__*/React.createElement(TerminalButton, {
      tone: "quiet"
    }, "Export")
  }, /*#__PURE__*/React.createElement(DataGrid, {
    columns: cols,
    rows: orders,
    maxHeight: 420,
    onRowClick: (r, i) => {
      setEditing(i);
      setDraft(r.bidRate);
    }
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Bid Distribution",
    bodyStyle: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      fontSize: 'var(--fs-data-sm)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--data-buy)'
    }
  }, "Total Buys"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--term-text)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Principal 157,500"), /*#__PURE__*/React.createElement("span", null, "Accounts 10")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--data-roll)',
      marginTop: 6
    }
  }, "Total Rolls"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--term-text)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "70,000"), /*#__PURE__*/React.createElement("span", null, "7")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--data-sell)',
      marginTop: 6
    }
  }, "Total Sells"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--term-text)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "20,000"), /*#__PURE__*/React.createElement("span", null, "4")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--data-missing)',
      marginTop: 6
    }
  }, "Total Missing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--term-text)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, "0"))), /*#__PURE__*/React.createElement(DonutChart, {
    size: 130,
    thickness: 24,
    centerLabel: "Total Bonds",
    centerValue: "257,500",
    segments: [{
      label: 'Buys',
      value: 61,
      color: 'var(--data-buy)'
    }, {
      label: 'Rolls',
      value: 27,
      color: 'var(--data-roll)'
    }, {
      label: 'Sells',
      value: 8,
      color: 'var(--data-sell)'
    }, {
      label: 'Missing',
      value: 4,
      color: 'var(--data-missing)'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Security Account Activity"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text-dim)'
    }
  }, "Opening Position"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text)',
      fontSize: 'var(--fs-data-lg)'
    }
  }, "0"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text-dim)',
      marginTop: 6
    }
  }, "Position Change"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text-faint)',
      fontSize: 'var(--fs-data-lg)'
    }
  }, "NaN"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text-dim)',
      marginTop: 6
    }
  }, "Projected Position"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text-faint)',
      fontSize: 'var(--fs-data-lg)'
    }
  }, "NaN"))), /*#__PURE__*/React.createElement(Panel, {
    title: "Rate History for T24173073212",
    bodyStyle: {
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(RateHistoryChart, {
    width: 270,
    height: 150,
    series: [{
      label: 'High',
      points: [8.756, 7.756, 7.545, 7.654, 10.345],
      color: 'var(--data-buy)'
    }, {
      label: 'Rate',
      points: [4.773, 5.526, 5.384, 5.156, 5.492],
      color: 'var(--data-roll)'
    }, {
      label: 'Low',
      points: [2.664, 3.432, 3.423, 2.545, 2.754],
      color: 'var(--data-sell)'
    }]
  })))), editing >= 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 20
    },
    onClick: () => setEditing(-1)
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 420,
      background: 'var(--term-panel)',
      border: '1px solid var(--term-border)',
      borderRadius: 'var(--radius-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 26,
      paddingInline: 10,
      background: 'var(--term-panel-header)',
      borderBottom: '1px solid var(--term-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-data-lg)',
      color: 'var(--term-heading)'
    }
  }, "Amend Bid: ", orders[editing].account), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer',
      color: 'var(--term-text-dim)'
    },
    onClick: () => setEditing(-1)
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)'
    }
  }, "Bid Rate"), /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    style: {
      height: 24,
      background: 'var(--term-input)',
      border: '1px solid var(--term-border)',
      borderRadius: 2,
      color: 'var(--term-text)',
      fontFamily: 'var(--font-data)',
      fontSize: 13,
      padding: '0 6px'
    }
  })), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "control",
    onClick: () => {
      setOrders(o => o.map((x, i) => i === editing ? {
        ...x,
        bidRate: draft
      } : x));
      setEditing(-1);
    }
  }, "Save")))));
}
Object.assign(window, {
  BidSummaryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/BidSummaryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/BlotterScreen.jsx
try { (() => {
const {
  TerminalInput,
  TerminalSelect,
  TerminalButton,
  DataGrid,
  Panel,
  StatusCell
} = window.CBGMDesignSystem_e5adbb;
function BlotterScreen() {
  const D = window.CBGMData;
  const [open, setOpen] = React.useState(true);
  const [status, setStatus] = React.useState('Complete');
  const rows = D.blotter.filter(r => r.status === status || status === 'All');
  const cols = [{
    key: 'alloc',
    label: 'Pmt Alloc ID',
    render: v => /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--term-link)'
      }
    }, v)
  }, {
    key: 'sec',
    label: 'Security Id'
  }, {
    key: 'status',
    label: 'Status',
    render: v => /*#__PURE__*/React.createElement(StatusCell, {
      status: v
    })
  }, {
    key: 'acct',
    label: 'Account'
  }, {
    key: 'type',
    label: 'Type'
  }, {
    key: 'qty',
    label: 'Quantity',
    align: 'right'
  }, {
    key: 'trade',
    label: 'Trade Date'
  }, {
    key: 'sett',
    label: 'Sett. Date'
  }, {
    key: 'principal',
    label: 'Principal',
    align: 'right'
  }, {
    key: 'interest',
    label: 'Interest',
    align: 'right'
  }, {
    key: 'ts',
    label: 'Time Stamp'
  }, {
    key: 'entry',
    label: 'Entry Date'
  }, {
    key: 'ccy',
    label: 'Currency',
    align: 'center'
  }, {
    key: 'dom',
    label: 'Domicile',
    align: 'center'
  }, {
    key: 'user',
    label: 'Username'
  }, {
    key: 'actions',
    label: 'Actions',
    align: 'center',
    render: () => /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--term-text-dim)',
        cursor: 'pointer'
      }
    }, "\u23F1")
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minHeight: 0
    }
  }, open && /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: '0 0 236px',
      background: 'var(--term-panel)',
      borderRight: '1px solid var(--term-border)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 22,
      paddingInline: 10,
      background: 'var(--term-panel-header)',
      borderBottom: '1px solid var(--term-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-data-lg)',
      color: 'var(--term-heading)'
    }
  }, "Filter Blotter"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer',
      color: 'var(--term-text-dim)'
    },
    onClick: () => setOpen(false)
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(TerminalSelect, {
    label: "Security Type",
    options: ['CP', 'BVRDO', 'BMLVRS']
  }), /*#__PURE__*/React.createElement(TerminalSelect, {
    label: "Security Id",
    options: D.blotter.map(b => b.sec)
  }), /*#__PURE__*/React.createElement(TerminalSelect, {
    label: "Account",
    options: ['ABC']
  }), /*#__PURE__*/React.createElement(TerminalInput, {
    label: "Parent Trade ID",
    placeholder: "Enter..."
  }), /*#__PURE__*/React.createElement(TerminalInput, {
    label: "Allocation ID",
    placeholder: "Enter..."
  }), /*#__PURE__*/React.createElement(TerminalInput, {
    label: "Parent Allocation ID",
    placeholder: "Enter..."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      marginBottom: 4
    }
  }, "Trade Date"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(TerminalInput, {
    placeholder: "08/07/2026"
  }), /*#__PURE__*/React.createElement(TerminalInput, {
    placeholder: "08/21/2026"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      marginBottom: 4
    }
  }, "Settlement Date"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(TerminalInput, {
    placeholder: "mm/dd/yyyy"
  }), /*#__PURE__*/React.createElement(TerminalInput, {
    placeholder: "mm/dd/yyyy"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      marginBottom: 4
    }
  }, "Trade Amount (000's)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(TerminalInput, {
    placeholder: "Enter..."
  }), /*#__PURE__*/React.createElement(TerminalInput, {
    placeholder: "Enter..."
  }))), /*#__PURE__*/React.createElement(TerminalSelect, {
    label: "Frequency",
    options: ['Weekly', 'Monthly']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      marginBottom: 4
    }
  }, "Status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(TerminalButton, {
    tone: status === 'Complete' ? 'positive' : 'quiet',
    style: {
      flex: 1,
      justifyContent: 'center'
    },
    onClick: () => setStatus('Complete')
  }, "Complete"), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: status === 'Incomplete' ? 'negative' : 'quiet',
    style: {
      flex: 1,
      justifyContent: 'center'
    },
    onClick: () => setStatus('Incomplete')
  }, "Incomplete"))), /*#__PURE__*/React.createElement(TerminalSelect, {
    label: "Type",
    options: ['BUY', 'SELL']
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--fs-data)',
      color: 'var(--term-text)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      accentColor: 'var(--term-control)'
    }
  }), " Include Cancelled Trades")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 10,
      borderTop: '1px solid var(--term-border)'
    }
  }, /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "quiet",
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, "Reset"), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "control",
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, "Search"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: 6,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Trade Summary",
    dense: true,
    actions: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(TerminalButton, {
      tone: "quiet"
    }, "Export"), !open && /*#__PURE__*/React.createElement(TerminalButton, {
      tone: "control",
      onClick: () => setOpen(true)
    }, "Filter"), open && /*#__PURE__*/React.createElement(TerminalButton, {
      tone: "control"
    }, "Filter"))
  }, /*#__PURE__*/React.createElement(DataGrid, {
    columns: cols,
    rows: rows,
    maxHeight: 460
  }))));
}
Object.assign(window, {
  BlotterScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/BlotterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/MarketActivityScreen.jsx
try { (() => {
const {
  TerminalToolbar,
  TerminalInput,
  TerminalSelect,
  TerminalButton,
  DataGrid,
  Panel,
  RateCell,
  MoneyCell,
  TotalsBar,
  DonutChart,
  RateHistoryChart
} = window.CBGMDesignSystem_e5adbb;
function MarketActivityScreen({
  onOpenSecurity
}) {
  const D = window.CBGMData;
  const [sel, setSel] = React.useState([]);
  const cols = [{
    key: 'doc',
    label: 'Doc',
    width: 26
  }, {
    key: 'date',
    label: 'Effective Date'
  }, {
    key: 'period',
    label: 'Rate Period'
  }, {
    key: 'type',
    label: 'Security Type'
  }, {
    key: 'id',
    label: 'Security Id',
    render: (v, r) => /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onOpenSecurity && onOpenSecurity(r);
      },
      style: {
        color: 'var(--term-link)'
      }
    }, v)
  }, {
    key: 'issuer',
    label: 'Issuer',
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--term-link)'
      }
    }, v)
  }, {
    key: 'deadline',
    label: 'Deadline',
    render: (v, r) => /*#__PURE__*/React.createElement("span", {
      style: {
        color: r.locked ? 'var(--data-locked)' : 'var(--term-text)'
      }
    }, v)
  }, {
    key: 'sp',
    label: 'S&P',
    align: 'center'
  }, {
    key: 'moodys',
    label: "Moody's",
    align: 'center'
  }, {
    key: 'fitch',
    label: 'Fitch',
    align: 'center'
  }, {
    key: 'amt',
    label: 'AMT',
    align: 'center'
  }, {
    key: 'size',
    label: 'Issue Size',
    align: 'right'
  }, {
    key: 'opening',
    label: 'Opening Position',
    align: 'right'
  }, {
    key: 'accts',
    label: '# of Accts',
    align: 'right'
  }, {
    key: 'trustee',
    label: 'Trustee',
    align: 'center'
  }, {
    key: 'rate',
    label: 'Previous Rate',
    align: 'right',
    render: (v, r) => /*#__PURE__*/React.createElement(RateCell, {
      value: v,
      direction: r.dir
    })
  }, {
    key: 'ccy',
    label: 'Currency',
    align: 'center'
  }, {
    key: 'domicile',
    label: 'Domicile',
    align: 'center'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(TerminalToolbar, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      paddingBottom: 6
    }
  }, "Reset Date"), /*#__PURE__*/React.createElement(TerminalInput, {
    width: 100,
    placeholder: "08/03/2026"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-text-faint)',
      paddingBottom: 4
    }
  }, "\u2014"), /*#__PURE__*/React.createElement(TerminalInput, {
    width: 100,
    placeholder: "08/28/2026"
  }), /*#__PURE__*/React.createElement(TerminalSelect, {
    label: "Security Type",
    width: 160,
    placeholder: "0 item selected",
    options: ['CP', 'BVRDO', 'BMLVRS']
  }), /*#__PURE__*/React.createElement(TerminalSelect, {
    label: "Security Id",
    width: 160,
    placeholder: "Select or Search",
    options: D.marketRows.slice(0, 6).map(r => r.id)
  }), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "control"
  }, "Go"), /*#__PURE__*/React.createElement(TerminalInput, {
    label: "View",
    width: 140,
    placeholder: "View name"
  }), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "quiet"
  }, "Save"), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "quiet"
  }, "Export"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-data)',
      color: 'var(--term-text-dim)',
      paddingBottom: 4
    }
  }, "My Buys: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--term-text)'
    }
  }, "24,000,000"), "\xA0\xA0My Sells: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--term-text)'
    }
  }, "0"), "\xA0\xA0My Rolls: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--term-text)'
    }
  }, "0"), "\xA0\xA0My Missings: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--term-text)'
    }
  }, "0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 250px',
      gap: 6,
      padding: 6,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(DataGrid, {
    selectable: true,
    selected: sel,
    onSelect: i => setSel(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i]),
    columns: cols,
    rows: D.marketRows,
    maxHeight: 300,
    style: {
      flex: '0 1 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      padding: '2px 6px',
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      background: 'var(--term-toolbar)'
    }
  }, "All amounts are in 000's")), /*#__PURE__*/React.createElement(Panel, {
    title: "Live Market Composite",
    dense: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 52px',
      fontSize: 'var(--fs-data-sm)',
      textAlign: 'center',
      padding: '3px 0',
      borderBottom: '1px solid var(--term-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--data-buy)'
    }
  }, "Buys"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--data-sell)'
    }
  }, "Sells"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--data-roll)'
    }
  }, "Rolls"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-text-dim)'
    }
  }, "Rate")), D.marketRows.slice(0, 14).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 52px',
      gap: 1,
      background: i % 2 ? 'var(--term-row-alt)' : 'var(--term-row)',
      alignItems: 'stretch',
      fontSize: 'var(--fs-data)'
    }
  }, /*#__PURE__*/React.createElement(MoneyCell, {
    value: r.buys,
    side: "buy"
  }), /*#__PURE__*/React.createElement(MoneyCell, {
    value: r.sells,
    side: "sell"
  }), /*#__PURE__*/React.createElement(MoneyCell, {
    value: r.rolls,
    side: "roll"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 4,
      color: 'var(--term-link)',
      textDecoration: 'underline'
    }
  }, r.rate))))), /*#__PURE__*/React.createElement(TotalsBar, {
    items: [{
      label: 'Total Buys',
      value: '9,407,654',
      tone: 'buy'
    }, {
      label: 'Total Sells',
      value: '7,950,654',
      tone: 'sell'
    }, {
      label: 'Total Rolls',
      value: '634,000',
      tone: 'roll'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 250px',
      gap: 6,
      padding: 6,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Bid Rate History",
    bodyStyle: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      fontSize: 'var(--fs-data)',
      color: 'var(--term-text)',
      flex: '0 0 250px'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      color: 'var(--term-text-dim)',
      fontSize: 'var(--fs-data-sm)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      fontWeight: 500,
      padding: '2px 6px'
    }
  }, "Effective Period"), /*#__PURE__*/React.createElement("th", {
    style: {
      fontWeight: 500,
      padding: '2px 6px',
      color: 'var(--data-roll)'
    }
  }, "Rate (%)"), /*#__PURE__*/React.createElement("th", {
    style: {
      fontWeight: 500,
      padding: '2px 6px',
      color: 'var(--data-buy)'
    }
  }, "High (%)"), /*#__PURE__*/React.createElement("th", {
    style: {
      fontWeight: 500,
      padding: '2px 6px',
      color: 'var(--data-sell)'
    }
  }, "Low (%)"))), /*#__PURE__*/React.createElement("tbody", null, window.CBGMData.rateHistory.map((h, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? 'var(--term-row-alt)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '2px 6px'
    }
  }, h.period), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '2px 6px'
    }
  }, h.rate), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '2px 6px'
    }
  }, h.high), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '2px 6px'
    }
  }, h.low))))), /*#__PURE__*/React.createElement(RateHistoryChart, {
    width: 430,
    height: 150,
    series: [{
      label: 'High',
      points: [8.756, 7.756, 7.545, 7.654, 10.345],
      color: 'var(--data-buy)'
    }, {
      label: 'Rate',
      points: [4.773, 5.526, 5.384, 5.156, 5.492],
      color: 'var(--data-roll)'
    }, {
      label: 'Low',
      points: [2.664, 3.432, 3.423, 2.545, 2.754],
      color: 'var(--data-sell)'
    }]
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Bid Distribution",
    bodyStyle: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--data-buy)'
    }
  }, "Total Buys"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text)'
    }
  }, "9,407,654"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--data-roll)',
      marginTop: 6
    }
  }, "Total Rolls"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text)'
    }
  }, "634,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--data-sell)',
      marginTop: 6
    }
  }, "Total Sells"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text)'
    }
  }, "7,950,654"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--data-missing)',
      marginTop: 6
    }
  }, "Missing"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--term-text)'
    }
  }, "381,000")), /*#__PURE__*/React.createElement(DonutChart, {
    size: 116,
    thickness: 22,
    centerLabel: "Total Bonds",
    centerValue: "18,373,308",
    segments: [{
      label: 'Buys',
      value: 62,
      color: 'var(--data-buy)'
    }, {
      label: 'Sells',
      value: 26,
      color: 'var(--data-sell)'
    }, {
      label: 'Rolls',
      value: 8,
      color: 'var(--data-roll)'
    }, {
      label: 'Missing',
      value: 4,
      color: 'var(--data-missing)'
    }]
  }))));
}
Object.assign(window, {
  MarketActivityScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/MarketActivityScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/SecondaryMarketScreen.jsx
try { (() => {
const {
  TerminalInput,
  TerminalButton,
  DataGrid,
  Panel
} = window.CBGMDesignSystem_e5adbb;
function SecondaryMarketScreen() {
  const D = window.CBGMData;
  const [tab, setTab] = React.useState('Offerings');
  const [expanded, setExpanded] = React.useState(1);
  const [buying, setBuying] = React.useState(null);
  const [secs, setSecs] = React.useState(55);
  React.useEffect(() => {
    if (!buying) return;
    const t = setInterval(() => setSecs(s => s > 0 ? s - 1 : 60), 1000);
    return () => clearInterval(t);
  }, [buying]);
  const tabStyle = t => ({
    padding: '4px 16px',
    fontSize: 'var(--fs-data-lg)',
    cursor: 'pointer',
    color: tab === t ? 'var(--term-nav-active)' : 'var(--term-text-dim)',
    background: tab === t ? 'var(--term-panel)' : 'transparent',
    borderBottom: '2px solid ' + (tab === t ? 'var(--term-nav-active)' : 'transparent')
  });
  const offerCols = [{
    key: 'holder',
    label: 'Holder'
  }, {
    key: 'bondType',
    label: 'Bond Type'
  }, {
    key: 'price',
    label: 'Price',
    align: 'right'
  }, {
    key: 'quantity',
    label: 'Quantity',
    align: 'right'
  }, {
    key: 'minimum',
    label: 'Minimum',
    align: 'right'
  }, {
    key: 'offering',
    label: 'Offering Date'
  }, {
    key: 'settlement',
    label: 'Settlement Date'
  }, {
    key: 'actions',
    label: 'Actions',
    align: 'center',
    render: (_, r) => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 8,
        color: 'var(--term-text-dim)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      },
      title: "Documents"
    }, "\u25A4"), /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        color: 'var(--data-buy)'
      },
      title: "Purchase",
      onClick: () => {
        setBuying(r);
        setSecs(55);
      }
    }, "\u270E"), /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer',
        color: 'var(--data-sell)'
      },
      title: "Withdraw"
    }, "\u2715"))
  }];
  const offerRows = [{
    holder: 'Account 1',
    bondType: '-',
    price: '$100.000',
    quantity: '6,000',
    minimum: '100',
    offering: '08-13-2026',
    settlement: '08-18-2026'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      background: 'var(--term-chrome)',
      borderBottom: '1px solid var(--term-border)',
      paddingInline: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-data-lg)',
      color: 'var(--term-heading)',
      paddingRight: 20
    }
  }, "Secondary Market"), /*#__PURE__*/React.createElement("span", {
    style: tabStyle('Offerings'),
    onClick: () => setTab('Offerings')
  }, "Offerings"), /*#__PURE__*/React.createElement("span", {
    style: tabStyle('Holdings'),
    onClick: () => setTab('Holdings')
  }, "Holdings")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      padding: '6px 12px',
      background: 'var(--term-toolbar)',
      borderBottom: '1px solid var(--term-border-soft)'
    }
  }, /*#__PURE__*/React.createElement(TerminalInput, {
    label: "User View",
    width: 160,
    placeholder: "View name"
  }), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "quiet"
  }, "Save"), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "quiet"
  }, "Export")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto',
      padding: 6
    }
  }, D.offerings.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.n,
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setExpanded(expanded === o.n ? 0 : o.n),
    style: {
      display: 'grid',
      gridTemplateColumns: '26px 1fr 70px 1.4fr 90px 80px 80px 80px 80px 90px 90px 70px 70px',
      alignItems: 'center',
      height: 20,
      background: 'var(--term-row-alt)',
      fontSize: 'var(--fs-data)',
      cursor: 'pointer',
      paddingInline: 4,
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-text-dim)'
    }
  }, o.n, " ", expanded === o.n ? '\u25BE' : '\u25B8'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-link)'
    }
  }, o.sec), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, o.rate), /*#__PURE__*/React.createElement("span", null, o.desc), /*#__PURE__*/React.createElement("span", null, o.reset), /*#__PURE__*/React.createElement("span", null, o.moodys), /*#__PURE__*/React.createElement("span", null, o.sp), /*#__PURE__*/React.createElement("span", null, o.fitch), /*#__PURE__*/React.createElement("span", null, o.kroll), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, o.size), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      color: 'var(--data-buy)'
    }
  }, o.holdings), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, o.ccy), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, o.dom)), expanded === o.n && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 26,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    dense: true
  }, /*#__PURE__*/React.createElement(DataGrid, {
    columns: offerCols,
    rows: offerRows
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      paddingTop: 8
    }
  }, D.offerings.length + 1, " rows available", /*#__PURE__*/React.createElement("br", null), "All amounts are in 000's")), buying && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 20
    },
    onClick: () => setBuying(null)
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 620,
      background: 'var(--term-panel)',
      border: '1px solid var(--term-border)',
      borderRadius: 'var(--radius-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 28,
      paddingInline: 12,
      background: 'var(--term-panel-header)',
      borderBottom: '1px solid var(--term-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-data-lg)',
      color: 'var(--term-heading)'
    }
  }, "Purchase Offering"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer',
      color: 'var(--term-text-dim)'
    },
    onClick: () => setBuying(null)
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .8fr .9fr 1fr 1.1fr .9fr 1fr',
      fontSize: 'var(--fs-data-sm)',
      color: 'var(--term-text-dim)',
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Account"), /*#__PURE__*/React.createElement("span", null, "Quantity"), /*#__PURE__*/React.createElement("span", null, "Price"), /*#__PURE__*/React.createElement("span", null, "Trade Date"), /*#__PURE__*/React.createElement("span", null, "Settlement Date"), /*#__PURE__*/React.createElement("span", null, "Interest"), /*#__PURE__*/React.createElement("span", null, "Total")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .8fr .9fr 1fr 1.1fr .9fr 1fr',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--fs-data)',
      color: 'var(--term-text)'
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      height: 22,
      background: 'var(--term-input)',
      border: '1px solid var(--term-border)',
      color: 'var(--term-text)',
      fontFamily: 'var(--font-data)',
      fontSize: 12,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("option", null, "ABC Asset Management")), /*#__PURE__*/React.createElement("input", {
    defaultValue: "6,000",
    style: {
      height: 22,
      background: 'var(--term-input)',
      border: '1px solid var(--term-border)',
      color: 'var(--term-text)',
      fontFamily: 'var(--font-data)',
      fontSize: 12,
      borderRadius: 2,
      padding: '0 5px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-text-faint)'
    }
  }, "$100.000"), /*#__PURE__*/React.createElement("span", null, "08-14-2026"), /*#__PURE__*/React.createElement("span", null, "08-18-2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-text-faint)'
    }
  }, "$46,616.22"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--term-text-faint)'
    }
  }, "$6,046,616.22"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 12px',
      borderTop: '1px solid var(--term-border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-data)',
      color: 'var(--term-text-dim)'
    }
  }, "\u23F1 ", secs, " s"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 2,
      background: 'var(--term-border)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: secs / 60 * 100 + '%',
      height: 2,
      background: 'var(--term-control)',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(TerminalButton, {
    tone: "control",
    style: {
      minWidth: 80,
      justifyContent: 'center'
    },
    onClick: () => setBuying(null)
  }, "Save")))));
}
Object.assign(window, {
  SecondaryMarketScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/SecondaryMarketScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/data.js
try { (() => {
window.CBGMData = function () {
  const issuers = ['Government of…', 'Debt Manage…', 'Transit Auth…', 'Housing Fin…', 'Energy Corp…'];
  const types = ['CP', 'BVRDO', 'BMLVRS', 'BVRDO', 'CP'];
  const ids = ['GHGGOGI02048', 'MT7782158162', 'GF3633568265', 'SJ1041477501', 'T24173073212', 'CD8341046104', 'BMLVRS021', 'GHGGOGI02055'];
  const ccy = ['NGN', 'GBP', 'USD', 'GBP', 'USD'];
  const dom = ['NGA', 'UK', 'USA', 'UK', 'USA'];
  const sym = {
    NGN: '\u20A6',
    GBP: '\u00A3',
    USD: '$'
  };
  function rnd(seed) {
    let s = seed;
    return () => {
      s = (s * 1103515245 + 12345) % 2147483648;
      return s / 2147483648;
    };
  }
  const r = rnd(7);
  const marketRows = Array.from({
    length: 22
  }, (_, i) => {
    const c = ccy[i % 5];
    const rate = 4 + r() * 8;
    return {
      doc: '\u25A4',
      date: '08/' + String(4 + i % 24).padStart(2, '0') + '/26',
      period: [7, 91, 182, 364][i % 4],
      type: types[i % 5],
      id: ids[i % ids.length],
      issuer: issuers[i % 5],
      deadline: i < 3 ? 'Locked' : '10:00 PM',
      sp: i < 3 ? '--/--' : 'A-1+/AA+',
      moodys: i < 3 ? '--/--' : 'MIG 2/Aa2',
      fitch: i < 3 ? '--/--' : 'F1+/AA+',
      amt: 'Yes',
      size: [97294, 501380, 7176980, 100000, 80000, 150000][i % 6].toLocaleString(),
      opening: 0,
      accts: 1 + i % 9,
      trustee: i % 3 ? 'Fed' : 'N/A',
      rate: rate.toFixed(3) + '%',
      dir: ['up', 'down', 'flat'][i % 3],
      ccy: c,
      domicile: dom[i % 5],
      buys: sym[c] + [97294, 501380, 7176980, 150000, 97000, 59000][i % 6].toLocaleString(),
      sells: sym[c] + [97294, 501380, 7176980, 5000, 11000, 16000][i % 6].toLocaleString(),
      rolls: sym[c] + [0, 0, 0, 95000, 69000, 84000][i % 6].toLocaleString(),
      locked: i < 3
    };
  });
  const orders = Array.from({
    length: 24
  }, (_, i) => ({
    account: 'Order ' + (i + 1),
    opening: [31800, '', 22000, 16000, '', 15900, 10000, ''][i % 8] || '',
    bidType: ['BUY', 'BUY-GTC', 'ROLL-GTC', 'SELL', 'BUY-GTC', 'ROLL-GTC'][i % 6],
    size: [16000, 11000, 22000, 7000, 4000, 9000, 6000][i % 7].toLocaleString(),
    bidRate: (2.4 + i * 0.09).toFixed(4) + '%',
    alloc: [16000, '', 22000, 10000, '', 4000][i % 6] || '',
    outside: i % 7 === 3
  }));
  const blotter = [{
    alloc: 'f110d65f-4336-46',
    sec: 'MT7782158162',
    status: 'Complete',
    acct: 'ABC',
    type: 'BUY',
    qty: '25,000',
    trade: '08/14/26',
    sett: '08/17/26',
    principal: '25,000,000',
    interest: '\u00A361,275.70',
    ts: '08/14/26 9:59:22',
    entry: '08/14/26',
    ccy: 'GBP',
    dom: 'UK',
    user: 'ABC'
  }, {
    alloc: '58fff6e6-fbe5-46',
    sec: 'MT7782158162',
    status: 'Complete',
    acct: 'ABC',
    type: 'BUY',
    qty: '30,000',
    trade: '08/11/26',
    sett: '08/12/26',
    principal: '30,000,000',
    interest: '\u00A350,760.83',
    ts: '08/14/26 9:35:29',
    entry: '08/11/26',
    ccy: 'GBP',
    dom: 'UK',
    user: 'ABC'
  }, {
    alloc: 'bb4990f6-5199-4',
    sec: 'GF3633568265',
    status: 'Complete',
    acct: 'ABC',
    type: 'BUY',
    qty: '6,000',
    trade: '08/14/26',
    sett: '08/18/26',
    principal: '6,000',
    interest: '\u00A346,616.22',
    ts: '08/14/26 9:25:56',
    entry: '08/14/26',
    ccy: 'GBP',
    dom: 'UK',
    user: 'ABC'
  }, {
    alloc: '888c6c8f-2620-4',
    sec: 'SJ1041477501',
    status: 'Complete',
    acct: 'ABC',
    type: 'BUY',
    qty: '7,000',
    trade: '08/13/26',
    sett: '08/14/26',
    principal: '7,000,000',
    interest: '$48,994.75',
    ts: '08/14/26 9:10:20',
    entry: '08/13/26',
    ccy: 'USD',
    dom: 'USA',
    user: 'ABC'
  }, {
    alloc: 'd645544a-1213-',
    sec: 'GF3633568265',
    status: 'Complete',
    acct: 'ABC',
    type: 'BUY',
    qty: '10,000',
    trade: '08/12/26',
    sett: '08/13/26',
    principal: '10,000,000',
    interest: '\u00A369,689.86',
    ts: '08/13/26 11:52:0',
    entry: '08/12/26',
    ccy: 'GBP',
    dom: 'UK',
    user: 'ABC'
  }, {
    alloc: 'bb3dd639-678d-',
    sec: 'MT7782158162',
    status: 'Incomplete',
    acct: 'ABC',
    type: 'BUY',
    qty: '14,000',
    trade: '08/14/26',
    sett: '08/17/26',
    principal: '14,000,000',
    interest: '\u00A334,314.39',
    ts: '08/14/26 10:16:3',
    entry: '08/14/26',
    ccy: 'GBP',
    dom: 'UK',
    user: 'ABC'
  }];
  const offerings = [{
    n: 1,
    sec: 'GF36335682€',
    rate: '4.869%',
    desc: '123 Debt Security',
    reset: '08/19/26',
    moodys: 'MIG 2/Aa1',
    sp: 'A-1+/AA-',
    fitch: 'F1+/AA+',
    kroll: 'K1/AA+',
    size: '80,000',
    holdings: '16,000',
    ccy: 'GBP',
    dom: 'UK'
  }, {
    n: 2,
    sec: 'MT77821581€',
    rate: '4.554%',
    desc: 'XYZ Bond',
    reset: '08/22/26',
    moodys: 'MIG 1/Aa2',
    sp: 'A-1/AA',
    fitch: 'F1/AA',
    kroll: 'K1/AA',
    size: '120,000',
    holdings: '39,000',
    ccy: 'GBP',
    dom: 'UK'
  }];
  const rateHistory = [{
    period: '08/15/26 - 08/21/26',
    rate: '4.773',
    high: '8.756',
    low: '2.664'
  }, {
    period: '08/08/26 - 08/14/26',
    rate: '5.526',
    high: '7.756',
    low: '3.432'
  }, {
    period: '08/01/26 - 08/07/26',
    rate: '5.384',
    high: '7.545',
    low: '3.423'
  }, {
    period: '07/25/26 - 07/31/26',
    rate: '5.156',
    high: '7.654',
    low: '2.545'
  }, {
    period: '07/18/26 - 07/24/26',
    rate: '5.492',
    high: '10.345',
    low: '2.754'
  }];
  return {
    marketRows,
    orders,
    blotter,
    offerings,
    rateHistory
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  SectionHeader,
  Card,
  Button,
  Eyebrow
} = window.CBGMDesignSystem_e5adbb;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    org: '',
    email: '',
    type: 'Institutional investor',
    note: ''
  });
  const field = {
    width: '100%',
    height: 42,
    padding: '0 12px',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-body)',
    background: 'var(--surface-page)',
    border: '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-3)',
    outline: 'none'
  };
  const label = {
    display: 'block',
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--text-heading)',
    marginBottom: 6
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--layout-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Contact",
    title: "Get in touch",
    intro: "Institutional investors are invited to onboard as subscribers and participate in upcoming Digital Dutch Auctions, free of cost."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Office"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "125 Park Avenue, Floor 25", /*#__PURE__*/React.createElement("br", null), "New York, NY 10017", /*#__PURE__*/React.createElement("br", null), "United States")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Robert Novembre, CEO & Founder"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 15,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:rn@clearbidmarkets.com"
  }, "rn@clearbidmarkets.com"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, "+1 646 643 3302"))))), /*#__PURE__*/React.createElement(Card, {
    padding: "32px",
    elevation: 2
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 24px',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "A member of the CBGM team will respond within two business days."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Organization"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: form.org,
    onChange: e => setForm({
      ...form,
      org: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Work email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    style: field,
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "I am a"), /*#__PURE__*/React.createElement("select", {
    style: field,
    value: form.type,
    onChange: e => setForm({
      ...form,
      type: e.target.value
    })
  }, ['Institutional investor', 'Trader', 'Issuer', 'Partner bank', 'Other'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "What would you like to discuss?"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    style: {
      ...field,
      height: 'auto',
      padding: '10px 12px',
      resize: 'vertical'
    },
    value: form.note,
    onChange: e => setForm({
      ...form,
      note: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, "Request access"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, "CBGM is not a broker-dealer, investment adviser, arranger, or licensed market operator. CBGM works through regulated local partners.")))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  SectionHeader,
  StatBlock,
  FeatureItem,
  Card,
  Button,
  Badge,
  Eyebrow,
  Logo
} = window.CBGMDesignSystem_e5adbb;
const Section = ({
  tone,
  children,
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: 'var(--section-y) var(--layout-gutter)',
    background: tone === 'navy' ? 'var(--cbgm-navy-800)' : tone === 'subtle' ? 'var(--surface-subtle)' : 'var(--surface-page)',
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--layout-max)',
    margin: '0 auto'
  }
}, children));
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cbgm-gradient-navy)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -160,
      top: -120,
      width: 620,
      height: 620,
      borderRadius: '50%',
      background: 'var(--cbgm-gradient-mark)',
      opacity: .16,
      filter: 'blur(6px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: '120px var(--layout-gutter) 112px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Digital debt and credit-market infrastructure"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      maxWidth: 840,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-1)',
      lineHeight: 'var(--lh-display-1)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-display)',
      color: '#fff'
    }
  }, "Unlocking the full potential of global capital."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      maxWidth: 620,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      fontWeight: 300,
      color: 'var(--text-inverse-muted)'
    }
  }, "CBGM powers the full lifecycle of debt and credit-market securities, from issuance and price discovery through trading and ongoing management."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate && onNavigate('Platform')
  }, "Explore the platform"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-outline",
    size: "lg",
    onClick: () => onNavigate && onNavigate('Company')
  }, "Request access")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32,
      marginTop: 80,
      paddingTop: 36,
      borderTop: '1px solid rgba(255,255,255,.16)'
    }
  }, [['Innovative', 'Advancing the architecture of global capital markets through bold innovation and purpose-built digital infrastructure.'], ['Digital', 'A fully digital infrastructure designed to enable borderless market participation for market participants worldwide.'], ['Transparent', 'Real-time data and empirical market insights designed to build trust, confidence, and accountability.'], ['Agile', 'Responsive structures and technology designed to evolve with market needs and regulatory developments.']].map(([t, d]) => /*#__PURE__*/React.createElement(FeatureItem, {
    key: t,
    tone: "inverse",
    title: t
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Market context",
    title: "Critical Global Market Challenges",
    intro: "Outdated approaches in global capital markets have created significant funding gaps, insufficient liquidity, and fragmented market structures, restricting economic development worldwide."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "$1Trn",
    label: "African Infrastructure Gap",
    description: "Five-year funding shortfall across African infrastructure projects."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "$139Trn",
    label: "Net Zero Investment Needed",
    description: "Total capital required globally to achieve net-zero emissions targets."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "$15Trn",
    label: "Global Infrastructure Gap",
    description: "Unmet global infrastructure investment demand across all sectors."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20,
      marginTop: 56
    }
  }, [['Barriers to Market Access', 'Lack of efficient connectivity between markets limits global capital flows and restricts economic growth potential.'], ['Market Innovation Deficit', 'Antiquated financing methodologies increase the cost of capital for debt issuance globally, penalizing market participants alike.'], ['Poor Market Visibility', 'Insufficient real-time insight into market dynamics erodes trust and investor confidence across asset classes.'], ['Limited Market Liquidity', 'Underdeveloped investor communities increase market risk, volatility, and the cost of raising capital.']].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    elevation: 0,
    padding: "24px"
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    title: t,
    rule: false
  }, d))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Our solution",
    title: "A Modern Global Market Platform",
    intro: "CBGM is building digital infrastructure designed to modernize global capital markets and expand financing opportunities."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40,
      marginTop: 56
    }
  }, [['Connecting Global Markets', "CBGM's digital network is designed to enable cross-border issuance and participation for market participants, reducing traditional barriers to entry."], ['Mobilizing Global Capital', 'A combination of a digital marketplace and innovative financial instruments is designed to attract new and diverse pools of global capital to underserved markets.'], ['Market Innovation', 'A technology-driven market structure designed to support global debt markets through digital transparency and empirical pricing.'], ['Enhanced Market Visibility', 'Real-time, transparent empirical data, market insights, and trend analysis designed to foster institutional trust and investor confidence.']].map(([t, d]) => /*#__PURE__*/React.createElement(FeatureItem, {
    key: t,
    title: t
  }, d)))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "inverse",
    eyebrow: "Price discovery",
    title: "The Digital Dutch Auction",
    intro: "Investors act as price makers rather than price takers. The clearing price is set by competitive bids, with a full audit trail at allocation."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => onNavigate && onNavigate('Products')
  }, "How the auction works"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, [['Interactive bidding power', 'Submit competitive bids in live Digital Dutch Auctions, become price makers instead of price takers.'], ['Real-time market visibility', 'Monitor live order books and bid depth to calibrate pricing decisions in real time.'], ['Secondary liquidity', 'Post existing holdings for secondary trading and source liquidity outside dealer markets.'], ['Full audit trail', 'Access post-auction allocation data and a complete trade blotter across all activity.']].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "navy",
    elevation: 0,
    padding: "18px 20px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 600,
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--text-inverse-muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Products & services",
    title: "Built for launch, designed for scale",
    intro: "Deal coordination, digital bond issuance, carbon credit markets, and proprietary data analytics in one integrated platform."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 56
    }
  }, [['Deal Coordination', "Launch Q3 '26", ['Deal sourcing and coordination via the CBGM global network', 'Research deal candidates and leverage strategic partnerships', 'Project assessment and market partner engagement']], ['Bonds', "Launch H2 '26", ['Floating Rate instruments and VRB structures', 'Commercial Paper, Secondary Market Trading and Credit-Linked Notes', 'Digital Dutch Auction pricing with a full audit trail']], ['Carbon Credit', 'Launch 2027', ['Carbon Credit origination and trading', 'Interconnected with bond issuance for pricing transparency', 'Free-floating credits with centralized market visibility']], ['Data & Analytics', 'Launch 2027', ['Live market data: real-time bid levels and liquidity flows', 'Predictive analytics and portfolio management screens', 'Market-driven indices and leading indicators']]].map(([t, when, items]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accentTop: true,
    padding: "22px",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, when)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, i))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Markets",
    title: "Phase I Markets",
    intro: "CBGM identifies countries with market, economic, and cultural drivers that align with our mission to connect global capital across developing and developed markets."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, [['Nigeria', "Africa's largest economy by GDP, with a significant infrastructure funding gap and a large diaspora investor base."], ['United States', "The world's deepest capital market and home to the largest institutional investor base globally."], ['United Kingdom', 'A globally recognized financial hub with deep expertise in international bond markets and emerging market finance.'], ['Ghana', 'An established West African financial hub with significant infrastructure funding requirements and an active diaspora investor base.']].map(([t, d]) => /*#__PURE__*/React.createElement(FeatureItem, {
    key: t,
    title: t
  }, d))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PlatformScreen.jsx
try { (() => {
const {
  SectionHeader,
  FeatureItem,
  Card,
  Button,
  Badge,
  Eyebrow
} = window.CBGMDesignSystem_e5adbb;
function PlatformScreen() {
  const steps = [['01', 'Onboard as a Subscriber', 'Complete onboarding digitally at no cost.'], ['02', 'Review Live Opportunities', 'Review deal documents for live transactions.'], ['03', 'Submit Competitive Bids', 'Bid directly in live Digital Dutch Auction windows.'], ['04', 'Monitor Execution', 'Track real-time bid aggregation and clearing price formation.'], ['05', 'Manage Positions', 'Post holdings for secondary liquidity and track activity via the blotter.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cbgm-navy-800)',
      padding: '80px var(--layout-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "inverse",
    eyebrow: "Partnership overview: traders",
    title: "Direct Access to Price Discovery and Liquidity",
    maxWidth: 840,
    intro: "ClearBid Global Markets gives institutional traders direct participation in primary issuance and secondary trading through a transparent, digital framework."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--layout-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Why traders use CBGM",
    title: "Traders act as price makers, not price takers",
    intro: "Traditional fixed income execution is often dealer-intermediated and slow to reflect real demand."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40,
      marginTop: 52
    }
  }, [['Interactive Bidding Power', 'Submit competitive bids in live Digital Dutch Auctions, become price makers instead of price takers.'], ['Real-Time Market Visibility', 'Monitor live order books and bid depth to calibrate pricing decisions in real time.'], ['Secondary Liquidity', 'Post existing holdings for secondary trading and source liquidity outside dealer markets.'], ['Full Audit Trail', 'Access post-auction allocation data and a complete trade blotter across all activity.']].map(([t, d]) => /*#__PURE__*/React.createElement(FeatureItem, {
    key: t,
    title: t
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--layout-gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How trading works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 16,
      marginTop: 24
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    tone: "subtle",
    elevation: 0,
    padding: "20px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--cbgm-green-500)',
      letterSpacing: '-.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--layout-gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40
    }
  }, [['Pricing Power', ['Act as a price maker, not a price taker, in every auction', 'Competitive bidding data to benchmark performance over time', 'No subscription or transaction fees', 'Full pricing transparency at allocation']], ['Market Access & Transparency', ['Diversified deal flow across asset classes, geographies, and issuer types', 'Access to opportunities outside traditional syndication networks', 'Real-time bid depth and aggregate demand visibility', 'Complete audit trail and trade blotter across all platform activity']]].map(([t, items]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accentTop: true,
    padding: "28px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '16px 0 0',
      paddingLeft: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, i))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--layout-gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      background: 'var(--cbgm-gradient-navy)',
      borderRadius: 'var(--radius-6)',
      padding: '56px 48px',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Get started"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.2,
      fontWeight: 600,
      color: '#fff',
      letterSpacing: 'var(--ls-display)'
    }
  }, "Onboard as a subscriber and participate in upcoming Digital Dutch Auctions, free of cost.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Start onboarding"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-outline",
    size: "lg"
  }, "Talk to the team")))));
}
Object.assign(window, {
  PlatformScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PlatformScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.DataGrid = __ds_scope.DataGrid;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.MoneyCell = __ds_scope.MoneyCell;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.RateCell = __ds_scope.RateCell;

__ds_ns.RateHistoryChart = __ds_scope.RateHistoryChart;

__ds_ns.StatusCell = __ds_scope.StatusCell;

__ds_ns.TerminalButton = __ds_scope.TerminalButton;

__ds_ns.TerminalChrome = __ds_scope.TerminalChrome;

__ds_ns.TerminalInput = __ds_scope.TerminalInput;

__ds_ns.TerminalSelect = __ds_scope.TerminalSelect;

__ds_ns.TerminalToolbar = __ds_scope.TerminalToolbar;

__ds_ns.TotalsBar = __ds_scope.TotalsBar;

})();
