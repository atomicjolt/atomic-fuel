export default function addStyles(styles) {
  const id = 'atomic-fuel-styles';
  const styleEl = document.getElementById(id) || document.createElement('style');
  styleEl.id = id;
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;
  styleSheet.insertRule(styles, styleSheet.cssRules.length);
}
