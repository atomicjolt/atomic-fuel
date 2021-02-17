function getAddStyles() {
  const memo = {};
  const id = 'atomic-fuel-styles';

  let styleEl = document.getElementById(id);

  return (styles) => {
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = id;
      document.head.appendChild(styleEl);
    }

    const classes = styles.match(/.*[^{]/)[0];

    if (memo[classes] === undefined) {
      const styleSheet = styleEl.sheet;
      styleSheet.insertRule(styles, styleSheet.cssRules.length);
      memo[classes] = 1;
    }
  };
}

export default getAddStyles();
