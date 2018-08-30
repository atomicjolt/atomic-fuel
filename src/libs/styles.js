export default function addStyles(styles) {
  const id = 'atomic-fuel-styles';
  let styleEl = document.getElementById(id);
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = id;
    document.head.appendChild(styleEl);
  }
  const styleSheet = styleEl.sheet;
  styleSheet.insertRule(styles, styleSheet.cssRules.length);
}
